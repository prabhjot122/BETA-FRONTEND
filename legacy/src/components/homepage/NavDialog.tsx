import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './NavDialog.css'; // We will update this file next

// Interface definitions remain the same
interface DialogItem {
  heading: string;
  description?: string;
  profession?: string;
  testimonials?: string[];
}

interface NavDialogProps {
  isOpen: boolean;
  content: {
    title: string;
    items: DialogItem[];
  };
}

const NavDialog: React.FC<NavDialogProps> = ({ isOpen, content }) => {
  const dialogVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // NEW: Determine the grid class based on content title for different layouts
  const gridClass = content.title === 'Testimonials' ? 'grid-testimonials' : 'grid-features';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="nav-dialog"
          variants={dialogVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          aria-label={`${content.title} details`}
        >
          {/* NEW: Add a clear title for the dialog */}
          <h3 className="dialog-title">{content.title}</h3>

          {/* NEW: Add a visual separator */}
          <hr className="dialog-divider" />

          <div className={`dialog-items-grid ${gridClass}`}>
            {content.items.map((item, index) => (
              <motion.div key={index} className="dialog-item" variants={itemVariants}>
                <h4>{item.heading}</h4>
                {content.title === 'Testimonials' ? (
                  <>
                    <p className="profession">{item.profession}</p>
                    {/* UPDATED: Show only the FIRST testimonial to reduce clutter */}
                    {item.testimonials && item.testimonials.length > 0 && (
                      <blockquote>"{item.testimonials[0]}"</blockquote>
                    )}
                  </>
                ) : (
                  <p>{item.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavDialog;