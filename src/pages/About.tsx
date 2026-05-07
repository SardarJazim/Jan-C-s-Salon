import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-platinum">
      {/* Hero */}
      <section className="relative pt-48 pb-32 px-4 flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-beige/30 to-platinum" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-4 text-gold-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-10"
          >
            <div className="w-10 h-px bg-gold-accent/40" />
            <span>Founded in Longview, TX</span>
            <div className="w-10 h-px bg-gold-accent/40" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-serif tracking-tighter leading-[0.9] mb-12 text-charcoal"
          >
            Where Artistry <br />
            <span className="text-gold-accent italic font-normal">Meets Soul.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Jan C's Salon was built on the belief that beauty is found in the details. 
            We are a collective of passionate hair artists dedicated to precision, 
            health, and the luxury of transformation.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-4 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: -20 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[60px] overflow-hidden editorial-border border-[12px] shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Jan C Styling" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute top-1/2 right-[-40px] translate-y-[-50%] bg-charcoal text-white p-12 rounded-[40px] shadow-2xl z-20 hidden md:block max-w-[320px] border border-white/10">
                <h4 className="text-3xl font-serif mb-6 leading-tight italic">12+ Years of Excellence</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed uppercase tracking-widest font-semibold">Serving the community with master-level coloring.</p>
              </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold-accent font-bold">Our Legacy</span>
              <h2 className="text-5xl md:text-6xl font-serif tracking-tighter leading-[1.1] text-charcoal">
                Our Journey in <br />
                <span className="text-gold-accent italic font-normal">Blonde Mastery.</span>
              </h2>
              <p className="text-neutral-500 leading-relaxed font-light text-lg">
                Beginning as a small boutique studio, Jan C recognized a gap in the local market for specialized 
                high-end blonding techniques. Over the years, the salon has evolved into a 
                premier destination for those seeking intentional color, soft luxury style, 
                and a truly personalized salon experience.
              </p>
              <div className="flex gap-16 pt-12 border-t border-beige">
                <div>
                  <h5 className="text-4xl font-serif text-charcoal mb-2 tracking-tighter">5,000+</h5>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-accent">Happy Clients</p>
                </div>
                <div>
                  <h5 className="text-4xl font-serif text-charcoal mb-2 tracking-tighter">MASTER</h5>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-accent">Precision Colorists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-4 bg-platinum/50 border-y border-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 tracking-tighter text-charcoal">The Core Principles</h2>
            <p className="text-neutral-500 font-light leading-relaxed text-lg">
              Every appointment is guided by our commitment to three foundational values 
              that define the Jan C standard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { 
                icon: ShieldCheck, 
                title: "Hair Integrity", 
                description: "We never compromise the health of your hair for a trend. We use bonding treatments and gentle chemicals to ensure lasting shine and strength." 
              },
              { 
                icon: Sparkles, 
                title: "Artistic Precision", 
                description: "Every stroke of the brush and every cut is intentional. We approach hair as a sculpture, ensuring the shape evolves perfectly as it grows." 
              },
              { 
                icon: Heart, 
                title: "Client Wellness", 
                description: "Luxury is how you feel. We've designed every touchpoint—from the scalp massage to the setting—to be a moment of serenity." 
              }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-8 group">
                <div className="w-20 h-20 bg-white border border-beige rounded-3xl flex items-center justify-center mx-auto shadow-sm text-gold-accent group-hover:bg-charcoal group-hover:text-white transition-all duration-500">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif tracking-tight text-charcoal italic">{value.title}</h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed max-w-xs mx-auto">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Invitation */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-charcoal rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-accent/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <Award className="text-gold-accent mx-auto mb-10" size={56} />
            <h2 className="text-5xl md:text-7xl font-serif mb-10 tracking-tighter leading-none">Your Confidence is Our Greatest <span className="text-gold-accent italic font-normal">Accolade.</span></h2>
            <p className="text-white/40 text-lg mb-16 font-light max-w-2xl mx-auto leading-relaxed">
              We invite you to experience the difference of a salon that listens first and 
              creates second. Step into a world where your hair is treated with the 
              reverence it deserves.
            </p>
            <Link to="/booking" className="inline-block bg-white text-charcoal px-12 py-6 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gold-accent hover:text-white transition-all">
              Book Your Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
