import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
// SEO handled by Next metadata
import { useState } from 'react';
import { seoData } from '../utils/seoData';
import './PrivacyPolicy.css';
import WaitlistPopup from "./WaitlistPopup";


const PrivacyPolicy = () => {
  const [isWaitlistPopupOpen, setIsWaitlistPopupOpen] = useState(false);
  


  const handleCloseWaitlistPopup = () => {
    setIsWaitlistPopupOpen(false);
  };
  return (
    <div className="privacy-policy">
      {/* SEO handled by Next metadata */}
      <Navbar />
      
      <div className="privacy-policy__container">
        <div className="privacy-policy__hero">
          <div className="privacy-policy__hero-content">
            <h1 className="privacy-policy__title">Privacy Policy</h1>
            <div className="privacy-policy__subtitle">
              <p>Law Vriksh (Beta Registration)</p>
              <p>Effective Date: 1/8/2025 | Last Updated: 4/8/2025</p>
            </div>
          </div>
        </div>

        <div className="privacy-policy__content">
          <div className="privacy-policy__intro">
            <p>
              Thank you for your interest in Law Vriksh. This Privacy Policy outlines how we collect, use, store, and protect your personal information during our beta registration phase.
            </p>
          </div>

          <div className="privacy-policy__sections">
            <section className="privacy-policy__section">
              
              <div className="privacy-policy__section-content">
                <h2>Who We Are</h2>
                <p>
                  Law Vriksh ("we", "us", "our") is a legal technology platform currently in its beta phase, focused on enabling lawyers, legal professionals, and knowledge seekers to explore, contribute to, and grow within the digital legal ecosystem in India.
                </p>
              </div>
            </section>

            <section className="privacy-policy__section">
              
              <div className="privacy-policy__section-content">
                <h2>Information We Collect</h2>
                <p>During the beta registration process on www.lawvriksh.com, we currently collect the following personal data:</p>
                <ul>
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Any queries voluntarily submitted through contact forms or feedback</li>
                </ul>
              </div>
            </section>

            <section className="privacy-policy__section">
              
              <div className="privacy-policy__section-content">
                <h2>How We Use Your Information</h2>
                <p>We use the information you provide solely for the purpose of:</p>
                <ul>
                  <li>Registering and managing your interest in the Law Vriksh beta program</li>
                  <li>Communicating updates and announcements</li>
                  <li>Collecting feedback to improve our platform</li>
                  <li>Ensuring secure access to beta features</li>
                </ul>
                <p>We do not sell or share your personal information with third-party advertisers.</p>
              </div>
            </section>

            <section className="privacy-policy__section">
             
              <div className="privacy-policy__section-content">
                <h2>Data Storage and Retention</h2>
                <ul>
                  <li>Your information is stored securely on servers with industry-standard encryption protocols.</li>
                  <li>Data collected during beta will be retained for the duration of the beta program and may be migrated securely to your profile upon full launch.</li>
                  <li>You can request deletion of your data anytime by contacting us at <a href="mailto:info@lawvriksh.com">info@lawvriksh.com</a>.</li>
                </ul>
              </div>
            </section>

            <section className="privacy-policy__section">
             
              <div className="privacy-policy__section-content">
                <h2>Cookies and Analytics</h2>
                <p>
                  We use cookies and similar tracking tools (see Cookies Policy) to collect anonymous usage data that helps us understand how users interact with our site. These cookies do not collect sensitive personal information.
                </p>
                <p>You may disable cookies at any time in your browser settings.</p>
                
                <h3>Google Analytics using Functionality Cookies:</h3>
                <p>Google Analytics collects the following information through their default implementation:</p>
                <ul>
                  <li>Number of users</li>
                  <li>Session statistics</li>
                  <li>Approximate geolocation</li>
                  <li>Browser and device information</li>
                </ul>
                <p>
                  See a full list of the default events and user properties collected by Google Analytics <a href="https://support.google.com/analytics/answer/9234069" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
                <p>
                  If you prefer to avoid the use of Cookies on the Website, please follow directions <a href="https://support.google.com/accounts/answer/61416" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
              </div>
            </section>

            <section className="privacy-policy__section">
              
              <div className="privacy-policy__section-content">
                <h2>Data Sharing</h2>
                <p>
                  We may share anonymized data with technical service providers who help us operate and improve our website. All service providers are contractually obligated to protect your data.
                </p>
                <p>We will only disclose your personal information if:</p>
                <ul>
                  <li>Required by law or legal process</li>
                  <li>Necessary to protect our rights, users, or the public</li>
                </ul>
              </div>
            </section>

            <section className="privacy-policy__section">
            
              <div className="privacy-policy__section-content">
                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Correct inaccuracies in your data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw your beta participation</li>
                </ul>
                <p>
                  To exercise any of these rights, please email us at: <a href="mailto:info@lawvriksh.com">info@lawvriksh.com</a>
                </p>
              </div>
            </section>

            <section className="privacy-policy__section">
             
              <div className="privacy-policy__section-content">
                <h2>Policy Updates</h2>
                <p>
                  This Privacy Policy may be updated from time to time. We will notify registered users of significant changes via email or on our website.
                </p>
              </div>
            </section>

            <section className="privacy-policy__section">
             
              <div className="privacy-policy__section-content">
                <h2>Contact Us</h2>
                <p>For questions, concerns, or to make a request regarding your privacy:</p>
                <div className="privacy-policy__contact">
                  <div className="privacy-policy__contact-item">
                    <span className="privacy-policy__contact-icon">📧</span>
                    <span>Email: <a href="mailto:info@lawvriksh.com">info@lawvriksh.com</a></span>
                  </div>
                  <div className="privacy-policy__contact-item">
                    <span className="privacy-policy__contact-icon">📍</span>
                    <span>Address: Patel nagar, Siddhart Lake city, Bhopal</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="privacy-policy__cta">
            <Link href="/" className="privacy-policy__back-button">
              <span>Back to Home</span>
              <span className="privacy-policy__back-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <WaitlistPopup
              isOpen={isWaitlistPopupOpen}
              onClose={handleCloseWaitlistPopup}
            />
    </div>
  );
}
export default PrivacyPolicy;