import { ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-light">
      <div className="container">
        <div className="trust-badges-container-light">
          <div className="trust-badge-light">
            <div className="badge-icon-bg"><Zap size={20} /></div>
            <span>AI-Powered Growth</span>
          </div>
          <div className="trust-badge-light">
            <div className="badge-icon-bg"><ShieldCheck size={20} /></div>
            <span>Results in 30 Days</span>
          </div>
          <div className="trust-badge-light">
            <div className="badge-icon-bg"><HeartHandshake size={20} /></div>
            <span>Dedicated Local Support</span>
          </div>
        </div>

        <div className="footer-bottom-light">
          <div className="footer-logo-light">
            Vyapify<span className="text-gradient">.</span>
          </div>
          <p className="footer-credits-light">
            © {new Date().getFullYear()} Vyapify — AI Digital Growth Agency, Ranchi. All rights reserved. <br/> Websites, Ads & SEO for local businesses in Jharkhand.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
