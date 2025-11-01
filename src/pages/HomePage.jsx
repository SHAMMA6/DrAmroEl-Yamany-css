import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import './HomePage.css';

const HomePage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in">Welcome to Dr. Amr El Yamany</h1>
            <p className="hero-description fade-in">
              Leading Orthopedic Surgeon Specializing in Advanced Knee, Hip, and Sports Injury Treatments
            </p>
            <div className="hero-buttons fade-in">
              <Link to="/contact">
                <Button variant="primary" size="large">Book Appointment</Button>
              </Link>
              <Link to="/meet-dr-amr">
                <Button variant="white" size="large">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section section">
        <div className="container">
          <h2 className="section-title">Our Specialties</h2>
          <p className="section-description">
            Comprehensive orthopedic care with cutting-edge surgical techniques and personalized treatment plans
          </p>

          <div className="services-grid">
            <Link to="/knee-surgeries" className="service-card">
              <div className="service-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <h3>Knee Surgeries</h3>
              <p>Advanced knee procedures including ACL repair, meniscus surgery, and total knee replacement</p>
              <span className="service-link">Explore Treatments →</span>
            </Link>

            <Link to="/hip-surgeries" className="service-card">
              <div className="service-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <h3>Hip Surgeries</h3>
              <p>State-of-the-art hip replacement, resurfacing, and revision procedures</p>
              <span className="service-link">Explore Treatments →</span>
            </Link>

            <Link to="/sports-injuries" className="service-card">
              <div className="service-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <h3>Sports Injuries</h3>
              <p>Expert treatment for athletic injuries with focus on rapid recovery and performance</p>
              <span className="service-link">Explore Treatments →</span>
            </Link>

            <Link to="/shoulder-injuries" className="service-card">
              <div className="service-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <h3>Shoulder Injuries</h3>
              <p>Comprehensive shoulder care from rotator cuff repairs to complex reconstructions</p>
              <span className="service-link">Explore Treatments →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section bg-secondary section">
        <div className="container">
          <h2 className="section-title">Why Choose Dr. Amr El Yamany?</h2>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h3>Expertise</h3>
              <p>Over 15 years of specialized orthopedic surgery experience with thousands of successful procedures</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">02</div>
              <h3>Advanced Technology</h3>
              <p>Utilizing the latest surgical techniques and state-of-the-art medical equipment</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">03</div>
              <h3>Patient-Centered Care</h3>
              <p>Personalized treatment plans tailored to each patient's unique needs and goals</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">04</div>
              <h3>Proven Results</h3>
              <p>Exceptional success rates and patient satisfaction with comprehensive follow-up care</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Recovery Journey?</h2>
            <p>Schedule a consultation today and take the first step towards a pain-free life</p>
            <Link to="/contact">
              <Button variant="primary" size="large">Book Your Appointment</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
