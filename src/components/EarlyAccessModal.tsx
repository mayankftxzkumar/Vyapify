import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';
import './EarlyAccessModal.css';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1483590099878019193/EEpxqSCXiGU5HYgrbAl5kbxm9a-am77rxw0gMWv62GmiAUz1yZQpeMmVlfWDkr5YW91c";

const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !isValidEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        content: `🚀 **NEW EARLY ACCESS SIGNUP** 🚀\n\n**Email:** \`${email}\`\n**Source:** Vyapify.online "Get Early Access" Button\n**Time:** <t:${Math.floor(Date.now() / 1000)}:F>`,
        username: "Vyapify Early Access Bot",
        avatar_url: "https://vyapify.online/favicon.ico"
      };

      const res = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Failed to register");

      setIsSuccess(true);
      onSuccess();
      toast.success("You're on the list! 🎉");

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setEmail('');
      }, 3500);

    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          <motion.div
            className="ea-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="ea-container">
            <motion.div
              className="ea-modal"
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative gradient blob */}
              <div className="ea-gradient-blob" />

              <button className="ea-close-btn" onClick={onClose} disabled={isSubmitting}>
                <X size={18} />
              </button>

              <div className="ea-content">
                {!isSuccess ? (
                  <>
                    <div className="ea-header">
                      <div className="ea-icon-badge">
                        <Sparkles size={24} />
                      </div>
                      <h2>Get Early Access</h2>
                      <p>
                        Be the first to know when Vyapify launches on the Play Store. 
                        We'll send you a notification — no spam, ever.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="ea-form">
                      <div className="ea-input-group">
                        <Mail className="ea-input-icon" size={20} />
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isSubmitting}
                          autoFocus
                          id="early-access-email"
                        />
                      </div>

                      <button
                        type="submit"
                        className={`btn-primary ea-submit-btn ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting || !isValidEmail(email)}
                        id="early-access-submit"
                      >
                        {isSubmitting ? (
                          <div className="ea-spinner" />
                        ) : (
                          <>
                            Notify Me <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </form>

                    <p className="ea-footer-note">
                      🔒 We respect your privacy. Unsubscribe anytime.
                    </p>
                  </>
                ) : (
                  <div className="ea-success-state">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                      className="ea-success-icon"
                    >
                      <CheckCircle2 size={52} />
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      You're on the list!
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      We'll notify you the moment Vyapify goes live. Stay tuned! 🎉
                    </motion.p>
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

export default EarlyAccessModal;
