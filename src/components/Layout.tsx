import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="h-10 bg-gold-accent w-full flex items-center justify-between px-4 sm:px-10 text-[10px] uppercase tracking-widest font-semibold text-white z-[60] relative">
        <span className="hidden sm:inline">Professional Hair Styling & Color Services in Longview, TX</span>
        <span className="sm:hidden">Professional Hair Beauty</span>
        <span>Call +1 903-753-2968 • Tues-Sat: 9AM - 7PM</span>
      </div>

      <nav 
        className={`fixed w-full z-50 transition-all duration-500 top-0 mt-10 ${
          scrolled ? 'bg-platinum/95 backdrop-blur-md py-4 shadow-sm border-b border-beige' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex flex-col group">
              <span className="font-serif text-3xl font-bold tracking-tight italic charcoal leading-none">Jan C's</span>
              <span className="text-[10px] uppercase tracking-[0.3em] mt-1 text-gold-accent">Luxury Salon</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                   className={`text-[10px] uppercase tracking-widest font-bold transition-all hover:opacity-50 ${
                    location.pathname === link.path ? 'underline underline-offset-8 decoration-gold-accent' : 'text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/booking"
                className="px-8 py-3 bg-charcoal text-white text-[10px] font-bold tracking-[0.2em] rounded-full hover:bg-black transition-all"
              >
                BOOK APPOINTMENT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-charcoal focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-platinum border-b border-beige overflow-hidden absolute top-full left-0 w-full"
            >
              <div className="px-10 pt-4 pb-10 space-y-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm uppercase tracking-widest font-bold text-charcoal py-2 border-b border-beige/30"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-charcoal text-white py-4 rounded-full text-[10px] font-bold tracking-[0.2em]"
                >
                  BOOK APPOINTMENT
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-platinum border-t border-beige pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="font-serif text-4xl font-bold tracking-tight italic charcoal leading-none">Jan C's</span>
              <span className="text-xs uppercase tracking-[0.3em] mt-2 text-gold-accent">Luxury Salon</span>
            </div>
            <p className="text-neutral-500 max-w-sm mb-8 leading-relaxed font-light text-sm">
              Extracting the beauty of every strand through professional artistry and soft luxury techniques. 
              Serving the Longview community with distinction.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-gold-accent">Legal & Navigation</h3>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-medium text-neutral-400">
              <li><Link to="/" className="hover:text-charcoal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-charcoal transition-colors">Terms of Service</Link></li>
              <li><Link to="/services" className="hover:text-charcoal transition-colors">Career</Link></li>
              <li><Link to="/contact" className="hover:text-charcoal transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-gold-accent">Connect</h3>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-medium text-neutral-400">
              <li><a href="#" className="hover:text-charcoal transition-colors flex items-center">INSTAGRAM</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors flex items-center">FACEBOOK</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors flex items-center">TIKTOK</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-beige pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-neutral-400 uppercase font-medium">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <span>403 W LOOP 281, LONGVIEW, TX</span>
            <span>ESTABLISHED 2018</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Jan C's Salon</span>
            <span className="text-neutral-300 hidden md:inline">•</span>
            <span className="italic font-serif normal-case capitalize">Developed by <span className="text-gold-accent">Serwizen</span>.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-taupe/30">
      <Navbar />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};
