import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, FileText, Package } from 'lucide-react';
import './Services.css';

const SVGUIs = [
  // 1. Scanner UI (Light)
  <svg key="scan" viewBox="0 0 240 400" fill="none" className="dynamic-phone-svg">
    <rect x="20" y="20" width="200" height="360" rx="20" fill="#F5F5F7" />
    <rect x="30" y="30" width="180" height="340" rx="12" fill="#FFFFFF" />
    <rect x="50" y="100" width="140" height="140" rx="16" fill="transparent" stroke="#10B981" strokeWidth="2" strokeDasharray="6 6" />
    <line x1="60" y1="170" x2="180" y2="170" stroke="#10B981" strokeWidth="2">
      <animate attributeName="y1" values="110;230;110" dur="2s" repeatCount="indefinite" />
      <animate attributeName="y2" values="110;230;110" dur="2s" repeatCount="indefinite" />
    </line>
    <rect x="40" y="280" width="160" height="60" rx="12" fill="#F9FAFB" />
    <text x="60" y="310" fill="#111" fontSize="12" fontWeight="bold">Parle-G Biscuit</text>
    <text x="60" y="325" fill="#10B981" fontSize="10">Auto-detected</text>
  </svg>,
  
  // 2. Billing UI (Light)
  <svg key="bill" viewBox="0 0 240 400" fill="none" className="dynamic-phone-svg">
    <rect x="20" y="20" width="200" height="360" rx="20" fill="#F5F5F7" />
    <rect x="30" y="30" width="180" height="340" rx="12" fill="#FFFFFF" />
    <rect x="30" y="30" width="180" height="60" rx="12" fill="#EAB308" />
    <text x="50" y="65" fill="#FFF" fontSize="16" fontWeight="bold">INVOICE</text>
    <line x1="50" y1="120" x2="190" y2="120" stroke="#F3F4F6" strokeWidth="2" />
    <text x="50" y="140" fill="#111" fontSize="10" fontWeight="bold">Item 1</text>
    <text x="160" y="140" fill="#111" fontSize="10" fontWeight="bold">₹240</text>
    <text x="50" y="160" fill="#111" fontSize="10" fontWeight="bold">Item 2</text>
    <text x="160" y="160" fill="#111" fontSize="10" fontWeight="bold">₹160</text>
    <line x1="50" y1="180" x2="190" y2="180" stroke="#F3F4F6" strokeWidth="2" />
    <rect x="50" y="200" width="140" height="30" rx="6" fill="#FEF08A" fillOpacity="0.3" stroke="#FDE047" strokeWidth="1" />
    <text x="60" y="218" fill="#CA8A04" fontSize="8">+ 18% GST (Optional)</text>
    <circle cx="170" cy="215" r="6" fill="#CA8A04" />
    <text x="50" y="260" fill="#111" fontSize="14" fontWeight="900">Total: ₹472</text>
    <rect x="40" y="300" width="160" height="40" rx="8" fill="#111" />
    <text x="120" y="324" fill="#FFF" fontSize="12" fontWeight="bold" textAnchor="middle">Share WhatsApp</text>
  </svg>,

  // 3. Stock UI (Light)
  <svg key="stock" viewBox="0 0 240 400" fill="none" className="dynamic-phone-svg">
    <rect x="20" y="20" width="200" height="360" rx="20" fill="#F5F5F7" />
    <rect x="30" y="30" width="180" height="340" rx="12" fill="#FFFFFF" />
    <text x="50" y="70" fill="#111" fontSize="16" fontWeight="bold">Dashboard</text>
    
    <rect x="40" y="90" width="75" height="60" rx="10" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1" />
    <text x="50" y="115" fill="#E11D48" fontSize="16" fontWeight="bold">12</text>
    <text x="50" y="130" fill="#BE123C" fontSize="8">Low Stock</text>
    
    <rect x="125" y="90" width="75" height="60" rx="10" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
    <text x="135" y="115" fill="#059669" fontSize="16" fontWeight="bold">156</text>
    <text x="135" y="130" fill="#047857" fontSize="8">Auto Synced</text>

    <rect x="50" y="220" width="15" height="40" rx="4" fill="#E5E5EA" />
    <rect x="80" y="190" width="15" height="70" rx="4" fill="#E5E5EA" />
    <rect x="110" y="160" width="15" height="100" rx="4" fill="#EAB308" />
    <rect x="140" y="200" width="15" height="60" rx="4" fill="#E5E5EA" />
    <rect x="170" y="140" width="15" height="120" rx="4" fill="#10B981" />
    
    <rect x="40" y="300" width="160" height="40" rx="8" fill="#F9FAFB" stroke="#E5E5EA" strokeWidth="1"/>
    <text x="120" y="324" fill="#111" fontSize="10" fontWeight="bold" textAnchor="middle">⬇ Export CSV</text>
  </svg>
];

const featuresData = [
  {
    title: "Zero-Typing Inventory.",
    highlight: "Powered by OCR.",
    desc: "Don't type. Just scan. Our advanced OCR engine instantly extracts product names, categorizes items visually, and sets up your digital inventory in seconds.",
    color: "text-gradient-green",
    icon: <Camera size={32} />
  },
  {
    title: "Professional Billing.",
    highlight: "18% GST Optional.",
    desc: "Generate stunning PDF invoices on the spot. Toggle GST with one tap. Share directly to your customer's WhatsApp before they even leave the counter.",
    color: "text-gradient-yellow",
    icon: <FileText size={32} />
  },
  {
    title: "Master Your Stock.",
    highlight: "Never run out.",
    desc: "Real-time alerts for low stock. Track customer dues securely. Everything syncs to the cloud automatically and can be exported as CSV for your accountant.",
    color: "text-gradient",
    icon: <Package size={32} />
  }
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Dramatic 3D Parallax mappings for the floating PDF & Elements
  const yPdf = useTransform(scrollYProgress, [0, 1], [-100, 600]);
  const rotatePdf = useTransform(scrollYProgress, [0, 1], [-15, 30]);
  const zPdf = useTransform(scrollYProgress, [0, 1], [100, 300]);

  const yBox = useTransform(scrollYProgress, [0, 0.8], [600, -200]);
  const rotateBox = useTransform(scrollYProgress, [0, 1], [35, -55]);
  const zBox = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const yBarcode = useTransform(scrollYProgress, [0, 1], [-150, 250]);
  const rotateBarcode = useTransform(scrollYProgress, [0, 1], [5, -25]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) setActiveIndex(0);
      else if (latest < 0.66) setActiveIndex(1);
      else setActiveIndex(2);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section id="features" className="scrolltelling-section" ref={containerRef}>
      <div className="container scrolltelling-container">
        
        {/* Sticky Visual Column */}
        <div className="sticky-visual-col">
          <div className="perspective-wrapper">
          
            {/* Parallax Floating Elements */}
            
            {/* Floating PDF Document */}
            <motion.div 
              className="parallax-doc-pdf"
              style={{ y: yPdf, rotateZ: rotatePdf, translateZ: zPdf, left: '-35%', top: '0%' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="pdf-header">
                <span>INVOICE #921</span>
                <div className="pdf-tag">PDF</div>
              </div>
              <div className="pdf-line"></div>
              <div className="pdf-line short"></div>
              <div className="pdf-total">₹8,450</div>
            </motion.div>

            {/* Floating 3D Package Box */}
            <motion.div 
              className="parallax-doc-box"
              style={{ y: yBox, rotateZ: rotateBox, translateZ: zBox, right: '-25%', top: '35%' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Package size={50} color="#10B981" />
              <div className="box-tag">+42 Items</div>
            </motion.div>

            {/* Floating Data Analytics Chart */}
            <motion.div 
              className="parallax-doc-chart"
              style={{ y: yBarcode, rotateZ: rotateBarcode, left: '-20%', bottom: '-5%' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="chart-bars">
                <div className="chart-bar h-1"></div>
                <div className="chart-bar h-3"></div>
                <div className="chart-bar h-2"></div>
                <div className="chart-bar h-4"></div>
              </div>
              <span>Revenue Sync</span>
            </motion.div>

            {/* Main Phone Frame */}
            <div className="sticky-phone-frame">
              <div className="phone-screen-content">
                {SVGUIs.map((ui, idx) => (
                  <motion.div
                    key={idx}
                    className="phone-ui-layer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: activeIndex === idx ? 1 : 0, 
                      scale: activeIndex === idx ? 1 : 0.9,
                      zIndex: activeIndex === idx ? 10 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {ui}
                  </motion.div>
                ))}
              </div>
              <div className={`ambient-glow glow-${activeIndex}`}></div>
            </div>
            
          </div>
        </div>

        {/* Scrolling Text Column */}
        <div className="scrolling-text-col">
          {featuresData.map((feature, idx) => (
            <div 
              key={idx} 
              className={`scroll-text-block ${activeIndex === idx ? 'active' : ''}`}
            >
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h2 className="feature-block-title">
                {feature.title} <br/>
                <span className={feature.color}>{feature.highlight}</span>
              </h2>
              <p className="feature-block-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
