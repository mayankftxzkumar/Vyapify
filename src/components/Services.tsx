import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Store, Layout, MapPin } from 'lucide-react';
import './Services.css';

// Premium VFX SVG Components
const AdsVFX = () => (
  <svg className="vfx-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <circle cx="20" cy="20" r="60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <circle cx="180" cy="180" r="80" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <circle cx="150" cy="30" r="30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <path d="M 20 20 L 150 30 L 180 180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4"/>
  </svg>
);

const GridVFX = () => (
  <svg className="vfx-svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

const WaveVFX = () => (
  <svg className="vfx-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M0 50 C 50 100, 150 0, 200 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
    <path d="M0 80 C 50 130, 150 30, 200 80" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
    <path d="M0 110 C 50 160, 150 60, 200 110" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
  </svg>
);

const localServicesData = [
  {
    title: "AI Ads That Convert",
    desc: "Custom AI ad campaigns designed for gyms, cafes, salons & clinics in Ranchi. Get real footfall, not just clicks. Lead generation for small business — automated.",
    actionText: "Start growing",
    icon: <Store size={28} strokeWidth={1.5} />,
    color: "#3B82F6",
    vfx: <AdsVFX />
  },
  {
    title: "High-Converting Websites",
    desc: "Premium website development in Ranchi — beautiful, ultra-fast landing pages built to turn visitors into paying customers. No templates. No fluff.",
    actionText: "Build my site",
    icon: <Layout size={28} strokeWidth={1.5} />,
    color: "#F59E0B",
    vfx: <GridVFX />
  },
  {
    title: "Local SEO Domination",
    desc: "Own every 'near me' search in Ranchi. Our AI-driven SEO puts your business on top of Google — at 75% less cost than traditional agencies.",
    actionText: "Rank #1 locally",
    icon: <MapPin size={28} strokeWidth={1.5} />,
    color: "#10B981",
    vfx: <WaveVFX />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const PremiumLocalCard = ({ service }: { service: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Subtle 3D tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);
  
  // 2D Parallax for the inner content (Fixes Safari vanishing bug by removing preserve-3d)
  const contentX = useTransform(mouseXSpring, [-0.5, 0.5], ["-8px", "8px"]);
  const contentY = useTransform(mouseYSpring, [-0.5, 0.5], ["-8px", "8px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="expert-card-wrapper"
      variants={{
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
      }}
      style={{ rotateX, rotateY }}
    >
      <div className="expert-card-bg">
        <div className="vfx-container">
          {service.vfx}
        </div>
        <div className="expert-card-glow"></div>
      </div>
      
      <motion.div 
        className="expert-card-content"
        style={{ x: contentX, y: contentY }} /* Pure x/y translation for parallax */
      >
        <div className="card-top-icon" style={{ color: service.color }}>
          {service.icon}
        </div>
        <div className="card-text-container">
          <h3 className="expert-card-title">{service.title}</h3>
          <p className="expert-card-desc">{service.desc}</p>
        </div>
        
        <button className="pill-button card-action-btn">
          {service.actionText}
        </button>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="platform-section container">
      <motion.div 
        className="platform-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="platform-title">Your Growth Engine, Powered by AI</h2>
        <div className="status-indicator">
          <span className="live-dot"></span> LIVE IN RANCHI
        </div>
      </motion.div>

      <motion.div 
        className="expert-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {localServicesData.map((service, index) => (
          <PremiumLocalCard key={index} service={service} />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
