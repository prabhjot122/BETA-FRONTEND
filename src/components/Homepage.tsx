import {
  useState,
  useEffect,
  useRef,
  lazy,
  Suspense,
  useCallback,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from "lenis";
import Feature from "../components/homepage/Feature";
import MeetOurTeam from "./homepage/MeetOurTeam";
import Navbar from "./Navbar";
import HeroSection from "./homepage/HeroSection";
import LoadingSpinner from "./LoadingSpinner";

import Perks from "./homepage/Perks";
import WhyLawVrikshSection from "./homepage/WhyLawVrikshSection";
// Import the PerksMobile component
import PerksMobile from "./homepage/PerksMobile";
import SEO from "./SEO";
import InfiniteCarouselDivider from "./homepage/InfiniteCarouselDivider";
import CTASection from "./homepage/CTASection";
import { seoData } from "../utils/seoData";
import TestimonialsSection from "./homepage/TestimonialsSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Lazy-loaded components
const WaitlistPopup = lazy(() => import("./WaitlistPopup"));
const Footer = lazy(() => import("./Footer"));

const MarketGrowth = lazy(() => import("./MarketGrowth"));
// Note: WhyUs was pointing to WhyLawVrikshSection, removed the duplicate import.

const ContentLoader = ({ onLoaded }: { onLoaded: () => void }) => {
  useEffect(() => {
    onLoaded();
  }, [onLoaded]);
  return null;
};

export default function Homepage() {
  const [isWaitlistPopupOpen, setIsWaitlistPopupOpen] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  // --- START: Added for responsive rendering ---
  const [isMobile, setIsMobile] = useState(false);
  // --- END: Added for responsive rendering ---
  const mainContainer = useRef<HTMLDivElement>(null);

  const handleContentLoaded = useCallback(() => {
    if (!isContentLoaded) {
      setIsContentLoaded(true);
    }
  }, [isContentLoaded]);

  const handleJoinWaitlist = () => setIsWaitlistPopupOpen(true);
  const handleCloseWaitlistPopup = () => setIsWaitlistPopupOpen(false);

  // --- START: Effect to check screen size ---
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []); // Empty dependency array ensures this runs only on mount and unmount
  // --- END: Effect to check screen size ---

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={mainContainer}>
      <SEO
        title={seoData.homepage.title}
        description={seoData.homepage.description}
        keywords={seoData.homepage.keywords}
        url={seoData.homepage.url}
        structuredData={seoData.homepage.structuredData}
      />
      <Navbar  />

      <HeroSection onJoinWaitlist={handleJoinWaitlist} />
      <div id="features">
        <Feature />
      </div>

      <Suspense
        fallback={<LoadingSpinner fullPage message="Loading content..." />}
      >
        <ContentLoader onLoaded={handleContentLoaded} />

        <MeetOurTeam />

        <CTASection
          introText="Join us Today because The future of law isn't built in isolation; it's built in a community of leaders.
 "
          mainText="Get started with Law Vriksh today."
          linkText="become a founding member"
          
          backgroundImage="/public/ctabg.png"
          quoteSet="second"
          className="homepage-cta"
          onJoinWaitlist={handleJoinWaitlist} 
        />
        <WhyLawVrikshSection onJoinWaitlist={handleJoinWaitlist} />
        <InfiniteCarouselDivider />
        <MarketGrowth />
        <InfiniteCarouselDivider />
        <div id="testimonials">
        <TestimonialsSection onJoinWaitlist={handleJoinWaitlist} />
        </div>
        <div id="perks">
          {/* --- START: Conditional rendering for Perks component --- */}
          {isMobile ? <PerksMobile onJoinWaitlist={handleJoinWaitlist} /> : <Perks onJoinWaitlist={handleJoinWaitlist} />}
        </div>
        {/* --- END: Conditional rendering for Perks component --- */}
        <CTASection
          introText="Join us Today because The future of law isn't built in isolation; it's built in a community of leaders.
 "
          mainText="Get started with Law Vriksh today."
          linkText="become a founding member"
          
          backgroundImage="/public/ctabg.png"
          quoteSet="second"
          className="homepage-cta"
          onJoinWaitlist={handleJoinWaitlist} 
        />
        <Footer />
        <WaitlistPopup
          isOpen={isWaitlistPopupOpen}
          onClose={handleCloseWaitlistPopup}
        />
      </Suspense>
    </div>
  );
}
