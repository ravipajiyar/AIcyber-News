import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Faq = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
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

  const faqData = [
    {
      id: 1,
      question: 'What is the Electronic Transactions Act of Nepal?',
      answer:
        'The Electronic Transactions Act (2008) is Nepal\'s primary legislation governing electronic transactions and cybercrime. It provides legal recognition to electronic records and digital signatures, while also defining cyber offenses and their penalties.',
      color: 'blue',
      icon: 'document'
    },
    {
      id: 2,
      question: 'How can I report a cybercrime in Nepal?',
      answer:
        'You can report cybercrimes to the Nepal Police Cyber Bureau through their official website, hotline (100), or by visiting their office. For urgent cases, you can also contact the National CERT Nepal.',
      color: 'purple',
      icon: 'alert'
    },
    {
      id: 3,
      question: 'What are the common types of cybercrimes in Nepal?',
      answer:
        'Common cybercrimes include social media harassment, financial fraud, identity theft, phishing attacks, and unauthorized access to computer systems. Recent trends show an increase in ransomware attacks.',
      color: 'teal',
      icon: 'lock'
    },
    {
      id: 4,
      question: 'What role does AI play in cybersecurity?',
      answer:
        'AI helps in threat detection, automated response to cyber attacks, pattern recognition for potential threats, and enhancing overall security systems through machine learning algorithms.',
      color: 'amber',
      icon: 'chip'
    },
    {
      id: 5,
      question: 'What are the penalties for cybercrime in Nepal?',
      answer:
        'Penalties vary based on the nature and severity of the crime, ranging from fines to imprisonment. The Electronic Transactions Act provides detailed guidelines for different types of cyber offenses.',
      color: 'indigo',
      icon: 'scale'
    },
  ];

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  // Function to get the appropriate color scheme for each item
  const getColorScheme = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        border: 'border-blue-700/30',
        iconBg: 'bg-blue-500/20',
        gradientFrom: 'from-blue-600/20',
        gradientTo: 'to-blue-400/10',
        buttonBg: 'bg-blue-600',
        buttonHover: 'hover:bg-blue-500',
        shadow: 'shadow-blue-500/30',
        glow: 'blue-500'
      },
      purple: {
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        border: 'border-purple-700/30',
        iconBg: 'bg-purple-500/20',
        gradientFrom: 'from-purple-600/20',
        gradientTo: 'to-purple-400/10',
        buttonBg: 'bg-purple-600',
        buttonHover: 'hover:bg-purple-500',
        shadow: 'shadow-purple-500/30',
        glow: 'purple-500'
      },
      teal: {
        bg: 'bg-teal-500/10',
        text: 'text-teal-400',
        border: 'border-teal-700/30',
        iconBg: 'bg-teal-500/20',
        gradientFrom: 'from-teal-600/20',
        gradientTo: 'to-teal-400/10',
        buttonBg: 'bg-teal-600',
        buttonHover: 'hover:bg-teal-500',
        shadow: 'shadow-teal-500/30',
        glow: 'teal-500'
      },
      amber: {
        bg: 'bg-amber-500/10',
        text: 'text-amber-400',
        border: 'border-amber-700/30',
        iconBg: 'bg-amber-500/20',
        gradientFrom: 'from-amber-600/20',
        gradientTo: 'to-amber-400/10',
        buttonBg: 'bg-amber-600',
        buttonHover: 'hover:bg-amber-500',
        shadow: 'shadow-amber-500/30',
        glow: 'amber-500'
      },
      indigo: {
        bg: 'bg-indigo-500/10',
        text: 'text-indigo-400',
        border: 'border-indigo-700/30',
        iconBg: 'bg-indigo-500/20',
        gradientFrom: 'from-indigo-600/20',
        gradientTo: 'to-indigo-400/10',
        buttonBg: 'bg-indigo-600',
        buttonHover: 'hover:bg-indigo-500',
        shadow: 'shadow-indigo-500/30',
        glow: 'indigo-500'
      }
    };
    return colors[color] || colors.blue;
  };

  // Renders the icon based on the type
  const renderIcon = (icon, colorScheme) => {
    switch (icon) {
      case 'document':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'alert':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'lock':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      case 'chip':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'scale':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
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
        <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-xl"></div>
        
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
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-indigo-500/20 rounded-full mb-4">
            <span className="text-indigo-300 text-sm font-semibold tracking-wider">CYBERSECURITY KNOWLEDGE</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find answers to common questions about cybersecurity and cyber law in Nepal.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-12">
          {faqData.map((faq) => {
            const colorScheme = getColorScheme(faq.color);
            const isExpanded = expandedQuestion === faq.id;
            
            return (
              <div 
                key={faq.id}
                className="group mb-4 relative"
              >
                {/* Hover glow effect */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-xl`}
                  style={{
                    background: `radial-gradient(circle, #${colorScheme.glow.split('-')[1]} 0%, transparent 70%)`,
                    opacity: isExpanded ? 0.3 : 0
                  }}
                ></div>
                
                {/* Border gradient */}
                <div
                  className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-br opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(to bottom right, 
                      ${faq.color === 'blue' ? '#3B82F6' : 
                        faq.color === 'purple' ? '#8B5CF6' :
                          faq.color === 'teal' ? '#14B8A6' :
                            faq.color === 'amber' ? '#F59E0B' : '#6366F1'}, 
                      transparent)`,
                    opacity: isExpanded ? 1 : 0.6
                  }}
                ></div>
                
                <div 
                  className={`bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 overflow-hidden relative ${isExpanded ? 'shadow-lg' : ''}`}
                  style={{
                    boxShadow: isExpanded ? `0 10px 25px -5px rgba(${colorScheme.glow.split('-')[1].match(/.{1,2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.2)` : 'none'
                  }}
                >
                  <button 
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full p-5 text-left flex justify-between items-center group"
                  >
                    <div className="flex items-center">
                      <div className={`${colorScheme.iconBg} ${colorScheme.text} p-2 rounded-lg mr-4`}>
                        {renderIcon(faq.icon, colorScheme)}
                      </div>
                      <h3 className={`text-lg font-medium group-hover:${colorScheme.text} transition-colors duration-300 ${isExpanded ? colorScheme.text : 'text-white'}`}>
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${colorScheme.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {/* Answer container with animation */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-5 pt-0 text-gray-400 border-t border-gray-700/30 bg-gradient-to-b from-transparent to-gray-800/40">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Contact Support Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
            <a 
              href="#" 
              className="relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600/90 to-purple-600/90 rounded-lg text-white font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Didn't find what you're looking for? Contact Support
            </a>
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
    </motion.section>
  );
};

export default Faq;