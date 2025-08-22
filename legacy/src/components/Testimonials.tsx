import { useState, useEffect, useCallback, useRef } from 'react';
import { testimonialsData } from './homepage/homepage.data';
import gsap from 'gsap';

export default function Testimonials() {
  const [currentFlatIndex, setCurrentFlatIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const allTestimonials = testimonialsData.flatMap(person => 
    person.testimonials.map(testimonial => ({
      quote: testimonial,
      name: person.name,
      credentials: person.credentials,
    }))
  );

  const changeTestimonial = useCallback((direction: number) => {
    const nextIndex = (currentFlatIndex + direction + allTestimonials.length) % allTestimonials.length;
    
    gsap.to(".homepage__testimonials-quote-box, .homepage__testimonials-person-info-simple", {
      opacity: 0,
      y: -15,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentFlatIndex(nextIndex);
        gsap.fromTo(".homepage__testimonials-quote-box, .homepage__testimonials-person-info-simple", 
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', stagger: 0.1 }
        );
      }
    });
  }, [currentFlatIndex, allTestimonials.length]);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      changeTestimonial(1);
    }, 7000);
  }, [changeTestimonial]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetInterval]);

  const handleNavClick = (direction: number) => {
    resetInterval();
    changeTestimonial(direction);
  };

  const currentTestimonial = allTestimonials[currentFlatIndex];

  return (
    <div className="homepage__testimonials-section">
      <style>{`
        .homepage__testimonials-container {
          position: relative;
        }
        .testimonials-nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.5);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          color: #333;
          transition: background 0.3s ease;
        }
        .testimonials-nav-button:hover {
          background: rgba(255, 255, 255, 0.8);
        }
        .testimonials-nav-button.prev {
          left: -20px;
        }
        .testimonials-nav-button.next {
          right: -20px;
        }
      `}</style>
      <div className="homepage__testimonials-container">
        <button className="testimonials-nav-button prev" onClick={() => handleNavClick(-1)}>‹</button>
        <div className="homepage__testimonials-content">
          <div className="homepage__testimonials-header">
            <div className="homepage__testimonials-title">
              Our Customer's Opinions
            </div>
            <div className="homepage__testimonials-quote-mark">"</div>
          </div>
          <div className="homepage__testimonials-quote-box">
            <div className="homepage__testimonials-quote-text" style={{ fontStyle: 'italic' }}>
              {currentTestimonial.quote}
            </div>
          </div>
          <div className="homepage__testimonials-person-info-simple" style={{textAlign: 'right', marginTop: '20px'}}>
             <div className="homepage__testimonials-person-name" style={{fontWeight: 'bold'}}>- {currentTestimonial.name}</div>
             <div className="homepage__testimonials-person-credentials" style={{fontSize: '0.9em'}}>{currentTestimonial.credentials}</div>
          </div>
        </div>
        <button className="testimonials-nav-button next" onClick={() => handleNavClick(1)}>›</button>
      </div>
    </div>
  );
}
