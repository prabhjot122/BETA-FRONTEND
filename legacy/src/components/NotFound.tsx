import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './NotFound.css';

const NotFound: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const handleReportIssue = () => {
    // Navigate to feedback page or open email client
    router.push('/feedback');
  };

  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="not-found-content">
          {/* Legal-themed icon */}
          <div className="not-found-icon">
            <svg 
              width="120" 
              height="120" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              className="not-found-scales"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              <path d="M8 11h8"/>
              <path d="M8 15h5"/>
            </svg>
          </div>

          {/* Error code */}
          <div className="not-found-code">404</div>

          {/* Main heading */}
          <h1 className="not-found-title">Page Not Found</h1>

          {/* Description */}
          <p className="not-found-description">
            The legal document you're looking for seems to have been misfiled. 
            This page doesn't exist or may have been moved to a different location.
          </p>

          {/* Action buttons */}
          <div className="not-found-actions">
            <Link href="/" className="not-found-btn not-found-btn-primary">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              Return Home
            </Link>

            <button 
              onClick={handleGoBack} 
              className="not-found-btn not-found-btn-secondary"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M19 12H5"/>
                <path d="M12 19l-7-7 7-7"/>
              </svg>
              Go Back
            </button>
          </div>

          {/* Additional help */}
          <div className="not-found-help">
            <p className="not-found-help-text">
              Still can't find what you're looking for?
            </p>
            <button 
              onClick={handleReportIssue}
              className="not-found-help-link"
            >
              Report this issue
            </button>
          </div>

          {/* Popular links */}
          <div className="not-found-links">
            <h3 className="not-found-links-title">Popular Pages</h3>
            <div className="not-found-links-grid">
              <Link href="/" className="not-found-link">
                <span className="not-found-link-icon">🏠</span>
                <span>Homepage</span>
              </Link>


            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="not-found-decoration">
          <div className="not-found-decoration-item not-found-decoration-item-1"></div>
          <div className="not-found-decoration-item not-found-decoration-item-2"></div>
          <div className="not-found-decoration-item not-found-decoration-item-3"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
