import React from 'react';
import { motion } from 'framer-motion';
import './TeamMemberCard.css';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  offsetY: boolean;
  index?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageUrl, offsetY, index = 0 }) => {
  // Calculate offset based on screen size and responsive grid layout
  const getOffset = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;

      // Desktop (4 in a row) - use enhanced offsetY logic with more variation
      if (width >= 992) {
        if (width >= 1200) {
          // Large desktop - more dramatic offsets
          return offsetY ? 80 : 0;
        } else {
          // Medium desktop - moderate offsets
          return offsetY ? 65 : 0;
        }
      }

      // Tablet and mobile (2 in a row) - 7x2 grid handles natural positioning
      // Return 0 as the grid layout creates the offset naturally
      return 0;
    }
    return offsetY ? 80 : 0;
  };

  const offset = getOffset();
  console.log(`${name} (index: ${index}): offsetY=${offsetY}, calculated offset=${offset}`);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: offset,
      scale: 1,
      transition: { type: 'tween' as const, duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <motion.div
      className="team-member-card"
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 16px 48px rgba(150, 111, 51, 0.3)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="team-member-details">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      <div className="team-member-image">
        <img
          src={imageUrl}
          alt={name}
          onError={(e) => {
            console.log(`Failed to load image: ${imageUrl}`);
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => {
            console.log(`Successfully loaded image: ${imageUrl}`);
          }}
        />
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;