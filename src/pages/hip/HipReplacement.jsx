import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const HipReplacement = () => {
  const surgeryData = {
    title: 'Hip Replacement Surgery',
    subtitle: 'Total Hip Arthroplasty for Pain Relief and Mobility',
    breadcrumb: {
      category: 'Hip Surgeries',
      link: '/hip-surgeries',
      current: 'Hip Replacement'
    },
    description: 'Hip replacement surgery replaces a damaged hip joint with artificial components, providing significant pain relief and improved mobility for patients with severe hip arthritis or injury.',
    whatIsIt: 'Total hip replacement involves removing the damaged femoral head and acetabulum (hip socket) and replacing them with prosthetic components. Modern techniques and materials offer excellent longevity and function, allowing patients to return to an active lifestyle.',
    symptoms: [
      'Chronic hip pain affecting daily activities',
      'Pain that persists despite conservative treatment',
      'Stiffness limiting range of motion',
      'Difficulty walking or climbing stairs',
      'Pain that worsens with activity',
      'Reduced quality of life'
    ],
    procedure: 'The surgery is performed through various approaches (anterior, posterior, or lateral), each with specific advantages. The damaged hip joint is removed and replaced with a metal ball and stem inserted into the femur, and a metal or ceramic socket fixed into the pelvis. The procedure typically takes 1-2 hours.',
    recovery: 'Most patients stay in hospital for 1-3 days. Physical therapy begins immediately. Patients typically use a walker for 2-4 weeks, then progress to a cane. Most daily activities resume within 6-12 weeks, with continued improvement over 6-12 months.',
    benefits: [
      'Dramatic pain relief',
      'Improved mobility and function',
      'Better quality of life',
      'Long-lasting results (20+ years)',
      'Return to low-impact activities',
      'Improved sleep and overall well-being'
    ],
    faqs: [
      {
        question: 'How long does a hip replacement last?',
        answer: 'Modern hip replacements typically last 20-30 years or more with proper care and activity modification.'
      },
      {
        question: 'What activities can I do after hip replacement?',
        answer: 'Most patients can walk, swim, golf, and bike. High-impact activities like running or contact sports are generally discouraged.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default HipReplacement;
