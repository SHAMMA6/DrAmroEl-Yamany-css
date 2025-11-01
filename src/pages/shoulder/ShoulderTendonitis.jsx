import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const ShoulderTendonitis = () => {
  const surgeryData = {
    title: 'Shoulder Tendonitis',
    subtitle: 'Treatment for Rotator Cuff Tendonitis and Inflammation',
    breadcrumb: {
      category: 'Shoulder Injuries',
      link: '/shoulder-injuries',
      current: 'Shoulder Tendonitis'
    },
    description: 'Shoulder tendonitis treatment addresses inflammation of the rotator cuff tendons through conservative measures and surgical intervention when necessary.',
    whatIsIt: 'Shoulder tendonitis, also known as rotator cuff tendonitis, involves inflammation and irritation of the tendons surrounding the shoulder joint. It often results from overuse, repetitive overhead activities, or age-related degeneration. While most cases respond to conservative treatment, chronic or severe cases may require surgical treatment.',
    symptoms: [
      'Pain in the shoulder, especially with overhead activities',
      'Weakness in the shoulder',
      'Stiffness and reduced range of motion',
      'Pain that worsens at night',
      'Difficulty reaching behind the back',
      'Tenderness around the shoulder'
    ],
    procedure: 'Surgery is considered after failed conservative treatment. Arthroscopic shoulder decompression involves removing inflamed tissue, bone spurs, and creating more space for the tendons. If tendon tears are present, they are repaired simultaneously. The procedure typically takes 1-2 hours.',
    recovery: 'Initial recovery involves immobilization in a sling for 2-4 weeks, followed by progressive physical therapy. Range of motion exercises begin early, with strengthening starting at 6-8 weeks. Most patients return to normal activities within 3-4 months, with full recovery taking 4-6 months.',
    benefits: [
      'Relief of chronic shoulder pain',
      'Improved shoulder mobility',
      'Return to overhead activities',
      'Prevention of rotator cuff tears',
      'Better quality of life',
      'Minimally invasive technique'
    ],
    faqs: [
      {
        question: 'How long should I try conservative treatment?',
        answer: 'Most doctors recommend 3-6 months of conservative treatment including rest, physical therapy, anti-inflammatory medications, and injections before considering surgery.'
      },
      {
        question: 'Can I prevent shoulder tendonitis?',
        answer: 'Prevention includes proper warm-up before activities, avoiding repetitive overhead motions when possible, maintaining good posture, and regular shoulder strengthening exercises.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default ShoulderTendonitis;
