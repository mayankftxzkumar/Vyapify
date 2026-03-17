import { ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-light">
      <div className="container">
        <div className="trust-badges-container-light">
          <div className="trust-badge-light">
            <div className="badge-icon-bg"><Zap size={20} /></div>
            <span>AI-Powered Solutions</span>
          </div>
          <div className="trust-badge-light">
            <div className="badge-icon-bg"><ShieldCheck size={20} /></div>
            <span>Fast Delivery</span>
          </div>
          <div className="trust-badge-light">
            <div className="badge-icon-bg"><HeartHandshake size={20} /></div>
            <span>24/7 Local Support</span>
          </div>
        </div>

        <div className="footer-bottom-light">
          <div className="footer-logo-light">
            Vyapify<span className="text-gradient">.</span>
          </div>
          <p className="footer-credits-light">
            © {new Date().getFullYear()} Vyapify Digital Growth Agency. All rights reserved. <br/> Built for Ranchi Businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
