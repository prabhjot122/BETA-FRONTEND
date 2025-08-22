import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAdmin = false 
}) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Source Sans Pro, sans-serif'
      }}>
        Loading...
      </div>
    );
  }

  if (!isAuthenticated || (requireAdmin && !isAdmin)) {
    // Align behavior with Next layout guard; perform client redirect
    if (typeof window !== 'undefined') {
      router.replace('/admin/login');
    }
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
