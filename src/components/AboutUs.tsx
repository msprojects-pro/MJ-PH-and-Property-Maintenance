import { motion } from 'motion/react';
import { Shield, ShieldCheck, Clock, Award, Hammer, Users } from 'lucide-react';

export default function AboutUs() {
  const credentials = [
    {
      icon: ShieldCheck,
      title: 'Fully Insured & Certified',
      description: 'Full public liability insurance and CPCS/NPORS plant operator certifications for total peace of mind.'
    },
    {
      icon: Clock,
      title: 'Always Open (24/7 Service)',
      description: 'Ready to respond to emergency storm roof repairs, urgent tree clearances, or tight site deadlines.'
    },
    {
      icon: Award,
      title: 'Local Experts based in Fishguard',
      description: 'Deep knowledge of Pembrokeshire ground conditions, local styles, and weather challenges.'
    },
    {
      icon: Users,
      title: 'With or Without Operator',
      description: 'Flexible options for dry hire (self-drive) or fully-operated machinery hire.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gray-950 text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 h-96 w-96 rounded-full bg-primary-yellow/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 h-96 w-96 rounded-full bg-yellow-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-yellow">
              Professional & Reliable Since Day One
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              South West Wales' Trusted Plant Hire & Care Partner
            </h2>
            <div className="h-1.5 w-24 bg-primary-yellow rounded-full" />
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed pt-2">
              Based in <strong>Fishguard, Pembrokeshire</strong>, MJ Plant Hire & Property Maintenance delivers premium plant hire solutions alongside comprehensive construction and maintenance services.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We understand that success depends on having the right gear and the right hands. That is why we offer an extensive fleet of modern, highly maintained machinery—available with qualified, experienced CPCS operators or on a self-drive basis.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              In addition to heavy groundwork, our team specializes in complete residential and commercial property maintenance, spanning from roofing and plastering to tree felling and external paint protection. We pride ourselves on being accessible 24/7, providing safe, robust, and cost-effective services.
            </p>

            {/* Quote highlighting Welsh pride */}
            <div className="border-l-4 border-primary-yellow bg-gray-900/50 p-4 rounded-r-lg mt-6">
              <p className="text-sm italic text-gray-300">
                "We provide professional plant hire options throughout South West Wales, with or without operators, backed by unmatched customer care."
              </p>
              <p className="text-xs font-bold text-white mt-2 uppercase tracking-wide">
                — MJ Plant Hire & Property Maintenance Team
              </p>
            </div>
          </div>

          {/* Right: Asymmetric Bento/Grid Credentials */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-4">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 p-5 bg-gray-900/40 border border-gray-800/80 rounded-xl hover:border-gray-800 hover:bg-gray-900/80 transition-all duration-300"
                  >
                    <div className="bg-primary-yellow/10 text-primary-yellow p-3 rounded-lg h-fit shrink-0 border border-primary-yellow/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-white uppercase tracking-tight">
                        {cred.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                        {cred.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
