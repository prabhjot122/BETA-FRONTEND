import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import './MobileSidebar.css';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (targetId: string) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose, onNavigate }) => {
  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 30 } },
    exit: { x: '100%', transition: { duration: 0.3 } },
  };

  const handleLinkClick = (targetId: string) => {
    onClose();
    setTimeout(() => {
      onNavigate(targetId);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="mobile-sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="mobile-sidebar"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mobile-sidebar-header">
              <button onClick={onClose} className="mobile-sidebar-close-btn">
                <IoClose size={28} />
              </button>
            </div>
            <ul className="mobile-sidebar-links">
              {/* Changed from <a> to <button> for accessibility */}
              <li>
                <button onClick={() => handleLinkClick('features')}>Features</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('perks')}>Perks</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('testimonials')}>Testimonials</button>
              </li>
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;