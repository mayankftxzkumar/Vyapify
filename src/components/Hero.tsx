import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

interface HeroProps {
  onOpenModal: () => void;
}

const RotatingText = () => {
  const words = ["in Ranchi", "with AI"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000); // Wait 4 seconds before swapping
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="rotating-text-wrapper">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          className={`rotating-text ${index === 0 ? 'text-ranchi' : 'text-ai'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="badge-text text-gradient">AI platform for local businesses</span>
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Grow your Dhandha <br className="hide-mobile" />
          <RotatingText />
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Build your online presence with Vyapify at half the cost <br className="hide-mobile" /> Grow 10x Ranchi
        </motion.p>

        <motion.div 
          className="hero-cta-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="btn-primary hero-btn" onClick={onOpenModal}>
            Experience Vyapify
          </button>
        </motion.div>

        <motion.div 
          className="trust-banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="trust-text">RANCHI BUILDS WITH VYAPIFY</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
