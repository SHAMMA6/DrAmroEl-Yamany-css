import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import './StandardPage.css';

const PatientJourneyPage = () => {
  return (
    <PageLayout>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Patient Journey</h1>
            <p className="hero-subtitle">Your Path to Recovery with Dr. Amr El Yamany</p>
            <div className="hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Patient Journey</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-main">
            <p>
              At Dr. Amr El Yamany's practice, we understand that undergoing orthopedic surgery can be
              a significant decision. We're committed to guiding you through every step of your journey,
              from initial consultation to full recovery.
            </p>

            <h2 className="section-title">Your Treatment Journey</h2>

            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Initial Consultation</h4>
                  <p>
                    Your journey begins with a comprehensive consultation where Dr. Amr El Yamany will
                    review your medical history, perform a physical examination, and discuss your symptoms
                    and concerns. Diagnostic imaging may be ordered if needed.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Diagnosis & Treatment Plan</h4>
                  <p>
                    After reviewing all diagnostic information, Dr. Amr will provide a detailed diagnosis
                    and discuss all available treatment options, from conservative management to surgical
                    intervention. Together, you'll create a personalized treatment plan.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Pre-Operative Preparation</h4>
                  <p>
                    If surgery is recommended, our team will guide you through pre-operative preparations,
                    including necessary medical clearances, pre-surgical education, and answering any
                    questions you may have about the procedure.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Surgery Day</h4>
                  <p>
                    On the day of surgery, you'll be cared for by our experienced surgical team. Dr. Amr
                    uses the latest surgical techniques and technology to ensure optimal outcomes. Family
                    members will be kept informed throughout the procedure.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Post-Operative Care</h4>
                  <p>
                    Immediate post-operative care focuses on pain management, wound care, and beginning
                    the recovery process. Our team will provide detailed instructions for home care and
                    schedule follow-up appointments.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h4>Rehabilitation & Physical Therapy</h4>
                  <p>
                    A comprehensive rehabilitation program is essential for optimal recovery. We'll work
                    with you and your physical therapist to ensure proper healing, restore range of motion,
                    and rebuild strength progressively.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">7</div>
                <div className="step-content">
                  <h4>Return to Activities</h4>
                  <p>
                    Throughout your recovery, we'll monitor your progress and provide guidance on when
                    it's safe to return to various activities, from daily tasks to sports and recreation.
                    Our goal is to help you achieve the best possible outcome.
                  </p>
                </div>
              </div>
            </div>

            <div className="info-box">
              <h3 className="info-box-title">Our Commitment to You</h3>
              <p>
                We believe in providing comprehensive, patient-centered care throughout your entire journey.
                Our team is available to answer your questions and address your concerns at every stage.
                Your success is our priority.
              </p>
            </div>

            <div className="cta-box">
              <h3>Ready to Begin Your Journey?</h3>
              <p>Schedule a consultation with Dr. Amr El Yamany to discuss your treatment options.</p>
              <Link to="/contact">
                <Button variant="white" size="large">Contact Us Today</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PatientJourneyPage;
