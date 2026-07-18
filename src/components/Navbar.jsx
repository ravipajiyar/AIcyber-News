import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Cyber Laws', href: '#cyber-laws' },
  { label: 'AI Solutions', href: '#ai-solutions' },
  { label: 'Resources', href: '#resources' },
  { label: 'Report Incident', href: '#report-incident' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(href.slice(1));
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
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
        </a>

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
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-white text-sm font-medium relative group cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 shadow-lg">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-800 rounded-md cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
