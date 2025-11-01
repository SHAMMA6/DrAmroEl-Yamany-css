import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import './StandardPage.css';

const ShoulderInjuriesPage = () => {
  const injuries = [
    {
      title: 'Shoulder Tendonitis',
      description: 'Treatment for rotator cuff tendonitis and inflammation',
      path: '/shoulder-injuries/shoulder-tendonitis'
    },
    {
      title: 'Frozen Shoulder',
      description: 'Treatment for adhesive capsulitis and shoulder stiffness',
      path: '/shoulder-injuries/frozen-shoulder'
    },
    {
      title: 'Dislocated Shoulder',
      description: 'Treatment and stabilization for shoulder dislocation',
      path: '/shoulder-injuries/dislocated-shoulder'
    }
  ];

  return (
    <PageLayout>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Shoulder Injuries</h1>
            <p className="hero-subtitle">Comprehensive Shoulder Treatment Solutions</p>
            <div className="hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Shoulder Injuries</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-main">
            <p>
              Our shoulder injury treatment services address a wide range of shoulder conditions,
              from rotator cuff tears to complex instability. Dr. Amr El Yamany utilizes advanced
              arthroscopic techniques to minimize recovery time and optimize outcomes.
            </p>

            <h2 className="section-title">Shoulder Injury Treatments</h2>

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

export default ShoulderInjuriesPage;
