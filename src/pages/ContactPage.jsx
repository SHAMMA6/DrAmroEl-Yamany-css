import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import './StandardPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <PageLayout>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">Get in Touch with Dr. Amr El Yamany</p>
            <div className="hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <p className="section-description">
            Have questions about our services or want to schedule a consultation?
            We're here to help. Reach out to us using the form below or through our contact information.
          </p>

          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3>Visit Us</h3>
              <p>Cairo, Egypt<br/>Professional Medical Center</p>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <h3>Call Us</h3>
              <p>+20 123 456 7890<br/>Mon-Sat: 9:00 AM - 6:00 PM</p>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>info@dramrelyamany.com<br/>We respond within 24 hours</p>
            </div>
          </div>

          <h2 className="section-title">Send Us a Message</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <Button type="submit" variant="primary" size="large" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
