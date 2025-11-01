import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const MeniscusTearInjury = () => {
  const surgeryData = {
    title: 'Meniscus Tear Injury',
    subtitle: 'Advanced Treatment for Torn Knee Cartilage',
    breadcrumb: {
      category: 'Sports Injuries',
      link: '/sports-injuries',
      current: 'Meniscus Tear Injury'
    },
    description: 'Meniscus tear treatment ranges from conservative care to arthroscopic surgery, depending on the tear type, location, and patient factors.',
    whatIsIt: 'The meniscus is a C-shaped piece of cartilage that cushions and stabilizes the knee joint. Meniscus tears can occur from sports injuries, twisting movements, or degenerative changes. Treatment options include repair (stitching the tear) or partial meniscectomy (removing the torn portion).',
    symptoms: [
      'Knee pain, especially with twisting',
      'Swelling and stiffness',
      'Catching or locking of the knee',
      'Difficulty straightening the knee fully',
      'Feeling of the knee "giving way"',
      'Pain along the joint line'
    ],
    procedure: 'Meniscus surgery is performed arthroscopically. Depending on the tear location and pattern, the surgeon either repairs the meniscus with sutures or removes the torn fragment. Meniscus repair is preferred when possible as it preserves the shock-absorbing function. The procedure typically takes 30-60 minutes.',
    recovery: 'Recovery depends on the type of surgery. Meniscectomy patients often return to activities within 4-6 weeks. Meniscus repair requires protected weight-bearing for 4-6 weeks, with full recovery taking 3-6 months. Physical therapy is important for both procedures.',
    benefits: [
      'Relief of pain and mechanical symptoms',
      'Restoration of knee function',
      'Prevention of further cartilage damage',
      'Quick recovery with arthroscopic technique',
      'Preservation of meniscus when repair is possible',
      'Return to sports and activities'
    ],
    faqs: [
      {
        question: 'Can meniscus tears heal without surgery?',
        answer: 'Small tears in the outer portion may heal with conservative treatment. However, many tears, especially in the inner meniscus, do not heal on their own and may benefit from surgery.'
      },
      {
        question: 'Is meniscus repair better than removal?',
        answer: 'Yes, when possible. Meniscus repair preserves the cartilage, provides better long-term outcomes, and reduces the risk of arthritis. However, not all tears are repairable.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default MeniscusTearInjury;
