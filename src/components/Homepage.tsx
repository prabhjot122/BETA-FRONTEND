import { useState, useEffect, useRef, lazy, Suspense, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

import Navbar from "./Navbar";
import HeroSection from "./homepage/HeroSection";
import LoadingSpinner from "./LoadingSpinner";
import { ctaContent } from "./homepage/homepage.data";
import SEO from "./SEO";
import { seoData } from "../utils/seoData";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Lazy-loaded components
const WaitlistPopup = lazy(() => import("./WaitlistPopup"));
const Footer = lazy(() => import("./Footer"));
const HomepageMobile = lazy(() => import("./HomepageMobile"));
const CTASection = lazy(() => import("./CTASection"));
const MarketGrowth = lazy(() => import("./MarketGrowth"));
const WhyUs = lazy(() => import("./WhyUs"));
const Divider = lazy(() => import("./homepage/Divider"));
const FeaturesSection = lazy(() => import("./homepage/FeaturesSection"));
const TestimonialsSection = lazy(() => import("./homepage/TestimonialsSection"));
const FoundingPerksSection = lazy(() => import("./homepage/FoundingPerksSection"));
const TeamSection = lazy(() => import("./homepage/TeamSection"));

const ContentLoader = ({ onLoaded }: { onLoaded: () => void }) => {
  useEffect(() => {
    onLoaded();
  }, [onLoaded]);
  return null;
};

export default function Homepage() {
  const [isWaitlistPopupOpen, setIsWaitlistPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activeFoundingPerkIndex, setActiveFoundingPerkIndex] = useState(0);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const mainContainer = useRef<HTMLDivElement>(null);

  const handleContentLoaded = useCallback(() => {
    if (!isContentLoaded) {
      setIsContentLoaded(true);
    }
  }, [isContentLoaded]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    const handleResize = () => {
      checkMobile();
      ScrollTrigger.refresh(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    if (isMobile || !mainContainer.current || !isContentLoaded) return;

    const triggers: ScrollTrigger[] = [];

    const sectionsToPin = [
      { id: '#home', end: "+=100%" },
      { id: '#features', end: "+=300%" },
      { id: '#market-growth', end: "+=100%" },
      { id: '.homepage__cta-section', end: "+=100%" },
      { id: '#why-us', end: "+=100%" },
      { id: '#team', end: "+=100%" },
      { id: '#testimonials', end: "+=100%" },
      { id: '#founding-member-perks', end: "+=300%" }
    ];

    sectionsToPin.forEach(sectionInfo => {
      const sectionElements = mainContainer.current!.querySelectorAll(sectionInfo.id);
      sectionElements.forEach(sectionElement => {
        const trigger = ScrollTrigger.create({
          trigger: sectionElement as gsap.DOMTarget,
          start: "top top",
          pin: true,
          pinSpacing: true,
          end: sectionInfo.end,
          scrub: sectionInfo.id === '#features' || sectionInfo.id === '#founding-member-perks' ? 1 : false,
          onUpdate: (self) => {
            if (sectionInfo.id === '#features') {
              const progress = self.progress;
              let targetFeature = 0;
              if (progress >= 0.75) targetFeature = 3;
              else if (progress >= 0.5) targetFeature = 2;
              else if (progress >= 0.25) targetFeature = 1;
              setActiveFeatureIndex(targetFeature);
            } else if (sectionInfo.id === '#founding-member-perks') {
              const progress = self.progress;
              let targetPerk = 0;
              if (progress >= 0.75) targetPerk = 3;
              else if (progress >= 0.5) targetPerk = 2;
              else if (progress >= 0.25) targetPerk = 1;
              setActiveFoundingPerkIndex(targetPerk);
            }
          },
        });
        triggers.push(trigger);
      });
    });

    return () => {
      triggers.forEach(t => t.kill());
    };

  }, { dependencies: [isMobile, isContentLoaded], scope: mainContainer });

  const handleJoinWaitlist = () => setIsWaitlistPopupOpen(true);
  const handleCloseWaitlistPopup = () => setIsWaitlistPopupOpen(false);

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      if (!(e.target instanceof Element)) return;
      
      const anchor = e.target.closest('a');
      const href = anchor?.getAttribute('href');

      if (href && href.startsWith('#')) {
        e.preventDefault();
        gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: href, autoKill: true, offsetY: 0 },
          ease: "power2.inOut"
        });
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  if (isMobile) {
    return (
      <Suspense fallback={<LoadingSpinner fullPage message="Loading mobile experience..." />}>
        <HomepageMobile onJoinWaitlist={handleJoinWaitlist} />
      </Suspense>
    );
  }

  return (
    <div ref={mainContainer}>
      <SEO
        title={seoData.homepage.title}
        description={seoData.homepage.description}
        keywords={seoData.homepage.keywords}
        url={seoData.homepage.url}
        structuredData={seoData.homepage.structuredData}
      />
      <Navbar onJoinWaitlist={handleJoinWaitlist} />
      
      <HeroSection onJoinWaitlist={handleJoinWaitlist} />

      <Suspense fallback={<LoadingSpinner fullPage message="Loading content..." />}>
        <ContentLoader onLoaded={handleContentLoaded} />
        <Divider />
        <FeaturesSection activeFeatureIndex={activeFeatureIndex} />
        <Divider />
        <div id="market-growth" className="homepage__market-growth-section">
          <MarketGrowth />
        </div>
        <CTASection
          contentItems={ctaContent.first}
          onButtonClick={handleJoinWaitlist}
        />
        <Divider />
        <div id="why-us" className="homepage3">
          <WhyUs />
        </div>
        <Divider />
        <TeamSection />
        <Divider />
        <TestimonialsSection />
        <Divider />
        <FoundingPerksSection activeFoundingPerkIndex={activeFoundingPerkIndex} />
        <CTASection
          contentItems={ctaContent.second}
          onButtonClick={handleJoinWaitlist}
        />
        <Divider />
        <Footer />
        <WaitlistPopup
          isOpen={isWaitlistPopupOpen}
          onClose={handleCloseWaitlistPopup}
        />
      </Suspense>
    </div>
  );
}
