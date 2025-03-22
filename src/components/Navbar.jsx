import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-white flex items-center group"
        >
          <span className="mr-2 text-teal-400 transform group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944c2.956 0 5.68 1.066 7.834 2.826a1 1 0 01.172 1.432l-6.666 8.334a1 1 0 01-1.556.014l-6.666-8.334a1 1 0 01.172-1.432z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 11.944c2.956 0 5.68-1.066 7.834-2.826a1 1 0 00.172-1.432l-6.666-8.334a1 1 0 00-1.556-.014l-6.666 8.334a1 1 0 00.172 1.432A11.954 11.954 0 0010 11.944z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300">
            AI Cyber News
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-1">
          {['Home', 'Cyber Laws', 'AI Solutions', 'Resources', 'Report Incident', 'Case Studies', 'Blog', 'FAQ', 'Contact'].map((item, index) => (
            <li key={index}>
              <Link 
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="px-3 py-2 text-white text-sm font-medium relative group"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          <li>
            <button className="ml-4 px-4 py-1.5 bg-teal-500 text-white rounded-md text-sm font-medium transform hover:scale-105 transition-transform duration-300 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 shadow-lg shadow-teal-500/20">
              Sign In
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 shadow-lg">
          {['Home', 'Cyber Laws', 'AI Solutions', 'Resources', 'Report Incident', 'Case Studies', 'Blog', 'FAQ', 'Contact'].map((item, index) => (
            <Link 
              key={index}
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button className="w-full mt-3 px-3 py-2 bg-teal-500 text-white rounded-md text-base font-medium hover:bg-teal-400 focus:outline-none">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;