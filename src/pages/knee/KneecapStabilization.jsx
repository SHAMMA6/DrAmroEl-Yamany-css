import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const KneecapStabilization = () => {
  const surgeryData = {
    title: 'Kneecap Stabilization Surgery',
    subtitle: 'Surgical Solutions for Patellar Instability',
    breadcrumb: {
      category: 'Knee Surgeries',
      link: '/knee-surgeries',
      current: 'Kneecap Stabilization'
    },
    description: 'Kneecap stabilization surgery corrects patellar tracking issues and prevents recurrent dislocations through various surgical techniques.',
    whatIsIt: 'Patellar instability occurs when the kneecap (patella) moves out of its normal groove. This surgery involves reconstructing ligaments, realigning bone structures, or both to keep the kneecap stable during movement.',
    symptoms: [
      'Recurrent kneecap dislocations',
      'Feeling of the kneecap "giving way"',
      'Pain in the front of the knee',
      'Swelling after activity',
      'Difficulty with stairs or pivoting',
      'Visible kneecap mal-alignment'
    ],
    procedure: 'The surgery may involve medial patellofemoral ligament (MPFL) reconstruction, tibial tubercle transfer, or trochleoplasty. The specific technique depends on the underlying cause of instability. Most procedures are performed arthroscopically or through small incisions.',
    recovery: 'Recovery typically involves 4-6 weeks of protected weight-bearing, followed by progressive strengthening exercises. Most patients return to full activities within 4-6 months. Athletes may require 6-9 months before returning to competitive sports.',
    benefits: [
      'Prevention of recurrent dislocations',
      'Improved knee confidence and function',
      'Reduced risk of cartilage damage',
      'Better quality of life and activity level',
      'Long-term knee joint preservation'
    ],
    faqs: [
      {
        question: 'What causes patellar instability?',
        answer: 'Common causes include shallow trochlear groove, high-riding patella, ligament laxity, previous injuries, or a combination of anatomical factors.'
      },
      {
        question: 'Will I need physical therapy?',
        answer: 'Yes, physical therapy is essential for success. It typically begins 1-2 weeks after surgery and continues for 3-6 months.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default KneecapStabilization;
