import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import './StandardPage.css';

const KneeSurgeriesPage = () => {
  const surgeries = [
    {
      title: 'Quadriceps Tendon Repair',
      description: 'Surgical reattachment of torn quadriceps tendon to restore knee function',
      path: '/knee-surgeries/quadriceps-tendon-repair'
    },
    {
      title: 'Kneecap Stabilization Surgery',
      description: 'Correcting patellar instability and preventing recurrent dislocations',
      path: '/knee-surgeries/kneecap-stabilization'
    },
    {
      title: 'Knee Replacement Surgery',
      description: 'Total and partial knee arthroplasty for severe arthritis',
      path: '/knee-surgeries/knee-replacement'
    },
    {
      title: 'Knee Arthroscopy',
      description: 'Minimally invasive diagnostic and treatment procedures',
      path: '/knee-surgeries/knee-arthroscopy'
    },
    {
      title: 'Multi-Ligament Injury Surgery',
      description: 'Complex reconstruction for severe knee ligament injuries',
      path: '/knee-surgeries/multi-ligament-injury'
    },
    {
      title: 'LCL Tear Surgery',
      description: 'Lateral collateral ligament reconstruction',
      path: '/knee-surgeries/lcl-tear-surgery'
    },
    {
      title: 'MCL Reconstruction Surgery',
      description: 'Medial collateral ligament repair and reconstruction',
      path: '/knee-surgeries/mcl-reconstruction'
    },
    {
      title: 'PCL Tear Surgery',
      description: 'Posterior cruciate ligament reconstruction',
      path: '/knee-surgeries/pcl-tear-surgery'
    }
  ];

  return (
    <PageLayout>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Knee Surgeries</h1>
            <p className="hero-subtitle">Comprehensive Knee Treatment Solutions</p>
            <div className="hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Knee Surgeries</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-main">
            <p>
              Dr. Amr El Yamany specializes in advanced knee surgeries, offering comprehensive treatment
              for a wide range of knee conditions. Using state-of-the-art techniques and technology,
              we provide personalized care to help patients regain mobility and return to active lifestyles.
            </p>

            <h2 className="section-title">Our Knee Surgery Services</h2>

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

export default KneeSurgeriesPage;
