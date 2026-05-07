import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Star } from 'lucide-react';

const serviceCategories = [
  {
    name: "Haircuts & Styling",
    description: "Tailored cuts that enhance your natural features and lifestyle.",
    services: [
      { name: "Signature Haircut", duration: "60 min", price: "85+", description: "Includes consultation, relaxing scalp massage, and bespoke styling." },
      { name: "Executive Men's Cut", duration: "45 min", price: "55+", description: "Precision cutting with classic or modern styling." },
      { name: "Children's Cut", duration: "30 min", price: "45+", description: "Gentle and stylish cuts for our younger clients." },
      { name: "Luxury Blowout", duration: "45 min", price: "65+", description: "Professional volume and shine that lasts for days." },
      { name: "Event Styling", duration: "90 min", price: "125+", description: "Updos and specialized styles for your most important moments." }
    ]
  },
  {
    name: "Color Artistry",
    description: "Expert coloring techniques using premium European dyes.",
    services: [
      { name: "Blonde Transformation", duration: "240 min", price: "245+", description: "Full highlights or balayage with custom toner and bond treatment." },
      { name: "Maintenance Balayage", duration: "180 min", price: "185+", description: "Partial sun-kissed placement for natural-looking regrowth." },
      { name: "Base Color / Root Tint", duration: "90 min", price: "95+", description: "Seamless coverage for new growth and gray blending." },
      { name: "Gloss & Tone", duration: "45 min", price: "75+", description: "Refresh your shade and add immense mirror-like shine." },
      { name: "Creative Color", duration: "Varies", price: "Quote", description: "Vivids, pastels, and multi-dimensional artistic palettes." }
    ]
  },
  {
    name: "Treatments & Health",
    description: "Restore and protect the integrity of your hair.",
    services: [
      { name: "Keratin Smoothing", duration: "180 min", price: "275+", description: "Eliminate frizz and drastically reduce styling time for up to 4 months." },
      { name: "Deep Conditioning Masque", duration: "15 min", price: "35+", description: "Targeted moisture for dry or damaged hair types." },
      { name: "Scalp Renewal Ritual", duration: "30 min", price: "55+", description: "Exfoliation and massage to promote healthy hair growth." },
      { name: "Metal Detox Treatment", duration: "10 min", price: "30+", description: "Prevents breakage and ensures 100% color reliability." }
    ]
  }
];

export default function Services() {
  return (
    <div className="bg-platinum">
      {/* Header */}
      <section className="pt-48 pb-24 px-4 bg-white border-b border-beige">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-platinum border border-beige rounded-full text-gold-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-10 shadow-sm"
          >
            A Curated Menu
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif tracking-tighter leading-none mb-10 text-charcoal"
          >
            Salon <span className="text-gold-accent italic font-normal">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 font-light text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Modern techniques met with professional grade care. Every service begins with 
            a personalized consultation to ensure your vision becomes reality.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto space-y-40">
          {serviceCategories.map((category, catIndex) => (
            <div key={category.name} className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                {/* Category Header */}
                <div className="lg:col-span-1">
                  <div className="sticky top-40">
                    <span className="text-gold-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">0{catIndex + 1}</span>
                    <h2 className="text-4xl font-serif tracking-tight mb-8 text-charcoal">{category.name}</h2>
                    <p className="text-neutral-500 font-light leading-relaxed mb-10 text-sm">{category.description}</p>
                    <div className="w-20 h-px bg-gold-accent/30" />
                  </div>
                </div>

                {/* Service Items */}
                <div className="lg:col-span-2 space-y-16">
                  {category.services.map((service, index) => (
                    <motion.div 
                      key={service.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-serif tracking-tight group-hover:text-gold-accent transition-colors duration-300 text-charcoal">{service.name}</h3>
                        <span className="text-charcoal font-bold text-[10px] tracking-widest uppercase mt-2">FROM ${service.price}</span>
                      </div>
                      <div className="flex items-center text-[9px] text-gold-accent font-bold tracking-[0.2em] uppercase mb-6 space-x-6">
                        <div className="flex items-center">
                          <Clock size={12} className="mr-2" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Star size={12} className="mr-2 fill-gold-accent" />
                          <span>Highly Rated</span>
                        </div>
                      </div>
                      <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8 group-hover:text-charcoal transition-colors duration-500">
                        {service.description}
                      </p>
                      <div className="h-px bg-beige/30 group-hover:bg-gold-accent/40 transition-colors duration-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Package */}
      <section className="py-32 px-4 bg-charcoal text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative border border-white/10 rounded-[60px] p-12 md:p-24 backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="inline-block px-4 py-1 border border-gold-accent rounded-full text-gold-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-12"
                >
                  Limited Edition
                </motion.div>
                <h2 className="text-5xl md:text-6xl font-serif tracking-tighter leading-none mb-10">
                  The Premium <br />
                  <span className="text-gold-accent italic font-normal">Experience.</span>
                </h2>
                <p className="text-white/50 font-light mb-12 leading-relaxed max-w-md text-lg">
                  A comprehensive visit including our signature blonde transformation, 
                  bespoke hydration ritual, designer cut, and editorial styling session.
                </p>
                <div className="flex items-center space-x-6 mb-16">
                  <span className="text-4xl font-bold tracking-tighter text-white">$345</span>
                  <span className="text-white/20 line-through text-sm tracking-[0.2em] font-medium uppercase">$420 VALUE</span>
                </div>
                <Link to="/booking" className="bg-white text-charcoal px-12 py-6 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gold-accent hover:text-white transition-all flex items-center justify-center sm:inline-flex group">
                  <span>RESERVE PACKAGE</span>
                  <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                 <img 
                   src="https://images.unsplash.com/photo-1595476108010-b4d1f8bc2b3f?auto=format&fit=crop&q=80&w=1000" 
                   alt="Premium Salon Experience" 
                   className="rounded-[40px] shadow-2xl relative z-10 editorial-border border-[1px]"
                 />
                 <div className="absolute -top-12 -right-12 w-64 h-64 bg-gold-accent/20 rounded-full blur-[100px]" />
                 <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-charcoal/50 rounded-full blur-[100px] border border-white/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-12 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            {[
              { q: "How long does a Typical color appointment take?", a: "For transformation services like balayage or full blonding, expect to be at the salon for 3-4 hours. Maintenance glosses or base colors typically take 90-120 minutes." },
              { q: "What products do you use for coloring?", a: "We exclusively use premium, low-ammonia professional ranges that prioritize hair shaft integrity and long-lasting shine." },
              { q: "Should I wash my hair before my appointment?", a: "For color services, we recommend washing 24-48 hours prior. Hair shouldn't be excessively dirty, but shouldn't be 'squeaky clean' either as natural oils protect the scalp." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-platinum rounded-3xl border border-ash/20">
                <h4 className="text-lg font-serif mb-4 tracking-tight">{item.q}</h4>
                <p className="text-charcoal/60 font-light text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/contact" className="text-sm font-display tracking-widest uppercase text-taupe hover:text-charcoal transition-colors border-b border-taupe/30 pb-1">
              Have More Questions? Ask Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
