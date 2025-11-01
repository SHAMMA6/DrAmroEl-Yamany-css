import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const QuadricepsTendonRepair = () => {
  const surgeryData = {
    title: 'Quadriceps Tendon Repair',
    subtitle: 'Advanced Surgical Treatment for Quadriceps Tendon Injuries',
    breadcrumb: {
      category: 'Knee Surgeries',
      link: '/knee-surgeries',
      current: 'Quadriceps Tendon Repair'
    },
    description: 'Quadriceps tendon repair is a surgical procedure to reattach a torn quadriceps tendon to the kneecap, restoring normal knee function and strength.',
    whatIsIt: 'The quadriceps tendon connects the quadriceps muscles to the kneecap (patella). When this tendon tears, usually from a forceful contraction or direct trauma, surgical repair is often necessary to restore full leg function and prevent long-term disability.',
    symptoms: [
      'Sudden pain at the front of the knee',
      'Inability to straighten the knee',
      'Visible indentation above the kneecap',
      'Swelling and bruising',
      'Difficulty walking or bearing weight',
      'Feeling of the kneecap "slipping" upward'
    ],
    procedure: 'The surgery involves making an incision over the knee to access the torn tendon. The tendon is then reattached to the kneecap using strong sutures or anchors. In some cases, additional reinforcement may be needed. The procedure typically takes 1-2 hours under general or regional anesthesia.',
    recovery: 'Initial recovery includes immobilization in a knee brace for 4-6 weeks, followed by progressive physical therapy. Most patients can return to light activities within 3-4 months and full activities including sports within 6-12 months. Adherence to rehabilitation protocols is crucial for optimal outcomes.',
    benefits: [
      'Restoration of knee extension strength',
      'Return to normal walking and daily activities',
      'Prevention of chronic knee weakness',
      'Improved quality of life',
      'High success rate with proper rehabilitation'
    ],
    faqs: [
      {
        question: 'How long will I be in a brace after surgery?',
        answer: 'Most patients wear a knee brace locked in extension for 4-6 weeks to protect the repair. The brace allows for gradual range of motion exercises as healing progresses.'
      },
      {
        question: 'When can I return to work?',
        answer: 'Return to work depends on your occupation. Sedentary jobs may be possible after 2-4 weeks, while physical labor may require 3-6 months.'
      },
      {
        question: 'Will I regain full strength?',
        answer: 'With proper surgical repair and dedicated rehabilitation, most patients regain 85-95% of their pre-injury strength within 9-12 months.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default QuadricepsTendonRepair;
