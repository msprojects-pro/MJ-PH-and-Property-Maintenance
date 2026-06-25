import { motion } from 'motion/react';
import { Phone, FileText, CheckCircle2, MapPin } from 'lucide-react';
import { HERO_PATH } from '../data';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-20">
      {/* Background Image with optimized loading */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_PATH}
          alt="MJ Plant Hire & Property Maintenance Excavator in Pembrokeshire"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center"
        />
        {/* Multi-layered darkened construction overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full text-white">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-yellow/15 border border-primary-yellow/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary-yellow uppercase tracking-wider mb-6"
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>Fishguard, Pembrokeshire & South West Wales</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight"
          >
            MJ Plant Hire <br />
            <span className="text-primary-yellow">& Property Maintenance</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl mt-6 max-w-2xl font-light leading-relaxed"
          >
            Professional plant hire services with or without CPCS operator, combined with premium interior and exterior property maintenance. Always reliable, locally owned, and operating 24/7.
          </motion.p>

          {/* Key Trust Checkmarks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-xl"
          >
            {[
              'Plant Hire (With or Without Operator)',
              'All Groundworks & Landscaping',
              'Internal & External Painting',
              'Roofing, Plastering & Maintenance'
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-gray-200">
                <CheckCircle2 className="h-5 w-5 text-primary-yellow shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            {/* Free Quote Request Button */}
            <button
              id="hero-quote-cta"
              onClick={onOpenQuote}
              className="bg-primary-yellow hover:bg-primary-yellow-hover text-gray-950 font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg transition-transform hover:scale-102 cursor-pointer duration-200"
            >
              <FileText className="h-5 w-5" />
              <span>Get a Free Quote</span>
            </button>

            {/* Direct Call Button */}
            <a
              id="hero-phone-cta"
              href="tel:+447310550352"
              className="bg-gray-900 border border-gray-800 hover:border-gray-700 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md transition-all duration-200"
            >
              <Phone className="h-5 w-5 text-primary-yellow animate-bounce" />
              <span>Call +44 7310 550352</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Angle/Transition Overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-950 to-transparent z-10" />
    </section>
  );
}
