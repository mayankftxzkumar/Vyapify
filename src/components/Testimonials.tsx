import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: "Ranchi Fitness Studio",
    result: "300% ROI in 2 Months",
    desc: "From empty treadmills to waitlists using AI-optimized local ads.",
    videoUrl: "/videos/ranchi-fitness.mp4",
    videoPosition: "top center"
  },
  {
    id: 2,
    name: "Downtown Cafe",
    result: "50+ Daily Walk-ins",
    desc: "Local SEO and Instagram campaigns transformed their footfall entirely.",
    videoUrl: "/videos/downtown-cafe.mp4",
    videoPosition: "center center"
  },
  {
    id: 3,
    name: "Local Restaurant",
    result: "Fully Booked Weekends",
    desc: "Targeted food ads and local SEO generated consistent online reservations.",
    videoUrl: "/videos/restaurant.mp4",
    videoPosition: "center center"
  }
];

// Slow reveal animations for Apple-like feel
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

const Testimonials = () => {
  return (
    <section id="results" className="testimonials-section container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="section-title">Real Results for <br /><span className="text-gradient font-light">Local Businesses.</span></h2>
        <p className="section-subtitle">We don't do vanity metrics. We focus strictly on revenue and footfall.</p>
      </motion.div>

      <motion.div 
        className="testimonials-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {testimonialsData.map((testimonial) => (
          <VideoCard key={testimonial.id} data={testimonial} />
        ))}
      </motion.div>
    </section>
  );
};

const VideoCard = ({ data }: { data: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    if(videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(_e => {
        // Fallback to muted autoplay if browser blocks unmuted playback
        if(videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(e => console.log(e));
        }
      });
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if(videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  return (
    <motion.div 
      className="video-card-container"
      variants={cardVariants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="video-wrapper">
        <video 
          ref={videoRef}
          src={data.videoUrl} 
          muted={!isPlaying}
          loop 
          playsInline
          className={`testimonial-video ${isPlaying ? 'playing' : ''}`}
          style={{ objectPosition: data.videoPosition }}
        />
        {!isPlaying && (
          <div className="play-overlay">
            <div className="play-btn">
              <Play fill="currentColor" size={24} />
            </div>
          </div>
        )}
      </div>

      <div className="card-content-light">
        <h3 className="result-text">{data.result}</h3>
        <h4 className="client-name">{data.name}</h4>
        <p className="client-desc">{data.desc}</p>
      </div>
    </motion.div>
  );
};

export default Testimonials;
