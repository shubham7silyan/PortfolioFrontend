import React, { useState } from "react";
import '../index.css';
import { IoLocationOutline, IoCall } from "react-icons/io5";
import { MdLocalPostOffice } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";

function Contact(props) {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Use Railway backend URL
      const apiUrl = process.env.REACT_APP_API_URL || "https://portfoliobackend-production-a409.up.railway.app";
      const res = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ FirstName: '', LastName: '', Email: '', Message: '' });
      } else {
        setStatus("Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send. Try again later.");
    }
  };

  return (
    <div id="contact-section" className="modern-contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header" data-aos={props.animzz}>
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">Have a project in mind? Let's work together!</p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper" data-aos={props.animzz}>
            <div className="form-card">
              <h3 className="form-title">Send Message</h3>
              <form className="modern-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="FirstName"
                      value={formData.FirstName}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder=" "
                    />
                    <label className="form-label">First Name</label>
                    <div className="form-line"></div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="LastName"
                      value={formData.LastName}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder=" "
                    />
                    <label className="form-label">Last Name</label>
                    <div className="form-line"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder=" "
                  />
                  <label className="form-label">Email Address</label>
                  <div className="form-line"></div>
                </div>
                
                <div className="form-group">
                  <textarea
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder=" "
                    rows="5"
                  ></textarea>
                  <label className="form-label">Your Message</label>
                  <div className="form-line"></div>
                </div>
                
                <button type="submit" className="form-submit-btn">
                  <span>Send Message</span>
                  <div className="btn-glow"></div>
                </button>
                
                {status && (
                  <div className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}>
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper" data-aos={props.animz}>
            <div className="info-card">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-subtitle">Fill up the form and I'll get back to you within 24 hours.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <IoCall />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+91 7814448027</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <MdLocalPostOffice />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>shubham7silyan@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <IoLocationOutline />
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Amritsar, Punjab, India</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaGlobeAmericas />
                  </div>
                  <div className="contact-text">
                    <h4>Website</h4>
                    <p>shubhamsilyan.netlify.app</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <div className="social-item">
                  <a 
                    href="https://www.linkedin.com/in/shubhamsilyan/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn Profile"
                  >
                    <div className="social-circle linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </div>
                  </a>
                </div>
                <div className="social-item">
                  <a 
                    href="https://github.com/shubham7silyan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub Profile"
                  >
                    <div className="social-circle github">
                      <i className="fab fa-github"></i>
                    </div>
                  </a>
                </div>
                <div className="social-item">
                  <a 
                    href="https://x.com/shubham_silyan"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Twitter Profile"
                  >
                    <div className="social-circle twitter">
                      <i className="fab fa-twitter"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
