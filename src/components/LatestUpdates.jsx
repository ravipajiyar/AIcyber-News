import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LatestUpdates = () => {
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

  const updates = [
    {
      id: 1,
      category: 'Latest Law',
      color: 'red',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v10m2 2v-6a2 2 0 00-2-2h-3" />
        </svg>
      ),
      title: 'Electronic Transaction Act Amendment',
      description: 'New provisions for digital signature verification and online transaction security measures implemented.',
      date: 'June 15, 2023',
    },
    {
      id: 2,
      category: 'AI Security',
      color: 'blue',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'AI-Powered Threat Detection',
      description: 'Implementation of advanced AI algorithms for real-time cyber threat detection and prevention.',
      date: 'June 10, 2023',
    },
    {
      id: 3,
      category: 'Guidelines',
      color: 'green',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Updated Reporting Protocol',
      description: 'New streamlined process for reporting cybercrime incidents with enhanced user protection measures.',
      date: 'June 5, 2023',
    },
  ];

  // Function to get the appropriate color for each category
  const getCategoryColor = (color) => {
    const colors = {
      red: {
        bg: 'bg-red-100',
        text: 'text-red-600',
        lightBg: 'bg-red-500/10',
        border: 'border-red-200',
        shadow: 'shadow-red-500/20',
        hover: 'hover:bg-red-500/20',
      },
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        lightBg: 'bg-blue-500/10',
        border: 'border-blue-200',
        shadow: 'shadow-blue-500/20',
        hover: 'hover:bg-blue-500/20',
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        lightBg: 'bg-green-500/10',
        border: 'border-green-200',
        shadow: 'shadow-green-500/20',
        hover: 'hover:bg-green-500/20',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <motion.section 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-gray-900 text-white py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-teal-500/20 rounded-full mb-4">
            <span className="text-teal-300 text-sm font-semibold tracking-wider">STAY INFORMED</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Latest Updates & Insights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay informed about the latest developments in cybersecurity and legal frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update, index) => {
            const colorScheme = getCategoryColor(update.color);
            
            return (
              <motion.div
                key={update.id}
                variants={itemVariants}
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 group shadow-lg hover:shadow-xl"
                style={{ transition: 'all 0.3s ease' }}
              >
                <div className={`h-2 ${colorScheme.bg}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`flex items-center gap-2 ${colorScheme.text} text-xs font-semibold px-3 py-1.5 rounded-full ${colorScheme.lightBg} ${colorScheme.border} border`}>
                      {update.icon}
                      {update.category}
                    </span>
                    <span className="text-gray-500 text-xs">{update.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-teal-300 transition-colors duration-300">
                    {update.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">{update.description}</p>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <a 
                      href="#" 
                      className={`inline-flex items-center ${colorScheme.text} hover:font-medium transition-all duration-300 group-hover:translate-x-1`}
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <button className="relative inline-flex items-center px-6 py-3 overflow-hidden text-white bg-teal-500 rounded-lg group focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">View All Updates</span>
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
      
      {/* Custom animation */}
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
    </motion.section>
  );
};

export default LatestUpdates;