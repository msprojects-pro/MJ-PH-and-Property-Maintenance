import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesGridProps {
  onOpenQuoteWithService: (serviceId: string) => void;
}

export default function ServicesGrid({ onOpenQuoteWithService }: ServicesGridProps) {
  // Dynamically map Lucide icons from data string names
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="h-6 w-6 text-primary-yellow" />;
    }
    return <Icons.Activity className="h-6 w-6 text-primary-yellow" />;
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'plant-hire':
        return { text: 'Plant Hire', className: 'bg-amber-500/10 text-amber-400 border-amber-500/20' };
      case 'groundwork':
        return { text: 'Groundwork & Landscaping', className: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };
      default:
        return { text: 'Property Maintenance', className: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' };
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-900 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-yellow">
            What We Do Best
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
            Our Machinery Fleet & Maintenance Services
          </h2>
          <div className="h-1.5 w-24 bg-primary-yellow mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            From heavy-duty site excavations to intricate decorative painting and plastering, we bring professional equipment and master trade skills to every site in Pembrokeshire.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: Service, idx: number) => {
            const badge = getCategoryBadge(service.category);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between bg-gray-950 border border-gray-800/80 rounded-xl p-6 hover:border-primary-yellow/30 hover:shadow-xl hover:shadow-primary-yellow/2 transition-all duration-300"
              >
                {/* Yellow Hover Corner Accent */}
                <div className="absolute top-0 right-0 h-0.5 w-0 bg-primary-yellow transition-all duration-300 group-hover:w-16 rounded-tr-xl" />
                <div className="absolute top-0 right-0 h-0 w-0.5 bg-primary-yellow transition-all duration-300 group-hover:h-16 rounded-tr-xl" />

                <div className="space-y-4">
                  {/* Top Bar Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="bg-gray-900 border border-gray-800 p-3.5 rounded-xl group-hover:bg-primary-yellow/10 group-hover:border-primary-yellow/25 transition-colors duration-300">
                      {renderIcon(service.iconName)}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${badge.className}`}>
                      {badge.text}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-white uppercase group-hover:text-primary-yellow transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 pt-2 border-t border-gray-900">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <Icons.Check className="h-4 w-4 text-primary-yellow shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-gray-900">
                  <button
                    id={`service-cta-${service.id}`}
                    onClick={() => onOpenQuoteWithService(service.id)}
                    className="w-full bg-gray-900 hover:bg-primary-yellow hover:text-gray-950 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg flex items-center justify-center gap-2 border border-gray-800 hover:border-primary-yellow transition-all duration-300 cursor-pointer"
                  >
                    <span>Request Quote / Machinery</span>
                    <Icons.ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
