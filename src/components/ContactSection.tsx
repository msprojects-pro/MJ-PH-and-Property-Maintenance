import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import { ContactFormData } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: 'plant-hire',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('--- Contact Enquiry Submitted ---', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: 'plant-hire',
      location: '',
      message: '',
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-gray-950 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-yellow">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Contact Our Team Today
          </h2>
          <div className="h-1.5 w-20 bg-primary-yellow mx-auto rounded-full" />
          <p className="text-gray-400 text-sm">
            Whether you want to book a wood chipper for the weekend, need emergency slate repairs, or want to discuss heavy groundwork, we are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info and Welsh Service Areas */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                Our Office & Area
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                We are proudly based in <strong>Fishguard, Pembrokeshire</strong>, and dispatch our plant equipment and maintenance teams to residential and commercial sites throughout South West Wales.
              </p>
            </div>

            {/* Direct Contact Methods list */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                id="contact-info-phone"
                href="tel:+447310550352"
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/40 border border-gray-900 hover:border-gray-800 hover:bg-gray-900 transition-all group"
              >
                <div className="bg-primary-yellow text-gray-950 p-3 rounded-lg group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-widest text-gray-500">
                    Call Anytime (24/7)
                  </h4>
                  <p className="text-lg font-bold text-white mt-1 group-hover:text-primary-yellow transition-colors">
                    +44 7310 550352
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                id="contact-info-email"
                href="mailto:mjplanthirepembrokeshire@gmail.com"
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/40 border border-gray-900 hover:border-gray-800 hover:bg-gray-900 transition-all group"
              >
                <div className="bg-primary-yellow text-gray-950 p-3 rounded-lg group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-xs font-bold uppercase tracking-widest text-gray-500">
                    Email Address
                  </h4>
                  <p className="text-sm sm:text-base font-bold text-white mt-1 group-hover:text-primary-yellow transition-colors truncate">
                    mjplanthirepembrokeshire@gmail.com
                  </p>
                </div>
              </a>

              {/* Hours / Info */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/40 border border-gray-900">
                <div className="bg-primary-yellow/10 text-primary-yellow p-3 rounded-lg">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-widest text-gray-500">
                    Business Hours
                  </h4>
                  <p className="text-sm sm:text-base font-bold text-white mt-1">
                    Always Open — 24 hours a day, 7 days a week
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage Areas Panel */}
            <div className="border border-gray-800 rounded-2xl p-6 bg-gray-900/35 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-yellow" />
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="h-5 w-5 text-primary-yellow" />
                <h4 className="font-display text-base font-bold uppercase tracking-wide text-white">
                  Coverage Areas
                </h4>
              </div>
              <p className="text-xs text-gray-400 mb-4">
                We regularly deliver heavy plant machinery and property maintenance services to:
              </p>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs text-gray-300">
                {[
                  'Fishguard (Base)',
                  'Haverfordwest',
                  'Milford Haven',
                  'Cardigan',
                  'St Davids',
                  'Tenby & Saundersfoot',
                  'Narberth',
                  'Pembroke Dock'
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-yellow" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-10 shadow-lg relative">
              
              {/* Warning top strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-yellow rounded-t-2xl" />

              {!isSuccess ? (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    Send Us an Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Fill out the quick form below and our team will get back to you with pricing details.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-gray-950 border border-gray-800 rounded-lg py-2.5 px-4 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 07310 550352"
                        className="w-full bg-gray-950 border border-gray-800 rounded-lg py-2.5 px-4 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full bg-gray-950 border border-gray-800 rounded-lg py-2.5 px-4 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors"
                      />
                    </div>

                    {/* Service Select */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Interested Service *
                      </label>
                      <select
                        id="contact-service-type"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-gray-950 border border-gray-800 rounded-lg py-2.5 px-4 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="plant-hire">Plant Hire & Machinery</option>
                        <option value="painting">Internal & External Painting</option>
                        <option value="plastering">Plastering & Rendering</option>
                        <option value="garden-maintenance">Garden, Tree Felling & Pruning</option>
                        <option value="paving-patios">Gravel, Patios & Paving</option>
                        <option value="roof-repairs">Roof Repairs & Storm Care</option>
                        <option value="general-maintenance">General Property Maintenance</option>
                      </select>
                    </div>
                  </div>

                  {/* Location field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Project Location *
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Fishguard, Pembrokeshire"
                      className="w-full bg-gray-950 border border-gray-800 rounded-lg py-2.5 px-4 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or machine rental requirements..."
                      className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-yellow hover:bg-primary-yellow-hover text-gray-950 font-bold py-3.5 px-6 rounded-lg text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-950 border-t-transparent" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Feedback Block */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 px-4 text-center"
                >
                  <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-400 border border-emerald-500/20 mb-6">
                    <CheckCircle2 className="h-16 w-16" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 uppercase">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm max-w-md mb-8">
                    Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Your enquiry has been received and logged. Our team based in Fishguard will review it immediately and contact you via email (<span className="text-white font-medium">{formData.email}</span>) or phone (<span className="text-white font-medium">{formData.phone}</span>).
                  </p>
                  <button
                    id="contact-reset-btn"
                    onClick={handleReset}
                    className="bg-primary-yellow hover:bg-primary-yellow-hover text-gray-950 font-bold px-8 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
