import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const FrozenShoulder = () => {
  const surgeryData = {
    title: 'Frozen Shoulder',
    subtitle: 'Treatment for Adhesive Capsulitis',
    breadcrumb: {
      category: 'Shoulder Injuries',
      link: '/shoulder-injuries',
      current: 'Frozen Shoulder'
    },
    description: 'Frozen shoulder treatment addresses adhesive capsulitis through conservative management and surgical release when conservative measures fail.',
    whatIsIt: 'Frozen shoulder, or adhesive capsulitis, is a condition characterized by stiffness and pain in the shoulder joint. The shoulder capsule thickens and becomes tight, severely limiting motion. The condition typically progresses through three stages: freezing, frozen, and thawing, lasting 1-3 years if untreated.',
    symptoms: [
      'Progressive loss of shoulder motion in all directions',
      'Pain, especially at night',
      'Difficulty with daily activities (dressing, reaching)',
      'Stiffness that worsens over time',
      'Pain with movement',
      'Significant impact on quality of life'
    ],
    procedure: 'Surgery is considered for cases that don\'t improve after 6-12 months of conservative treatment. Arthroscopic capsular release involves cutting the tight portions of the shoulder capsule to restore motion. Sometimes manipulation under anesthesia is performed. The procedure typically takes 30-60 minutes.',
    recovery: 'Immediate physical therapy is crucial to maintain the motion gained during surgery. Intensive therapy continues for 6-12 weeks, with most patients experiencing significant improvement within 3 months. Full recovery may take 6-9 months. Success rates are high (>90%) with proper post-operative rehabilitation.',
    benefits: [
      'Rapid improvement in range of motion',
      'Relief of pain',
      'Faster recovery than natural history',
      'Return to normal activities',
      'Improved sleep',
      'Better quality of life'
    ],
    faqs: [
      {
        question: 'Will my frozen shoulder resolve on its own?',
        answer: 'Many cases improve over 18-36 months without surgery. However, surgical treatment can significantly shorten the recovery timeline and provide faster relief.'
      },
      {
        question: 'What causes frozen shoulder?',
        answer: 'The exact cause is often unknown, but risk factors include diabetes, thyroid disorders, previous shoulder injury or surgery, and prolonged immobilization.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default FrozenShoulder;
