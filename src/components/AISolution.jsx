import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EnhancedAISolution = () => {
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

  const solutions = [
    {
      id: 1,
      title: 'Threat Detection',
      description: 'Advanced AI algorithms for real-time threat detection and prevention in banking and financial systems.',
      icon: 'shield-check',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Healthcare Security',
      description: 'AI-driven protection for sensitive medical data and healthcare infrastructure security.',
      icon: 'medical',
      color: 'green'
    },
    {
      id: 3,
      title: 'Educational Security',
      description: 'Intelligent systems for protecting educational platforms and student data privacy.',
      icon: 'academic',
      color: 'purple'
    },
  ];

  const benefits = [
    '24/7 automated threat monitoring and response',
    'Predictive analysis for potential security breaches',
    'Enhanced data protection and privacy compliance'
  ];

  // Function to get the appropriate color for each solution
  const getCategoryColor = (color) => {
    const colors = {
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
      purple: {
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        border: 'border-purple-700/30',
        shadowHover: 'group-hover:shadow-purple-500/30',
        highlight: 'group-hover:text-purple-300'
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
          <div className="inline-block px-4 py-1 bg-blue-500/20 rounded-full mb-4">
            <span className="text-blue-300 text-sm font-semibold tracking-wider">ADVANCED PROTECTION</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            AI-Powered Cybersecurity Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Leveraging artificial intelligence to enhance cybersecurity measures and protect digital assets in Nepal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution) => {
            const colorScheme = getCategoryColor(solution.color);
            
            return (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                className={`bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border ${colorScheme.border} hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${colorScheme.shadowHover} group`}
              >
                <div className={`h-1 ${colorScheme.bg}`}></div>
                <div className="p-6">
                  <div className={`flex items-center ${colorScheme.text} transition-all duration-300 mb-4`}>
                    {solution.icon === "shield-check" && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {solution.icon === "medical" && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    )}
                    {solution.icon === "academic" && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.118 51.118 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                    )}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${colorScheme.highlight}`}>
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-400">{solution.description}</p>
                  
                  <div className="pt-4 mt-4 border-t border-gray-700/50">
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

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI Implementation Benefits */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-700/20 p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-white">AI Implementation Benefits</h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Get Started with AI Security */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-teal-700/20 p-6"
          >
            <h3 className="text-xl font-bold mb-3 text-white">Get Started with AI Security</h3>
            <p className="text-gray-400 mb-6">Learn how AI can strengthen your cybersecurity infrastructure.</p>
            
            <button className="relative inline-flex items-center px-6 py-3 overflow-hidden text-white bg-blue-600 rounded-lg group focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-all duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Schedule Consultation</span>
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>
        </div>
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

export default EnhancedAISolution;