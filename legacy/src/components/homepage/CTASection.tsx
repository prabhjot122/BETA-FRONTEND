import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CTASection.css';

interface CTASectionProps {
  introText: string;
  mainText: string;
  linkText: string;
  
  backgroundImage?: string;
  className?: string;
  quoteSet?: 'first' | 'second';
  onJoinWaitlist: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  introText,
  linkText,
  
  backgroundImage = "/ctabg.png",
  className = "",
  quoteSet = 'first',
  onJoinWaitlist,
}) => {
  // Define quote sets - each CTA will use 2 quotes
  const allQuotes = {
    first: [
      "Soon, a verified profile on this platform will be the new standard for digital credibility in law. Get yours first.",
      "Why limit your audience? Beta users will be the first to establish a pan-India presence."
    ],
    second: [
      "The first wave of India's legal creators is about to launch. Will you be on the inside, or will you be reading their work?",
      "Your peers are about to start producing high-value content in minutes, not days. Don't get left behind."
    ]
  };

  // Get the quotes for this CTA instance
  const quotes = allQuotes[quoteSet];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Auto-rotate quotes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [quotes.length]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const leftVariants = {
    hidden: {
      opacity: 0,
      x: -80,
      y: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const dividerVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: 80,
      y: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const quoteVariants = {
    enter: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.section
      className={`cta-section ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="cta-left"
        variants={leftVariants}
      >
        <motion.p
          className="cta-intro"
          variants={textVariants}
        >
          {introText}
        </motion.p>
        <motion.a
          
          className="cta-link"
          variants={textVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onJoinWaitlist}

          
        >
          {linkText}
        </motion.a>
      </motion.div>

      <motion.div
        className="cta-divider"
        variants={dividerVariants}
        style={{ transformOrigin: 'center top' }}
      />

      <motion.div
        className="cta-right"
        variants={rightVariants}
      >
        <div className="cta-quote-container">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuoteIndex}
              className="cta-main-text"
              variants={quoteVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {quotes[currentQuoteIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CTASection;