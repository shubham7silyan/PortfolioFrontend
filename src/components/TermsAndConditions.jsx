import React, { useEffect } from "react";
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TermsAndConditions() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header" data-aos="fade-down">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last updated: August 18, 2025</p>
        </div>

        <div className="legal-content" data-aos="fade-up">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Shubham Silyan's portfolio website. These Terms and Conditions ("Terms") govern your use of this website and any services provided through it. By accessing or using this website, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Portfolio Services</h2>
            <p>This website serves as a professional portfolio showcasing:</p>
            <ul>
              <li>Web development projects and technical skills</li>
              <li>Professional experience and achievements</li>
              <li>Contact information for potential collaborations</li>
              <li>Educational background and certifications</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, code samples, and design elements, is the intellectual property of Shubham Silyan unless otherwise stated. Project showcases may include work done for clients or employers with appropriate permissions.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Contact Form and Communications</h2>
            <p>
              When you submit information through the contact form, you agree that:
            </p>
            <ul>
              <li>The information provided is accurate and truthful</li>
              <li>You consent to being contacted regarding your inquiry</li>
              <li>Your message may be stored for record-keeping purposes</li>
              <li>Response time may vary but typically within 24-48 hours</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Project Collaboration Terms</h2>
            <p>
              For potential project collaborations:
            </p>
            <ul>
              <li>All project terms will be discussed and agreed upon separately</li>
              <li>Confidentiality agreements may be required for sensitive projects</li>
              <li>Payment terms and project scope will be defined in separate contracts</li>
              <li>Intellectual property rights will be clearly defined per project</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              This website is provided "as is" without any warranties. Shubham Silyan shall not be liable for any damages arising from the use of this website or any information contained herein.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. External Links</h2>
            <p>
              This website may contain links to external websites (GitHub, LinkedIn, social media). These links are provided for convenience, and Shubham Silyan is not responsible for the content or practices of external sites.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Modifications</h2>
            <p>
              These Terms may be updated from time to time. Continued use of the website after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Contact Information</h2>
            <p>
              For questions about these Terms, please contact:
              <br />
              Email: shubham7silyan@gmail.com
              <br />
              Phone: +91 7814448027
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

export default TermsAndConditions;
