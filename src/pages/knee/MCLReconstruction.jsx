import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const MCLReconstruction = () => {
  const surgeryData = {
    title: 'MCL Reconstruction Surgery',
    subtitle: 'Medial Collateral Ligament Repair and Reconstruction',
    breadcrumb: {
      category: 'Knee Surgeries',
      link: '/knee-surgeries',
      current: 'MCL Reconstruction'
    },
    description: 'MCL reconstruction surgery repairs or reconstructs the medial collateral ligament to restore stability to the inner side of the knee.',
    whatIsIt: 'The medial collateral ligament (MCL) is located on the inner side of the knee and provides stability against forces pushing the knee inward. While many MCL injuries heal without surgery, severe tears or chronic instability may require surgical reconstruction.',
    symptoms: [
      'Pain on the inner side of the knee',
      'Swelling and bruising',
      'Knee instability with side-to-side stress',
      'Tenderness along the inner knee',
      'Difficulty walking or bearing weight',
      'Feeling of the knee "opening up" on the inside'
    ],
    procedure: 'The surgery may involve repairing the torn ligament back to bone or reconstructing it using tendon grafts. The specific technique depends on the location and severity of the tear, as well as the chronicity of the injury. The procedure typically takes 1-2 hours.',
    recovery: 'Recovery involves initial bracing for 4-6 weeks with protected weight-bearing. Range of motion exercises begin early, followed by progressive strengthening. Most patients return to full activities within 3-4 months, with athletes returning to sports at 4-6 months.',
    benefits: [
      'Restored knee stability',
      'Relief from pain and swelling',
      'Return to athletic activities',
      'Prevention of secondary injuries',
      'Improved quality of life'
    ],
    faqs: [
      {
        question: 'How common is MCL surgery?',
        answer: 'MCL surgery is less common than ACL surgery because most MCL tears heal well with conservative treatment. Surgery is reserved for grade III tears or chronic instability.'
      },
      {
        question: 'What is the recovery timeline?',
        answer: 'Most patients can return to daily activities within 6-8 weeks and sports within 3-4 months, though this varies based on individual factors and the extent of injury.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default MCLReconstruction;
