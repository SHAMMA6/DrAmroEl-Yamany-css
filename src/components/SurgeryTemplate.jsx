import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import Button from './Button';
import '../pages/StandardPage.css';

const SurgeryTemplate = ({
  title,
  subtitle,
  breadcrumb,
  description,
  whatIsIt,
  symptoms,
  procedure,
  recovery,
  benefits,
  faqs
}) => {
  return (
    <PageLayout>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
            <div className="hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to={breadcrumb.link}>{breadcrumb.category}</Link>
              <span>/</span>
              <span>{breadcrumb.current}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-main">
            {description && (
              <div className="treatment-overview">
                <p>{description}</p>
              </div>
            )}

            {whatIsIt && (
              <>
                <h2>What is {title}?</h2>
                <p>{whatIsIt}</p>
              </>
            )}

            {symptoms && symptoms.length > 0 && (
              <>
                <h2>Symptoms & Indications</h2>
                <ul className="card-list">
                  {symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              </>
            )}

            {procedure && (
              <>
                <h2>The Procedure</h2>
                <p>{procedure}</p>
              </>
            )}

            {recovery && (
              <>
                <h2>Recovery Timeline</h2>
                <div className="info-box">
                  <p>{recovery}</p>
                </div>
              </>
            )}

            {benefits && benefits.length > 0 && (
              <>
                <h2>Benefits of Treatment</h2>
                <ul className="card-list">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </>
            )}

            {faqs && faqs.length > 0 && (
              <>
                <h2>Frequently Asked Questions</h2>
                <div className="faq-section">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <h4 className="faq-question">{faq.question}</h4>
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="cta-box">
              <h3>Ready to Discuss Your Treatment?</h3>
              <p>Schedule a consultation with Dr. Amr El Yamany to explore your treatment options.</p>
              <Link to="/contact">
                <Button variant="white" size="large">Book Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SurgeryTemplate;
