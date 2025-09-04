import React, { useEffect } from "react";
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header" data-aos="fade-down">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: August 18, 2025</p>
        </div>

        <div className="legal-content" data-aos="fade-up">
          <section className="legal-section">
            <h2>1. Information Collection</h2>
            <p>
              This portfolio website collects minimal information to provide its services:
            </p>
            <ul>
              <li><strong>Contact Form Data:</strong> Name, email address, and message content when you submit the contact form</li>
              <li><strong>Analytics Data:</strong> Basic website usage statistics (page views, session duration, geographic location)</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information for security and optimization purposes</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>Information collected is used for:</p>
            <ul>
              <li>Responding to your inquiries and project requests</li>
              <li>Improving website performance and user experience</li>
              <li>Maintaining website security and preventing abuse</li>
              <li>Analyzing website traffic and usage patterns</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Data Storage and Security</h2>
            <p>
              Your data is protected through:
            </p>
            <ul>
              <li>Secure HTTPS encryption for all data transmission</li>
              <li>Contact form submissions stored securely on protected servers</li>
              <li>Regular security audits and monitoring</li>
              <li>No sharing of personal information with third parties without consent</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Cookies and Tracking</h2>
            <p>
              This website may use:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> For website functionality and user preferences (theme settings)</li>
              <li><strong>Analytics Cookies:</strong> To understand website usage and improve performance</li>
              <li><strong>No Advertising Cookies:</strong> We do not use cookies for advertising purposes</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Third-Party Services</h2>
            <p>
              This website may integrate with:
            </p>
            <ul>
              <li><strong>Social Media Platforms:</strong> Links to LinkedIn, GitHub, Twitter profiles</li>
              <li><strong>Email Services:</strong> For contact form functionality</li>
              <li><strong>Hosting Services:</strong> For website deployment and content delivery</li>
            </ul>
            <p>Each service has its own privacy policy governing data handling.</p>
          </section>

          <section className="legal-section">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request information about data we have collected about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Withdraw consent for data processing</li>
              <li>File a complaint with relevant data protection authorities</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Data Retention</h2>
            <p>
              Contact form submissions are retained for:
            </p>
            <ul>
              <li>Active inquiries: Until project completion or communication ends</li>
              <li>General inquiries: Up to 2 years for potential future collaboration</li>
              <li>Analytics data: Aggregated and anonymized after 12 months</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. International Data Transfers</h2>
            <p>
              As this is a global portfolio website, your data may be processed in different countries. All transfers comply with applicable data protection laws and include appropriate safeguards.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Children's Privacy</h2>
            <p>
              This website is not intended for children under 13. We do not knowingly collect personal information from children under 13 years of age.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contact for Privacy Matters</h2>
            <p>
              For privacy-related questions or requests:
              <br />
              Email: shubham7silyan@gmail.com
              <br />
              Subject: Privacy Policy Inquiry
            </p>
          </section>

          <div className="back-to-home" data-aos="fade-up">
            <button 
              onClick={() => window.location.href = '/'}
              className="back-btn"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
