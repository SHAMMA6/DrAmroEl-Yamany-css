import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const HipRevision = () => {
  const surgeryData = {
    title: 'Hip Revision Surgery',
    subtitle: 'Specialized Treatment for Failed Hip Replacements',
    breadcrumb: {
      category: 'Hip Surgeries',
      link: '/hip-surgeries',
      current: 'Hip Revision'
    },
    description: 'Hip revision surgery replaces a failed or worn hip replacement with new components, addressing complications and restoring hip function.',
    whatIsIt: 'Revision hip surgery is more complex than primary hip replacement, performed when a previous hip replacement has failed due to wear, loosening, infection, or other complications. It requires specialized expertise and often custom implants or bone grafting.',
    symptoms: [
      'Recurrent hip pain after previous replacement',
      'Feeling of instability or loosening',
      'Recurrent dislocations',
      'Decreased function compared to after primary surgery',
      'Leg length discrepancy',
      'Signs of infection (fever, drainage, warmth)'
    ],
    procedure: 'Revision surgery involves removing the failed components, addressing bone loss with grafts or augments, and installing new prosthetic components. The procedure is more complex than primary replacement and may take 2-4 hours depending on the extent of bone loss and other factors.',
    recovery: 'Recovery is typically longer than primary hip replacement, often requiring 3-6 months for significant improvement. Weight-bearing restrictions may be more stringent, especially if bone grafting was performed. Physical therapy is essential for optimal outcomes.',
    benefits: [
      'Relief of pain from failed prosthesis',
      'Improved hip stability and function',
      'Correction of leg length discrepancy',
      'Treatment of infection if present',
      'Restoration of quality of life'
    ],
    faqs: [
      {
        question: 'Why do hip replacements fail?',
        answer: 'Common causes include wear and tear over time, loosening of components, infection, dislocation, or bone loss around the implant.'
      },
      {
        question: 'How successful is revision hip surgery?',
        answer: 'Success rates are high (85-95%) in experienced hands, though outcomes depend on the reason for revision and the extent of bone loss.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default HipRevision;
