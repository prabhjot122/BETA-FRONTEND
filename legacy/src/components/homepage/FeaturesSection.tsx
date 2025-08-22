import { useRef, useEffect } from 'react';
import { featureContents } from './homepage.data';
import ScrollProgressIndicator from '../ScrollProgressIndicator';
import '../Homepage.css';
import { gsap } from 'gsap';

interface FeaturesSectionProps {
  activeFeatureIndex: number;
}

const FeaturesSection = ({ activeFeatureIndex }: FeaturesSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureContentRef = useRef<HTMLDivElement>(null);
  const featureImageRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef<number>(0);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!featureContentRef.current || !featureImageRef.current) return;

    const featureItems = Array.from(featureContentRef.current.children) as HTMLElement[];
    const currentIndex = activeFeatureIndex;
    const previousIndex = prevIndexRef.current;

    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Initial setup on first render
    if (previousIndex === 0 && currentIndex === 0 && !featureImageRef.current.style.backgroundImage) {
      gsap.set(featureItems, { opacity: 0, display: 'none' });
      if (featureItems[currentIndex]) {
        gsap.set(featureItems[currentIndex], { opacity: 1, display: 'block' });
        featureImageRef.current.style.backgroundImage = `url('/feature${currentIndex + 1}.webp')`;
        gsap.set(featureImageRef.current, { opacity: 1 });
      }
      prevIndexRef.current = currentIndex;
      return;
    }

    if (previousIndex !== currentIndex) {
      const oldItem = featureItems[previousIndex];
      const newItem = featureItems[currentIndex];

      gsap.set(oldItem, { display: 'block' });
      gsap.set(newItem, { display: 'block', opacity: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(oldItem, { display: 'none' });
          animationRef.current = null;
        },
      });
      animationRef.current = tl;

      // 1. Fade out the old text and the image container together
      tl.to([oldItem, featureImageRef.current], {
        duration: 0.3,
        opacity: 0,
        ease: 'power2.inOut',
      });

      // 2. While invisible, update the background image to the new one
      tl.call(() => {
        if (featureImageRef.current) {
          const newImageUrl = `/feature${currentIndex + 1}.webp`;
          featureImageRef.current.style.backgroundImage = `url('${newImageUrl}')`;
        }
      });

      // 3. Fade in the new text and the updated image container together
      tl.to([newItem, featureImageRef.current], {
        duration: 0.3,
        opacity: 1,
        ease: 'power2.inOut',
      });
    }

    prevIndexRef.current = currentIndex;
  }, [activeFeatureIndex]);

  return (
    <div id="features" className="homepage2" ref={sectionRef}>
      <ScrollProgressIndicator
        activeIndex={activeFeatureIndex}
        totalSections={4}
        sectionTitles={["AI Co-Pilot", "Automated Portfolio", "Multilingual Engine", "Monetization Hub"]}
        visible={true}
      />
      <div className="homepage__feature-card">
        <div className="homepage__feature-image" ref={featureImageRef}></div>
        <div className="homepage__content-engine-content" ref={featureContentRef}>
          {featureContents.map((feature, index) => (
            <div
              key={index}
              className="homepage__feature-content-item"
              style={{
                position: 'absolute',
                width: '100%',
                display: 'none', // GSAP will manage the display property
              }}
            >
              <div className="homepage__content-engine-title">
                <div className="homepage__content-engine-title-text">
                  {feature.title.split(':')[0]}:<br />{feature.title.split(':')[1]}
                </div>
              </div>
              <div className="homepage__content-engine-description">
                <ul className="homepage__feature-bullets">
                  {feature.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;