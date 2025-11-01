import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const KneeReplacement = () => {
  const surgeryData = {
    title: 'Knee Replacement Surgery',
    subtitle: 'Total and Partial Knee Arthroplasty Solutions',
    breadcrumb: {
      category: 'Knee Surgeries',
      link: '/knee-surgeries',
      current: 'Knee Replacement'
    },
    description: 'Knee replacement surgery involves replacing damaged knee joint surfaces with artificial components to relieve pain and restore function.',
    whatIsIt: 'Total knee replacement (TKR) is a proven procedure for severe knee arthritis. The surgery replaces the damaged bone and cartilage with metal and plastic components, creating a new, smooth joint surface that allows for pain-free movement.',
    symptoms: [
      'Severe knee pain limiting daily activities',
      'Chronic knee swelling and stiffness',
      'Difficulty walking or climbing stairs',
      'Pain that persists despite conservative treatment',
      'Bow-legged or knock-kneed deformity',
      'Decreased quality of life due to knee pain'
    ],
    procedure: 'The surgery involves removing damaged bone and cartilage from the femur, tibia, and patella, then positioning new metal and plastic components. Advanced techniques include minimally invasive approaches and computer-assisted navigation for precise implant placement. The procedure typically takes 1-2 hours.',
    recovery: 'Patients typically stay in hospital for 2-3 days. Physical therapy begins immediately after surgery. Most patients use a walker for 2-4 weeks, then graduate to a cane. Full recovery takes 3-6 months, with many patients experiencing continued improvements up to one year.',
    benefits: [
      'Significant pain relief',
      'Improved mobility and function',
      'Better quality of life',
      'Return to low-impact activities',
      'Long-lasting results (15-20+ years)',
      'Improved sleep and overall well-being'
    ],
    faqs: [
      {
        question: 'How long does a knee replacement last?',
        answer: 'Modern knee replacements typically last 15-20 years or longer. Factors affecting longevity include activity level, weight, and adherence to post-operative guidelines.'
      },
      {
        question: 'What activities can I do after knee replacement?',
        answer: 'Most patients can walk, swim, golf, and bike. High-impact activities like running or jumping are generally discouraged to preserve the implant.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default KneeReplacement;
