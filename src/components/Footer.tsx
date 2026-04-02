import { Smartphone, ShieldCheck, HeartHandshake, Mail, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-light">
      <div className="container">
        <div className="trust-badges-container-light">
          <div className="trust-badge-light">
            <div className="badge-icon-bg"><Smartphone size={20} /></div>
            <span>₹100/mo Subscription</span>
          </div>
          <div className="trust-badge-light">
            <div className="badge-icon-bg"><ShieldCheck size={20} /></div>
            <span>Offline-First. Your Data, Your Device.</span>
          </div>
          <div className="trust-badge-light">
            <div className="badge-icon-bg"><HeartHandshake size={20} /></div>
            <span>Made for Indian Merchants</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-social-row">
          <a href="mailto:vyapify@gmail.com" aria-label="Email" className="social-icon-link">
            <Mail size={18} />
          </a>
          <a href="https://x.com/vyapify" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon-link">
            <Twitter size={18} />
          </a>
          <a href="https://www.instagram.com/vyapify.online?igsh=MWI1dG5xZm1ncjlzbA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-link">
            <Instagram size={18} />
          </a>
          <a href="https://www.linkedin.com/company/vyapify/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-link">
            <Linkedin size={18} />
          </a>
        </div>

        <div className="footer-bottom-light">
          <div className="footer-logo-light">
            Vyapify<span className="text-gradient">.</span>
          </div>
          <p className="footer-credits-light">
            © {new Date().getFullYear()} Vyapify Technologies. All rights reserved. <br/> OCR-powered inventory & billing for Indian businesses.
          </p>
          <div className="footer-legal-links">
            <Link to="/terms">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
