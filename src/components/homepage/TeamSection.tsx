import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import TeamMemberCard from './TeamMemberCard';
import './TeamSection.css';

// Team member data - 4 members with alternating Y offsets
const teamMembers = [
  {
    name: 'Sahil Saurav',
    role: 'CEO',
    imageUrl: '/person1.webp',
    offsetY: false, // Top aligned (1st)
  },
  {
    name: 'Prabhjot Jaswal',
    role: 'CTO',
    imageUrl: '/person2.webp',
    offsetY: true, // Bottom aligned (2nd)
  },
  {
    name: 'Deepak Kumar',
    role: 'CMO',
    imageUrl: '/person3.webp',
    offsetY: false, // Top aligned (3rd)
  },
  {
    name: 'Udit Kumar',
    role: 'Legal Advisor',
    imageUrl: '/person4.webp',
    offsetY: true, // Bottom aligned (4th)
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
          className="team-section__cards"
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
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamSection;