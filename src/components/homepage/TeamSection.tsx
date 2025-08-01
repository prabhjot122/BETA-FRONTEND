import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import TeamMemberCard from './TeamMemberCard';
import './TeamSection.css';

// Team member data - 4 members with responsive offset pattern
const teamMembers = [
  {
    name: 'ANNA DEAN',
    role: 'React Engineer',
    imageUrl: '/person1.png',
    offsetY: false, // Top aligned
  },
  {
    name: 'CHRIS MEZY',
    role: 'Data Engineer',
    imageUrl: '/person2.png',
    offsetY: true, // Bottom aligned
  },
  {
    name: 'LESLIE SCHNIDER',
    role: 'Backend Developer',
    imageUrl: '/person3.png',
    offsetY: false, // Top aligned
  },
  {
    name: 'JIM BRICKTON',
    role: 'AI Specialist',
    imageUrl: '/person4.png',
    offsetY: true, // Bottom aligned
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  console.log('TeamSection rendering with', teamMembers.length, 'members');

  useGSAP(() => {
    if (!titleRef.current) return;

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
  }, { scope: sectionRef });

  return (
    <div id="team" className="team-section" ref={sectionRef}>
      <div className="team-section__container">
        <div className="team-section__title" ref={titleRef}>
          Meet Our Team
        </div>
        <motion.div
          className="team-section__cards team-section__cards--responsive"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              offsetY={member.offsetY}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamSection;