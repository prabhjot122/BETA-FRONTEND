import FeatureItem from "./FeatureItem";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function WhyUs() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const features = useMemo(() => [
    {
      icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.75 20.9999L19.25 24.4999L26.25 17.4999M35 22.7498C35 31.4998 28.875 35.8748 21.595 38.4123C21.2138 38.5415 20.7997 38.5353 20.4225 38.3948C13.125 35.8748 7 31.4998 7 22.7498V10.4998C7 10.0357 7.18437 9.59056 7.51256 9.26237C7.84075 8.93418 8.28587 8.74981 8.75 8.74981C12.25 8.74981 16.625 6.64981 19.67 3.98981C20.0407 3.67306 20.5124 3.49902 21 3.49902C21.4876 3.49902 21.9593 3.67306 22.33 3.98981C25.3925 6.66731 29.75 8.74981 33.25 8.74981C33.7141 8.74981 34.1592 8.93418 34.4874 9.26237C34.8156 9.59056 35 10.0357 35 10.4998V22.7498Z" stroke="#966F33" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
      title: "Guarantee Your Credibility:",
      description: "We stake our reputation on accuracy so you can confidently stake yours. Every article is rigorously peer-reviewed to serve as an unshakable foundation for your work.",
    },
    {
      icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.5 22.75L29.0938 10.7205C29.0283 10.3932 28.8706 10.0915 28.6393 9.85087C28.408 9.61025 28.1127 9.44081 27.7883 9.36251L5.66126 3.54901C5.36976 3.47853 5.06504 3.48415 4.77633 3.56532C4.48763 3.6465 4.22462 3.8005 4.01256 4.01256C3.8005 4.22462 3.6465 4.48763 3.56532 4.77633C3.48415 5.06504 3.47853 5.36976 3.54901 5.66126L9.36251 27.7883C9.44081 28.1127 9.61025 28.408 9.85087 28.6393C10.0915 28.8706 10.3932 29.0283 10.7205 29.0938L22.75 31.5M4.02466 4.02509L16.7752 16.7756M27.487 37.2629C27.1588 37.591 26.7138 37.7753 26.2497 37.7753C25.7857 37.7753 25.3407 37.591 25.0125 37.2629L22.237 34.4874C21.9089 34.1592 21.7246 33.7142 21.7246 33.2502C21.7246 32.7861 21.9089 32.3411 22.237 32.0129L32.0125 22.2374C32.3407 21.9093 32.7857 21.725 33.2497 21.725C33.7138 21.725 34.1588 21.9093 34.487 22.2374L37.2625 25.0129C37.5906 25.3411 37.7749 25.7861 37.7749 26.2502C37.7749 26.7142 37.5906 27.1592 37.2625 27.4874L27.487 37.2629ZM22.75 19.25C22.75 21.183 21.183 22.75 19.25 22.75C17.317 22.75 15.75 21.183 15.75 19.25C15.75 17.317 17.317 15.75 19.25 15.75C21.183 15.75 22.75 17.317 22.75 19.25Z" stroke="#966F33" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
      title: "Lead the Conversation",
      description: "We don't just give you tools to write; we give you a platform to be heard. Our AI-powered suite helps you move beyond participating in the conversation to actively leading it.",
    },
    {
      icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 36.75V33.25C28 31.3935 27.2625 29.613 25.9497 28.3003C24.637 26.9875 22.8565 26.25 21 26.25H10.5C8.64348 26.25 6.86301 26.9875 5.55025 28.3003C4.2375 29.613 3.5 31.3935 3.5 33.25V36.75M38.5 36.7498V33.2498C38.4988 31.6988 37.9826 30.1921 37.0324 28.9663C36.0822 27.7405 34.7517 26.865 33.25 26.4773M28 5.47729C29.5057 5.86282 30.8403 6.73852 31.7934 7.96634C32.7464 9.19415 33.2637 10.7042 33.2637 12.2585C33.2637 13.8128 32.7464 15.3229 31.7934 16.5508C30.8403 17.7786 29.5057 18.6543 28 19.0398M22.75 12.25C22.75 16.116 19.616 19.25 15.75 19.25C11.884 19.25 8.75 16.116 8.75 12.25C8.75 8.38401 11.884 5.25 15.75 5.25C19.616 5.25 22.75 8.38401 22.75 12.25Z" stroke="#966F33" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
      title: "Build in Community",
      description: "The future of law isn't built in isolation; it's built in a community of leaders. Here, you will connect and collaborate with peers to collectively elevate the entire profession.",
    },
    {
      icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 14L12.25 7M12.25 7L19.25 14M12.25 7V35M19.25 21H26.25M19.25 28H31.5M19.25 35H36.75" stroke="#966F33" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
      title: "Solidify Your Legacy",
      description: "Your career is your life's work; we make sure the world recognizes it as your legacy. Through strategic amplification, your expertise achieves the lasting authority and impact it deserves.",
    },
  ], []);

  const getPreviousIndex = useCallback(() => (currentIndex - 1 + features.length) % features.length, [currentIndex, features.length]);
  const getNextIndex = useCallback(() => (currentIndex + 1) % features.length, [currentIndex, features.length]);

  const navigateToFeature = useCallback((direction: 'up' | 'down') => {
    setCurrentIndex(prev => direction === 'down' ? (prev + 1) % features.length : (prev - 1 + features.length) % features.length);
  }, [features.length]);

  const startAutoRotation = useCallback(() => {
    stopAutoRotation();
    autoRotateIntervalRef.current = setInterval(() => {
      navigateToFeature('down');
    }, 3000);
  }, [navigateToFeature]);

  const stopAutoRotation = useCallback(() => {
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
    }
  }, []);

  useEffect(() => {
    if (!isHovered) {
      startAutoRotation();
    }
    return () => stopAutoRotation();
  }, [isHovered, startAutoRotation, stopAutoRotation]);

  useGSAP(() => {
    if (window.innerWidth <= 768) return;

    const tl = gsap.timeline();
    tl.fromTo('[data-carousel-position]', { y: 20, opacity: 0.1, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 })
      .to('[data-carousel-position="top"]', { opacity: 0.4, scale: 0.9, duration: 0.3, ease: "power2.out" }, "-=0.4")
      .to('[data-carousel-position="bottom"]', { opacity: 0.4, scale: 0.9, duration: 0.3, ease: "power2.out" }, "-=0.3");
  }, [currentIndex]);

  return (
    <>
      <style>{`
        .why-us-desktop { display: flex; }
        .why-us-mobile { display: none; }
        @media (max-width: 768px) {
          .why-us-desktop { display: none; }
          .why-us-mobile { 
            display: flex !important; 
            flex-direction: column; 
            align-items: center; 
            padding: 2rem 1rem; 
            background-color: #fefaef !important; 
            min-height: 100vh;
            width: 100%;
            box-sizing: border-box;
          }
          .why-us-mobile__title { 
            font-size: 3rem; 
            text-align: center; 
            margin-bottom: 2rem; 
            color: #b99c6d; 
            font-family: "Baskerville Old Face", "Times New Roman", serif;
            line-height: 1.1;
          }
          .why-us-mobile__features { 
            display: flex; 
            flex-direction: column; 
            gap: 1.5rem; 
            width: 100%; 
            max-width: 400px;
          }
          .why-us-mobile__features .homepage__feature-item {
            background: linear-gradient(135deg, #fefaef 0%, #fdf8ec 100%);
            border-radius: 20px;
            padding: 1.5rem;
            box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
            margin-bottom: 1rem;
          }
        }
      `}</style>

      {/* --- Desktop Version --- */}
      <div className="homepage__why-us-section why-us-desktop">
        <div className="homepage__why-us-title">Why <br />us?</div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/531c8ea65915795765fe104800c137c9ee4e1352?width=1528"
          alt=""
          className="homepage__why-us-image"
        />
        <div className="homepage__hero1">
          <div
            ref={carouselRef}
            className="homepage__why-us-features homepage__why-us-carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div data-carousel-position="top" className="homepage__feature-item-container homepage__carousel-item" onClick={() => navigateToFeature('up')}>
              <FeatureItem {...features[getPreviousIndex()]} />
            </div>
            <div data-carousel-position="middle" className="homepage__feature-item-container homepage__carousel-item active">
              <FeatureItem {...features[currentIndex]} />
            </div>
            <div data-carousel-position="bottom" className="homepage__feature-item-container homepage__carousel-item" onClick={() => navigateToFeature('down')}>
              <FeatureItem {...features[getNextIndex()]} />
            </div>
          </div>
        </div>
      </div>

      {/* --- Mobile Version --- */}
      <div className="why-us-mobile">
        <div className="why-us-mobile__title">Why us?</div>
        <div className="why-us-mobile__features">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}