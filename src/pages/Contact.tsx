import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Clock, Send, Sparkles, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-platinum min-h-screen">
      {/* Header */}
      <section className="pt-48 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-white border border-beige rounded-full text-gold-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-10 shadow-sm"
          >
            Get In Touch
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-serif tracking-tighter italic text-charcoal leading-none mb-10"
          >
            Connect <br />
            <span className="text-gold-accent font-normal not-italic">With Us.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 font-light text-xl leading-relaxed max-w-2xl mx-auto"
          >
            We are here to assist with your transformation. Reach out for 
            consultations, group bookings, or editorial inquiries.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            
            {/* Contact Info */}
            <div className="space-y-20">
              <div className="space-y-12">
                <div className="flex items-start space-x-10 group">
                  <div className="w-16 h-16 bg-white border border-beige rounded-[25px] flex items-center justify-center text-gold-accent shadow-sm group-hover:bg-charcoal group-hover:text-white transition-all duration-500 shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-4">Our Studio</h3>
                    <p className="text-2xl font-serif text-charcoal leading-tight">403 W Loop 281<br/>Longview, Texas 75605</p>
                  </div>
                </div>

                <div className="flex items-start space-x-10 group">
                  <div className="w-16 h-16 bg-white border border-beige rounded-[25px] flex items-center justify-center text-gold-accent shadow-sm group-hover:bg-charcoal group-hover:text-white transition-all duration-500 shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-4">Voice</h3>
                    <a href="tel:+19037532968" className="text-2xl font-serif text-charcoal hover:text-gold-accent transition-colors">+1 903-753-2968</a>
                  </div>
                </div>

                <div className="flex items-start space-x-10 group">
                  <div className="w-16 h-16 bg-white border border-beige rounded-[25px] flex items-center justify-center text-gold-accent shadow-sm group-hover:bg-charcoal group-hover:text-white transition-all duration-500 shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-4">Hours</h3>
                    <div className="text-2xl font-serif text-charcoal leading-snug">
                      <p>Tue - Fri: 9AM - 6PM</p>
                      <p>Sat: 9AM - 4PM</p>
                      <p className="text-neutral-300 italic">Sun - Mon: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-20 border-t border-beige">
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-accent mb-10">Follow Our Journey</h3>
                <div className="flex space-x-6">
                  {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                    <a key={social} href="#" className="px-8 py-3 bg-white border border-beige rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-charcoal hover:text-white transition-all shadow-sm">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-[60px] p-10 md:p-20 shadow-2xl relative overflow-hidden editorial-border border-[1px]">
               {status === 'success' ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="text-center py-20"
                 >
                    <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center mx-auto mb-10 text-gold-accent">
                      <Check size={32} />
                    </div>
                    <h3 className="text-4xl font-serif italic text-charcoal mb-6">Message Sent</h3>
                    <p className="text-neutral-500 font-light max-w-xs mx-auto leading-relaxed uppercase tracking-widest text-[10px] font-bold">
                      We check our messages daily and will reach out to you within 24 hours.
                    </p>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-12">
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-400 block mb-2">Subject</label>
                     <p className="text-4xl font-serif text-charcoal italic tracking-tight mb-10 leading-none">The Consultation.</p>
                   </div>
                   
                   <div className="space-y-8">
                     <div className="relative">
                        <input 
                          type="text" 
                          placeholder="YOUR FULL NAME"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-platinum border-none rounded-[20px] p-6 text-charcoal focus:ring-2 focus:ring-gold-accent outline-none text-[10px] font-bold tracking-[0.2em] transition-all"
                        />
                     </div>
                     <div className="relative">
                        <input 
                          type="email" 
                          placeholder="EMAIL ADDRESS"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-platinum border-none rounded-[20px] p-6 text-charcoal focus:ring-2 focus:ring-gold-accent outline-none text-[10px] font-bold tracking-[0.2em] transition-all"
                        />
                     </div>
                     <div className="relative">
                        <textarea 
                          placeholder="HOW CAN WE ASSIST YOUR ARTISTRY?"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-platinum border-none rounded-[20px] p-6 text-charcoal focus:ring-2 focus:ring-gold-accent outline-none text-[10px] font-bold tracking-[0.2em] transition-all resize-none"
                        />
                     </div>
                   </div>

                   <button 
                     type="submit"
                     disabled={status === 'submitting'}
                     className="w-full py-6 bg-charcoal text-white rounded-[20px] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gold-accent transition-all shadow-xl flex items-center justify-center group"
                   >
                     {status === 'submitting' ? (
                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                     ) : (
                       <>
                         <span>SEND INQUIRY</span>
                         <Send size={14} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                       </>
                     )}
                   </button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full border-t border-beige grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          title="Salon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.859600109914!2d-94.7671192!3d32.5352824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8636402434e3d36b%3A0x6d9f957e108846c4!2sJan%20C's%20Salon!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
