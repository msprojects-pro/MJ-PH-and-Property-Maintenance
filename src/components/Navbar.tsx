import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-950/95 border-b border-gray-800 py-3 shadow-lg backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <a
              id="nav-brand-logo"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative h-12 w-12 flex items-center justify-center rounded-lg bg-primary-yellow shadow-md transition-transform group-hover:scale-105 group-hover:bg-white">
                <span className="font-display text-xl font-extrabold tracking-tighter text-gray-950">
                  MJ
                </span>
                {/* Small industrial detail */}
                <div className="absolute -bottom-1 -right-1 bg-gray-950 text-primary-yellow rounded px-1 py-0.2 text-[7px] font-black border border-primary-yellow/30">
                  UK
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold uppercase tracking-tight text-white leading-none sm:text-lg">
                  MJ Plant Hire
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary-yellow mt-0.5 leading-none">
                  & Property Maintenance
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-sm font-medium text-gray-300 hover:text-primary-yellow transition-colors relative py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-4 border-l border-gray-800 pl-6">
                {/* Telephone */}
                <a
                  id="nav-call-phone-btn"
                  href="tel:+447310550352"
                  className="flex items-center gap-2 text-sm font-bold text-gray-100 hover:text-primary-yellow transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary-yellow animate-pulse" />
                  <span>07310 550352</span>
                </a>

                {/* Free Quote Button */}
                <button
                  id="nav-quote-btn"
                  onClick={onOpenQuote}
                  className="bg-primary-yellow hover:bg-primary-yellow-hover text-gray-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-all hover:scale-102 cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  Request Quote
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden gap-3">
              <a
                id="nav-mobile-call-btn"
                href="tel:+447310550352"
                className="bg-gray-900 border border-gray-800 p-2.5 rounded-lg text-primary-yellow hover:bg-gray-800 transition-colors"
                aria-label="Call Now"
              >
                <Phone className="h-4 w-4" />
              </a>
              <button
                id="mobile-nav-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-gray-900 border border-gray-800 p-2.5 rounded-lg text-white hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/80 backdrop-blur-sm lg:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 z-30 w-80 bg-gray-950 border-l border-gray-800 p-6 pt-24 flex flex-col justify-between lg:hidden"
            >
              <div className="flex flex-col gap-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-900 pb-2">
                  Navigation Menu
                </span>
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-lg font-medium text-gray-200 hover:text-primary-yellow py-2 transition-colors border-b border-gray-900"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Bottom Drawer CTAs */}
              <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-gray-900">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                    Direct Contact
                  </span>
                  <a
                    id="mobile-drawer-call-btn"
                    href="tel:+447310550352"
                    className="flex items-center gap-3 text-base font-bold text-white py-2"
                  >
                    <div className="bg-primary-yellow/10 text-primary-yellow p-2 rounded-full">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>+44 7310 550352</span>
                  </a>
                </div>

                <button
                  id="mobile-drawer-quote-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-primary-yellow hover:bg-primary-yellow-hover text-gray-950 font-bold py-3.5 rounded-lg uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <FileText className="h-4.5 w-4.5" />
                  Request Free Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
