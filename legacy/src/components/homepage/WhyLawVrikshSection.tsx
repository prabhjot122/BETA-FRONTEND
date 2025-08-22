
import { motion } from 'framer-motion';
import './WhyLawVrikshSection.css';
interface WhyLawVrikshSectionProps {
  onJoinWaitlist: () => void;
}
const WhyLawVrikshSection = ({ onJoinWaitlist }: WhyLawVrikshSectionProps) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
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
      y: 60,
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

  const rightVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const featureVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      y: 20
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

  const dividerVariants = {
    hidden: {
      scaleX: 0
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.3
      }
    }
  };

  const features = [
    {
      title: "Guarantee Your Credibility",
      description: "We stake our reputation on accuracy so you can confidently stake yours. Every article is rigorously peer-reviewed to serve as an unshakable foundation for your work."
    },
    {
      title: "Lead the Conversation",
      description: "We don't just give you tools to write; we give you a platform to be heard. Our AI-powered suite helps you move beyond participating in the conversation to actively leading it."
    },
    {
      title: "Build in Community",
      description: "The future of law isn't built in isolation; it's built in a community of leaders. Here, you will connect and collaborate with peers to collectively elevate the entire profession."
    },
    {
      title: "Solidify Your Legacy",
      description: "Your career is your life's work; we make sure the world recognizes it as your legacy. Through strategic amplification, your expertise achieves the lasting authority and impact it deserves."
    }
  ];

  return (
    <motion.section
      className="why-lawvriksh-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="why-content">
        <motion.div
          className="why-left"
          variants={leftVariants}
        >
          <motion.h2
            className="why-title"
            variants={titleVariants}
          >
            Why<br />
            LawVriksh?
          </motion.h2>
          <motion.button
            className="why-button"
            variants={buttonVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onJoinWaitlist}
          >
            Let's get started
          </motion.button>
        </motion.div>

        <motion.div
          className="why-right"
          variants={rightVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item"
              variants={featureVariants}
            >
              <motion.h3
                className="feature-title"
                variants={featureVariants}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="feature-description"
                variants={featureVariants}
              >
                {feature.description}
              </motion.p>
              {index < features.length - 1 && (
                <motion.div
                  className="feature-divider"
                  variants={dividerVariants}
                  style={{ transformOrigin: 'left center' }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyLawVrikshSection;