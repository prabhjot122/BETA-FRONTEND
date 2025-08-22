
import { motion } from "framer-motion";
import "./PerksMobile.css";
import { FiArrowRight } from "react-icons/fi";
interface PerksMobileProps {
  onJoinWaitlist: () => void;
}
const PerksMobile = ({ onJoinWaitlist }: PerksMobileProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      x: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

 

  const rightVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const featureVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const dividerVariants = {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.3,
      },
    },
  };

  const features = [
    {
      title: "Founding Member Badge",
      description:
        "Claim the permanent 'Founding Member' badge, a mark of distinction no one else can ever earn. Solidify your legacy as a pioneer in India's new legal economy.",
    },
    {
      title: "Premium Access & Exclusive Events",
      description:
        "Enjoy 3 months of unrestricted premium access to build your digital brand, on us. Plus, get an exclusive seat at closed-door strategy events with legal industry titans.",
    },
    {
      title: "Lifetime Status & Inner Circle",
      description:
        "Become a Founding Member for a lifetime of status and a perpetual head start. Secure your place in the inner circle before the door closes forever.",
    },
    {
      title: "Early Access & Homepage Feature",
      description:
        "Get every groundbreaking feature before the public and be featured on our homepage. This is your unignorable advantage to build instant authority and dominate the digital space.",
    },
  ];

  return (
    <motion.section
      className="perksmobile-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="perksmobile-content">
        <motion.div className="perksmobile-left" variants={leftVariants}>
          <motion.h2 className="perksmobile-title" variants={titleVariants}>
            Founding
            <br />
            Member Perks
          </motion.h2>
        </motion.div>

        <motion.div className="perksmobile-right" variants={rightVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="perksmobile-feature-item"
              variants={featureVariants}
            >
              <motion.h3
                className="perksmobile-feature-title"
                variants={featureVariants}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="perksmobile-feature-description"
                variants={featureVariants}
              >
                {feature.description}
              </motion.p>
              {index < features.length - 1 && (
                <motion.div
                  className="perksmobile-feature-divider"
                  variants={dividerVariants}
                  style={{ transformOrigin: "left center" }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
        <div className="perk-right-cta">
        <button className="perk-right-cta-button" onClick={onJoinWaitlist}>
          Become a Founding Member
          <FiArrowRight size={24} />
        </button>
      </div>
      </div>
      
    </motion.section>
  );
};

export default PerksMobile;
