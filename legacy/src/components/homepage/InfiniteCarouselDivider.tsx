import React from 'react';
import { motion } from 'framer-motion';
import './InfiniteCarouselDivider.css';

const InfiniteCarouselDivider: React.FC = () => {
  const texts = [
    "For the time you lose to non-billable work.",
    "For your rightful place in the creator economy."
  ];

  // Create multiple copies for seamless infinite scroll
  const repeatedTexts = Array(8).fill(texts).flat();

  return (
    <motion.section 
      className="infinite-carousel-divider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="carousel-container">
        <div className="carousel-track">
          {repeatedTexts.map((text, index) => (
            <div key={index} className="carousel-text">
              → {text} ←
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default InfiniteCarouselDivider;