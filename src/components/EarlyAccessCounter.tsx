import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users } from 'lucide-react';
import './EarlyAccessCounter.css';

interface EarlyAccessCounterProps {
  realCount: number;
}

const BASE_COUNT = 2847; // Inflated base for social proof

const EarlyAccessCounter = ({ realCount }: EarlyAccessCounterProps) => {
  const totalCount = BASE_COUNT + realCount;
  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve
      const progress = step / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(easedProgress * totalCount);
      setDisplayCount(val);

      if (step >= steps) {
        setDisplayCount(totalCount);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, totalCount]);

  return (
    <motion.div
      ref={ref}
      className="ea-counter"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="ea-counter-inner">
        <div className="ea-counter-pulse" />
        <Users size={14} className="ea-counter-icon" />
        <span className="ea-counter-number">{displayCount.toLocaleString('en-IN')}</span>
        <span className="ea-counter-label">people joined early access</span>
      </div>
    </motion.div>
  );
};

export default EarlyAccessCounter;
