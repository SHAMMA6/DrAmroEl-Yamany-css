import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import './StandardPage.css';

const SportsInjuriesPage = () => {
  const injuries = [
    {
      title: 'ACL Tear Injury',
      description: 'Comprehensive treatment for anterior cruciate ligament injuries',
      path: '/sports-injuries/acl-tear-injury'
    },
    {
      title: 'Meniscus Tear Injury',
      description: 'Advanced treatment for torn knee cartilage',
      path: '/sports-injuries/meniscus-tear-injury'
    },
    {
      title: 'Tennis Elbow',
      description: 'Treatment for lateral epicondylitis and overuse injuries',
      path: '/sports-injuries/tennis-elbow'
    }
  ];

  return (
    <PageLayout>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Sports Injuries</h1>
            <p className="hero-subtitle">Expert Treatment for Athletic Injuries</p>
            <div className="hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Sports Injuries</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-main">
            <p>
              Dr. Amr El Yamany specializes in sports medicine and athletic injuries, helping athletes
              of all levels return to peak performance. Our approach combines advanced surgical techniques
              with comprehensive rehabilitation protocols designed for optimal recovery.
            </p>

            <h2 className="section-title">Sports Injury Treatments</h2>

            <div className="blog-grid">
              {injuries.map((injury, index) => (
                <Link key={index} to={injury.path} className="blog-card card">
                  <div className="blog-content">
                    <h3>{injury.title}</h3>
                    <p className="blog-excerpt">{injury.description}</p>
                    <span className="service-link">Learn More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SportsInjuriesPage;
