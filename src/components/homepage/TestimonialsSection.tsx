import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonialsData } from './homepage.data';
import '../Homepage.css';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isPersonTransitioning, setIsPersonTransitioning] = useState(false);
  const hasAnimated = useRef(false);
  const personIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const quoteIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetPersonInterval = useCallback(() => {
    if (personIntervalRef.current) clearInterval(personIntervalRef.current);
    personIntervalRef.current = setInterval(() => {
      handlePersonChange(1); // Go to next person
    }, 15000);
  }, []);

  const resetQuoteInterval = useCallback(() => {
    if (quoteIntervalRef.current) clearInterval(quoteIntervalRef.current);
    const currentPerson = testimonialsData[currentPersonIndex];
    if (currentPerson.testimonials.length <= 1) return;

    quoteIntervalRef.current = setInterval(() => {
      handleQuoteChange((prevIndex) => (prevIndex + 1) % currentPerson.testimonials.length);
    }, 7000);
  }, [currentPersonIndex]);

  const handlePersonChange = useCallback((direction: number) => {
    if (isPersonTransitioning) return;
    setIsPersonTransitioning(true);
    resetPersonInterval();

    const nextPersonIndex = (currentPersonIndex + direction + testimonialsData.length) % testimonialsData.length;

    const tl = gsap.timeline({ onComplete: () => setIsPersonTransitioning(false) });
    tl.to([".homepage__testimonials-person-info", ".homepage__testimonials-quote-box", ".testimonialimage", ".homepage__testimonials-quote-dots", ".homepage__testimonials-nav-container"], {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.in",
      stagger: 0.05
    })
      .call(() => {
        setCurrentPersonIndex(nextPersonIndex);
        setCurrentTestimonialIndex(0);
      })
      .fromTo([".homepage__testimonials-person-info", ".homepage__testimonials-quote-box", ".testimonialimage", ".homepage__testimonials-quote-dots", ".homepage__testimonials-nav-container"],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1, delay: 0.1 }
      );
  }, [currentPersonIndex, isPersonTransitioning, resetPersonInterval]);

  const handleQuoteChange = (newIndex: number | ((prev: number) => number)) => {
    resetQuoteInterval();
    gsap.to(".homepage__testimonials-quote-text", {
      opacity: 0,
      y: -15,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setCurrentTestimonialIndex(newIndex);
        gsap.fromTo(".homepage__testimonials-quote-text",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      }
    });
  };

  useEffect(() => {
    resetPersonInterval();
    return () => {
      if (personIntervalRef.current) clearInterval(personIntervalRef.current);
    };
  }, [resetPersonInterval]);

  useEffect(() => {
    resetQuoteInterval();
    return () => {
      if (quoteIntervalRef.current) clearInterval(quoteIntervalRef.current);
    };
  }, [currentPersonIndex, resetQuoteInterval]);

  useGSAP(() => {
    gsap.set([
      ".testimonialimage", ".homepage__testimonials-title", ".homepage__testimonials-person-info",
      ".homepage__testimonials-quote-box", ".homepage__testimonials-nav-button"
    ], { opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(".homepage__testimonials-title", { duration: 0.4, opacity: 1, y: 0, ease: "power2.out" })
      .to(".testimonialimage", { duration: 0.8, opacity: 1, scale: 1, ease: "power2.out" }, "-=0.3")
      .to(".homepage__testimonials-person-info", { duration: 0.4, opacity: 1, y: 0, ease: "power2.out" }, "-=0.6")
      .to(".homepage__testimonials-quote-box", { duration: 0.4, opacity: 1, y: 0, ease: "power2.out" }, "-=0.4")
      .to(".homepage__testimonials-nav-button", { duration: 0.3, opacity: 1, ease: "power2.out" }, "-=0.2");

    ScrollTrigger.create({
      trigger: ".homepage4",
      start: "top 75%",
      onEnter: () => {
        if (!hasAnimated.current) {
          tl.play();
          hasAnimated.current = true;
        }
      }
    });
  }, []);

  const currentPerson = testimonialsData[currentPersonIndex];

  return (
    <div id="testimonials" className="homepage4">
      <style>{`
        #testimonials.homepage4 {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 2rem;
          padding: 4rem 2rem;
          background-color: #FDFBF4;
          overflow: hidden;
          min-height: 100vh;
        }
        .homepage__testimonials-content {
          flex: 1;
          max-width: 45%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          color: #333;
          font-family: 'Source Sans Pro', sans-serif;
        }
        .homepage__testimonials-header {
          text-align: left;
        }
        .homepage__testimonials-title {
          font-family: 'Baskerville Old Face', serif;
          font-size: 2.5rem;
          color: #966f33;
          margin-bottom: 1rem;
        }
        .homepage__testimonials-person-info {
          text-align: left;
        }
        .homepage__testimonials-person-name {
          font-family: 'Battambang', serif;
          font-size: 1.75rem;
          font-weight: bold;
        }
        .homepage__testimonials-person-credentials {
          font-size: 1rem;
          color: #666;
          margin-top: 0.25rem;
        }
        .homepage__testimonials-quote-box {
          background-color: #FFF8E4;
          padding: 2rem;
          border-left: 5px solid #966f33;
          position: relative;
          min-height: 150px;
        }
        .homepage__testimonials-quote-text {
          font-family: 'Kalam', cursive;
          font-size: 1.2rem;
          line-height: 1.6;
        }
        .homepage__hero2 {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 45%;
        }
        .testimonialimage {
          width: 450px;
          height: 450px;
          background-size: cover;
          background-position: center;
          border-radius: 10px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .homepage__subhero {
          display: none;
        }
        .homepage__testimonials-nav-container {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          justify-content: flex-start;
        }
        .homepage__testimonials-nav-button {
          background-color: #966f33;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .homepage__testimonials-nav-button:hover {
          background-color: #7a5a2a;
          transform: translateY(-2px);
        }
        .homepage__testimonials-quote-dots {
          text-align: left;
          margin-top: 1rem;
        }
        .quote-dot {
          background-color: #ccc;
          border: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          padding: 0;
        }
        .quote-dot.active {
          background-color: #966F33;
        }

        @media (max-width: 768px) {
          #testimonials.homepage4 {
            flex-direction: column;
            padding: 2rem 1rem;
            height: auto;
          }
          .homepage__testimonials-content {
            max-width: 100%;
            order: 2;
            text-align: center;
          }
          .homepage__testimonials-header, .homepage__testimonials-person-info, .homepage__testimonials-quote-dots {
            text-align: center;
          }
          .homepage__hero2 {
            max-width: 100%;
            order: 1;
            margin-bottom: 2rem;
          }
          .testimonialimage {
            width: 250px;
            height: 250px;
          }
          .homepage__testimonials-nav-container {
            justify-content: center;
          }
        }
      `}</style>
      <div className="homepage__testimonials-content">
        <div className="homepage__testimonials-header">
          <div className="homepage__testimonials-title">What problems We are targetting?</div>
        </div>
        <div className="homepage__testimonials-person-info">
          <div className="homepage__testimonials-person-name">{currentPerson.name}</div>
          <div className="homepage__testimonials-person-credentials">{currentPerson.credentials}</div>
        </div>
        <div className="homepage__testimonials-quote-box">
          <div className="homepage__testimonials-quote-text">{currentPerson.testimonials[currentTestimonialIndex]}</div>
        </div>
        {currentPerson.testimonials.length > 1 && (
          <div className="homepage__testimonials-quote-dots">
            {currentPerson.testimonials.map((_, index) => (
              <button
                key={index}
                className={`quote-dot ${index === currentTestimonialIndex ? 'active' : ''}`}
                onClick={() => handleQuoteChange(index)}
              />
            ))}
          </div>
        )}
        <div className="homepage__testimonials-nav-container">
          <button className="homepage__testimonials-nav-button prev" onClick={() => handlePersonChange(-1)}>Previous</button>
          <button className="homepage__testimonials-nav-button next" onClick={() => handlePersonChange(1)}>See Next</button>
        </div>
      </div>
      <div className="homepage__hero2">
        <div
          className="testimonialimage"
          style={{ backgroundImage: `url(${currentPerson.image})` }}
        >
        </div>
        <div className="homepage__subhero"></div>
      </div>
    </div>
  );
};

export default TestimonialsSection;