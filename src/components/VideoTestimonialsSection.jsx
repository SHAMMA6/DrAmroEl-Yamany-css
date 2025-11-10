import React from 'react';
import './VideoTestimonialsSection.css';

const VideoTestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      patientName: 'Ahmed Mohamed',
      procedure: 'Knee Replacement Surgery',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://via.placeholder.com/400x300/48CFCB/FFFFFF?text=Patient+Testimonial+1'
    },
    {
      id: 2,
      patientName: 'Sara Ahmed',
      procedure: 'ACL Reconstruction',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://via.placeholder.com/400x300/229799/FFFFFF?text=Patient+Testimonial+2'
    },
    {
      id: 3,
      patientName: 'Mahmoud Hassan',
      procedure: 'Hip Replacement Surgery',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://via.placeholder.com/400x300/48CFCB/FFFFFF?text=Patient+Testimonial+3'
    }
  ];

  return (
    <section className="video-testimonials-section section">
      <div className="container">
        <h2 className="section-title">Patient Testimonials</h2>
        <p className="section-description">
          Hear directly from our patients about their recovery journey and experience with Dr. Amr El Yamany
        </p>

        <div className="video-testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="video-testimonial-card">
              <div className="video-wrapper">
                <iframe
                  src={testimonial.videoUrl}
                  title={`${testimonial.patientName} - ${testimonial.procedure}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-testimonial-info">
                <h3>{testimonial.patientName}</h3>
                <p>{testimonial.procedure}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
