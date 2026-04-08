import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import EarlyAccessModal from './components/EarlyAccessModal';
import Legal from './components/Legal';
import { Toaster } from 'react-hot-toast';
import './App.css';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [earlyAccessCount, setEarlyAccessCount] = useState(0);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} earlyAccessCount={earlyAccessCount} />
        <Services />
        <Testimonials />
        <LocationMap />
      </main>
      <Footer />
      <EarlyAccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => setEarlyAccessCount(prev => prev + 1)}
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Legal />} />
        <Route path="/privacy" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
