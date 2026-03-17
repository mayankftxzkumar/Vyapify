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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled glass-card' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-container">
        <div className="nav-logo">
          <span className="logo-text">vyapify</span>
        </div>
        
        <div className="nav-links">
          <a href="#services" className="nav-link">SERVICES</a>
          <a href="#results" className="nav-link">RESULTS</a>
          <a href="#ranchi" className="nav-link">RANCHI</a>
        </div>
        
        <div className="nav-actions">
          <button className="btn-primary" onClick={onOpenModal}>Experience Vyapify</button>
          <button className="btn-secondary hide-mobile" onClick={onOpenModal}>Talk to Sales</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
