import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const TennisElbow = () => {
  const surgeryData = {
    title: 'Tennis Elbow',
    subtitle: 'Treatment for Lateral Epicondylitis',
    breadcrumb: {
      category: 'Sports Injuries',
      link: '/sports-injuries',
      current: 'Tennis Elbow'
    },
    description: 'Tennis elbow treatment addresses lateral epicondylitis through conservative measures and, when necessary, surgical intervention.',
    whatIsIt: 'Tennis elbow (lateral epicondylitis) is a painful condition caused by overuse of the forearm muscles and tendons. Despite its name, it affects not just tennis players but anyone who performs repetitive arm and wrist movements. The condition involves degeneration and micro-tears of the tendons that attach to the lateral epicondyle.',
    symptoms: [
      'Pain on the outside of the elbow',
      'Weak grip strength',
      'Pain when lifting or gripping objects',
      'Pain that worsens with wrist extension',
      'Tenderness over the lateral epicondyle',
      'Pain that may radiate into the forearm'
    ],
    procedure: 'Surgery is considered only after 6-12 months of failed conservative treatment. The procedure involves removing degenerative tissue and reattaching healthy tendon to bone. It can be performed through open, arthroscopic, or minimally invasive techniques. The surgery typically takes 30-60 minutes.',
    recovery: 'Initial recovery involves immobilization for 1-2 weeks, followed by gentle range of motion exercises. Strengthening begins at 6-8 weeks. Most patients can return to light activities within 6-8 weeks and full activities within 3-6 months. Success rates for surgery are 80-90%.',
    benefits: [
      'Relief of chronic elbow pain',
      'Improved grip strength',
      'Return to work and sports activities',
      'High success rate with proper rehabilitation',
      'Minimally invasive options available',
      'Restoration of quality of life'
    ],
    faqs: [
      {
        question: 'Do I need surgery for tennis elbow?',
        answer: 'Most cases (80-95%) improve with conservative treatment including rest, physical therapy, bracing, and injections. Surgery is reserved for cases that don\'t improve after 6-12 months of conservative care.'
      },
      {
        question: 'How long does recovery take?',
        answer: 'Full recovery typically takes 3-6 months. Most patients experience significant improvement by 3 months, with continued improvement over 6-12 months.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default TennisElbow;
