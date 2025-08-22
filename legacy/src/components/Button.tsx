import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  showFomoDialog?: boolean; // New prop to control FOMO dialog
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  showFomoDialog = false
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [, setIsDialogVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if this is a "Join" button (excluding navbar instances)
  const isJoinButton = typeof children === 'string' &&
    (children.toLowerCase().includes('join') || children.toLowerCase().includes('waitlist')) &&
    showFomoDialog;

  useEffect(() => {
    if (!isJoinButton || !dialogRef.current) return;

    // Initialize dialog as hidden
    gsap.set(dialogRef.current, {
      opacity: 0,
      y: 10,
      scale: 0.95,
      visibility: 'hidden'
    });
  }, [isJoinButton]);

  const showDialog = () => {
    if (!isJoinButton || !dialogRef.current) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsDialogVisible(true);

    gsap.to(dialogRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      visibility: 'visible',
      duration: 0.4,
      ease: 'back.out(1.7)'
    });
  };

  const hideDialog = () => {
    if (!isJoinButton || !dialogRef.current) return;

    timeoutRef.current = setTimeout(() => {
      gsap.to(dialogRef.current, {
        opacity: 0,
        y: -5,
        scale: 0.9,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          setIsDialogVisible(false);
          if (dialogRef.current) {
            gsap.set(dialogRef.current, { visibility: 'hidden' });
          }
        }
      });
    }, 100);
  };

  const handleMouseEnter = () => {
    if (isJoinButton) {
      showDialog();
    }
  };

  const handleMouseLeave = () => {
    if (isJoinButton) {
      hideDialog();
    }
  };



  return (
    <div className="button-container" style={{ position: 'relative', display: 'inline-block' }}>
      <button
        ref={buttonRef}
        className={`button button--${variant} button--${size} ${className}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>

      
    </div>
  );
}
