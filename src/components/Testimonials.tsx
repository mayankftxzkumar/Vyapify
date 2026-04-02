import { motion } from 'framer-motion';
import { Smartphone, IndianRupee, Wifi, WifiOff, BarChart3, FileDown } from 'lucide-react';
import './Testimonials.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

// SVG phone mockup illustrations for each feature
const ScanIllustration = () => (
  <div className="feature-illustration scan-illustration">
    <svg viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone frame */}
      <rect x="30" y="10" width="180" height="300" rx="24" fill="#1C1C1E" stroke="#333" strokeWidth="1"/>
      <rect x="38" y="20" width="164" height="280" rx="18" fill="#F8F9FA"/>
      {/* Camera notch */}
      <rect x="90" y="14" width="60" height="6" rx="3" fill="#333"/>
      {/* Header bar */}
      <rect x="38" y="20" width="164" height="44" rx="18" fill="#FFFFFF"/>
      <text x="62" y="47" fill="#111" fontSize="11" fontWeight="700" fontFamily="system-ui">Vyapify</text>
      <circle cx="178" cy="42" r="8" fill="#F2F2F7"/>
      {/* Camera viewfinder */}
      <rect x="52" y="76" width="136" height="110" rx="10" fill="#E8F5E9"/>
      {/* Corners */}
      <path d="M62 88 L62 80 L72 80" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M168 80 L178 80 L178 88" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M178 174 L178 182 L168 182" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M72 182 L62 182 L62 174" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Scan line animated */}
      <line x1="68" y1="130" x2="172" y2="130" stroke="#10B981" strokeWidth="1.5" opacity="0.6">
        <animate attributeName="y1" values="86;178;86" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="86;178;86" dur="2.5s" repeatCount="indefinite"/>
      </line>
      {/* Product text detected */}
      <rect x="80" y="105" width="80" height="7" rx="3.5" fill="#10B981" opacity="0.25"/>
      <rect x="90" y="118" width="60" height="5" rx="2.5" fill="#10B981" opacity="0.15"/>
      <rect x="85" y="145" width="70" height="7" rx="3.5" fill="#10B981" opacity="0.25"/>
      {/* Auto-detected badge */}
      <rect x="62" y="198" width="116" height="24" rx="12" fill="#E8F5E9"/>
      <text x="82" y="214" fill="#10B981" fontSize="8" fontWeight="700">✨ AUTO-DETECTED</text>
      {/* Form fields */}
      <rect x="52" y="234" width="136" height="22" rx="6" fill="#F5F5F5"/>
      <text x="60" y="249" fill="#888" fontSize="7">Parle-G Biscuit</text>
      <rect x="52" y="264" width="64" height="22" rx="6" fill="#F5F5F5"/>
      <text x="60" y="279" fill="#888" fontSize="7">₹10</text>
      <rect x="124" y="264" width="64" height="22" rx="6" fill="#F5F5F5"/>
      <text x="132" y="279" fill="#888" fontSize="7">Qty: 50</text>
    </svg>
  </div>
);

const BillingIllustration = () => (
  <div className="feature-illustration billing-illustration">
    <svg viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone frame */}
      <rect x="30" y="10" width="180" height="300" rx="24" fill="#1C1C1E" stroke="#333" strokeWidth="1"/>
      <rect x="38" y="20" width="164" height="280" rx="18" fill="#F8F9FA"/>
      <rect x="90" y="14" width="60" height="6" rx="3" fill="#333"/>
      {/* Bill Modal */}
      <rect x="42" y="55" width="156" height="240" rx="16" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="0.5"/>
      {/* Title */}
      <text x="56" y="80" fill="#111" fontSize="12" fontWeight="700" fontFamily="system-ui">New Bill</text>
      {/* Total */}
      <text x="88" y="98" fill="#8E8E93" fontSize="7" fontWeight="600" letterSpacing="1">TOTAL AMOUNT</text>
      <text x="72" y="126" fill="#111" fontSize="26" fontWeight="900" fontFamily="system-ui">₹2,450</text>
      {/* GST toggle */}
      <rect x="56" y="140" width="128" height="20" rx="6" fill="#F5F5F5"/>
      <text x="64" y="153" fill="#555" fontSize="7" fontWeight="600">APPLY 18% GST</text>
      <rect x="160" y="144" width="18" height="10" rx="5" fill="#10B981"/>
      <circle cx="173" cy="149" r="4" fill="white"/>
      {/* Items */}
      <text x="56" y="174" fill="#8E8E93" fontSize="6" fontWeight="700" letterSpacing="1">ITEMS</text>
      <line x1="56" y1="178" x2="184" y2="178" stroke="#F2F2F7" strokeWidth="0.5"/>
      <text x="56" y="192" fill="#111" fontSize="8" fontWeight="600">Parle-G Biscuit</text>
      <text x="160" y="192" fill="#111" fontSize="8" fontWeight="600">₹500</text>
      <text x="56" y="202" fill="#888" fontSize="6">50 × ₹10.00</text>
      <text x="56" y="218" fill="#111" fontSize="8" fontWeight="600">Amul Butter 500g</text>
      <text x="160" y="218" fill="#111" fontSize="8" fontWeight="600">₹290</text>
      <text x="56" y="228" fill="#888" fontSize="6">1 × ₹290.00</text>
      {/* Buttons */}
      <rect x="52" y="242" width="136" height="18" rx="8" fill="#E8F5E9"/>
      <text x="86" y="254" fill="#10B981" fontSize="7" fontWeight="700">Share Receipt</text>
      <rect x="52" y="264" width="136" height="18" rx="8" fill="#1C1C1E"/>
      <text x="86" y="276" fill="white" fontSize="7" fontWeight="700">Mark as Paid</text>
    </svg>
  </div>
);

const StockIllustration = () => (
  <div className="feature-illustration stock-illustration">
    <svg viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone frame */}
      <rect x="30" y="10" width="180" height="300" rx="24" fill="#1C1C1E" stroke="#333" strokeWidth="1"/>
      <rect x="38" y="20" width="164" height="280" rx="18" fill="#F8F9FA"/>
      <rect x="90" y="14" width="60" height="6" rx="3" fill="#333"/>
      {/* Header */}
      <text x="56" y="52" fill="#111" fontSize="14" fontWeight="800" fontFamily="system-ui">Stock</text>
      {/* Stats Row */}
      <rect x="48" y="62" width="72" height="40" rx="10" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="0.5"/>
      <text x="56" y="80" fill="#EF4444" fontSize="16" fontWeight="900">12</text>
      <text x="56" y="94" fill="#888" fontSize="6" fontWeight="500">Low Stock</text>
      <rect x="128" y="62" width="72" height="40" rx="10" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="0.5"/>
      <text x="136" y="80" fill="#10B981" fontSize="16" fontWeight="900">156</text>
      <text x="136" y="94" fill="#888" fontSize="6" fontWeight="500">In Stock</text>
      {/* Low stock items */}
      <text x="52" y="122" fill="#EF4444" fontSize="7" fontWeight="700" letterSpacing="0.5">⚠ LOW STOCK</text>
      {/* Item 1 */}
      <rect x="48" y="128" width="144" height="32" rx="8" fill="#FFF" stroke="#FEE2E2" strokeWidth="0.5"/>
      <circle cx="64" cy="144" r="10" fill="#FEF2F2"/>
      <text x="64" y="147" fill="#EF4444" fontSize="8" textAnchor="middle" fontWeight="700">A</text>
      <text x="80" y="140" fill="#111" fontSize="8" fontWeight="600">Amul Butter 500g</text>
      <text x="80" y="150" fill="#888" fontSize="6">Only 2 left</text>
      <rect x="162" y="136" width="24" height="14" rx="7" fill="#FEF2F2"/>
      <text x="168" y="146" fill="#EF4444" fontSize="7" fontWeight="700">2</text>
      {/* Item 2 */}
      <rect x="48" y="166" width="144" height="32" rx="8" fill="#FFF" stroke="#FEE2E2" strokeWidth="0.5"/>
      <circle cx="64" cy="182" r="10" fill="#FEF2F2"/>
      <text x="64" y="185" fill="#EF4444" fontSize="8" textAnchor="middle" fontWeight="700">T</text>
      <text x="80" y="178" fill="#111" fontSize="8" fontWeight="600">Tata Salt 1kg</text>
      <text x="80" y="188" fill="#888" fontSize="6">Only 3 left</text>
      <rect x="162" y="174" width="24" height="14" rx="7" fill="#FEF2F2"/>
      <text x="168" y="184" fill="#EF4444" fontSize="7" fontWeight="700">3</text>
      {/* In stock header */}
      <text x="52" y="220" fill="#10B981" fontSize="7" fontWeight="700" letterSpacing="0.5">✓ IN STOCK</text>
      {/* Item 3 */}
      <rect x="48" y="226" width="144" height="32" rx="8" fill="#FFF" stroke="#E5E5EA" strokeWidth="0.5"/>
      <circle cx="64" cy="242" r="10" fill="#F0F9FF"/>
      <text x="64" y="245" fill="#3B82F6" fontSize="8" textAnchor="middle" fontWeight="700">P</text>
      <text x="80" y="238" fill="#111" fontSize="8" fontWeight="600">Parle-G Biscuit</text>
      <text x="80" y="248" fill="#888" fontSize="6">₹10 per piece</text>
      <rect x="158" y="234" width="28" height="14" rx="7" fill="#F0FDF4"/>
      <text x="164" y="244" fill="#10B981" fontSize="7" fontWeight="700">50</text>
      {/* Export button */}
      <rect x="48" y="268" width="144" height="22" rx="8" fill="#F8F9FA" stroke="#E5E5EA" strokeWidth="0.5"/>
      <text x="84" y="282" fill="#555" fontSize="7" fontWeight="600">📊 Export CSV</text>
    </svg>
  </div>
);

const showcaseData = [
  {
    id: 1,
    stat: "2 Seconds",
    title: "Scan → Add → Done",
    desc: "Point camera at any product. OCR reads the name, picks the category. Your inventory fills itself.",
    illustration: <ScanIllustration />,
  },
  {
    id: 2,
    stat: "PDF + GST",
    title: "Professional Invoices",
    desc: "Generate beautiful PDF bills with optional 18% GST. Share via WhatsApp. No printer needed.",
    illustration: <BillingIllustration />,
  },
  {
    id: 3,
    stat: "Zero Stockouts",
    title: "Never Run Out Again",
    desc: "Real-time low-stock alerts. Due collection tracking. CSV export. Your entire business in your pocket.",
    illustration: <StockIllustration />,
  }
];

const Testimonials = () => {
  return (
    <section id="how-it-works" className="testimonials-section container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="section-title">Everything You Need. <br /><span className="text-gradient font-light">One Powerful App.</span></h2>
        <p className="section-subtitle">No laptop. No register. No Excel sheets. Just your phone and Vyapify.</p>
      </motion.div>

      <motion.div
        className="testimonials-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {showcaseData.map((item) => (
          <motion.div
            key={item.id}
            className="showcase-card"
            variants={cardVariants}
          >
            <div className="showcase-illustration-wrapper">
              {item.illustration}
            </div>
            <div className="showcase-content">
              <span className="showcase-stat">{item.stat}</span>
              <h3 className="showcase-title">{item.title}</h3>
              <p className="showcase-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Extra feature pills */}
      <motion.div 
        className="feature-pills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="feature-pill"><WifiOff size={14}/> Works Offline</div>
        <div className="feature-pill"><Wifi size={14}/> Auto Cloud Sync</div>
        <div className="feature-pill"><IndianRupee size={14}/> 100% Free</div>
        <div className="feature-pill"><Smartphone size={14}/> Android App</div>
        <div className="feature-pill"><BarChart3 size={14}/> Sales Dashboard</div>
        <div className="feature-pill"><FileDown size={14}/> CSV Export</div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
