import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="main-footer" className="relative bg-gray-950 border-t border-gray-900 text-gray-400 overflow-hidden">
      {/* Visual Hazard line separator matching the plant hire heavy machinery theme */}
      <div className="h-2.5 w-full bg-gradient-to-r from-primary-yellow via-yellow-400 to-primary-yellow relative flex overflow-hidden">
        {/* Repeating slanted black stripes for that genuine construction vibe */}
        {[...Array(24)].map((_, idx) => (
          <div
            key={idx}
            className="w-12 h-full bg-gray-950/20 transform -skew-x-45 border-r border-gray-950/40 shrink-0"
            style={{ marginLeft: idx === 0 ? '-10px' : '15px' }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative h-14 w-14 flex items-center justify-center rounded-lg bg-primary-yellow shadow-md">
                <span className="font-display text-2xl font-extrabold tracking-tighter text-gray-950">
                  MJ
                </span>
                {/* Small industrial detail */}
                <div className="absolute -bottom-1 -right-1 bg-gray-950 text-primary-yellow rounded px-1 py-0.2 text-[7px] font-black border border-primary-yellow/30">
                  UK
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold uppercase tracking-tight text-white leading-none">
                  MJ Plant Hire
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary-yellow mt-0.5 leading-none">
                  & Property Maintenance
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Providing modern plant hire options throughout South West Wales with or without a certified operator, and delivering high-quality commercial and residential property maintenance.
            </p>
            <div className="flex items-center gap-2 text-xs text-white bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-lg w-fit">
              <Clock className="h-4 w-4 text-primary-yellow" />
              <span className="font-bold uppercase tracking-wide text-primary-yellow">Always Open (24/7)</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white border-b border-gray-900 pb-2">
              Our Navigations
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home Page', href: '#home' },
                { label: 'About Our Fleet', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Project Gallery', href: '#gallery' },
                { label: 'Customer Reviews', href: '#testimonials' },
                { label: 'Get in Touch', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-primary-yellow transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-primary-yellow font-bold">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white border-b border-gray-900 pb-2">
              Contact Details
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {/* Phone */}
              <li className="flex gap-3 items-start">
                <Phone className="h-4 w-4 text-primary-yellow shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-gray-500 font-bold uppercase text-[9px]">Mobile Phone</span>
                  <a href="tel:+447310550352" className="text-white hover:text-primary-yellow transition-colors font-medium">
                    +44 7310 550352
                  </a>
                </div>
              </li>
              {/* Email */}
              <li className="flex gap-3 items-start min-w-0">
                <Mail className="h-4 w-4 text-primary-yellow shrink-0 mt-0.5" />
                <div className="flex flex-col min-w-0">
                  <span className="text-gray-500 font-bold uppercase text-[9px]">Enquiries Email</span>
                  <a href="mailto:mjplanthirepembrokeshire@gmail.com" className="text-white hover:text-primary-yellow transition-colors font-medium truncate">
                    mjplanthirepembrokeshire@gmail.com
                  </a>
                </div>
              </li>
              {/* Address */}
              <li className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 text-primary-yellow shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-gray-500 font-bold uppercase text-[9px]">Operating From</span>
                  <span className="text-white font-medium">
                    Fishguard, Pembrokeshire, SA65
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Action */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white border-b border-gray-900 pb-2">
              Need Assistance?
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              We service Fishguard, Milford Haven, Haverfordwest, Cardigan, St Davids, and the wider Pembrokeshire area. Contact us for rates on self-drive or operated hire.
            </p>
            <button
              id="footer-quote-btn"
              onClick={onOpenQuote}
              className="w-full bg-primary-yellow hover:bg-primary-yellow-hover text-gray-950 font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg shadow-sm transition-all duration-200 cursor-pointer text-center"
            >
              Get Free Instant Quote
            </button>
          </div>

        </div>

        {/* Bottom copyright and localized badges */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-center sm:text-left text-gray-500">
            &copy; {currentYear} <strong>MJ Plant Hire & Property Maintenance</strong>. All rights reserved.
          </p>
          <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider text-gray-600">
            <span>Based in Wales, UK</span>
            <span>•</span>
            <span>Self-Drive or Operated</span>
            <span>•</span>
            <span>Fully Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
