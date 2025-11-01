import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './PageLayout.css';

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
