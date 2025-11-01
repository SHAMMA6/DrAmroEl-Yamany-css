import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import './StandardPage.css';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Understanding ACL Injuries in Athletes',
      date: 'November 1, 2025',
      excerpt: 'Learn about the causes, symptoms, and modern treatment options for ACL tears in athletes.',
      category: 'Sports Injuries'
    },
    {
      title: 'Total Knee Replacement: What to Expect',
      date: 'October 28, 2025',
      excerpt: 'A comprehensive guide to knee replacement surgery, recovery, and returning to activities.',
      category: 'Knee Surgery'
    },
    {
      title: 'Preventing Sports Injuries: Tips from an Orthopedic Surgeon',
      date: 'October 25, 2025',
      excerpt: 'Expert advice on injury prevention strategies for athletes and active individuals.',
      category: 'Prevention'
    },
    {
      title: 'Hip Arthritis: When is Surgery Necessary?',
      date: 'October 20, 2025',
      excerpt: 'Understanding when conservative treatments aren\'t enough and surgical options to consider.',
      category: 'Hip Surgery'
    },
    {
      title: 'Recovery After Shoulder Surgery: A Timeline',
      date: 'October 15, 2025',
      excerpt: 'What to expect during shoulder surgery recovery and how to optimize your healing.',
      category: 'Shoulder'
    },
    {
      title: 'The Importance of Physical Therapy in Orthopedic Recovery',
      date: 'October 10, 2025',
      excerpt: 'Why physical therapy is crucial for successful outcomes after orthopedic surgery.',
      category: 'Recovery'
    }
  ];

  return (
    <PageLayout>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Blog & Resources</h1>
            <p className="hero-subtitle">Insights, Tips, and Updates from Dr. Amr El Yamany</p>
            <div className="hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <p className="section-description">
            Stay informed with the latest insights on orthopedic care, treatment options,
            recovery tips, and injury prevention strategies from Dr. Amr El Yamany.
          </p>

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card">
                <div className="blog-image">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <div className="blog-content">
                  <div className="blog-date">{post.date} • {post.category}</div>
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <span className="service-link">Read More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPage;
