// @/Users/pranshubansal/Documents/Lawvriksh/BETA-FRONTEND/src/components/homepage/PinWrapper.tsx
import { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PinWrapperProps {
  children: React.ReactNode;
  duration?: string | number;
}

/**
 * A stable wrapper component that pins its children for a specified scroll duration.
 */
const PinWrapper = ({ children, duration = "100%" }: PinWrapperProps) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${duration}`,
        pin: true,
        scrub: false,
        invalidateOnRefresh: true, 
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, [duration]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default PinWrapper;
