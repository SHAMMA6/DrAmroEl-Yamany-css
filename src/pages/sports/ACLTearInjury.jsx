import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const ACLTearInjury = () => {
  const surgeryData = {
    title: 'ACL Tear Injury',
    subtitle: 'Comprehensive Treatment for Anterior Cruciate Ligament Injuries',
    breadcrumb: {
      category: 'Sports Injuries',
      link: '/sports-injuries',
      current: 'ACL Tear Injury'
    },
    description: 'ACL reconstruction surgery repairs torn anterior cruciate ligaments, restoring knee stability and enabling return to sports and active lifestyles.',
    whatIsIt: 'The anterior cruciate ligament (ACL) is one of the key ligaments that stabilizes the knee joint. ACL tears are common sports injuries, often occurring during sudden stops, pivoting, or direct impacts. Surgical reconstruction is typically recommended for active individuals who wish to return to sports.',
    symptoms: [
      'Loud "pop" sound at time of injury',
      'Severe pain and immediate swelling',
      'Loss of range of motion',
      'Feeling of instability or "giving way"',
      'Difficulty walking or bearing weight',
      'Joint line tenderness'
    ],
    procedure: 'ACL reconstruction involves replacing the torn ligament with a graft, typically from the patellar tendon, hamstring tendon, or quadriceps tendon. The surgery is performed arthroscopically through small incisions. The graft is fixed to the bone using screws or other fixation devices. The procedure takes 1-2 hours.',
    recovery: 'Recovery is progressive over 9-12 months. Initial focus is on reducing swelling and regaining motion. Progressive strengthening begins at 6-12 weeks. Running typically begins at 3-4 months. Return to sports usually occurs at 9-12 months after passing functional tests. Physical therapy is crucial throughout recovery.',
    benefits: [
      'Restored knee stability',
      'Return to sports and activities',
      'Prevention of meniscus and cartilage damage',
      'Reduced risk of arthritis',
      'High success rate (>90%)',
      'Minimally invasive technique'
    ],
    faqs: [
      {
        question: 'Do I need surgery for an ACL tear?',
        answer: 'Surgery is typically recommended for active individuals, athletes, or those with instability. Some older or less active patients may do well with conservative treatment and physical therapy.'
      },
      {
        question: 'When can I return to sports?',
        answer: 'Most athletes return to sports 9-12 months after surgery, once they have regained strength, passed functional tests, and have physician clearance.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default ACLTearInjury;
