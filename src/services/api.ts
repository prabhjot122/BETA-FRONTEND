// Base API service configuration and utilities

import { ApiResponse, ApiRequestConfig } from '../types/api';

// API Configuration
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  TIMEOUT: 5000, // Reduced timeout to 5 seconds
  RETRY_ATTEMPTS: 3,
};

// API Client class for making HTTP requests
class ApiClient {
  private baseURL: string;
  private timeout: number;
  private requestCache: Map<string, Promise<any>> = new Map();
  private lastRequestTime: Map<string, number> = new Map();
  private minRequestInterval = 200; // Minimum 200ms between same requests
  private rateLimitingEnabled = false; // Disable initially to allow first load

  constructor(baseURL: string = API_CONFIG.BASE_URL, timeout: number = API_CONFIG.TIMEOUT) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  private getAuthHeaders(): Record<string, string> {
    const token = localStorage.getItem('authToken');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  private async makeRequest<T>(config: ApiRequestConfig): Promise<ApiResponse<T>> {
    const { method, url, data, params, headers = {} } = config;

    // Build full URL - ensure proper path concatenation
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    const baseUrlWithSlash = this.baseURL.endsWith('/') ? this.baseURL : this.baseURL + '/';
    const fullUrl = new URL(cleanUrl, baseUrlWithSlash);

    // Create cache key for GET requests to prevent duplicates
    const cacheKey = method === 'GET' ? `${method}:${fullUrl.toString()}` : null;

    // Rate limiting: check if we made the same request too recently
    if (cacheKey && this.rateLimitingEnabled) {
      const lastTime = this.lastRequestTime.get(cacheKey);
      const now = Date.now();

      // Different intervals for different endpoints
      let interval = this.minRequestInterval;
      if (url.includes('/leaderboard/around-me')) {
        interval = 100; // Allow around-me requests more frequently
      }

      if (lastTime && (now - lastTime) < interval) {
        console.log(`⏱️ Rate limited: ${method} ${fullUrl.toString()}`);
        return Promise.reject(new ApiError('Rate limited: too many requests', 429));
      }
      this.lastRequestTime.set(cacheKey, now);
    }

    // Enable rate limiting after first few requests
    if (!this.rateLimitingEnabled && this.lastRequestTime.size > 3) {
      this.rateLimitingEnabled = true;
      console.log('🔒 Rate limiting enabled after initial load');
    }

    // Check if we already have this request in progress (for GET requests only)
    if (cacheKey && this.requestCache.has(cacheKey)) {
      console.log(`🔄 Using cached request: ${method} ${fullUrl.toString()}`);
      return this.requestCache.get(cacheKey)!;
    }

    // console.log(`🌐 API Request: ${method} ${fullUrl.toString()}`);
    
    // Add query parameters
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
          fullUrl.searchParams.append(key, params[key].toString());
        }
      });
    }

    // Prepare request options
    const requestOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeaders(),
        ...headers,
      },
      signal: AbortSignal.timeout(this.timeout),
    };

    // Add body for POST/PUT requests
    if (data && (method === 'POST' || method === 'PUT')) {
      requestOptions.body = JSON.stringify(data);
    }

    // Create the actual request promise
    const requestPromise = this.executeRequest<T>(fullUrl.toString(), requestOptions, method);

    // Cache GET requests to prevent duplicates
    if (cacheKey) {
      this.requestCache.set(cacheKey, requestPromise);
      // Clean up cache after request completes or after 30 seconds
      requestPromise.finally(() => {
        setTimeout(() => {
          this.requestCache.delete(cacheKey);
        }, 30000); // Keep cache for 30 seconds
      });
    }

    return requestPromise;
  }

  private async executeRequest<T>(url: string, options: RequestInit, method: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, options);
      // console.log(`📡 API Response: ${response.status} ${response.statusText}`);

      // Handle different response types
      let responseData;
      const contentType = response.headers.get('content-type');

      if (contentType?.includes('application/json')) {
        responseData = await response.json();
      } else if (contentType?.includes('text/')) {
        responseData = await response.text();
      } else {
        responseData = await response.blob();
      }

      if (!response.ok) {
        console.error(`❌ API Error: ${response.status} ${response.statusText}`, responseData);
        // Extract error message from different possible response formats
        let errorMessage = `HTTP ${response.status}`;

        if (responseData) {
          // Handle structured error response from backend error handlers
          if (responseData.error && responseData.error.message) {
            errorMessage = responseData.error.message;
          }
          // Handle direct error responses (legacy format)
          else if (responseData.detail) {
            errorMessage = responseData.detail;
          }
          else if (responseData.message) {
            errorMessage = responseData.message;
          }
          // Handle string responses
          else if (typeof responseData === 'string') {
            errorMessage = responseData;
          }
        }

        throw new Error(errorMessage);
      }

      // console.log(`✅ API Success: ${method} ${url}`, responseData);
      return {
        data: responseData,
        status: response.status,
      };
    } catch (error) {
      console.error(`💥 API Request Failed: ${method} ${url}`, error);
      if (error instanceof ApiError) {
        throw error;
      }

      // Handle specific network errors
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        console.warn(`🌐 Network error for ${url}, this might be a CORS or connectivity issue`);
        throw new ApiError('Network connection failed. Please check your internet connection.', 0, error);
      }

      // Handle ERR_INSUFFICIENT_RESOURCES
      if (error instanceof Error && error.message.includes('ERR_INSUFFICIENT_RESOURCES')) {
        console.warn(`⚠️ Too many requests for ${url}, implementing backoff`);
        throw new ApiError('Too many requests. Please wait a moment and try again.', 429, error);
      }

      // Handle timeout errors
      if (error instanceof DOMException && error.name === 'TimeoutError') {
        console.warn(`⏰ Request timeout for ${url}`);
        throw new ApiError('Request timed out. Please try again.', 408, error);
      }

      // Handle other network errors
      throw new ApiError(
        error instanceof Error ? error.message : 'Network error occurred',
        0,
        error
      );
    }
  }

  async get<T>(url: string, params?: any, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.makeRequest<T>({ method: 'GET', url, params, headers });
  }

  async post<T>(url: string, data?: any, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.makeRequest<T>({ method: 'POST', url, data, headers });
  }

  async put<T>(url: string, data?: any, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.makeRequest<T>({ method: 'PUT', url, data, headers });
  }

  async delete<T>(url: string, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.makeRequest<T>({ method: 'DELETE', url, headers });
  }
}

// Custom API Error class
class ApiError extends Error {
  public status: number;
  public details?: any;

  constructor(message: string, status: number, details?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

// Create singleton API client instance
export const apiClient = new ApiClient();

// Utility functions for API responses
export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof ApiError) {
    return error;
  }
  
  if (error instanceof Error) {
    return new ApiError(error.message, 0);
  }
  
  return new ApiError('Unknown error occurred', 0);
};

export const isApiError = (error: unknown): error is ApiError => {
  return error instanceof ApiError;
};

// Response wrapper for consistent error handling
export const withErrorHandling = async <T>(
  apiCall: () => Promise<ApiResponse<T>>
): Promise<T> => {
  try {
    const response = await apiCall();
    return response.data as T;
  } catch (error) {
    throw handleApiError(error);
  }
};

// Mock mode flag for development
export const MOCK_MODE = import.meta.env.VITE_MOCK_MODE === 'true';

// Mock delay utility for simulating network latency
export const mockDelay = (ms: number = 500): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export { ApiError };
