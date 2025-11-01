import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const HipResurfacing = () => {
  const surgeryData = {
    title: 'Hip Resurfacing',
    subtitle: 'Bone-Conserving Alternative to Hip Replacement',
    breadcrumb: {
      category: 'Hip Surgeries',
      link: '/hip-surgeries',
      current: 'Hip Resurfacing'
    },
    description: 'Hip resurfacing is a bone-conserving procedure that caps the femoral head instead of removing it, offering younger, active patients an alternative to traditional hip replacement.',
    whatIsIt: 'Hip resurfacing involves reshaping the femoral head and capping it with a metal prosthesis, rather than removing it entirely. This preserves more bone than traditional hip replacement, making it an attractive option for younger, active patients who may need revision surgery in the future.',
    symptoms: [
      'Hip pain limiting activities',
      'Stiffness and reduced range of motion',
      'Pain with weight-bearing activities',
      'Young age with hip arthritis',
      'Desire to maintain active lifestyle',
      'Good bone quality'
    ],
    procedure: 'The procedure involves reshaping the femoral head and placing a metal cap over it. A matching metal cup is implanted in the acetabulum. The surgery preserves the femoral neck and more bone than traditional replacement. The procedure typically takes 1.5-2.5 hours.',
    recovery: 'Recovery is often faster than traditional hip replacement due to less bone removal. Hospital stay is 1-2 days. Most patients can return to daily activities within 6-8 weeks and resume higher-impact activities within 3-6 months with physician approval.',
    benefits: [
      'Preservation of bone stock',
      'More natural hip biomechanics',
      'Potential for higher activity levels',
      'Easier revision if needed in the future',
      'Lower dislocation risk',
      'Good long-term outcomes in appropriate candidates'
    ],
    faqs: [
      {
        question: 'Am I a candidate for hip resurfacing?',
        answer: 'Ideal candidates are younger (under 60), active patients with good bone quality, adequate femoral head size, and no significant bone cysts or kidney disease.'
      },
      {
        question: 'What are the advantages over total hip replacement?',
        answer: 'Hip resurfacing preserves more bone, may allow higher activity levels, and provides more natural biomechanics. However, not all patients are suitable candidates.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default HipResurfacing;
