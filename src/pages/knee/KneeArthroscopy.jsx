import React from 'react';
import SurgeryTemplate from '../../components/SurgeryTemplate';

const KneeArthroscopy = () => {
  const surgeryData = {
    title: 'Knee Arthroscopy',
    subtitle: 'Minimally Invasive Knee Surgery',
    breadcrumb: {
      category: 'Knee Surgeries',
      link: '/knee-surgeries',
      current: 'Knee Arthroscopy'
    },
    description: 'Knee arthroscopy is a minimally invasive surgical procedure used to diagnose and treat various knee problems using a small camera and specialized instruments.',
    whatIsIt: 'Arthroscopy involves inserting a small camera (arthroscope) through tiny incisions to visualize the inside of the knee joint. This allows the surgeon to diagnose problems and perform treatments with minimal tissue disruption, resulting in faster recovery times.',
    symptoms: [
      'Persistent knee pain',
      'Knee swelling',
      'Locking or catching sensation',
      'Reduced range of motion',
      'Knee instability',
      'Pain with specific movements'
    ],
    procedure: 'The procedure is performed through 2-3 small incisions (portals) around the knee. A camera provides visualization while specialized instruments are used to repair or remove damaged tissue. Common procedures include meniscus repair, cartilage treatment, ACL reconstruction, and removal of loose bodies. Most arthroscopies take 30-90 minutes.',
    recovery: 'Most patients go home the same day. Initial recovery involves rest, ice, compression, and elevation (RICE). Many patients return to desk work within days and physical activities within 2-6 weeks, depending on the specific procedure performed. Physical therapy is often recommended.',
    benefits: [
      'Minimal scarring (small incisions)',
      'Less post-operative pain',
      'Faster recovery than open surgery',
      'Same-day discharge in most cases',
      'Lower risk of infection',
      'Excellent visualization of joint structures'
    ],
    faqs: [
      {
        question: 'Is arthroscopy painful?',
        answer: 'Most patients experience mild to moderate discomfort that is well-controlled with pain medication. Many report less pain than expected due to the minimally invasive nature.'
      },
      {
        question: 'How soon can I walk after arthroscopy?',
        answer: 'Most patients can walk with assistance the same day or next day, depending on the specific procedure. Full weight-bearing is often allowed within 1-2 weeks.'
      }
    ]
  };

  return <SurgeryTemplate {...surgeryData} />;
};

export default KneeArthroscopy;
