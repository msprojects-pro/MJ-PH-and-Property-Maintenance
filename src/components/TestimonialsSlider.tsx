import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Structural background details */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 h-80 w-80 rounded-full bg-primary-yellow/3 blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 h-80 w-80 rounded-full bg-yellow-600/3 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-yellow">
            Customer Satisfaction
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            What Our Clients Say
          </h2>
          <div className="h-1.5 w-20 bg-primary-yellow mx-auto rounded-full" />
          <p className="text-gray-400 text-sm">
            Read real feedback from homeowners, builders, and businesses across South West Wales who trust MJ for high-quality machinery and property maintenance.
          </p>
        </div>

        {/* Carousel Slider Card */}
        <div className="relative bg-gray-950 border border-gray-800 rounded-2xl p-6 sm:p-12 shadow-xl">
          {/* Quote Icon Background decoration */}
          <div className="absolute top-8 right-8 text-gray-900 select-none pointer-events-none">
            <Quote className="h-24 w-24 opacity-30 transform rotate-180" />
          </div>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Stars Rating */}
                <div className="flex gap-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary-yellow text-primary-yellow" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed italic font-light">
                  "{active.text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-900">
                  <div>
                    <h4 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                      {active.name}
                    </h4>
                    <p className="text-xs text-primary-yellow font-medium uppercase tracking-wider mt-0.5">
                      {active.location}, Pembrokeshire, UK
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest bg-gray-900 border border-gray-800 px-3.5 py-1.5 rounded-lg text-gray-400">
                      Service: {active.serviceCategory}
                    </span>
                    <span className="text-[10px] text-gray-600 font-semibold font-mono">
                      {active.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="bg-gray-900 hover:bg-primary-yellow hover:text-gray-950 border border-gray-800 text-white p-3 rounded-xl transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="bg-gray-900 hover:bg-primary-yellow hover:text-gray-950 border border-gray-800 text-white p-3 rounded-xl transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all rounded-full cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-primary-yellow' : 'w-2 bg-gray-800 hover:bg-gray-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
