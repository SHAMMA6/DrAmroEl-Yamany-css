import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const LCLTearSurgery = () => {
  const surgeryData = {
    title: 'LCL Tear Surgery',
    subtitle: 'Lateral Collateral Ligament Reconstruction',
    breadcrumb: {
      category: 'Knee Surgeries',
      link: '/knee-surgeries',
      current: 'LCL Tear Surgery'
    },
    description: 'LCL tear surgery repairs or reconstructs the lateral collateral ligament to restore stability to the outer side of the knee.',
    whatIsIt: 'The lateral collateral ligament (LCL) provides stability to the outer side of the knee. LCL injuries are less common than other knee ligament injuries but require surgical treatment in cases of complete tears or chronic instability, especially when combined with other ligament injuries.',
    symptoms: [
      'Pain on the outer side of the knee',
      'Knee instability, especially with side-to-side motion',
      'Swelling',
      'Feeling of the knee "giving way"',
      'Tenderness along the outer knee',
      'Difficulty with cutting or pivoting movements'
    ],
    procedure: 'Surgery may involve direct repair of the LCL or reconstruction using tendon grafts. The procedure is tailored to the specific injury pattern and may be combined with treatment of associated injuries. Most surgeries take 1-2 hours and can often be performed using minimally invasive techniques.',
    recovery: 'Initial recovery includes protected weight-bearing for 4-6 weeks with a hinged brace. Physical therapy begins early with focus on range of motion and progressive strengthening. Most patients return to normal activities within 4-6 months and sports within 6-9 months.',
    benefits: [
      'Restored knee stability',
      'Reduced risk of further damage',
      'Return to athletic activities',
      'Prevention of arthritis',
      'Improved confidence in knee function'
    ],
    faqs: [
      {
        question: 'Do LCL tears heal without surgery?',
        answer: 'Partial tears may heal with conservative treatment, but complete tears or tears with associated injuries typically require surgical reconstruction for optimal outcomes.'
      },
      {
        question: 'Can I return to sports after LCL surgery?',
        answer: 'Yes, most patients can return to sports after proper rehabilitation, typically within 6-9 months depending on the sport and individual healing.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default LCLTearSurgery;
