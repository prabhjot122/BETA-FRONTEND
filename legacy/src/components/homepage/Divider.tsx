// @/Users/pranshubansal/Documents/Lawvriksh/BETA-FRONTEND/src/components/homepage/Divider.tsx
import { useState, useEffect } from 'react';
import { dividerTexts } from './homepage.data';
import '../Homepage.css'; // We'll keep the original CSS for now

/**
 * A self-contained, animated divider strip.
 * It manages its own state for the rotating text, making it reusable and independent.
 */
const Divider = () => {
  const [currentDividerTextIndex, setCurrentDividerTextIndex] = useState(0);

  // Divider text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDividerTextIndex((prevIndex) =>
        (prevIndex + 1) % dividerTexts.length
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage__divider-strip">
      <div className="homepage__divider-content">
        <div className="homepage__divider-text">
          {dividerTexts[currentDividerTextIndex]}
        </div>
      </div>
      <div className="homepage__divider-pattern">
        <div className="homepage__divider-dot"></div>
        <div className="homepage__divider-dot"></div>
        <div className="homepage__divider-dot"></div>
        <div className="homepage__divider-dot"></div>
        <div className="homepage__divider-dot"></div>
      </div>
    </div>
  );
};

export default Divider;
