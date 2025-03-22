import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ResourceLibrary = () => {
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

  const resources = [
    {
      id: 1,
      title: 'Guidelines & Documentation',
      description: 'Official cybersecurity guidelines, policies, and best practices documentation.',
      icon: 'document',
      color: 'blue',
      link: '#'
    },
    {
      id: 2,
      title: 'Training Videos',
      description: 'Educational videos on cybersecurity awareness and best practices.',
      icon: 'video',
      color: 'purple',
      link: '#'
    },
    {
      id: 3,
      title: 'Toolkits & Templates',
      description: 'Download security assessment tools and policy templates.',
      icon: 'tool',
      color: 'teal',
      link: '#'
    }
  ];

  // Function to get the appropriate color for each resource
  const getCategoryColor = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        border: 'border-blue-700/30',
        shadowHover: 'group-hover:shadow-blue-500/30',
        highlight: 'group-hover:text-blue-300'
      },
      purple: {
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        border: 'border-purple-700/30',
        shadowHover: 'group-hover:shadow-purple-500/30',
        highlight: 'group-hover:text-purple-300'
      },
      teal: {
        bg: 'bg-teal-500/10',
        text: 'text-teal-400',
        border: 'border-teal-700/30',
        shadowHover: 'group-hover:shadow-teal-500/30',
        highlight: 'group-hover:text-teal-300'
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
          <div className="inline-block px-4 py-1 bg-blue-500/20 rounded-full mb-4">
            <span className="text-blue-300 text-sm font-semibold tracking-wider">KNOWLEDGE CENTER</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Cybersecurity Resource Library
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Access comprehensive cybersecurity resources and educational materials to strengthen your security posture.
          </p>
        </motion.div>

        {/* Main Resources Section - Horizontal Layout */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-700/20">
            <div className="overflow-hidden">
              {resources.map((resource, index) => {
                const colorScheme = getCategoryColor(resource.color);
                
                return (
                  <div 
                    key={resource.id}
                    className={`relative group ${index !== resources.length - 1 ? 'border-b border-gray-700/50' : ''}`}
                  >
                    <div className="absolute inset-y-0 left-0 w-1 transition-all duration-300 group-hover:w-2 group-hover:opacity-100 opacity-50" 
                         style={{ 
                           background: `linear-gradient(to bottom, ${index === 0 ? '#3B82F6' : index === 1 ? '#8B5CF6' : '#14B8A6'}, transparent)`,
                           opacity: 0.6
                         }}>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 transition-all duration-300 group-hover:bg-gray-800/80">
                      <div className="flex items-start space-x-4 mb-4 md:mb-0">
                        <div className={`p-3 rounded-lg ${colorScheme.bg} ${colorScheme.text}`}>
                          {resource.icon === "document" && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-2.25H6.75a.75.75 0 01-.75-.75V5.625a.75.75 0 01.75-.75H12m7.5 0v15.75a.75.75 0 01-.75.75H15M12 7.125v-1.5a2.25 2.25 0 114.5 0v1.5m-2.25 2.25v5.25m-1.875-2.25h5.25" />
                            </svg>
                          )}
                          {resource.icon === "video" && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                            </svg>
                          )}
                          {resource.icon === "tool" && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.216a3.75 3.75 0 01-1.043 8.584m13.5 0c1.584-.222 2.707-1.616 2.707-3.216s-1.123-2.994-2.707-3.216a3.75 3.75 0 011.043-8.584M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h3 className={`text-xl font-semibold ${colorScheme.text}`}>{resource.title}</h3>
                          <p className="text-gray-400 mt-1">{resource.description}</p>
                        </div>
                      </div>
                      <a 
                        href={resource.link} 
                        className={`inline-flex items-center px-4 py-2 rounded-lg border ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} hover:bg-opacity-30 transition-all duration-300 group-hover:translate-x-1`}
                      >
                        Access Resource
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Stay Updated Section */}
        <motion.div variants={itemVariants} className="mt-12">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-700/20 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">Stay Updated</h3>
                <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest cybersecurity updates, resources, and best practices.</p>
                
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent" 
                  />
                  <button className="absolute right-1 top-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30">
                    Subscribe
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="p-4 rounded-lg bg-gray-800/80 border border-gray-700/50">
                    <h4 className="text-lg font-semibold mb-3 text-white">Subscription Benefits</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3 group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Weekly security bulletins</span>
                      </li>
                      <li className="flex items-center space-x-3 group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Exclusive access to webinars</span>
                      </li>
                      <li className="flex items-center space-x-3 group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/30 transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Early access to new resources</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
          background-size: a20px 20px;
        }
      `}</style>
    </motion.section>
  );
};

export default ResourceLibrary;