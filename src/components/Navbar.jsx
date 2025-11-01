import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logos/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const kneeSurgeries = [
    { name: 'Quadriceps Tendon Repair', path: '/knee-surgeries/quadriceps-tendon-repair' },
    { name: 'Kneecap Stabilization Surgery', path: '/knee-surgeries/kneecap-stabilization' },
    { name: 'Knee Replacement Surgery', path: '/knee-surgeries/knee-replacement' },
    { name: 'Knee Arthroscopy', path: '/knee-surgeries/knee-arthroscopy' },
    { name: 'Multi-Ligament Injury Surgery', path: '/knee-surgeries/multi-ligament-injury' },
    { name: 'LCL Tear Surgery', path: '/knee-surgeries/lcl-tear-surgery' },
    { name: 'MCL Reconstruction Surgery', path: '/knee-surgeries/mcl-reconstruction' },
    { name: 'PCL Tear Surgery', path: '/knee-surgeries/pcl-tear-surgery' },
  ];

  const hipSurgeries = [
    { name: 'Hip Replacement Surgery', path: '/hip-surgeries/hip-replacement' },
    { name: 'Hip Resurfacing', path: '/hip-surgeries/hip-resurfacing' },
    { name: 'Hip Revision', path: '/hip-surgeries/hip-revision' },
  ];

  const sportsInjuries = [
    { name: 'ACL Tear Injury', path: '/sports-injuries/acl-tear-injury' },
    { name: 'Meniscus Tear Injury', path: '/sports-injuries/meniscus-tear-injury' },
    { name: 'Tennis Elbow', path: '/sports-injuries/tennis-elbow' },
  ];

  const shoulderInjuries = [
    { name: 'Shoulder Tendonitis', path: '/shoulder-injuries/shoulder-tendonitis' },
    { name: 'Frozen Shoulder', path: '/shoulder-injuries/frozen-shoulder' },
    { name: 'Dislocated Shoulder', path: '/shoulder-injuries/dislocated-shoulder' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Dr. Amr El Yamany" />
            <span className="logo-text">Dr. Amr El Yamany</span>
          </Link>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="navbar-link">
              Home
            </Link>

            <Link to="/meet-dr-amr" className="navbar-link">
              Meet Dr. Amr
            </Link>

            <div className="navbar-dropdown">
              <button
                className={`navbar-link dropdown-toggle ${openDropdown === 'knee' ? 'active' : ''}`}
                onClick={() => toggleDropdown('knee')}
              >
                Knee Surgeries
                <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
                  <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" />
                </svg>
              </button>
              <div className={`dropdown-menu ${openDropdown === 'knee' ? 'active' : ''}`}>
                {kneeSurgeries.map((item, index) => (
                  <Link key={index} to={item.path} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="navbar-dropdown">
              <button
                className={`navbar-link dropdown-toggle ${openDropdown === 'hip' ? 'active' : ''}`}
                onClick={() => toggleDropdown('hip')}
              >
                Hip Surgeries
                <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
                  <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" />
                </svg>
              </button>
              <div className={`dropdown-menu ${openDropdown === 'hip' ? 'active' : ''}`}>
                {hipSurgeries.map((item, index) => (
                  <Link key={index} to={item.path} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="navbar-dropdown">
              <button
                className={`navbar-link dropdown-toggle ${openDropdown === 'sports' ? 'active' : ''}`}
                onClick={() => toggleDropdown('sports')}
              >
                Sports Injuries
                <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
                  <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" />
                </svg>
              </button>
              <div className={`dropdown-menu ${openDropdown === 'sports' ? 'active' : ''}`}>
                {sportsInjuries.map((item, index) => (
                  <Link key={index} to={item.path} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="navbar-dropdown">
              <button
                className={`navbar-link dropdown-toggle ${openDropdown === 'shoulder' ? 'active' : ''}`}
                onClick={() => toggleDropdown('shoulder')}
              >
                Shoulder Injuries
                <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
                  <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" />
                </svg>
              </button>
              <div className={`dropdown-menu ${openDropdown === 'shoulder' ? 'active' : ''}`}>
                {shoulderInjuries.map((item, index) => (
                  <Link key={index} to={item.path} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/patient-journey" className="navbar-link">
              Patient Journey
            </Link>

            <Link to="/blog" className="navbar-link">
              Blog
            </Link>

            <Link to="/contact" className="navbar-link navbar-cta">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
