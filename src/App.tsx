import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Toaster position="top-center" />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Services />
        <Testimonials />
        <LocationMap />
      </main>
      <Footer />
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
