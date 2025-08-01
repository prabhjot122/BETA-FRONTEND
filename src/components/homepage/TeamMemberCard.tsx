import React from 'react';
import { motion } from 'framer-motion';
import './TeamMemberCard.css';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  offsetY: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageUrl, offsetY }) => {
  // Calculate offset based on screen size
  const getOffset = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 767) return 0; // No offset on mobile for 2-row layout
      if (width <= 992) return offsetY ? 40 : 0;
      if (width <= 1200) return offsetY ? 50 : 0;
      return offsetY ? 60 : 0;
    }
    return offsetY ? 60 : 0;
  };

  const offset = getOffset();
  console.log(`${name}: offsetY=${offsetY}, calculated offset=${offset}`);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: offset,
      scale: 1,
      transition: { type: 'tween', duration: 0.8, ease: "easeOut" }
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