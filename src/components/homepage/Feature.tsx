import "./Feature.css";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
function Feature() {
  const targetRef = useRef(null);
  const [stickyState, setStickyState] = useState('initial');

  // This scroll progress determines the state
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 50vh", "end 50vh"]
  });
  const isMobile = useMediaQuery('(max-width: 1024px)');

  // This scroll progress is just for the rotation
  const { scrollYProgress: rotateProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  const rotate = useTransform(rotateProgress, [0, 1], [0, 360]);

  // 2. Update the state based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.01) { // A small buffer for the start
      setStickyState('initial');
    } else if (latest >= 1) {
      setStickyState('final');
    } else {
      setStickyState('sticky');
    }
  });

  // 3. Define styles based on the current state
  let compassStyle: React.CSSProperties = { // Default is the 'initial' state
    position: 'absolute',
    top: '-65px',
    left: '-45px',
    transform: 'none',

  };
  if (isMobile) {
    compassStyle = {
      ...compassStyle, // Keep all base styles
      top: '-30px',    // Override the 'top' property for mobile
      left: '-20px',   // Override the 'left' property for mobile
    };
    if (stickyState === 'sticky') {
      compassStyle = {
        position: 'fixed',
        top: '50vh',
        left: '10px',

      };
    } else if (stickyState === 'final') {
      compassStyle = {
        position: 'absolute',
        bottom: '0', // Park it 40px from the bottom of its container
        left: '-20px',
        transform: 'none',
      };
    }
  } else {
    if (stickyState === 'sticky') {
      compassStyle = {
        position: 'fixed',
        top: '50vh',
        left: 'calc(50% - 46px)',
        transform: 'translateY(-50%)',
      };
    } else if (stickyState === 'final') {
      compassStyle = {
        position: 'absolute',
        bottom: '0', // Park it 40px from the bottom of its container
        left: '-45px',
        transform: 'none',
      };
    }

  }


  // 2. useTransform maps the scroll progress to a rotation value.
  // As scrollYProgress goes from 0 to 1, `rotate` will go from 0 to 360.
  return (
    <div className="feature-container">
      <div className="feature-text-container">
        <h1>Guiding you Forward</h1>
        <p>
          Take a glimpse of what we have <br />
          for you
        </p>
      </div>
      <div className="feature-content" ref={targetRef}>
        <div className="timeline-container">
          <div className="timeline"></div>
          <motion.div
            className="compass"
            style={{
              ...compassStyle, // Apply the styles from our logic
              rotate,
            }}
          ></motion.div>
        </div>

        <div className="feature-content-item">
          <div className="feature-content-item-left1"></div>
          <div className="feature-content-item-right">
            <h2>
              The 60% Solution: <br />
              Your AI Co-Pilot
            </h2>
            <ul>
              <li>
                You spend up to 60% of your time on research and content
                creation.
              </li>
              <li>
                Our legal-specific AI, trained on Indian compliance and
                frameworks, automates your drafting process
              </li>
              <li>
                It's more than a tool; it's an integrated engine for writing,
                research, and SEO optimization that frees you to focus on what
                truly matters—your expertise.
              </li>
            </ul>
          </div>
        </div>
        <div className="feature-content-item">
          <div className="feature-content-item-right">
            <h2>
              Your Digital Gavel: <br />
              The Automated Portfolio
            </h2>
            <ul>
              <li>
                While 73% of legal professionals use digital tools, they lack a
                single, comprehensive system to showcase their expertise.
              </li>
              <li>
                Our Automated Portfolio Builder creates a credible,
                SEO-optimized digital presence for you.
              </li>
              <li>
                Combined with our Professional Verification System, you don't
                just get found—you get trusted.
              </li>
            </ul>
          </div>
          <div className="feature-content-item-left2"></div>
        </div>
        <div className="feature-content-item">
          <div className="feature-content-item-left3"></div>
          <div className="feature-content-item-right">
            <h2>
              An All-India Reach: <br />
              The Multilingual Engine
            </h2>
            <ul>
              <li>
                Your insights are too valuable to be confined to one language.
              </li>
              <li>
                Our platform's multi-language support allows you to create and
                disseminate your work across India's diverse linguistic
                landscape.
              </li>
              <li>
                Reach a wider audience, connect with more clients, and build a
                truly national reputation.
              </li>
            </ul>
          </div>
        </div>
        <div className="feature-content-item">
          <div className="feature-content-item-right">
            <h2>
              Beyond the Billable Hour:
              <br />
              The Monetization Hub
            </h2>
            <ul>
              <li>
                The $191.6 billion creator economy has largely excluded legal
                professionals. We're correcting this.
              </li>
              <li>
                Our platform provides the first direct path from legal expertise
                to sustainable revenue.
              </li>
              <li>
                With a credit-based economy and tools for premium subscriptions,
                you can finally build income streams beyond the traditional
                billable hour.
              </li>
            </ul>
          </div>
          <div className="feature-content-item-left4"></div>
        </div>
      </div>
    </div>
  );
}

export default Feature;