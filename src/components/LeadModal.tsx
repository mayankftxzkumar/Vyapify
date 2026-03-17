import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import './LeadModal.css';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1483590099878019193/EEpxqSCXiGU5HYgrbAl5kbxm9a-am77rxw0gMWv62GmiAUz1yZQpeMmVlfWDkr5YW91c";

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!phone || phone.length < 10) {
      toast.error('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        content: `🚨 **NEW LEAD ALERT** 🚨\n\n**Phone Number:** \`${phone}\`\n**Source:** Vyapify.online "Talk to Sales" Button\n**Time:** <t:${Math.floor(Date.now() / 1000)}:F>`,
        username: "Vyapify Leads Bot",
        avatar_url: "https://vyapify.online/favicon.ico"
      };

      const res = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if(!res.ok) throw new Error("Discord API rejected request");

      setIsSuccess(true);
      toast.success('We received your number!');
      
      // Auto close after success
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setPhone('');
      }, 3000);

    } catch (error) {
      toast.error('Failed to send. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          {/* Backdrop Blur */}
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Container */}
          <div className="modal-container">
            <motion.div 
              className="lead-modal"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
            >
              <button className="modal-close-btn" onClick={onClose} disabled={isSubmitting}>
                <X size={20} />
              </button>

              <div className="modal-content">
                {!isSuccess ? (
                  <>
                    <div className="modal-header">
                      <h2>Let's Scale Your Business</h2>
                      <p>Drop your phone number below and our AI growth expert will call you shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="modal-form">
                      <div className="input-group">
                        <Phone className="input-icon" size={20} />
                        <input 
                          type="tel" 
                          placeholder="Enter your phone number..." 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} // Numbers only
                          disabled={isSubmitting}
                          autoFocus
                        />
                      </div>

                      <button 
                        type="submit" 
                        className={`btn-primary modal-submit-btn ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting || phone.length < 10}
                      >
                        {isSubmitting ? (
                          <div className="loader-spinner"></div>
                        ) : (
                          <>
                            Get a Callback <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </form>
                    
                    <p className="modal-footer-note">We hate spam as much as you do. Pure business growth.</p>
                  </>
                ) : (
                  <div className="modal-success-state">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="success-icon-wrapper"
                    >
                      <CheckCircle2 size={48} color="#00D364" />
                    </motion.div>
                    <h2>We've got it!</h2>
                    <p>Our team has been notified and will be in touch with you shortly.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;
