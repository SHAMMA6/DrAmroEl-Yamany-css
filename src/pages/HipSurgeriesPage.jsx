import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import './StandardPage.css';

const HipSurgeriesPage = () => {
  const surgeries = [
    {
      title: 'Hip Replacement Surgery',
      description: 'Total hip arthroplasty for pain relief and improved mobility',
      path: '/hip-surgeries/hip-replacement'
    },
    {
      title: 'Hip Resurfacing',
      description: 'Bone-conserving alternative to traditional hip replacement',
      path: '/hip-surgeries/hip-resurfacing'
    },
    {
      title: 'Hip Revision Surgery',
      description: 'Specialized treatment for failed hip replacements',
      path: '/hip-surgeries/hip-revision'
    }
  ];

  return (
    <PageLayout>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Hip Surgeries</h1>
            <p className="hero-subtitle">Advanced Hip Treatment and Replacement Solutions</p>
            <div className="hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Hip Surgeries</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-main">
            <p>
              Our hip surgery services combine cutting-edge surgical techniques with personalized care
              to provide optimal outcomes for patients suffering from hip pain and mobility issues.
              Dr. Amr El Yamany specializes in both primary and revision hip surgeries.
            </p>

            <h2 className="section-title">Our Hip Surgery Services</h2>

            <div className="blog-grid">
              {surgeries.map((surgery, index) => (
                <Link key={index} to={surgery.path} className="blog-card card">
                  <div className="blog-content">
                    <h3>{surgery.title}</h3>
                    <p className="blog-excerpt">{surgery.description}</p>
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

export default HipSurgeriesPage;
