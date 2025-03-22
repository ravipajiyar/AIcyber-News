import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CyberLaws = () => {
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

  const laws = [
    {
      id: 1,
      title: 'Electronic Transactions Act',
      description: 'Primary legislation governing electronic transactions and digital signatures in Nepal.',
      details: ['Digital Signatures', 'Electronic Records', 'Cybercrime Penalties'],
      date: 'Est. 2008',
      icon: 'file-document',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Privacy & Data Protection',
      description: 'Guidelines and regulations for protecting personal and organizational data.',
      details: ['Data Protection', 'Privacy Rights', 'Compliance Requirements'],
      date: 'Updated 2023',
      icon: 'shield-check',
      color: 'green'
    },
    {
      id: 3,
      title: 'Cybercrime Prevention',
      description: 'Legal framework for preventing and prosecuting cybercrimes in Nepal.',
      details: ['Criminal Provisions', 'Investigation Powers', 'Enforcement Measures'],
      date: 'Active',
      icon: 'gavel',
      color: 'red'
    },
  ];

  // Function to get the appropriate color for each law
  const getCategoryColor = (color) => {
    const colors = {
      red: {
        bg: 'bg-red-500/10',
        text: 'text-red-400',
        border: 'border-red-700/30',
        shadowHover: 'group-hover:shadow-red-500/30',
        highlight: 'group-hover:text-red-300'
      },
      blue: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        border: 'border-blue-700/30',
        shadowHover: 'group-hover:shadow-blue-500/30',
        highlight: 'group-hover:text-blue-300'
      },
      green: {
        bg: 'bg-green-500/10',
        text: 'text-green-400',
        border: 'border-green-700/30',
        shadowHover: 'group-hover:shadow-green-500/30',
        highlight: 'group-hover:text-green-300'
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
        {[...Array(12)].map((_, i) => (
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
            <span className="text-teal-300 text-sm font-semibold tracking-wider">LEGAL FRAMEWORK</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Nepal's Cyber Laws & Regulations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Understanding the legal framework that protects digital rights and ensures cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {laws.map((law) => {
            const colorScheme = getCategoryColor(law.color);
            
            return (
              <motion.div
                key={law.id}
                variants={itemVariants}
                className={`bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border ${colorScheme.border} hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${colorScheme.shadowHover} group`}
              >
                <div className={`h-1 ${colorScheme.bg}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center ${colorScheme.text} transition-all duration-300`}>
                      {law.icon === "file-document" && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H4.5A2.25 2.25 0 002.25 4.5v15A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V14.25M16.875 18.75v-1.5a2.25 2.25 0 00-2.25-2.25H9.375a2.25 2.25 0 00-2.25 2.25v1.5m7.5-15h-1.5a2.25 2.25 0 00-2.25 2.25V7.5m7.5-15H3.375c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125z" />
                        </svg>
                      )}
                      {law.icon === "shield-check" && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {law.icon === "gavel" && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17.25V3c0-.414-.168-.75-.378-1.028l-1.5-1.5a1.125 1.125 0 00-1.591 0l-1.5 1.5c-.21.278-.378.614-.378 1.028v14.25m13.5 0V5.625c0-.414-.168-.75-.378-1.028l-1.5-1.5a1.125 1.125 0 00-1.591 0l-1.5 1.5c-.21.278-.378.614-.378 1.028v11.625m-2.25 0h.008v.008a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v-.008h.008m6 0H7.5" />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-500 text-xs py-1 px-3 rounded-full bg-gray-700/50">{law.date}</span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${colorScheme.highlight}`}>
                    {law.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">{law.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {law.details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${colorScheme.text}`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700/50">
                    <a 
                      href="#" 
                      className={`inline-flex items-center ${colorScheme.text} hover:font-medium transition-all duration-300 group-hover:translate-x-1`}
                    >
                      Learn More
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
          <button className="relative inline-flex items-center px-6 py-3 overflow-hidden text-white bg-teal-600 rounded-lg group focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none shadow-lg shadow-teal-500/30">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">View All Cyber Laws</span>
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

export default CyberLaws;