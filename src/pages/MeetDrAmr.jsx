import React from 'react';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import './StandardPage.css';

const MeetDrAmr = () => {
  return (
    <PageLayout>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Meet Dr. Amr El Yamany</h1>
            <p className="hero-subtitle">Expert Orthopedic Surgeon Dedicated to Excellence</p>
            <div className="hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Meet Dr. Amr</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2 className="section-title">About Dr. Amr El Yamany</h2>

              <p>
                Dr. Amr El Yamany is a highly respected orthopedic surgeon with over 15 years of experience
                specializing in knee, hip, shoulder surgeries, and sports injuries. His commitment to providing
                exceptional patient care and utilizing the most advanced surgical techniques has earned him
                recognition as a leader in the field of orthopedic surgery.
              </p>

              <h3>Education & Training</h3>
              <ul className="card-list">
                <li>Medical Degree from Cairo University Faculty of Medicine</li>
                <li>Specialized Fellowship in Orthopedic Surgery</li>
                <li>Advanced Training in Sports Medicine and Joint Replacement</li>
                <li>Continuing Medical Education in Latest Surgical Techniques</li>
              </ul>

              <h3>Expertise & Specializations</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <h4>Knee Surgery</h4>
                  <p>ACL reconstruction, meniscus repair, total knee replacement, arthroscopy</p>
                </div>
                <div className="expertise-item">
                  <h4>Hip Surgery</h4>
                  <p>Hip replacement, resurfacing, revision surgery, minimally invasive procedures</p>
                </div>
                <div className="expertise-item">
                  <h4>Sports Injuries</h4>
                  <p>Athletic injury treatment, ligament repairs, rapid recovery protocols</p>
                </div>
                <div className="expertise-item">
                  <h4>Shoulder Treatment</h4>
                  <p>Rotator cuff repair, shoulder stabilization, arthroscopic procedures</p>
                </div>
              </div>

              <h3>Philosophy of Care</h3>
              <div className="info-box">
                <p>
                  "My approach to patient care centers on understanding each individual's unique needs and goals.
                  I believe in combining the latest medical advances with compassionate, personalized treatment
                  to help my patients achieve optimal outcomes and return to the activities they love."
                </p>
              </div>

              <h3>Professional Memberships</h3>
              <ul className="card-list">
                <li>Egyptian Orthopedic Association</li>
                <li>International Society of Arthroscopy, Knee Surgery and Orthopedic Sports Medicine</li>
                <li>American Academy of Orthopedic Surgeons (International Member)</li>
              </ul>

              <div className="cta-box">
                <h3>Schedule a Consultation</h3>
                <p>Take the first step towards recovery. Book your appointment today.</p>
                <Link to="/contact">
                  <Button variant="primary" size="large">Contact Dr. Amr</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MeetDrAmr;
