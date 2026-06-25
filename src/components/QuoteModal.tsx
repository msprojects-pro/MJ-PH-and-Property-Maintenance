import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, Mail, MapPin, ClipboardList, CheckCircle2 } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuoteModal({ isOpen, onClose, initialService = 'plant-hire' }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: initialService,
    withOperator: 'yes',
    hireDuration: '',
    location: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Submission
    setTimeout(() => {
      console.log('--- Quote Request Submitted ---', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: 'plant-hire',
      withOperator: 'yes',
      hireDuration: '',
      location: '',
      details: '',
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl bg-gray-900 border border-gray-800 text-white shadow-2xl"
          >
            {/* Top Yellow Warning Strip */}
            <div className="h-2 bg-gradient-to-r from-primary-yellow via-yellow-300 to-primary-yellow" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  Request a Free Quote
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Fast, no-obligation pricing for Pembrokeshire & South West Wales
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="max-h-[calc(100vh-180px)] overflow-y-auto p-6">
              {!isSuccess ? (
                <form id="quote-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
                        <input
                          id="quote-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Gareth Evans"
                          className="w-full bg-gray-950 border border-gray-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
                        <input
                          id="quote-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="07310 550352"
                          className="w-full bg-gray-950 border border-gray-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
                        <input
                          id="quote-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@gmail.com"
                          className="w-full bg-gray-950 border border-gray-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Site Location in Wales *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
                        <input
                          id="quote-location"
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Fishguard, Pembrokeshire"
                          className="w-full bg-gray-950 border border-gray-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Service Required *
                      </label>
                      <div className="relative">
                        <ClipboardList className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
                        <select
                          id="quote-service-type"
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full bg-gray-950 border border-gray-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors appearance-none"
                        >
                          <option value="plant-hire">Plant Hire & Machinery</option>
                          <option value="painting">Internal/External Painting</option>
                          <option value="plastering">Plastering & Rendering</option>
                          <option value="garden-maintenance">Garden & Tree Care</option>
                          <option value="paving-patios">Gravel, Patios & Paving</option>
                          <option value="roof-repairs">Roof Repairs</option>
                          <option value="general-maintenance">General Property Maintenance</option>
                        </select>
                      </div>
                    </div>

                    {/* Operator Requirement - only shown/relevant if plant hire is chosen */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Operator Required? *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['yes', 'no', 'unsure'].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, withOperator: opt as any })}
                            className={`rounded-lg py-2 text-xs font-bold uppercase transition-colors border ${
                              formData.withOperator === opt
                                ? 'bg-primary-yellow border-primary-yellow text-gray-950'
                                : 'bg-gray-950 border-gray-800 text-gray-300 hover:border-gray-700'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Duration (if Plant Hire chosen) */}
                  {formData.serviceType === 'plant-hire' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1"
                    >
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Estimated Hire Duration (e.g. 3 Days, 1 Week)
                      </label>
                      <div className="relative">
                        <Calendar className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
                        <input
                          id="quote-duration"
                          type="text"
                          value={formData.hireDuration}
                          onChange={(e) => setFormData({ ...formData, hireDuration: e.target.value })}
                          placeholder="e.g. 2 days, or flexible start"
                          className="w-full bg-gray-950 border border-gray-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Project Description & Requirements *
                    </label>
                    <textarea
                      id="quote-details"
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Please describe what you need. E.g., 'Need a 1.5t mini digger for garden landscaping near Fishguard. Access width is 1 meter...'"
                      className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-sm text-white focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      id="quote-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full md:w-auto bg-primary-yellow hover:bg-primary-yellow-hover text-gray-950 font-bold px-8 py-3 rounded-lg text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-950 border-t-transparent" />
                          Processing Request...
                        </>
                      ) : (
                        'Submit Quote Request'
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Success View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 px-4 text-center"
                >
                  <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-400 border border-emerald-500/20 mb-6">
                    <CheckCircle2 className="h-16 w-16" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white mb-2">
                    Request Received Successfully!
                  </h4>
                  <p className="text-gray-400 text-sm max-w-md mb-8">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your request for <span className="text-primary-yellow font-medium">{formData.serviceType.replace('-', ' ')}</span> in <span className="text-white">{formData.location}</span> has been received. MJ Plant Hire will review the details and contact you shortly on <strong className="text-white">{formData.phone}</strong>.
                  </p>
                  <div className="flex gap-4">
                    <button
                      id="quote-done-btn"
                      onClick={handleReset}
                      className="bg-primary-yellow hover:bg-primary-yellow-hover text-gray-950 font-bold px-8 py-3 rounded-lg text-sm uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
