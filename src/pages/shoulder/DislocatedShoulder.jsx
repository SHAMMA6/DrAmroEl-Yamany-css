import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const DislocatedShoulder = () => {
  const surgeryData = {
    title: 'Dislocated Shoulder',
    subtitle: 'Treatment and Stabilization for Shoulder Dislocation',
    breadcrumb: {
      category: 'Shoulder Injuries',
      link: '/shoulder-injuries',
      current: 'Dislocated Shoulder'
    },
    description: 'Shoulder dislocation treatment includes immediate reduction and, for recurrent cases, surgical stabilization to prevent future dislocations.',
    whatIsIt: 'Shoulder dislocation occurs when the upper arm bone (humerus) comes out of the shoulder socket. It\'s one of the most commonly dislocated joints due to its high mobility. First-time dislocations are treated with reduction and rehabilitation, while recurrent dislocations typically require surgical stabilization to repair damaged structures.',
    symptoms: [
      'Intense shoulder pain',
      'Visible deformity of the shoulder',
      'Inability to move the shoulder',
      'Swelling and bruising',
      'Numbness or weakness in the arm',
      'History of previous dislocations (recurrent cases)'
    ],
    procedure: 'Surgical stabilization (Bankart repair) involves reattaching the torn labrum and capsule to the shoulder socket, often with anchors. In cases of bone loss, bone grafting procedures may be necessary. The surgery is typically performed arthroscopically through small incisions, taking 1-2 hours.',
    recovery: 'The shoulder is immobilized in a sling for 4-6 weeks. Passive range of motion begins at 3-4 weeks, with active motion starting at 6 weeks. Strengthening begins at 8-12 weeks. Return to contact sports typically occurs at 4-6 months. Physical therapy is crucial for optimal outcomes.',
    benefits: [
      'Prevention of recurrent dislocations',
      'Restored shoulder stability',
      'Return to sports and activities',
      'Prevention of arthritis',
      'Improved confidence in shoulder function',
      'High success rates (>90%) with proper rehabilitation'
    ],
    faqs: [
      {
        question: 'Do I need surgery after a first-time dislocation?',
        answer: 'First-time dislocations in older patients are often treated conservatively. However, young active patients, especially athletes, may benefit from surgery due to high recurrence rates (>80% in some studies).'
      },
      {
        question: 'What is the success rate of shoulder stabilization surgery?',
        answer: 'Success rates are excellent (>90%) for preventing recurrent dislocations. However, success depends on patient factors, bone loss extent, and adherence to rehabilitation protocols.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default DislocatedShoulder;
