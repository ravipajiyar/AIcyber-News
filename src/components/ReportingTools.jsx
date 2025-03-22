import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ReportingTools = () => {
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

  // Reporting tools data
  const reportingTools = [
    {
      id: 1,
      title: 'Incident Report Form',
      description: 'Submit detailed reports about cybersecurity incidents securely and confidentially.',
      icon: 'report',
      color: 'blue',
      action: 'Report Now'
    },
    {
      id: 2,
      title: 'Anonymous Tip System',
      description: 'Share information about potential cyber threats while maintaining your anonymity.',
      icon: 'anonymous',
      color: 'purple',
      action: 'Submit Tip'
    },
    {
      id: 3,
      title: 'Evidence Collection Tool',
      description: 'Guided tools to help you collect and document digital evidence properly.',
      icon: 'evidence',
      color: 'teal',
      action: 'Start Collection'
    }
  ];

  // Emergency contacts data
  const emergencyContacts = [
    {
      id: 1,
      title: 'Cyber Bureau Nepal',
      hotline: '100',
      email: 'cyber@nepalpolice.gov.np',
      color: 'red'
    },
    {
      id: 2,
      title: 'National CERT Nepal',
      hotline: '102',
      email: 'cert@ntc.net.np',
      color: 'amber'
    },
    {
      id: 3,
      title: 'Digital Forensics Lab',
      hotline: '01-4411525',
      email: 'dfl@nepal.gov.np',
      color: 'indigo'
    }
  ];

  // Function to get the appropriate color for each item
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
        shadow: 'shadow-blue-500/30'
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
        shadow: 'shadow-purple-500/30'
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
        shadow: 'shadow-teal-500/30'
      },
      red: {
        bg: 'bg-red-500/10',
        text: 'text-red-400',
        border: 'border-red-700/30',
        iconBg: 'bg-red-500/20'
      },
      amber: {
        bg: 'bg-amber-500/10',
        text: 'text-amber-400',
        border: 'border-amber-700/30',
        iconBg: 'bg-amber-500/20'
      },
      indigo: {
        bg: 'bg-indigo-500/10',
        text: 'text-indigo-400',
        border: 'border-indigo-700/30',
        iconBg: 'bg-indigo-500/20'
      }
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
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full"></div>
        
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
          <div className="inline-block px-4 py-1 bg-blue-500/20 rounded-full mb-4">
            <span className="text-blue-300 text-sm font-semibold tracking-wider">SECURITY RESOURCES</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Cybercrime Reporting Tools
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Access secure tools and resources to report cybercrimes and security incidents in Nepal.
          </p>
        </motion.div>

        {/* Reporting Tools - Vertical Cards with Gradient Borders */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reportingTools.map((tool) => {
              const colorScheme = getColorScheme(tool.color);
              
              return (
                <div 
                  key={tool.id}
                  className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-2"
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-b opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                       style={{ 
                         background: `linear-gradient(to bottom right, 
                          ${tool.color === 'blue' ? '#3B82F6' : tool.color === 'purple' ? '#8B5CF6' : '#14B8A6'}, 
                          transparent)`
                       }}></div>
                  
                  {/* Card content */}
                  <div className="relative h-full bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 flex flex-col">
                    {/* Glow effect in background */}
                    <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 ${colorScheme.gradientFrom} ${colorScheme.gradientTo}`}></div>
                    
                    {/* Icon */}
                    <div className={`p-3 rounded-lg ${colorScheme.bg} ${colorScheme.text} mb-4 inline-flex items-center justify-center w-12 h-12`}>
                      {tool.icon === "report" && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H4.5A2.25 2.25 0 002.25 4.5v15A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V14.25M16.875 18.75v-1.5a2.25 2.25 0 00-2.25-2.25H9.375a2.25 2.25 0 00-2.25 2.25v1.5m7.5-15h-1.5a2.25 2.25 0 00-2.25 2.25V7.5" />
                        </svg>
                      )}
                      {tool.icon === "anonymous" && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12v-.008z" />
                        </svg>
                      )}
                      {tool.icon === "evidence" && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125H5.25a1.125 1.125 0 01-1.125-1.125V17.25m11.215-14.25a3.375 3.375 0 016.75 0v5.25a3.375 3.375 0 01-3.375 3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 013.375-3.375zm-8.477 9.75c.078-.553.32-1.05.632-1.487m5.609 1.487a3.376 3.376 0 01-6.126 0m6.126 0c.09.205.153.432.196.675M5.905 14.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-.008z" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Title and description */}
                    <h3 className={`text-xl font-semibold mb-2 ${colorScheme.text} group-hover:translate-x-0.5 transition-transform duration-300`}>{tool.title}</h3>
                    <p className="text-gray-400 flex-grow mb-6">{tool.description}</p>
                    
                    {/* Action button */}
                    <a 
                      href="#" 
                      className={`inline-flex items-center justify-center px-4 py-2 rounded-lg ${colorScheme.buttonBg} ${colorScheme.buttonHover} text-white transition-all duration-300 shadow-lg ${colorScheme.shadow} transform group-hover:translate-y-0.5`}
                    >
                      {tool.action}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Emergency Contacts - Interactive List */}
        <motion.div variants={itemVariants}>
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 px-4 py-1 rounded-full">
              <span className="animate-pulse w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-red-300 text-sm font-semibold tracking-wider">EMERGENCY CONTACTS</span>
            </div>
          </div>
          
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-700/20">
            {emergencyContacts.map((contact, index) => {
              const colorScheme = getColorScheme(contact.color);
              
              return (
                <div 
                  key={contact.id}
                  className={`relative group ${index !== emergencyContacts.length - 1 ? 'border-b border-gray-700/50' : ''}`}
                >
                  <div className="absolute inset-y-0 left-0 w-1 transition-all duration-300 group-hover:w-2 group-hover:opacity-100 opacity-50" 
                       style={{ 
                         background: `linear-gradient(to bottom, ${contact.color === 'red' ? '#EF4444' : contact.color === 'amber' ? '#F59E0B' : '#6366F1'}, transparent)`,
                         opacity: 0.6
                       }}>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-5 transition-all duration-300 group-hover:bg-gray-800/80">
                    <div className="flex items-center space-x-4 mb-3 md:mb-0">
                      <div className={`p-2 rounded-lg ${colorScheme.iconBg} ${colorScheme.text}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25h-2.25a2.25 2.25 0 01-2.25-2.25v-1.5a2.25 2.25 0 012.25-2.25h2.25a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H19.5a2.25 2.25 0 00-2.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 018.25 8.25v-1.5a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25v1.5z" />
                        </svg>
                      </div>
                      <h3 className={`text-lg font-semibold ${colorScheme.text}`}>{contact.title}</h3>
                    </div>
                    
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 pl-9 md:pl-0">
                      <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-gray-400 font-mono tracking-wider">{contact.hotline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-400">{contact.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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

export default ReportingTools;