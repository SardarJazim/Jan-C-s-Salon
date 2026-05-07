import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Clock, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-platinum px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-16 rounded-[40px] shadow-2xl text-center max-w-lg editorial-border border-[1px]"
        >
          <div className="w-24 h-24 bg-beige rounded-full flex items-center justify-center mx-auto mb-10 text-gold-accent">
            <Check size={48} />
          </div>
          <h2 className="text-4xl font-serif text-charcoal mb-6 tracking-tighter italic">Appointment Requested</h2>
          <p className="text-neutral-500 font-light leading-relaxed mb-10">
            Thank you for choosing Jan C's. We've received your request and our concierge 
            team will contact you shortly to confirm your session.
          </p>
          <Link to="/" className="inline-block bg-charcoal text-white px-10 py-5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gold-accent transition-all">
            Return Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-platinum pt-48 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Digital Concierge</span>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal tracking-tighter italic leading-none mb-6">Reserve Your <br/>Session</h1>
          <p className="text-neutral-400 font-light text-lg">Curated transformations tailored to your calendar.</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[60px] p-8 md:p-20 shadow-2xl relative overflow-hidden editorial-border border-[1px]">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold-accent/5 rounded-full blur-[40px] -z-0" />
          
          {/* Progress Bar */}
          <div className="flex justify-between mb-16 relative z-10 px-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  step >= s ? 'bg-charcoal text-white shadow-lg' : 'bg-platinum text-neutral-300'
                }`}>
                  {step > s ? <Check size={18} /> : s}
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-widest mt-4 ${
                  step >= s ? 'text-charcoal' : 'text-neutral-300'
                }`}>
                  {s === 1 ? 'Service' : s === 2 ? 'Schedule' : 'Details'}
                </span>
              </div>
            ))}
            <div className="absolute top-6 left-0 w-full h-px bg-beige -z-10 mx-6" />
          </div>

          <form onSubmit={handleSubmit} className="relative z-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <label className="block">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4 block">Select Transformation</span>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-platinum border-none rounded-[20px] p-6 text-charcoal focus:ring-2 focus:ring-gold-accent transition-all appearance-none outline-none font-serif text-lg italic"
                    >
                      <option value="">Choose a specialized service...</option>
                      <option value="blonde">Blonde Transformation</option>
                      <option value="color">Custom Color & Glaze</option>
                      <option value="cut">Designer Precision Cut</option>
                      <option value="styling">Editorial Styling</option>
                      <option value="consult">New Guest Consultation</option>
                    </select>
                  </label>
                  <button 
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.service}
                    className="w-full py-6 bg-charcoal text-white rounded-[20px] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gold-accent transition-all disabled:bg-neutral-200"
                  >
                    CONTINUE TO SCHEDULE
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <label className="block">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4 block">Preferred Date</span>
                      <input 
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-platinum border-none rounded-[20px] p-6 text-charcoal focus:ring-2 focus:ring-gold-accent transition-all outline-none"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4 block">Preferred Time</span>
                      <select 
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-platinum border-none rounded-[20px] p-6 text-charcoal focus:ring-2 focus:ring-gold-accent transition-all appearance-none outline-none"
                      >
                        <option value="">Select a time...</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-6 border border-beige text-charcoal rounded-[20px] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-platinum transition-all"
                    >
                      BACK
                    </button>
                    <button 
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.date || !formData.time}
                      className="flex-[2] py-6 bg-charcoal text-white rounded-[20px] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gold-accent transition-all disabled:bg-neutral-200"
                    >
                      NEXT: DETAILS
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <input 
                      type="text"
                      name="name"
                      placeholder="FULL NAME"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-platinum border-none rounded-[20px] p-6 text-charcoal focus:ring-2 focus:ring-gold-accent transition-all outline-none text-[10px] tracking-widest font-bold"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input 
                        type="email"
                        name="email"
                        placeholder="EMAIL ADDRESS"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-platinum border-none rounded-[20px] p-6 text-charcoal focus:ring-2 focus:ring-gold-accent transition-all outline-none text-[10px] tracking-widest font-bold"
                      />
                      <input 
                        type="tel"
                        name="phone"
                        placeholder="PHONE NUMBER"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-platinum border-none rounded-[20px] p-6 text-charcoal focus:ring-2 focus:ring-gold-accent transition-all outline-none text-[10px] tracking-widest font-bold"
                      />
                    </div>
                    <textarea 
                      name="notes"
                      placeholder="TELL US ABOUT YOUR HAIR GOALS (OPTIONAL)"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-platinum border-none rounded-[20px] p-6 text-charcoal focus:ring-2 focus:ring-gold-accent transition-all outline-none text-[10px] tracking-widest font-bold resize-none"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-6 border border-beige text-charcoal rounded-[20px] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-platinum transition-all disabled:opacity-50"
                      disabled={status === 'submitting'}
                    >
                      BACK
                    </button>
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="flex-[2] py-6 bg-gold-accent text-white rounded-[20px] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-charcoal transition-all disabled:opacity-50 flex items-center justify-center"
                    >
                      {status === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : 'CONFIRM RESERVATION'}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        {/* Support Info */}
        <div className="mt-16 text-center text-neutral-400">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Questions or Group Bookings?</p>
          <a href="tel:+19037532968" className="text-sm font-serif italic text-charcoal hover:text-gold-accent transition-colors">+1 903-753-2968</a>
        </div>
      </div>
    </div>
  );
}
