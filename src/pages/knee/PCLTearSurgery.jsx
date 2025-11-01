import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const PCLTearSurgery = () => {
  const surgeryData = {
    title: 'PCL Tear Surgery',
    subtitle: 'Posterior Cruciate Ligament Reconstruction',
    breadcrumb: {
      category: 'Knee Surgeries',
      link: '/knee-surgeries',
      current: 'PCL Tear Surgery'
    },
    description: 'PCL tear surgery reconstructs the posterior cruciate ligament to restore knee stability and prevent long-term complications.',
    whatIsIt: 'The posterior cruciate ligament (PCL) is the strongest ligament in the knee, preventing the tibia from moving too far backward. PCL injuries are less common than ACL injuries but can result from dashboard injuries, falls, or sports trauma. Surgical reconstruction is often necessary for complete tears or combined ligament injuries.',
    symptoms: [
      'Pain and swelling in the knee',
      'Feeling of instability, especially going downhill or stairs',
      'Difficulty kneeling',
      'Posterior knee pain',
      'Mild to moderate swelling',
      'Feeling of the knee "giving way"'
    ],
    procedure: 'PCL reconstruction involves replacing the torn ligament with a graft, typically from the hamstring or patellar tendon. The surgery is performed arthroscopically through small incisions. Proper graft positioning and tensioning are critical for optimal outcomes. The procedure typically takes 2-3 hours.',
    recovery: 'Recovery is gradual, with initial focus on preventing posterior tibial sag. Protected weight-bearing with a brace is typically required for 6-8 weeks. Full recovery takes 9-12 months, with return to sports often taking 9-12 months. Compliance with rehabilitation protocols is essential.',
    benefits: [
      'Restored knee stability',
      'Prevention of cartilage damage',
      'Improved function for activities',
      'Reduced risk of arthritis',
      'Return to sports and active lifestyle'
    ],
    faqs: [
      {
        question: 'Is PCL surgery more difficult than ACL surgery?',
        answer: 'PCL surgery is technically more challenging due to the posterior location of the ligament and the need for precise graft positioning. It requires specialized expertise.'
      },
      {
        question: 'Can I delay PCL surgery?',
        answer: 'In some cases, isolated PCL tears can be managed conservatively. However, complete tears or combined injuries typically require surgery to prevent long-term problems.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default PCLTearSurgery;
