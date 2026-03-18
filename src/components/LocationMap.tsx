import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import './LocationMap.css';

// Fix for default leaflet marker icon in React
delete (L.Icon.Default as any).prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom glowing icon based on requirement
const glowingIcon = new L.DivIcon({
  className: 'custom-glowing-marker-light',
  html: `<div class="marker-core-light"></div><div class="marker-glow-light pulse-light"></div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16]
});

// Ranchi coordinates
const RANCHI_POS: [number, number] = [23.3441, 85.3096];

const LocationMap = () => {
  return (
    <section id="ranchi" className="map-section">
      <div className="container map-header-container">
        <motion.div 
          className="map-text-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pill-button pill-light mb-4">
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue)' }}>
              <MapPin size={16}/> Digital marketing agency in Ranchi, Jharkhand
            </span>
          </div>
          <h2 className="section-title">Built for Ranchi. <br /> <span className="font-light" style={{color: 'var(--text-secondary)'}}>Scaled by AI.</span></h2>
        </motion.div>
      </div>

      <motion.div 
        className="map-wrapper"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <MapContainer 
          center={RANCHI_POS} 
          zoom={13} 
          scrollWheelZoom={false}
          className="leaflet-map-container"
          zoomControl={false}
          attributionControl={false}
        >
          {/* Positron light tiles for a clean white map look */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <Marker position={RANCHI_POS} icon={glowingIcon}>
            <Popup className="premium-popup-light">
              <strong>Vyapify HQ — Ranchi</strong><br />
              AI-powered growth for local businesses.
            </Popup>
          </Marker>
        </MapContainer>
        
        {/* Soft Decorative Map Overlay */}
        <div className="map-gradient-overlay-light"></div>
      </motion.div>
    </section>
  );
};

export default LocationMap;
