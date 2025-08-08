import React from "react";
import "./Perks.css";
import { useRef, useState } from "react";
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
            <div className="perk-left-item">
              <div className="perk-left-toc-item-title">
                Founding Member Badge
              </div>
              <div className="perk-left-toc-item-arrow">
                <FiArrowRight size={24} strokeWidth={1}/>
              </div>
            </div>
            <div className="perk-left-item">
              <div className="perk-left-toc-item-title">Premium Access</div>
              <div className="perk-left-toc-item-arrow">
                <FiArrowRight size={24} strokeWidth={1}/>
              </div>
            </div>
            <div className="perk-left-item">
              <div className="perk-left-toc-item-title">Lifetime Status</div>
              <div className="perk-left-toc-item-arrow">
               <FiArrowRight size={24} strokeWidth={1}/>
              </div>
            </div>
            <div className="perk-left-item">
              <div className="perk-left-toc-item-title">Early Access</div>
              <div className="perk-left-toc-item-arrow">
               <FiArrowRight size={24} strokeWidth={1}/>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="perk-right">
        <div className="perk-right-container">
          <div className="perk-right-item">
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
              <button className="perk-right-cta-button"  onClick={onJoinWaitlist}>
                Become a Founding Member
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>
          <div className="perk-right-item">
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
              <button className="perk-right-cta-button"  onClick={onJoinWaitlist}>
                Become a Founding Member
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>
          <div className="perk-right-item">
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
              <button className="perk-right-cta-button"  onClick={onJoinWaitlist}>
                Become a Founding Member
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>
          <div className="perk-right-item">
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
              <button className="perk-right-cta-button"  onClick={onJoinWaitlist}>
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
