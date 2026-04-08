import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import EarlyAccessCounter from './EarlyAccessCounter';
import './Hero.css';

interface HeroProps {
  onOpenModal: () => void;
  earlyAccessCount: number;
}

const FloatingPhone = () => {
  return (
    <div className="hero-phone-wrapper">
      <svg className="hero-phone-svg" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow-light" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Frame Outer */}
        <rect x="20" y="20" width="260" height="560" rx="36" fill="#F5F5F7" stroke="#E5E5EA" strokeWidth="2" filter="url(#glow-light)"/>
        
        {/* Frame Inner Screen */}
        <rect x="28" y="28" width="244" height="544" rx="30" fill="#FFFFFF"/>
        
        {/* Notch */}
        <path d="M100 28 L100 40 C100 48 108 52 116 52 L184 52 C192 52 200 48 200 40 L200 28 Z" fill="#F5F5F7"/>
        
        {/* UI Elements - Light Theme Scanner */}
        <rect x="44" y="80" width="212" height="60" rx="16" fill="#F9FAFB"/>
        <text x="64" y="115" fill="#111" fontSize="18" fontWeight="800" fontFamily="system-ui" letterSpacing="-0.5">Vyapify</text>
        
        {/* Scanner Canvas */}
        <rect x="44" y="160" width="212" height="240" rx="20" fill="#FAFAFA" stroke="#E5E5EA" strokeWidth="1"/>
        
        {/* Scan lines animated */}
        <line x1="64" y1="280" x2="236" y2="280" stroke="#10B981" strokeWidth="2" opacity="0.8">
          <animate attributeName="y1" values="180;380;180" dur="2s" repeatCount="indefinite" />
          <animate attributeName="y2" values="180;380;180" dur="2s" repeatCount="indefinite" />
        </line>
        
        {/* Detected Item Node */}
        <circle cx="150" cy="280" r="40" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="30;50;30" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <rect x="44" y="420" width="100" height="120" rx="16" fill="#F9FAFB"/>
        <rect x="156" y="420" width="100" height="120" rx="16" fill="#FEF08A" fillOpacity="0.4" stroke="#FDE047" strokeWidth="1"/>
        <text x="60" y="450" fill="#888" fontSize="12" fontWeight="700">TOTAL BILL</text>
        <text x="60" y="480" fill="#111" fontSize="24" fontWeight="900">₹42k</text>
        
        <text x="172" y="450" fill="#CA8A04" fontSize="12" fontWeight="700">GROWTH</text>
        <text x="172" y="480" fill="#854D0E" fontSize="24" fontWeight="900">+14%</text>
      </svg>
    </div>
  );
};

const Hero = ({ onOpenModal, earlyAccessCount }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const rawY1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rawY2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(rawY1, springConfig);
  const y2 = useSpring(rawY2, springConfig);
  const rotateX = useSpring(rawRotate, springConfig);

  return (
    <section className="hero-section" ref={containerRef}>
      {/* Light Clean Grid Background */}
      <div className="hero-grid-bg-light"></div>

      <div className="container hero-content">
        <motion.div 
          className="hero-text-col"
          style={{ y: y1, opacity: rawOpacity }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="badge-dot"></span>
            <span className="badge-text">OCR POWERED SYSTEM</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            vyapify
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Unleash the full potential of your business.<br/>
            Scan products, generate instant GST bills, and master your stock.<br/>
            The future of Indian Retail is here.
          </motion.p>

          <motion.div 
            className="hero-cta-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="btn-primary hero-btn" onClick={onOpenModal}>
              Get Early Access
            </button>
          </motion.div>

          <EarlyAccessCounter realCount={earlyAccessCount} />
        </motion.div>

        <motion.div 
          className="hero-visual-col"
          style={{ y: y2, scale: rawScale, rotateX: rotateX, rotateY: -10, rotateZ: 5 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <FloatingPhone />
          
          <motion.div 
            className="floating-glass-card fc-1"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="fc-icon">⚡️</span>
            <div>
              <strong>150ms</strong>
              <span>Scan Speed</span>
            </div>
          </motion.div>

          <motion.div 
            className="floating-glass-card fc-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span className="fc-icon">🔒</span>
            <div>
              <strong>100%</strong>
              <span>Offline Ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="hero-bottom-fade-light"></div>
    </section>
  );
};

export default Hero;
