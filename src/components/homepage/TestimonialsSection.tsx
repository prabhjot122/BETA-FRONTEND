import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './TestimonialsSection.css';

interface TestimonialData {
  id: number;
  name: string;
  credentials: string;
  image: string;
  testimonials: string[];
 

}
interface TestimonialProps{
 onJoinWaitlist: () => void;
}

// Define props for the new TestimonialCard component
interface TestimonialCardProps {
  isMobile: boolean;
  handleCardClick: () => void;
  currentPerson: TestimonialData;
  currentTestimonial: string;
  currentTestimonialIndex: number;
  currentPersonIndex: number;
  cardVariants: any;
  stackVariants: any;
 
}

// Define the TestimonialCard component outside of TestimonialsSection
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  isMobile,
  handleCardClick,
  currentPerson,
  currentTestimonial,
  currentTestimonialIndex,
  currentPersonIndex,
  cardVariants,
  stackVariants,
}) => (
  <div className="testimonials-stack" onClick={handleCardClick}>
    {/* Background stack cards */}
    <motion.div
      className="testimonial-card stack-card stack-2"
      variants={stackVariants}
      animate="stack2"
    />
    <motion.div
      className="testimonial-card stack-card stack-1"
      variants={stackVariants}
      animate="stack1"
    />

    {/* Main animated card */}
    <AnimatePresence mode="wait" custom={1}>
      <motion.div
        key={currentPersonIndex} // This key ensures animation only on person change
        className="testimonial-card main-card"
        custom={1}
        variants={cardVariants}
        initial="enter"
        animate="center"
        exit="exit"
        whileHover={!isMobile ? {
          scale: 1.02,
          y: -5,
          transition: { duration: 0.3 }
        } : {}}
      >
        <div className="testimonial-image">
          <img
            src={currentPerson.image}
            alt={currentPerson.name}
          />
        </div>
        <div className="testimonial-content">
          <h3 className="testimonial-name">
            {currentPerson.name}
          </h3>
          <p className="testimonial-profession">
            {currentPerson.credentials}
          </p>

          <div className="testimonial-quote-container">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={`${currentPersonIndex}-${currentTestimonialIndex}`} // This key ensures animation on testimonial change
                className="testimonial-quote"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                "{currentTestimonial}"
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="testimonial-dots">
            {currentPerson.testimonials.map((_, index) => (
              <span
                key={index}
                className={index === currentTestimonialIndex ? 'active' : ''}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
);


const TestimonialsSection = ({ onJoinWaitlist }: TestimonialProps) => {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const testimonialsData: TestimonialData[] = [
    {
      id: 1,
      name: "Om Patil",
      credentials: "Mangalayatan University Jabalpur Ba.llb 5th year",
      image: "/ompatil.jpg",
      testimonials: [
        "When sharing legal insights online, a big frustration is second-guessing my opinion—worrying it might hurt someone's feelings or credibility. Another is explaining my thoughts to overconfident people who act like they already know everything.",
        "The most time consuming part of the legal article writing is content framing and the legal citeations and formatting all the articles and  , these are the main reasons which causes time consuming parts of the article writing"
      ]
    },
    {
      id: 2,
      name: "Paras Shukla",
      credentials: "LLB(H) complete. Practicing lawyer at MP High court and District and session court Jabalpur",
      image: "/paras.jpg",
      testimonials: [
        "The biggest hurdle is simplifying complex legal concepts for a general audience without losing accuracy, along with the lack of visibility on credible platforms.",
        "Monetizing legal writing is a great idea, but uncertainty about where to start and ethical concerns have kept me from exploring it more.",
        "Research and ensuring legal accuracy take the most time, especially when balancing clarity with technical depth."
      ]
    },
    {
      id: 3,
      name: "Ritanshu Dhangar",
      credentials: "BA. LLB, 5th Year, Mangalayatan University, Jabalpur",
      image: "/ritanshu.jpg",
      testimonials: [
        "Between court, clients, and paperwork, it's tough to sit down and write.",
        "Research: Even if you know the topic, you need to check the latest laws and cases.",
        "Not sure how to start or where to post and earn."
      ]
    },
    {
      id: 4,
      name: "Dr. Vartika Pandey",
      credentials: "Professor, MUJ",
      image: "/suhanijain.webp",
      testimonials: [
        "The most significant investment of time in my writing process is dedicated to the rigorous task of plagiarism removal. This crucial step ensures the absolute credibility and originality of the final work",
        
      ]
    },
    {
      id: 5,
      name: "Suhani Jain",
      credentials: "BA. LLB, 3rd Year, Jagran Lakecity University, Bhopal",
      image: "/tanisha.webp",
      testimonials: [
        "One of the biggest challenges I face... is striking the right balance between accessibility and accuracy. Simplifying them for a general audience without losing the nuance—or worse, spreading misinformation—is a constant struggle.",
        "I believe lawyers should absolutely monetize their expertise through writing... However, the reason many... may hesitate... is due to a mix of time constraints, uncertainty about monetization models, and fear of non-compliance",
        "For me, the most time-consuming part of writing a legal article is the structuring and outlining phase... crafting a coherent flow that integrates statutes, case law, and interpretation is a mentally demanding task"
      ]
    },
    {
      id: 6,
      name: "Tanisha Shrivastav",
      credentials: "BA. LLB, 5th Year, Mangalayatan University, Jabalpur",
      image: "/suhanijain.webp",
      testimonials: [
        "...rather than focusing on what I am saying they start to judge my credibility... and that in turn makes it difficult to... put forth your Idea or your insight."
       
      ]
    }
  ];

  // Check screen size for mobile/desktop behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop scroll setup - always initialize but only use on desktop
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  // Perfect scroll timing with equal distribution and proper margins
  const scrollProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 2]);

  // Progress bar transform - always initialize
  const progressBarTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Handle scroll-triggered person changes - DESKTOP ONLY
 useMotionValueEvent(scrollProgress, "change", (latest) => {
  // Skip scroll-triggered changes on mobile
  if (isMobile) return;

  let newPersonIndex;
  
  // Ranges for 6 people over a scroll progress from 0 to 2.0
  if (latest < 0.333) {
    newPersonIndex = 0;
  } else if (latest < 0.667) {
    newPersonIndex = 1;
  } else if (latest < 1.0) {
    newPersonIndex = 2;
  } else if (latest < 1.333) {
    newPersonIndex = 3;
  } else if (latest < 1.667) {
    newPersonIndex = 4;
  } else {
    newPersonIndex = 5;
  }

  if (newPersonIndex !== currentPersonIndex && newPersonIndex >= 0 && newPersonIndex < testimonialsData.length) {
    setCurrentPersonIndex(newPersonIndex);
    setCurrentTestimonialIndex(0); // Reset to first testimonial when person changes
  }
});
  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const currentPerson = testimonialsData[currentPersonIndex];
      const nextTestimonialIndex = (currentTestimonialIndex + 1) % currentPerson.testimonials.length;
      setCurrentTestimonialIndex(nextTestimonialIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPersonIndex, currentTestimonialIndex, testimonialsData]);

  const handleCardClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentPersonIndex((prev) => (prev + 1) % testimonialsData.length);
    setCurrentTestimonialIndex(0); // Reset to first testimonial when changing person

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };



  const currentPerson = testimonialsData[currentPersonIndex];
  const currentTestimonial = currentPerson.testimonials[currentTestimonialIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      x: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const cardsVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 15 : -15,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    })
  };

  const stackVariants = {
    stack1: {
      x: -8,
      y: 8,
      scale: 0.95,
      opacity: 0.7,
      rotateZ: -2,
      transition: { duration: 0.3 }
    },
    stack2: {
      x: -16,
      y: 16,
      scale: 0.9,
      opacity: 0.4,
      rotateZ: -4,
      transition: { duration: 0.3 }
    }
  };

  // MOBILE VERSION - Simple tap functionality, no pinning
  if (isMobile) {
    return (
      <motion.section
        ref={sectionRef}
        className="testimonials-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="testimonials-content">
          <motion.div
            className="testimonials-left"
            variants={leftVariants}
          >
            <motion.h2
              className="testimonials-title"
              variants={titleVariants}
            >
              What Problems we are targeting?
            </motion.h2>
          </motion.div>

          <motion.div
            className="testimonials-right"
            variants={cardsVariants}
          >
            <TestimonialCard
              isMobile={isMobile}
              handleCardClick={handleCardClick}
              currentPerson={currentPerson}
              currentTestimonial={currentTestimonial}
              currentTestimonialIndex={currentTestimonialIndex}
              currentPersonIndex={currentPersonIndex}
              cardVariants={cardVariants}
              stackVariants={stackVariants}
             
            />
          </motion.div>

          {/* Mobile tap instruction - moved to bottom */}
          <div className="mobile-tap-instruction">
            <p>Tap to see more</p>
            <div className="person-indicators">
              {testimonialsData.map((_, index) => (
                <span
                  key={index}
                  className={`person-dot ${index === currentPersonIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  // DESKTOP VERSION - With pinning and scroll-triggered changes
  return (
    <div ref={wrapperRef} className="pinned-testimonials-wrapper">
      <motion.div
        className="pinned-content"
        style={{
          position: "sticky",
          top: "0",
          
        }}
      >
        <motion.section
          ref={sectionRef}
          className="testimonials-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="testimonials-content">
            <motion.div
              className="testimonials-left"
              variants={leftVariants}
            >
              <motion.h2
                className="testimonials-title"
                variants={titleVariants}
              >
                What Problems<br />
                we are targeting?
              </motion.h2>
              <motion.a
                
                className="testimonials-button desktop-only"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={onJoinWaitlist}
              >
                Join Us →
              </motion.a>
            </motion.div>

            <motion.div
              className="testimonials-right"
              variants={cardsVariants}
            >
              <TestimonialCard
                isMobile={isMobile}
                handleCardClick={handleCardClick}
                currentPerson={currentPerson}
                currentTestimonial={currentTestimonial}
                currentTestimonialIndex={currentTestimonialIndex}
                currentPersonIndex={currentPersonIndex}
                cardVariants={cardVariants}
                stackVariants={stackVariants}
                
              />
            </motion.div>
          </div>

          {/* Scroll progress indicator - desktop only */}
          <div className="scroll-progress-indicator">
            <motion.div
              className="progress-bar"
              style={{
                scaleX: progressBarTransform
              }}
            />
            <p className="scroll-hint">Scroll to explore testimonials</p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
