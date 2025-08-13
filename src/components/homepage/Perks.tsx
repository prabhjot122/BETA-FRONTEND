import React from "react";
import "./Perks.css";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
interface PerksProps {
  onJoinWaitlist: () => void;
}
const Perks = ({ onJoinWaitlist }: PerksProps) => {
  const targetRef = useRef(null);
  const [stickyState, setStickyState] = useState('initial');
  const [activeSection, setActiveSection] = useState(0);

  // Refs for each section
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // This scroll progress determines the state
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Start when top of target hits 20vh. End when bottom of target hits bottom of viewport.
    offset: ["start 20vh", "end -38vh"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.01) {
      setStickyState('initial');
    } else if (latest >= 1) {
      setStickyState('final');
    } else {
      setStickyState('sticky');
    }
  });

  // Debug: Log section positions on mount
  useEffect(() => {
    const logSectionPositions = () => {
      console.log('=== SECTION POSITIONS ===');
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const element = ref.current;
          const rect = element.getBoundingClientRect();
          const elementTop = element.offsetTop;
          console.log(`Section ${index}:`, {
            offsetTop: elementTop,
            height: element.offsetHeight,
            bottom: elementTop + element.offsetHeight,
            title: element.querySelector('.perk-right-title')?.textContent
          });
        }
      });
    };

    // Log positions after a short delay to ensure elements are rendered
    setTimeout(logSectionPositions, 1000);
  }, []);

  // Completely new approach: Use getBoundingClientRect for accurate positioning
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.4; // 40% down from top of viewport

      let newActiveSection = 0;
      let closestDistance = Infinity;

      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distanceFromTrigger = Math.abs(sectionCenter - triggerPoint);

          // Find section whose center is closest to our trigger point
          if (distanceFromTrigger < closestDistance) {
            closestDistance = distanceFromTrigger;
            newActiveSection = index;
          }

          console.log(`Section ${index}: top=${Math.round(rect.top)}, center=${Math.round(sectionCenter)}, distance=${Math.round(distanceFromTrigger)}`);
        }
      });

      console.log(`Active section: ${newActiveSection}, trigger at: ${triggerPoint}`);
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Simple smooth scroll to section function
  const scrollToSection = (index: number) => {
    const targetSection = sectionRefs[index].current;
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };
  let compassStyle: React.CSSProperties = {
    // Initial State: default positioning
    position: 'absolute',
    top: '0',
  };

  if (stickyState === 'sticky') {
    compassStyle = {
      // Sticky State: fixed to the viewport
      position: 'fixed',
      top: '16vh',
    };
  } else if (stickyState === 'final') {
    compassStyle = {
      // Final State: locked to the bottom of the parent "track"
      position: 'absolute',
      bottom: '-75vh',
    };
  }

  return (
    <div className="perk-container">
      <div className="perk-left" ref={targetRef}>
        <motion.div className="perk-left-container " style={{
          ...compassStyle, // Apply the styles from our logic

        }}>
          <div className="perk-left-toc">
            <div
              className={`perk-left-item ${activeSection === 0 ? 'active' : ''}`}
              onClick={() => scrollToSection(0)}
            >
              <div className="perk-left-toc-item-title">
                Founding Member Badge
              </div>
              <div className="perk-left-toc-item-arrow">
                <FiArrowRight size={24} strokeWidth={1} />
              </div>
            </div>
            <div
              className={`perk-left-item ${activeSection === 1 ? 'active' : ''}`}
              onClick={() => scrollToSection(1)}
            >
              <div className="perk-left-toc-item-title">Premium Access</div>
              <div className="perk-left-toc-item-arrow">
                <FiArrowRight size={24} strokeWidth={1} />
              </div>
            </div>
            <div
              className={`perk-left-item ${activeSection === 2 ? 'active' : ''}`}
              onClick={() => scrollToSection(2)}
            >
              <div className="perk-left-toc-item-title">Lifetime Status</div>
              <div className="perk-left-toc-item-arrow">
                <FiArrowRight size={24} strokeWidth={1} />
              </div>
            </div>
            <div
              className={`perk-left-item ${activeSection === 3 ? 'active' : ''}`}
              onClick={() => scrollToSection(3)}
            >
              <div className="perk-left-toc-item-title">Early Access</div>
              <div className="perk-left-toc-item-arrow">
                <FiArrowRight size={24} strokeWidth={1} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="perk-right">
        <div className="perk-right-container">
          <div className="perk-right-item" ref={sectionRefs[0]}>
            <div className="perk-right-top">
              <div className="perk-right-decorative"></div>
              <div className="perk-right-top-title">Founding Member Perks</div>
            </div>
            <div className="perk-right-title">Founding Member Badge</div>
            <div className="perk-right-description">
              Claim the permanent 'Founding Member' badge, a mark of distinction
              no one else can ever earn. Solidify your legacy as a pioneer in
              India's new legal economy.
            </div>
            <div className="perk-right-cta">
              <button className="perk-right-cta-button" onClick={onJoinWaitlist}>
                Become a Founding Member
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>
          <div className="perk-right-item" ref={sectionRefs[1]}>
            <div className="perk-right-top">
              <div className="perk-right-decorative"></div>
              <div className="perk-right-top-title">Founding Member Perks</div>
            </div>
            <div className="perk-right-title">
              Premium Access & Exclusive Events
            </div>
            <div className="perk-right-description">
              Enjoy 3 months of unrestricted premium access to build your
              digital brand, on us. Plus, get an exclusive seat at closed-door
              strategy events with legal industry titans.
            </div>
            <div className="perk-right-cta">
              <button className="perk-right-cta-button" onClick={onJoinWaitlist}>
                Become a Founding Member
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>
          <div className="perk-right-item" ref={sectionRefs[2]}>
            <div className="perk-right-top">
              <div className="perk-right-decorative"></div>
              <div className="perk-right-top-title">Founding Member Perks</div>
            </div>
            <div className="perk-right-title">
              Lifetime Status & Inner Circle
            </div>
            <div className="perk-right-description">
              Become a Founding Member for a lifetime of status and a perpetual
              head start. Secure your place in the inner circle before the door
              closes forever.
            </div>
            <div className="perk-right-cta">
              <button className="perk-right-cta-button" onClick={onJoinWaitlist}>
                Become a Founding Member
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>
          <div className="perk-right-item" ref={sectionRefs[3]}>
            <div className="perk-right-top">
              <div className="perk-right-decorative"></div>
              <div className="perk-right-top-title">Founding Member Perks</div>
            </div>
            <div className="perk-right-title">
              Early Access & Homepage Feature
            </div>
            <div className="perk-right-description">
              Get every groundbreaking feature before the public and be featured
              on our homepage. This is your unignorable advantage to build
              instant authority and dominate the digital space.
            </div>
            <div className="perk-right-cta">
              <button className="perk-right-cta-button" onClick={onJoinWaitlist}>
                Become a Founding Member
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perks;
