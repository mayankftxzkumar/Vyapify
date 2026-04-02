import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ArrowRight, CheckCircle2, User, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import './LeadModal.css';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1483590099878019193/EEpxqSCXiGU5HYgrbAl5kbxm9a-am77rxw0gMWv62GmiAUz1yZQpeMmVlfWDkr5YW91c";

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (!phone || phone.length < 10) {
      toast.error('Please enter a valid phone number');
      return;
    }
    if (!message.trim()) {
      toast.error('Please describe your issue or question');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        content: `📩 **NEW SUPPORT REQUEST** 📩\n\n**Name:** \`${name}\`\n**Phone Number:** \`${phone}\`\n**Message:** \`${message}\`\n**Source:** Vyapify.online "Talk to Sales" Button\n**Time:** <t:${Math.floor(Date.now() / 1000)}:F>`,
        username: "Vyapify Support Bot",
        avatar_url: "https://vyapify.online/favicon.ico"
      };

      const res = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if(!res.ok) throw new Error("Discord API rejected request");

      setIsSuccess(true);
      toast.success('We received your message!');
      
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setName('');
        setPhone('');
        setMessage('');
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
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <div className="modal-container">
            <motion.div 
              className="lead-modal"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={onClose} disabled={isSubmitting}>
                <X size={20} />
              </button>

              <div className="modal-content">
                {!isSuccess ? (
                  <>
                    <div className="modal-header">
                      <h2>Talk to Us</h2>
                      <p>Have a question, bug report, or feature request? Our support team will get back to you within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="modal-form">
                      <div className="input-group">
                        <User className="input-icon" size={20} />
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          disabled={isSubmitting}
                          autoFocus
                        />
                      </div>

                      <div className="input-group">
                        <Phone className="input-icon" size={20} />
                        <input 
                          type="tel" 
                          placeholder="Your Phone Number" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="input-group">
                        <MessageCircle className="input-icon" size={20} />
                        <input 
                          type="text" 
                          placeholder="How can we help you?" 
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          disabled={isSubmitting}
                        />
                      </div>

                      <button 
                        type="submit" 
                        className={`btn-primary modal-submit-btn ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting || phone.length < 10 || !name.trim() || !message.trim()}
                      >
                        {isSubmitting ? (
                          <div className="loader-spinner"></div>
                        ) : (
                          <>
                            Send Message <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </form>
                    
                    <p className="modal-footer-note">Your data stays private. We only use it to help you.</p>
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
                    <h2>Message Sent!</h2>
                    <p>Our support team has been notified. Expect a response within 24 hours.</p>
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
