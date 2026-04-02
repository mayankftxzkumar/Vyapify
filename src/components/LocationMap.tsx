import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Store } from 'lucide-react';
import './LocationMap.css';

const LocationMap = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      scale: [1, 1.2, 1],
      opacity: [0.6, 1, 0.6],
      transition: { 
        duration: Math.random() * 2 + 2, 
        repeat: Infinity, 
        delay: i * 0.2,
        ease: "easeInOut"
      }
    }));
  }, [controls]);

  // Network nodes representing merchants across India
  const nodes = [
    { x: '30%', y: '25%', size: 24 },  // North/Delhi
    { x: '20%', y: '45%', size: 20 },  // West/Gujarat
    { x: '25%', y: '60%', size: 28 }, // Mumbai
    { x: '45%', y: '50%', size: 18 },  // Central
    { x: '70%', y: '50%', size: 24 },  // East/Kolkata
    { x: '40%', y: '75%', size: 22 },  // Bangalore
    { x: '45%', y: '85%', size: 20 },  // Chennai
    { x: '55%', y: '60%', size: 18 },  // Hyderabad
    { x: '60%', y: '35%', size: 16 },  // UP/Bihar
  ];

  return (
    <section id="scale" className="map-section">
      <div className="container map-header-container">
        <motion.div 
          className="map-text-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pill-button pill-light mb-4">
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#854D0E' }}>
              PAN-INDIA REACH
            </span>
          </div>
          <h2 className="section-title">Built for India. <br /> <span className="font-light text-gradient-yellow">Scaling Everywhere.</span></h2>
          <p className="section-subtitle">Local stores to mega marts. Vyapify is ready for the 1.4 billion market.</p>
        </motion.div>
      </div>

      <motion.div 
        className="map-visualization-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="network-grid"></div>
        
        {/* Abstract connection lines */}
        <svg className="network-lines" width="100%" height="100%">
          <path d="M 30% 25% Q 25% 45% 25% 60%" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
          <path d="M 25% 60% Q 40% 65% 40% 75%" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
          <path d="M 40% 75% Q 50% 60% 70% 50%" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
          <path d="M 30% 25% Q 50% 35% 70% 50%" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
        </svg>

        {/* Pulsing Shop Icons */}
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            custom={i}
            animate={controls}
            className="network-node-shop"
            style={{
              position: 'absolute',
              left: node.x,
              top: node.y,
              transform: 'translate(-50%, -50%)',
              color: 'var(--accent-yellow)',
              filter: `drop-shadow(0 0 10px rgba(234, 179, 8, 0.6))`
            }}
          >
            <Store size={node.size} strokeWidth={2.5} />
          </motion.div>
        ))}

        <div className="map-gradient-overlay"></div>
      </motion.div>
    </section>
  );
};

export default LocationMap;
