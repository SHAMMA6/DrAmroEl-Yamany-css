import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const MultiLigamentInjury = () => {
  const surgeryData = {
    title: 'Multi-Ligament Injury Surgery',
    subtitle: 'Complex Knee Ligament Reconstruction',
    breadcrumb: {
      category: 'Knee Surgeries',
      link: '/knee-surgeries',
      current: 'Multi-Ligament Injury'
    },
    description: 'Multi-ligament knee reconstruction addresses severe knee injuries involving two or more ligaments, typically from high-energy trauma.',
    whatIsIt: 'Multi-ligament knee injuries (MLKIs) involve damage to two or more of the four main knee ligaments (ACL, PCL, MCL, LCL). These complex injuries require specialized surgical expertise and comprehensive reconstruction to restore knee stability and function.',
    symptoms: [
      'Severe knee instability',
      'Multiple directions of knee laxity',
      'Significant swelling and bruising',
      'Inability to bear weight',
      'Possible nerve or vascular injury',
      'History of high-energy trauma'
    ],
    procedure: 'Surgery involves staged or simultaneous reconstruction of multiple ligaments using grafts from the patient or donor tissue. The procedure requires careful planning and execution, often taking 3-5 hours. Advanced surgical techniques and biologics are used to optimize healing.',
    recovery: 'Recovery is extensive, typically requiring 9-18 months for full return to activities. Initial phase involves protected weight-bearing for 6-12 weeks, followed by progressive rehabilitation. Close monitoring and dedicated physical therapy are essential for optimal outcomes.',
    benefits: [
      'Restoration of knee stability',
      'Prevention of post-traumatic arthritis',
      'Return to functional activities',
      'Preservation of knee joint',
      'Improved long-term prognosis'
    ],
    faqs: [
      {
        question: 'Can all ligaments be repaired at once?',
        answer: 'In many cases, yes. However, some injuries may require staged procedures depending on the extent of damage and soft tissue condition.'
      },
      {
        question: 'What is the success rate?',
        answer: 'With proper surgical technique and rehabilitation, success rates are 80-90% for return to functional activities, though return to elite sports may be more challenging.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default MultiLigamentInjury;
