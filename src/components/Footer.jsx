import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-gray-900 text-gray-300 py-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-full blur-xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between gap-16 mb-12">
          {/* Nepal Cyber Security Portal */}
          <div className="md:w-1/3 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-lg blur opacity-60"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-500/20 rounded-lg mr-3">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-indigo-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Nepal Cyber Security Portal</h3>
              </div>
              <p className="mb-6 text-gray-400">Dedicated to enhancing Nepal's cybersecurity landscape through education, awareness, and professional support. We help organizations and individuals navigate the digital world safely.</p>
              
              <div className="space-y-3">
                <a href="https://ncsc.gov.np/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors duration-300 group">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  National Cyber Security Center (NCSC)
                </a>
                <a href="https://cyberbureau.nepalpolice.gov.np/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors duration-300 group">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Nepal Police Cyber Bureau
                </a>
                <a href="https://cyberalertnepal.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors duration-300 group">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Cyber Alert Nepal
                </a>
                <a href="https://nepal.gov.np/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors duration-300 group">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Government of Nepal Portal
                </a>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Quick Links */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
                  <span className="w-8 h-0.5 bg-blue-500 mr-2"></span>
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li><a href="#top" onClick={(e) => handleNavClick(e, '#top')} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center cursor-pointer"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Home</a></li>
                  <li><a href="#cyber-laws" onClick={(e) => handleNavClick(e, '#cyber-laws')} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center cursor-pointer"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Cyber Laws</a></li>
                  <li><a href="#ai-solutions" onClick={(e) => handleNavClick(e, '#ai-solutions')} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center cursor-pointer"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>AI Solutions</a></li>
                  <li><a href="#resources" onClick={(e) => handleNavClick(e, '#resources')} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center cursor-pointer"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Resources</a></li>
                  <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center cursor-pointer"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Contact</a></li>
                </ul>
              </div>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
                  <span className="w-8 h-0.5 bg-purple-500 mr-2"></span>
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li><a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center cursor-pointer"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Blog</a></li>
                  <li><a href="#case-studies" onClick={(e) => handleNavClick(e, '#case-studies')} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center cursor-pointer"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Case Studies</a></li>
                  <li><a href="#report-incident" onClick={(e) => handleNavClick(e, '#report-incident')} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center cursor-pointer"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Report Incident</a></li>
                  <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center cursor-pointer"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>FAQs</a></li>
                </ul>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="relative sm:col-span-2 md:col-span-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-60"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
                <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
                <p className="mb-4 text-gray-400">Get the latest cybersecurity updates and tips directly to your inbox.</p>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-gray-900/80 border border-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-500/30 rounded-lg py-2 px-4 mb-3 text-white placeholder-gray-500 outline-none transition-all duration-300"
                  />
                  <div className="relative group inline-block w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <button className="relative w-full py-2 px-4 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white font-medium rounded-md shadow-lg transition-all duration-300 hover:shadow-indigo-500/30 hover:scale-[1.02]">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider with glow */}
        <motion.div variants={itemVariants} className="relative h-px w-full my-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"></div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">&copy; 2024 Nepal Cyber Security Portal. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="https://ncsc.gov.np/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-300">NCSC</a>
            <a href="https://cyberbureau.nepalpolice.gov.np/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-300">Cyber Bureau</a>
            <a href="https://cyberalertnepal.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-300">Cyber Alert Nepal</a>
            <a href="https://nepal.gov.np/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-300">Govt. of Nepal</a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </motion.footer>
  );
};

export default Footer;
