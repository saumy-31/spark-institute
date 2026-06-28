import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile navigation on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Campus Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-blue-900 text-white py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight">
          <GraduationCap className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-blue-400'}`} />
          <span className={isScrolled ? 'text-slate-900' : 'text-white'}>SPARK<span className="text-blue-500">INSTITUTE</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors relative py-1 ${
                  isScrolled 
                    ? isActive ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
                    : isActive ? 'text-white font-semibold' : 'text-blue-100 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeUnderline" 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${isScrolled ? 'bg-blue-600' : 'bg-white'}`} 
                  />
                )}
              </Link>
            );
          })}
          <Link to="/contact" className={`px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all shadow-sm hover:shadow ${
            isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-900 hover:bg-blue-50'
          }`}>
            Enroll Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-4 text-slate-800 font-medium md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition ${
                  location.pathname === link.path ? 'bg-blue-50 text-blue-600 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-2 w-full text-center py-3 rounded-xl bg-blue-600 text-white font-semibold flex justify-center items-center gap-2 shadow hover:bg-blue-700 transition">
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;