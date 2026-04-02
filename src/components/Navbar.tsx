import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar = ({ onOpenModal }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="navbar-wrapper"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className={`navbar ${scrolled ? 'scrolled floating-island' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">vyapify</span>
          </div>
          
          <div className="nav-links">
            <a href="#features" className="nav-link">
              <span className="link-text">FEATURES</span>
              <div className="link-underline"></div>
            </a>
            <a href="#how-it-works" className="nav-link">
              <span className="link-text">WORKFLOW</span>
              <div className="link-underline"></div>
            </a>
            <a href="#scale" className="nav-link">
              <span className="link-text">SCALE</span>
              <div className="link-underline"></div>
            </a>
          </div>
          
          <div className="nav-actions">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="btn-primary nav-cta">Download App</a>
            <button className="btn-secondary nav-cta-secondary hide-mobile" onClick={onOpenModal}>Support</button>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
