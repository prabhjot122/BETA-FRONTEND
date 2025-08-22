import { useEffect, useRef } from 'react';
import gsap from "gsap";

import { foundingMemberPerks } from './homepage.data';
import ScrollProgressIndicator from '../ScrollProgressIndicator';
import '../Homepage.css';

interface FoundingPerksSectionProps {
  activeFoundingPerkIndex: number;
}

const FoundingPerksSection = ({ activeFoundingPerkIndex }: FoundingPerksSectionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef<number>(0);

  useEffect(() => {
    if (!titleRef.current) return;
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      scrollTrigger: {
        trigger: ".founding-member-perks-section",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    const perkItems = Array.from(contentRef.current.children) as HTMLElement[];
    const currentIndex = activeFoundingPerkIndex;
    const previousIndex = prevIndexRef.current;

    if (previousIndex !== currentIndex) {
      // Hide all items first
      perkItems.forEach(item => {
        gsap.set(item, { display: 'none', opacity: 0 });
      });

      // Show only the current item
      const currentItem = perkItems[currentIndex];
      if (currentItem) {
        gsap.set(currentItem, { display: 'block', opacity: 1 });
      }
    }

    prevIndexRef.current = currentIndex;
  }, [activeFoundingPerkIndex]);

  useEffect(() => {
    if (!contentRef.current) return;
    const perkItems = Array.from(contentRef.current.children) as HTMLElement[];
    
    // Hide all items initially
    perkItems.forEach((item, index) => {
      gsap.set(item, { 
        display: index === 0 ? 'block' : 'none', 
        opacity: index === 0 ? 1 : 0 
      });
    });
  }, []);

  return (
    <div id="founding-member-perks" className="founding-member-perks-section">
      <div className="founding-member-perks__container">
        <div className="founding-member-perks__title" ref={titleRef}>Founding Member Perks</div>
        <div 
          className="founding-member-perks__content" 
          ref={contentRef} 
          style={{ 
            position: 'relative', 
            minHeight: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          {foundingMemberPerks.map((perk, index) => (
            <div
              key={index}
              className="founding-member-perks__content-item"
              style={{ 
                position: 'absolute', 
                width: '100%', 
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
              }}
            >
              <div className="founding-member-perks__perk-title">{perk.title}</div>
              <div className="founding-member-perks__perk-description">{perk.description}</div>
            </div>
          ))}
        </div>
        <ScrollProgressIndicator
          activeIndex={activeFoundingPerkIndex}
          totalSections={4}
          sectionTitles={["Founding Member Badge", "Early Access & Homepage Feature", "Premium Access & Exclusive Events", "Lifetime Status & Inner Circle"]}
          visible={true}
        />
      </div>
    </div>
  );
};

export default FoundingPerksSection;