import Button from "./Button";
import "./HomepageMobile.css";
import Navbar from "./Navbar";
import WhyUs from "./WhyUs";
import MarketGrowth from "./MarketGrowth";
import WaitlistPopup from "./WaitlistPopup";
import Footer from "./Footer";
import CTASection from "./CTASection";
import { useState, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface HomepageMobileProps {
  onJoinWaitlist: () => void;
}

const HomepageMobile = ({ onJoinWaitlist: _onJoinWaitlist }: HomepageMobileProps): JSX.Element => {
  const [isWaitlistPopupOpen, setIsWaitlistPopupOpen] = useState(false);
  const [currentDividerTextIndex, setCurrentDividerTextIndex] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Debug log to ensure mobile component is rendering
  console.log('HomepageMobile component is rendering');

  // Testimonial system state
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Testimonial data structure for the new interactive system
  const testimonialsData = useMemo(() => [
    {
          id: 1,
          name: "Om Patil",
          credentials: "Mangalayatan University Jabalpur Ba.llb 5th year",
          image: "/ompatil.webp",
          testimonials: [
            "When sharing legal insights online, a big frustration is second-guessing my opinion—worrying it might hurt someone's feelings or credibility. Another is explaining my thoughts to overconfident people who act like they already know everything.",
            "The most time consuming part of the legal article writing is content framing and the legal citeations and formatting all the articles and  , these are the main reasons which causes time consuming parts of the article writing"
          ]
        },
    {
          id: 2,
          name: "Paras Shukla",
          credentials: "LLB(H) complete. Practicing lawyer at MP High court and District and session court Jabalpur",
          image: "/paras.webp",
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
          image: "/ritanshu.webp",
          testimonials: [
            "Between court, clients, and paperwork, it's tough to sit down and write.",
            "Research: Even if you know the topic, you need to check the latest laws and cases.",
            "Not sure how to start or where to post and earn."
          ]
        },
    {
      id: 4,
      name: "Suhani Jain",
      credentials: "BA. LLB, 3rd Year, Jagran Lakecity University, Bhopal",
      image: "/suhanijain.webp",
      testimonials: [
        "One of the biggest challenges I face... is striking the right balance between accessibility and accuracy. Simplifying them for a general audience without losing the nuance—or worse, spreading misinformation—is a constant struggle.",
        "I believe lawyers should absolutely monetize their expertise through writing... However, the reason many... may hesitate... is due to a mix of time constraints, uncertainty about monetization models, and fear of non-compliance.",
        "For me, the most time-consuming part of writing a legal article is the structuring and outlining phase... crafting a coherent flow that integrates statutes, case law, and interpretation is a mentally demanding task."
      ]
    },

    {
      id: 5,
      name: "Tanisha Srivastava",
      credentials: "BA. LLB, 5th Year, Mangalayatan University, Jabalpur",
      image: "/tanisha.webp",
      testimonials: [
        "...rather than focusing on what I am saying they start to judge my credibility... and that in turn makes it difficult to... put forth your Idea or your insight."
      ]
    },
    {
      id: 6,
      name: "Dr. Vartika Pandey",
      credentials: "Professor, MUJ",
      image: "/suhanijain.webp",
      testimonials: [
        "The most significant investment of time in my writing process is dedicated to the rigorous task of plagiarism removal. This crucial step ensures the absolute credibility and originality of the final work."
      ]
    }


  ], []);

  // Hero quotes array for dynamic rotation (same as desktop)
  const heroQuotes = useMemo(() => [
    "LawVriksh's AI helps legal experts build a respected voice, create impactful content, and unlock new income streams.",
    "You are one of India's 2 million legal minds. Your insights shape justice. But the digital world wasn't built for you.",
    "Join the exclusive beta for India's first platform designed to turn legal professionals into digital entrepreneurs.",
  ], []);

  const handleJoinWaitlist = () => {
    setIsWaitlistPopupOpen(true);
  };

  const handleCloseWaitlistPopup = () => {
    setIsWaitlistPopupOpen(false);
  };

  // Divider text array for rotation (same as desktop)
  const dividerTexts = [
    "For the time you lose to non-billable work.",
    "For your rightful place in the creator economy.",
    "For a professional brand that's scattered and unseen.",
    "We are For the 90% of India that doesn't speak English as a first language."
  ];

  // Founding Member Perks data (same as desktop)
  const foundingMemberPerks = [
    {
      title: "Founding Member Badge",
      description: "Claim the permanent 'Founding Member' badge, a mark of distinction no one else can ever earn. Solidify your legacy as a pioneer in India's new legal economy."
    },
    {
      title: "Early Access & Homepage Feature",
      description: "Get every groundbreaking feature before the public and be featured on our homepage. This is your unignorable advantage to build instant authority and dominate the digital space."
    },
    {
      title: "Premium Access & Exclusive Events",
      description: "Enjoy 3 months of unrestricted premium access to build your digital brand, on us. Plus, get an exclusive seat at closed-door strategy events with legal industry titans."
    },
    {
      title: "Lifetime Status & Inner Circle",
      description: "Become a Founding Member for a lifetime of status and a perpetual head start. Secure your place in the inner circle before the door closes forever."
    }
  ];

  // CTA Section Content Data (same as desktop)
  const ctaContent = {
    first: [
      "Soon, a verified profile on this platform will be the new standard for digital credibility in law. Get yours first.",
      "Why limit your audience? Beta users will be the first to establish a pan-India presence."
    ],
    second: [
      "The first wave of India's legal creators is about to launch. Will you be on the inside, or will you be reading their work?",
      "Your peers are about to start producing high-value content in minutes, not days. Don't get left behind."
    ]
  };

  // Handle feature item clicks for smooth scrolling navigation
  const handleFeatureClick = (index: number) => {
    let targetSelector = '';
    const offset = -80; // Account for mobile navigation spacing

    switch (index) {
      case 0: // Features
        targetSelector = '.homepage-mobile__content-section-static';
        break;
      case 1: // Why You Should Join Us
        targetSelector = '#founding-member-perks';
        break;
      case 2: // Testimonials
        targetSelector = '#testimonials';
        break;
      default:
        return;
    }

    // Smooth scroll to target section using GSAP
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: targetSelector,
        offsetY: offset
      },
      ease: "power2.inOut"
    });
  };

  // Divider text rotation effect with GSAP animation (same as desktop)
  useEffect(() => {
    let dividerTimeline: gsap.core.Timeline | null = null;

    const startDividerRotation = () => {
      const dividerElements = document.querySelectorAll('.homepage__divider-text');
      if (dividerElements.length === 0) return;

      // Create infinite timeline for divider text rotation
      dividerTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 0
      });

      // Create a single rotation cycle that repeats
      dividerTimeline
        // Hold current text for 3 seconds
        .to(dividerElements, { duration: 3 })
        // Fade out with smooth animation
        .to(dividerElements, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.in"
        })
        // Update to next text
        .call(() => {
          setCurrentDividerTextIndex((prevIndex) => {
            return (prevIndex + 1) % dividerTexts.length;
          });
        })
        // Fade in new text with smooth animation
        .to(dividerElements, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
    };

    // Start the rotation after a short delay to ensure elements are rendered
    const timeoutId = setTimeout(startDividerRotation, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (dividerTimeline) {
        dividerTimeline.kill();
      }
    };
  }, [dividerTexts.length]);

  // Auto-cycling testimonials effect with smooth animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out current testimonial
      gsap.to(".homepage-mobile__quote-text", {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          // Update testimonial index
          setCurrentTestimonialIndex(prevIndex => {
            const currentPerson = testimonialsData[currentPersonIndex];
            if (!currentPerson || !currentPerson.testimonials || currentPerson.testimonials.length === 0) {
              return 0;
            }
            return (prevIndex + 1) % currentPerson.testimonials.length;
          });

          // Animate in new testimonial
          gsap.fromTo(".homepage-mobile__quote-text",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              delay: 0.1
            }
          );
        }
      });
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [currentPersonIndex, testimonialsData]);

  // Hero quote rotation effect using pure GSAP (same as desktop)
  useEffect(() => {
    let quoteTimeline: gsap.core.Timeline | null = null;

    const startQuoteRotation = () => {
      const quoteElement = document.querySelector('.homepage-mobile__hero-quote');
      if (!quoteElement) return;

      // Set initial state
      gsap.set(quoteElement, { opacity: 1, y: 0, scale: 1 });

      // Create infinite timeline for quote rotation
      quoteTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 0
      });

      // Create a single rotation cycle that repeats
      quoteTimeline
        // Hold current quote for 4 seconds
        .to(quoteElement, { duration: 4 })
        // Fade out with smooth animation
        .to(quoteElement, {
          opacity: 0,
          y: -15,
          scale: 0.98,
          duration: 0.4,
          ease: "power2.in"
        })
        // Update to next quote
        .call(() => {
          setCurrentQuoteIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % heroQuotes.length;
            quoteElement.textContent = `"${heroQuotes[nextIndex]}"`;
            return nextIndex;
          });
        })
        // Fade in new quote with smooth animation
        .to(quoteElement, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out"
        });
    };

    // Start the rotation after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(startQuoteRotation, 1500);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (quoteTimeline) {
        quoteTimeline.kill();
        quoteTimeline = null;
      }
    };
  }, [heroQuotes, setCurrentQuoteIndex]);

  // Handle click on testimonial image for person navigation with smooth animation
  const handleTestimonialClick = () => {
    // Prevent interaction during transition
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Create smooth transition animation
    const tl = gsap.timeline({
      onComplete: () => setIsTransitioning(false)
    });

    // Animate out current content
    tl.to([
      ".homepage-mobile__person-info",
      ".homepage-mobile__quote-text",
      ".homepage-mobile__testimonial-image"
    ], {
      opacity: 0,
      y: -30,
      duration: 0.3,
      ease: "power2.in",
      stagger: 0.05
    })
    .call(() => {
      // Click - go to next person
      setCurrentPersonIndex(prevIndex => testimonialsData.length > 0 ? (prevIndex + 1) % testimonialsData.length : 0);

      // Reset testimonial index when switching person
      setCurrentTestimonialIndex(0);
    })
    // Animate in new content
    .fromTo([
      ".homepage-mobile__person-info",
      ".homepage-mobile__quote-text",
      ".homepage-mobile__testimonial-image"
    ],
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.05
    });
  };



  // Mobile-optimized GSAP animations - Simplified for static layout
  useEffect(() => {
    // Set initial states for basic elements only
    gsap.set([
      ".homepage-mobile__hero-title",
      ".homepage-mobile__hero-quote",
      ".homepage-mobile__feature-item"
    ], {
      opacity: 0,
      y: 30
    });

    // Set initial state for divider text elements
    gsap.set(".homepage__divider-text", {
      opacity: 1,
      y: 0
    });

    // Hero title animation
    gsap.to(".homepage-mobile__hero-title", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.3
    });

    // Hero quote animation
    gsap.to(".homepage-mobile__hero-quote", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.6
    });

    // Feature items animation
    gsap.to(".homepage-mobile__feature-item", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      delay: 0.8
    });

    // Simple scroll-triggered animations for static content
    const staticElements = gsap.utils.toArray(".homepage-mobile__section-title, .homepage-mobile__feature-container, .founding-member-perks__content-item-static") as Element[];
    staticElements.forEach((element) => {
      gsap.fromTo(element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Testimonials section animations - Fix visibility issue
    gsap.fromTo(".homepage-mobile__testimonial-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".homepage-mobile__testimonials-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".homepage-mobile__testimonial-image",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".homepage-mobile__testimonials-section",
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".homepage-mobile__card-content",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".homepage-mobile__testimonials-section",
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Testimonials header animations
    gsap.fromTo(".homepage-mobile__testimonials-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".homepage-mobile__testimonials-section",
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".homepage-mobile__testimonials-subtitle",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".homepage-mobile__testimonials-section",
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Use the same features array as desktop version
  const features = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/aa858a2f8ed0a134930f72e7fef50e364573ebfc?width=118",
      title: "Features",
      description: "Benefit of joining waiting list",
      iconClass: "homepage-mobile__feature-icon",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/9badbe856312fc48be0805e349db264b09d2846c?width=118",
      title: "Why You should Join us",
      description: "Urgency of joining waiting list",
      iconClass: "homepage-mobile__feature-icon",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/189e56502619bfcd3df1b9c9dfa220747ca30a92?width=118",
      title: "Testimonials",
      description: "Benefit of joining waiting list",
      iconClass: "homepage-mobile__feature-icon",
    },
  ];

  // Feature content for the animated sections (same as desktop)
  const featureContents = [
    {
      title: "The 60% Solution: Your AI Co-Pilot",
      bullets: [
        "You spend up to 60% of your time on research and content creation.",
        "Our legal-specific AI, trained on Indian compliance and frameworks, automates your drafting process",
        "It's more than a tool; it's an integrated engine for writing, research, and SEO optimization that frees you to focus on what truly matters—your expertise."
      ]
    },
    {
      title: "Beyond the Billable Hour: The Monetization Hub",
      bullets: [
        "The $191.6 billion creator economy has largely excluded legal professionals. We're correcting this.",
        "Our platform provides the first direct path from legal expertise to sustainable revenue.",
        "With a credit-based economy and tools for premium subscriptions, you can finally build income streams beyond the traditional billable hour."
      ]
    },
    {
      title: "Your Digital Gavel: The Automated Portfolio",
      bullets: [
        "While 73% of legal professionals use digital tools, they lack a single, comprehensive system to showcase their expertise.",
        "Our Automated Portfolio Builder creates a credible, SEO-optimized digital presence for you.",
        "Combined with our Professional Verification System, you don't just get found—you get trusted."
      ]
    },
    {
      title: "An All-India Reach: The Multilingual Engine",
      bullets: [
        "Your insights are too valuable to be confined to one language.",
        "Our platform's multi-language support allows you to create and disseminate your work across India's diverse linguistic landscape.",
        "Reach a wider audience, connect with more clients, and build a truly national reputation."
      ]
    }
  ];



  return (
    <>
      <div className="homepage-mobile">
      {/* Debug element to confirm mobile component is rendering */}
      
      <Navbar onJoinWaitlist={handleJoinWaitlist} />

      {/* Hero Section */}
      <section className="homepage-mobile__hero">
        <div className="homepage-mobile__hero-content">
          <h1 className="homepage-mobile__hero-title">
            Be a legal <br/> entrepreneur
          </h1>

          <div className="homepage-mobile__hero-quote">
            &ldquo;{heroQuotes[currentQuoteIndex]}&rdquo;
          </div>

          <div className="homepage-mobile__features-list">
            {features.map((feature, index) => (
              <div
                key={index}
                className="homepage-mobile__feature-item"
                onClick={() => handleFeatureClick(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleFeatureClick(index);
                  }
                }}
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer' }}
                aria-label={`Navigate to ${feature.title} section`}
              >
                <img
                  src={feature.icon}
                  alt=""
                  className={feature.iconClass}
                />
                <div className="homepage-mobile__feature-content">
                  <h3 className="homepage-mobile__feature-title">
                    {feature.title}
                  </h3>
                  
                </div>
              </div>
            ))}
          </div>

          <div className="homepage-mobile__hero-bottom">
            <p className="homepage-mobile__hero-subtitle">
              Creator platform for modern — legal professionals
            </p>

            <Button size="large" onClick={handleJoinWaitlist} showFomoDialog={true}>
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Decorative Strip Divider */}
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

      {/* Content Creation Section - Static Vertical Layout */}
      <section className="homepage-mobile__content-section-static">
        {featureContents.map((feature, index) => (
          <div key={index} className="homepage-mobile__feature-container">
            <div className="homepage-mobile__feature-image-container">
              <div
                className="homepage-mobile__feature-image-static"
                style={{
                  backgroundImage: `url("/feature${index + 1}.webp")`
                }}
              ></div>
            </div>

            <div className="homepage-mobile__feature-content-static">
              <h2 className="homepage-mobile__section-title">
                {feature.title.split(':')[0]}:<br />{feature.title.split(':')[1]}
              </h2>

              <div className="homepage-mobile__content-features">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="homepage-mobile__content-feature">
                    <span className="homepage-mobile__content-icon">•</span>
                    <p className="homepage-mobile__content-description">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Decorative Strip Divider */}
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

      <MarketGrowth/>

      <CTASection
        contentItems={ctaContent.first}
        onButtonClick={handleJoinWaitlist}
      />


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

      {/* Why Us Section */}
      <WhyUs />

      {/* Decorative Strip Divider */}
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

      {/* Enhanced Testimonials Section - Mobile Card Design */}
     
      <div id="testimonials" className="homepage-mobile__testimonials-section">
        {/* Mobile testimonials container with card-based layout */}
        <div className="homepage-mobile__testimonials-container">
          {/* Header section */}
          <div className="homepage-mobile__testimonials-header">
            <div className="homepage-mobile__testimonials-title">
              What problems We are targetting?
            </div>
            <div className="homepage-mobile__testimonials-subtitle">
              Real insights from legal professionals who trust our platform
            </div>
          </div>

          {/* Card-based testimonial layout */}
          <div className="homepage-mobile__testimonial-card">
            {/* Profile image section */}
            <div className="homepage-mobile__testimonial-image-container">
              <div
                className="homepage-mobile__testimonial-image"
                style={{
                  backgroundImage: `url(${testimonialsData[currentPersonIndex]?.image || ''})`
                }}
                onClick={handleTestimonialClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleTestimonialClick();
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View next testimonial. Currently showing ${testimonialsData[currentPersonIndex]?.name || 'testimonial'}`}
              >
                <div className="homepage-mobile__tap-indicator">
                  <div className="homepage-mobile__tap-text">Tap to see next</div>
                </div>
              </div>
            </div>

            {/* Card content section */}
            <div className="homepage-mobile__card-content">
              {/* Person info */}
              <div className="homepage-mobile__person-info">
                <div className="homepage-mobile__person-name">
                  {testimonialsData[currentPersonIndex]?.name || ''}
                </div>
                <div className="homepage-mobile__person-credentials">
                  {testimonialsData[currentPersonIndex]?.credentials || ''}
                </div>
              </div>

              {/* Quote section */}
              <div className="homepage-mobile__quote-section">
                <div className="homepage-mobile__quote-text">
                  {testimonialsData[currentPersonIndex]?.testimonials?.[currentTestimonialIndex] || ''}
                </div>
              </div>

              {/* Navigation indicators */}
              <div className="homepage-mobile__indicators">
                <div className="homepage-mobile__person-dots">
                  {testimonialsData.map((_, index) => (
                    <div
                      key={index}
                      className={`homepage-mobile__person-dot ${index === currentPersonIndex ? 'active' : ''}`}
                    />
                  ))}
                </div>
                <div className="homepage-mobile__quote-dots">
                  {(testimonialsData[currentPersonIndex]?.testimonials || []).map((_, index) => (
                    <div
                      key={index}
                      className={`homepage-mobile__quote-dot ${index === currentTestimonialIndex ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Testimonial Section - Desktop Style */}
      

      {/* Decorative Strip Divider */}
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

      {/* Founding Member Perks Section - Static Vertical Layout */}
      <div id="founding-member-perks" className="founding-member-perks-section-static">
        <div className="founding-member-perks__container-static">
          <div className="founding-member-perks__title-static">
            Founding Member Perks
          </div>

          <div className="founding-member-perks__content-static">
            {foundingMemberPerks.map((perk, index) => (
              <div
                key={index}
                className="founding-member-perks__content-item-static"
              >
                <div className="founding-member-perks__perk-title-static">
                  {perk.title}
                </div>
                <div className="founding-member-perks__perk-description-static">
                  {perk.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second CTA Section */}
      <CTASection
        contentItems={ctaContent.second}
        onButtonClick={handleJoinWaitlist}
      />

      {/* Decorative Strip Divider */}
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

      {/* Team Section - Redesigned */}
      

      <Footer />

      <WaitlistPopup
        isOpen={isWaitlistPopupOpen}
        onClose={handleCloseWaitlistPopup}
      />
      </div>
    </>
  );
};

export default HomepageMobile;
