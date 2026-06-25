import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ClipboardPen } from 'lucide-react';

// Import our modular components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesGrid from './components/ServicesGrid';
import GalleryFilter from './components/GalleryFilter';
import TestimonialsSlider from './components/TestimonialsSlider';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('plant-hire');

  const openQuoteModal = (serviceId: string = 'plant-hire') => {
    setPreselectedService(serviceId);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 font-sans selection:bg-primary-yellow selection:text-gray-950 text-gray-100">
      
      {/* 1. Header/Sticky Navigation */}
      <Navbar onOpenQuote={() => openQuoteModal('plant-hire')} />

      {/* 2. Powerful Immersive Hero Section */}
      <Hero onOpenQuote={() => openQuoteModal('plant-hire')} />

      {/* 3. About Us Section */}
      <AboutUs />

      {/* 4. Filterable/Responsive Services Grid */}
      <ServicesGrid onOpenQuoteWithService={openQuoteModal} />

      {/* 5. Elegant Showcase Gallery */}
      <GalleryFilter onOpenQuote={() => openQuoteModal('plant-hire')} />

      {/* 6. Testimonials Slider */}
      <TestimonialsSlider />

      {/* 7. Contact Info & Interactive Map & Form */}
      <ContactSection />

      {/* 8. Construction Vibe Footer */}
      <Footer onOpenQuote={() => openQuoteModal('plant-hire')} />

      {/* 9. Dynamic Floating Call/Quote Buttons (Visible only on Mobile & Tablet) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3 lg:hidden">
        {/* Floating Quote Trigger */}
        <motion.button
          id="floating-quote-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openQuoteModal('plant-hire')}
          className="bg-gray-900 border border-gray-800 text-primary-yellow p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-gray-800"
          aria-label="Request Quote"
        >
          <ClipboardPen className="h-5.5 w-5.5" />
        </motion.button>

        {/* Floating Phone Trigger */}
        <motion.a
          id="floating-call-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="tel:+447310550352"
          className="bg-primary-yellow text-gray-950 p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-yellow-400 font-bold"
          aria-label="Call Now"
        >
          <Phone className="h-5.5 w-5.5 animate-bounce" />
        </motion.a>
      </div>

      {/* 10. Request Quote Modal Overlay */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
        initialService={preselectedService}
      />
    </div>
  );
}
