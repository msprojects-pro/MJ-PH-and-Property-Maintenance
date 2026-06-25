import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Eye, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface GalleryFilterProps {
  onOpenQuote: () => void;
}

export default function GalleryFilter({ onOpenQuote }: GalleryFilterProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'plant-hire' | 'groundwork' | 'maintenance'>('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Plant Hire Fleet', value: 'plant-hire' },
    { label: 'Groundworks & Landscaping', value: 'groundwork' },
    { label: 'Property Maintenance', value: 'maintenance' }
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-gray-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-yellow">
              Quality Workmanship
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              Our Completed Projects
            </h2>
            <div className="h-1.5 w-20 bg-primary-yellow rounded-full" />
            <p className="text-gray-400 text-sm max-w-xl">
              Take a look at some of our recent plant hire deployments, bespoke groundwork, and professional property maintenance projects completed across Pembrokeshire.
            </p>
          </div>

          {/* Direct CTA */}
          <button
            onClick={onOpenQuote}
            className="w-fit bg-primary-yellow hover:bg-primary-yellow-hover text-gray-950 font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md transition-all shrink-0"
          >
            <span>Book Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Filter Navigation Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-gray-900 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value as any)}
              className={`rounded-lg px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat.value
                  ? 'bg-primary-yellow text-gray-950 shadow-md'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-72 overflow-hidden rounded-xl bg-gray-900 border border-gray-800 cursor-pointer shadow-md"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                    {/* Category Label */}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary-yellow bg-primary-yellow/10 border border-primary-yellow/20 px-2 py-0.5 rounded-full w-fit">
                      {item.category.replace('-', ' ')}
                    </span>
                    {/* Title */}
                    <h4 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                      {item.title}
                    </h4>
                    {/* Description */}
                    <p className="text-gray-300 text-xs leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Visual Indicator */}
                  <div className="absolute top-4 right-4 bg-primary-yellow text-gray-950 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center bg-gray-900/40 rounded-xl border border-gray-800/80">
            <ImageIcon className="h-10 w-10 text-gray-600 mb-3" />
            <p className="text-gray-400 text-sm">No projects found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
}
