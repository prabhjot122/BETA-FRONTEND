// @/Users/pranshubansal/Documents/Lawvriksh/BETA-FRONTEND/src/components/homepage/HeroSection.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from "../Button";
import InteractiveDialog from './InteractiveDialog';
import { heroQuotes, features } from './homepage.data';
import '../Homepage.css';

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const wordVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearHideTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleFeatureHover = (index: number) => {
    clearHideTimeout();
    setHoveredFeature(index);
  };

  const startHideTimeout = () => {
    clearHideTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredFeature(null);
    }, 200);
  };

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % heroQuotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <motion.div
      id="home"
      className={`homepage ${hoveredFeature !== null ? 'feature-hovered' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="homepage__hero5" variants={itemVariants}>
        <div className="homepage__main-wrapper">
          <motion.div className="homepage__hero-title" variants={containerVariants}>
            <motion.span variants={wordVariants} className="homepage__hero-word">Be</motion.span>{" "}
            <motion.span variants={wordVariants} className="homepage__hero-word">a</motion.span>{" "}
            <motion.span variants={wordVariants} className="homepage__hero-word">legal</motion.span> <br />
            <motion.span variants={wordVariants} className="homepage__hero-word">entrepreneur</motion.span>
          </motion.div>
          <motion.div
            className="homepage__features-section"
            onMouseLeave={startHideTimeout}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="homepage__feature-item"
                onMouseEnter={() => handleFeatureHover(index)}
                variants={itemVariants}
              >
                <img src={feature.icon} alt="" className={feature.iconClass} />
                <div className={feature.contentClass || "homepage__feature-content"}>
                  <div className="homepage__feature-title">{feature.title}</div>
                  <div className="homepage__feature-description">{feature.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="homepage__hero" variants={itemVariants}>
        <div className="homepage__main-section">
          <motion.div className="homepage__main-title" variants={itemVariants}>
            Creator platform for modern<br />--- legal professionals
          </motion.div>
          <motion.div className="homepage__main-content" variants={itemVariants}>
            <div className="homepage__main-quote">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuoteIndex}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.5 }}
                >
                  &ldquo;{heroQuotes[currentQuoteIndex]}&rdquo;
                </motion.div>
              </AnimatePresence>
            </div>
            <Button size="large" onClick={onJoinWaitlist} showFomoDialog={true}>Join Waitlist</Button>
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {hoveredFeature !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <InteractiveDialog
              hoveredFeature={hoveredFeature}
              onDialogEnter={clearHideTimeout}
              onDialogLeave={startHideTimeout}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroSection;