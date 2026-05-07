import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Sparkles, Heart, ArrowRight } from 'lucide-react';

const homeImages = {
  hero: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=2000",
  about: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200",
  service1: "https://images.unsplash.com/photo-1595476108010-b4d1f8bc2b3f?auto=format&fit=crop&q=80&w=1000",
  service2: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=1000",
  service3: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000"
};

const FeatureCard = ({ icon: Icon, title, description, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-platinum p-8 rounded-3xl border border-ash/20 card-hover-effect"
  >
    <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center mb-6 shadow-sm shadow-taupe/5">
      <Icon className="text-taupe" size={24} />
    </div>
    <h3 className="text-xl font-serif mb-4 tracking-tight">{title}</h3>
    <p className="text-charcoal/60 text-sm leading-relaxed font-light">{description}</p>
  </motion.div>
);

const ServicePreview = ({ image, title, price, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group cursor-pointer"
  >
    <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <Link to="/booking" className="block w-full text-center bg-cream text-charcoal py-3 rounded-xl text-xs font-display tracking-widest uppercase shadow-xl">
          Book Now
        </Link>
      </div>
    </div>
    <div className="flex justify-between items-end px-2">
      <div>
        <h4 className="text-lg font-serif tracking-tight mb-1">{title}</h4>
        <p className="text-taupe text-xs font-display tracking-widest uppercase">From ${price}</p>
      </div>
      <div className="w-10 h-10 border border-ash/30 rounded-full flex items-center justify-center group-hover:bg-charcoal group-hover:text-cream transition-colors duration-300">
        <ArrowRight size={18} />
      </div>
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-stretch overflow-hidden editorial-border border-b pt-24">
        <div className="container mx-auto px-4 sm:px-10 flex flex-col lg:flex-row items-stretch">
          
          {/* Left Branding Side */}
          <div className="flex-1 py-20 lg:py-32 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-col space-y-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold-accent font-bold">Est. Longview, TX</span>
                <div className="w-12 h-[1px] bg-gold-accent"></div>
              </div>
              
              <h1 className="font-serif text-6xl md:text-8xl leading-[1.05] tracking-tighter text-charcoal">
                Modern Hair <br/>
                <span className="italic font-normal">Styling</span> & <br/>
                Confidence.
              </h1>
              
              <p className="text-sm text-neutral-500 leading-relaxed max-w-sm font-light">
                A boutique luxury experience dedicated to platinum transformations, 
                precision cutting, and the art of professional beauty in the heart of Texas.
              </p>
              
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <Link to="/services" className="border border-charcoal px-10 py-5 text-[10px] tracking-[0.2em] font-bold rounded-full hover:bg-charcoal hover:text-white transition-all uppercase">
                  EXPLORE SERVICES
                </Link>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-[px] bg-gold-accent opacity-30"></div>
                  <span className="text-xs italic font-serif text-charcoal">Meet the team</span>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="mt-20 grid grid-cols-2 gap-12 border-t border-beige pt-12">
                <div>
                  <span className="font-serif text-2xl italic mb-2 block">Platinum Elite</span>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Color Specialization</p>
                </div>
                <div>
                  <span className="font-serif text-2xl italic mb-2 block">Precision Cut</span>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Signature Styling</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Side */}
          <div className="flex-1 relative min-h-[500px] lg:min-h-0">
            <div className="absolute inset-0 bg-beige overflow-hidden">
               <img src={homeImages.hero} alt="Salon Interior" className="w-full h-full object-cover opacity-90" />
               <div className="absolute inset-0 bg-linear-to-t from-charcoal/20 to-transparent" />
            </div>

            {/* Centered Graphic Element */}
            <div className="absolute inset-0 flex items-center justify-center p-12 lg:p-20 pointer-events-none">
               <div className="w-full h-full border-[12px] border-white/20 rounded-[80px] flex items-center justify-center flex-col text-center p-10 backdrop-blur-[2px]">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.5 }}
                   className="w-24 h-24 rounded-full border border-white/30 mb-8 flex items-center justify-center bg-white/5"
                 >
                   <Sparkles className="text-white" size={32} />
                 </motion.div>
                 <h3 className="text-white font-serif text-3xl md:text-5xl italic mb-4">The Platinum Standard</h3>
                 <p className="text-white/70 text-[10px] tracking-[0.2em] font-light leading-relaxed uppercase max-w-xs">
                   Experience soft luxury atmosphere with professional feminine styling
                 </p>
               </div>
            </div>

            {/* Floating Service Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-10 right-4 sm:right-10 glass p-8 rounded-3xl w-72 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-60 text-charcoal">Featured</span>
                <span className="text-sm italic font-serif text-charcoal">$245+</span>
              </div>
              <h4 className="text-xl font-serif mb-2 text-charcoal">Blonde Transformation</h4>
              <p className="text-[9px] text-neutral-600 leading-normal mb-8 uppercase tracking-widest font-medium">
                Full balayage, custom toner, and signature blowout finish.
              </p>
              <Link to="/booking" className="block w-full py-4 bg-charcoal text-white text-[9px] font-bold tracking-[0.2em] rounded-xl text-center hover:bg-gold-accent transition-all">
                RESERVE NOW
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-platinum overflow-hidden">
        <div className="container mx-auto px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
             <div className="w-full lg:w-1/2 space-y-12">
                <div className="flex flex-col space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gold-accent font-bold">Our Philosophy</span>
                  <h2 className="font-serif text-5xl md:text-6xl text-charcoal leading-[1.1]">
                    Intentional Artistry <br/> 
                    <span className="italic font-normal">Modern Care.</span>
                  </h2>
                </div>
                <p className="text-neutral-500 font-light text-lg leading-relaxed max-w-lg">
                  Every strand tells a story. At Jan C's, we combine technical excellence 
                  with an editorial eye to create looks that are not just beautiful in the mirror, 
                  but life-giving in your everyday journey.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-beige rounded-xl text-gold-accent">
                      <Heart size={20} />
                    </div>
                    <h4 className="font-serif text-xl">Wellness Driven</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed uppercase tracking-widest font-semibold">Integrity First</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-beige rounded-xl text-gold-accent">
                      <Sparkles size={20} />
                    </div>
                    <h4 className="font-serif text-xl">Bespoke Design</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed uppercase tracking-widest font-semibold">Personalized Craft</p>
                  </div>
                </div>
             </div>
             
             <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10 editorial-border border-[1px]">
                  <img src={homeImages.about} alt="Styling Session" className="w-full h-full object-cover" />
                </div>
                {/* Visual accents */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-accent/5 rounded-full blur-[80px] -z-0" />
                <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-beige/40 rounded-full blur-[100px] -z-0" />
                
                <div className="absolute -bottom-10 right-10 bg-white p-10 rounded-[30px] border border-beige shadow-xl z-20 max-w-xs">
                  <p className="font-serif text-lg italic text-charcoal mb-4">"The platinum standard for luxury hair in Longview."</p>
                  <span className="text-[10px] uppercase tracking-widest text-gold-accent font-bold">— VOGUE EDITORIAL STYLE</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Spotlight */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-10">
          <div className="text-center mb-24">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-accent font-bold mb-6 block">Curated Menu</span>
            <h2 className="font-serif text-5xl md:text-7xl text-charcoal tracking-tighter italic leading-none mb-8">Service Spotlight</h2>
            <p className="text-neutral-400 font-light max-w-xl mx-auto">Explore our most requested transformations, each tailored to your unique identity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ServicePreview 
              image={homeImages.service1} 
              title="Signature Haircut" 
              price="85+" 
              index={0} 
            />
            <ServicePreview 
              image={homeImages.hero} 
              title="Blonde Transformation" 
              price="245+" 
              index={1} 
            />
            <ServicePreview 
              image={homeImages.service3} 
              title="Luxury Blowout" 
              price="65+" 
              index={2} 
            />
          </div>

          <div className="mt-20 text-center">
            <Link to="/services" className="inline-flex items-center space-x-4 group">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal">VIEW FULL MENU</span>
              <div className="w-12 h-12 rounded-full border border-beige flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-32 bg-charcoal text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-white/20 rounded-full rotate-12" />
        </div>

        <div className="container mx-auto px-4 sm:px-10 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="inline-block px-4 py-1 border border-gold-accent rounded-full text-gold-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-12"
                >
                  Limited Packages
                </motion.div>
                <h2 className="text-5xl md:text-6xl font-serif tracking-tighter leading-[1.1] mb-10">
                  The Premium <br />
                  <span className="text-gold-accent italic font-normal">Transformation Experience.</span>
                </h2>
                <p className="text-white/50 font-light mb-12 leading-relaxed max-w-sm text-lg">
                  A comprehensive visit including our signature blonde transformation, 
                  bespoke hydration ritual, designer cut, and editorial styling session.
                </p>
                <div className="flex items-center space-x-6 mb-16">
                  <span className="text-4xl font-bold tracking-tighter text-white">$345</span>
                  <span className="text-white/20 line-through text-sm tracking-[0.2em] font-medium uppercase">$420 VALUE</span>
                </div>
                <Link to="/booking" className="bg-gold-accent text-white px-12 py-6 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-charcoal transition-all flex items-center justify-center sm:inline-flex group">
                  <span>RESERVE PACKAGE</span>
                  <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                 <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl relative z-10 editorial-border border-[1px]">
                   <img 
                     src={homeImages.service1} 
                     alt="Premium Salon Experience" 
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="absolute -top-12 -right-12 w-64 h-64 bg-gold-accent/20 rounded-full blur-[100px]" />
                 <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Quote Section */}
      <section className="py-24 bg-white border-y border-beige text-center">
        <div className="container mx-auto px-4">
           <h2 className="font-serif text-4xl md:text-5xl text-charcoal italic tracking-tight">
             \"Beauty is an experience of the soul, curated through the lens of art.\"
           </h2>
        </div>
      </section>
    </div>
  );
}
