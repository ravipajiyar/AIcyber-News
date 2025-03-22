import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  // Social icons with hover effects
  const socialIcons = [
    {
      name: 'Twitter',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.682-1.49 2.028-2.54-.983.58-2.069.986-3.222 1.14.331-.392.582-.812.725-1.287-1.07-.638-1.836-1.746-1.836-2.972v-.046c.56.306 1.198.476 1.856.494-.928-.61-1.546-1.678-1.546-2.861 0-.632.168-1.222.449-1.723 1.557 1.936 3.92 3.258 6.566 3.395-.461-1.574-.709-3.214-.709-4.904 0-1.087.29-2.145.825-3.021 2.653 3.268 6.521 4.096 10.073 2.141-.943-.298-1.885-.472-2.79-.572.973-.613 1.703-1.478 2.177-2.487-.847.497-1.771.834-2.753 1.018m0 1.476h.006" />
        </svg>
      ),
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M20.447 2.045h-16.894c-1.412 0-2.553 1.14-2.553 2.553v16.894c0 1.412 1.14 2.553 2.553 2.553h16.894c1.412 0 2.553-1.14 2.553-2.553v-16.894c0-1.412-1.14-2.553-2.553-2.553zm-12.659 16.894h-3.06v-9.255h3.06v9.255zm-1.53-10.678c-.98 0-1.765-.784-1.765-1.765 0-.98.784-1.765 1.765-1.765.98 0 1.765.784 1.765 1.765 0 .98-.784 1.765-1.765 1.765zm13.259 10.678h-3.061v-4.873c0-1.142-.023-2.611-1.588-2.611-1.588 0-1.832 1.242-1.832 2.527v4.957h-3.06v-9.255h2.934v1.347h.042c.407-.772 1.402-1.588 2.884-1.588 3.089 0 3.659 2.034 3.659 4.679v4.817z" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'GitHub',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: 'from-gray-500 to-gray-700'
    },
    {
      name: 'Discord',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
        </svg>
      ),
      color: 'from-indigo-400 to-purple-600'
    }
  ];

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
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Animated particles */}
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
          {/* About Us with animated border */}
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
              
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => (
                  <div key={index} className="relative group">
                    <div className={`absolute inset-0 rounded-full blur-sm bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <a href="#" aria-label={social.name} className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white transition-colors duration-300">
                      {social.icon}
                    </a>
                  </div>
                ))}
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
                  <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Home</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>About Us</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Services</Link></li>
                  <li><Link to="/resources" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Resources</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Contact</Link></li>
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
                  <li><Link to="/blog" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Blog</Link></li>
                  <li><Link to="/case-studies" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Case Studies</Link></li>
                  <li><Link to="/events" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Events</Link></li>
                  <li><Link to="/faqs" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>FAQs</Link></li>
                  <li><Link to="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Privacy Policy</Link></li>
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

        {/* Bottom Bar with hover effects */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">© 2024 Nepal Cyber Security Portal. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-300">Cookie Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-300">Sitemap</a>
          </div>
        </motion.div>
      </div>

      {/* Custom animations and styles */}
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