import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Counter animation for stats
  const CounterAnimation = ({ end, duration = 2, label }) => {
    const [count, setCount] = React.useState(0);
    const [ref, inView] = useInView({
      threshold: 0.5,
      triggerOnce: true
    });

    useEffect(() => {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      if (inView) {
        animationFrame = requestAnimationFrame(animate);
      }

      return () => cancelAnimationFrame(animationFrame);
    }, [inView, end, duration]);

    return (
      <div ref={ref} className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-500 transform hover:-translate-y-1 shadow-lg hover:shadow-teal-500/10 group">
        <div className="relative overflow-hidden">
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-400">
            {count}
          </span>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
        <p className="text-gray-400 mt-2">{label}</p>
      </div>
    );
  };

  return (
    <motion.section 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-gray-900 text-white py-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Animated dots */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-teal-500 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `pulse ${Math.random() * 5 + 2}s infinite alternate`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side: Text and Stats */}
          <motion.div variants={itemVariants} className="lg:pr-8">
            <div className="mb-2 inline-block px-4 py-1 bg-teal-500/20 rounded-full">
              <span className="text-teal-300 text-sm font-semibold tracking-wider">CYBERSECURITY METRICS</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Securing Nepal's Digital Infrastructure
            </h2>
            <motion.p variants={itemVariants} className="text-gray-400 mb-8 text-lg leading-relaxed">
              Expert guidance on cybersecurity, legal frameworks, and AI-driven solutions to protect Nepal's digital future.
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 mb-8">
              <CounterAnimation end={2000} label="Annual Cyber Incidents" />
              <CounterAnimation end={85} duration={1.5} label="Success Rate %" />
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="relative overflow-hidden px-6 py-3 bg-red-500 text-white rounded-lg font-medium group">
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Report an Incident
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
              
              <button className="relative overflow-hidden px-6 py-3 bg-transparent border-2 border-teal-400 text-teal-400 rounded-lg font-medium group">
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Explore Resources
                </span>
                <span className="absolute inset-0 bg-teal-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="absolute inset-0 bg-teal-400 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></span>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right Side: Latest Cybersecurity Updates */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <svg className="w-6 h-6 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Latest Cybersecurity Updates
            </h3>
            
            <ul className="space-y-5">
              <motion.li 
                className="flex p-3 bg-gray-700/40 rounded-lg hover:bg-gray-700/60 transition-colors duration-300 transform hover:-translate-x-1 hover:translate-y-1"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-teal-400 mr-4 bg-teal-400/20 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 00-4.5-4.5H6.75A2.25 2.25 0 004.5 4.5v13.5a2.25 2.25 0 002.25 2.25h4.5a4.5 4.5 0 004.5-4.5V13.5" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-white">New Cyber Law Amendment</h4>
                  <p className="text-gray-400 mt-1">Updated regulations for digital transactions</p>
                  <div className="mt-2">
                    <a href="#" className="text-teal-400 text-sm hover:text-teal-300 inline-flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex p-3 bg-gray-700/40 rounded-lg hover:bg-gray-700/60 transition-colors duration-300 transform hover:-translate-x-1 hover:translate-y-1"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-red-400 mr-4 bg-red-400/20 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-white">AI Security Integration</h4>
                  <p className="text-gray-400 mt-1">Enhanced threat detection systems</p>
                  <div className="mt-2">
                    <a href="#" className="text-red-400 text-sm hover:text-red-300 inline-flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex p-3 bg-gray-700/40 rounded-lg hover:bg-gray-700/60 transition-colors duration-300 transform hover:-translate-x-1 hover:translate-y-1"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-blue-400 mr-4 bg-blue-400/20 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-white">Latest Security Report</h4>
                  <p className="text-gray-400 mt-1">Insights from the first quarter of 2025</p>
                  <div className="mt-2">
                    <a href="#" className="text-blue-400 text-sm hover:text-blue-300 inline-flex items-center">
                      Download report
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Custom animation */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.3; }
          100% { transform: scale(1.2); opacity: 0.1; }
        }
      `}</style>
    </motion.section>
  );
};

export default StatsSection;