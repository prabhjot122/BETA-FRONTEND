import { useEffect, useState, MouseEvent } from "react";
import "./Navbar.css";
import { IoArrowForward, IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavDialog from './homepage/NavDialog';
import { dialogContent } from './homepage/homepage.data';
import MobileSidebar from './homepage/MobileSidebar';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// FIX 1: Removed unused 'onJoinWaitlist' from props
interface NavbarProps {}

// FIX 2: Define props for the Navigation component
interface NavigationProps {
  onNavigate: (e: MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

// FIX 2: Update Navigation to accept and use the 'onNavigate' prop
const Navigation = ({ onNavigate }: NavigationProps) => {
    const [activeDialogIndex, setActiveDialogIndex] = useState<number | null>(null);

    const navLinks = [
        { title: "What we Offer?", label: "Features" },
        { title: "Why join us?", label: "Perks" },
        { title: "What they say?", label: "Testimonials" },
    ];

    return (
        <div className="navbar__nav">
            {navLinks.map((link, index) => (
                <div
                    key={index}
                    className="nav-item-wrapper"
                    onMouseEnter={() => setActiveDialogIndex(index)}
                    onMouseLeave={() => setActiveDialogIndex(null)}
                >
                    <div className="navlink-container">
                        <div className="navlink-container-left">
                            <p>{link.title}</p>
                            {/* FIX 2: Apply the onNavigate function to the onClick handler */}
                            <a 
                              href={`#${link.label.toLowerCase()}`} 
                              className="navbar__nav-link"
                              onClick={(e) => onNavigate(e, link.label.toLowerCase())}
                            >
                                {link.label}
                            </a>
                        </div>
                        <div className="navlink-container-right">
                            <IoArrowForward color="#838383" />
                        </div>
                    </div>
                    <NavDialog
                        isOpen={activeDialogIndex === index}
                        content={dialogContent[index as keyof typeof dialogContent]}
                    />
                </div>
            ))}
        </div>
    );
};

// FIX 1: Removed unused 'onJoinWaitlist' from function signature
export default function Navbar({}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 80);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    const scrollOffset = 80;
    if (targetElement) {
      gsap.to(window, { duration: 1, scrollTo: { y: targetElement, offsetY: scrollOffset }, ease: "power2.inOut", overwrite: true });
    }
  };

  const handleDesktopNavigate = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <>
      <nav className={
        `navbar 
        ${isScrolled ? "navbar--scrolled" : ""} 
        ${isNavbarVisible ? "navbar--visible" : "navbar--hidden"}`
      }>
        <a href="/" onClick={() => window.location.reload()} className="navbar__brand">
          <div className="logo-parent-container">
            <div className="logo-container"></div>
          </div>
          <div className="text-container">LawVriksh</div>
        </a>
        <div className="navbar__content">
          <Navigation onNavigate={handleDesktopNavigate} />
        </div>
        <button 
          className="navbar__contentmobile" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle navigation menu"
        >
          {isSidebarOpen ? <IoClose size={32} color="#7F7F7F" /> : <HiOutlineMenuAlt4 size={32} color="#7F7F7F" />}
        </button>
      </nav>
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  );
}