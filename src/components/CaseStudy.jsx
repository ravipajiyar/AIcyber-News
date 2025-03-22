import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CaseStudy = () => {
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

  const caseStudies = [
    {
      id: 1,
      sector: 'Banking Sector',
      title: 'Digital Banking Security Breach',
      details: [
        'Major financial institution faced sophisticated phishing attack affecting 10,000+ customers',
        'Implementation of AI-based fraud detection system',
        '90% reduction in fraudulent transactions post-implementation',
      ],
      year: '2023',
      color: 'blue'
    },
    {
      id: 2,
      sector: 'Government Sector',
      title: 'Government Database Ransomware Attack',
      details: [
        'Targeted ransomware attack on government infrastructure',
        'Enhanced cybersecurity protocols implementation',
        'Development of incident response framework',
      ],
      year: '2024',
      color: 'purple'
    },
  ];

  const keyFindings = [
    { 
      id: 1, 
      title: 'Prevention Strategies', 
      description: 'Implementation of multi-factor authentication and regular security audits proved most effective',
      icon: 'shield',
      color: 'blue'
    },
    { 
      id: 2, 
      title: 'Response Time', 
      description: 'Average incident response time reduced by 60% with automated detection systems',
      icon: 'clock',
      color: 'amber'
    },
    { 
      id: 3, 
      title: 'Recovery Process', 
      description: 'Structured recovery protocols reduced system downtime by 75%',
      icon: 'refresh',
      color: 'teal'
    },
  ];

  const upcomingReviews = [
    { 
      id: 1, 
      timeline: 'Today', 
      description: 'Active threat monitoring and regular security patch implementation',
      icon: 'eye',
      color: 'indigo'
    },
    { 
      id: 2, 
      timeline: '+30 Days', 
      description: 'Comprehensive review of implemented security measures',
      icon: 'check',
      color: 'blue'
    },
    { 
      id: 3, 
      timeline: '+60 Days', 
      description: 'Development of long-term cybersecurity roadmap',
      icon: 'map',
      color: 'purple'
    },
  ];

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
        <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full"></div>
        
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
            <span className="text-blue-300 text-sm font-semibold tracking-wider">CYBERSECURITY CASE STUDIES</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Analysis of Significant Cybersecurity Incidents
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Exploring key cyber incidents and their implications for Nepal's digital landscape.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => {
              const colorScheme = getColorScheme(study.color);
              
              return (
                <div key={study.id} className="group relative">
                  {/* Hover glow effect */}
                  <div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-xl`}
                    style={{background: `radial-gradient(circle, #${colorScheme.glow.split('-')[1]} 0%, transparent 70%)`}}
                  ></div>
                  
                  {/* Border gradient */}
                  <div
                    className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-br opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(to bottom right, 
                        ${study.color === 'blue' ? '#3B82F6' : '#8B5CF6'}, 
                        transparent)`
                    }}
                  ></div>
                  
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 group-hover:translate-y-1 relative overflow-hidden h-full">
                    {/* Top section with sector and year */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colorScheme.bg} ${colorScheme.text}`}>
                        {study.sector}
                      </span>
                      <span className="text-gray-500 text-xs flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {study.year}
                      </span>
                    </div>
                    
                    {/* Title with animated hover effect */}
                    <h3 className={`text-xl font-semibold mb-4 ${colorScheme.text} group-hover:translate-x-0.5 transition-transform duration-300`}>
                      {study.title}
                    </h3>
                    
                    {/* Details */}
                    <ul className="space-y-3 mb-6">
                      {study.details.map((detail, index) => (
                        <li key={index} className="text-gray-400 flex items-start space-x-2">
                          <span className={`${colorScheme.text} mt-1`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Action button */}
                    <a 
                      href="#" 
                      className={`inline-flex items-center justify-center px-4 py-2 rounded-lg ${colorScheme.buttonBg} ${colorScheme.buttonHover} text-white transition-all duration-300 shadow-lg ${colorScheme.shadow} transform group-hover:translate-y-0.5`}
                    >
                      Read Full Analysis
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full bg-gradient-to-br from-white to-transparent transform translate-x-16 -translate-y-16"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Findings & Recommendations */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-1 rounded-full">
              <span className="animate-pulse w-2 h-2 bg-purple-500 rounded-full"></span>
              <span className="text-purple-300 text-sm font-semibold tracking-wider">KEY FINDINGS & RECOMMENDATIONS</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyFindings.map((finding) => {
              const colorScheme = getColorScheme(finding.color);
              
              return (
                <div key={finding.id} className="group relative">
                  {/* Hover glow effect */}
                  <div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-xl`}
                    style={{background: `radial-gradient(circle, #${colorScheme.glow.split('-')[1]} 0%, transparent 70%)`}}
                  ></div>
                  
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 group-hover:translate-y-1 h-full">
                    {/* Icon */}
                    <div className={`p-3 rounded-lg ${colorScheme.bg} ${colorScheme.text} mb-4 inline-flex items-center justify-center w-12 h-12`}>
                      {finding.icon === "shield" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      )}
                      {finding.icon === "clock" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {finding.icon === "refresh" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Content */}
                    <h4 className={`text-lg font-semibold mb-2 ${colorScheme.text} group-hover:translate-x-0.5 transition-transform duration-300`}>
                      {finding.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{finding.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Continuous Monitoring & Updates */}
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/20 px-4 py-1 rounded-full">
            <span className="animate-pulse w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span className="text-indigo-300 text-sm font-semibold tracking-wider">CONTINUOUS MONITORING & UPDATES</span>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="relative timeline">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-blue-500/50 to-transparent transform -translate-x-1/2"></div>
            
            {upcomingReviews.map((review, index) => {
              const colorScheme = getColorScheme(review.color);
              const isEven = index % 2 === 0;
              
              return (
                <div key={review.id} className="relative mb-8">
                  {/* Timeline connector and dot */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${colorScheme.bg} border-2 ${colorScheme.border} z-10`}></div>
                    <div className={`h-16 w-0.5 ${colorScheme.bg}`}></div>
                  </div>
                  
                  {/* Content box - alternating left/right */}
                  <div className={`flex ${isEven ? 'justify-end' : 'justify-start'} relative`}>
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:mr-16' : 'md:ml-16'}`}>
                      <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-1">
                        {/* Glow effect */}
                        <div 
                          className={`absolute -top-6 -right-6 w-24 h-24 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                          style={{background: `radial-gradient(circle, #${colorScheme.glow.split('-')[1]} 0%, transparent 70%)`}}
                        ></div>
                        
                        {/* Border gradient */}
                        <div
                          className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-b opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ 
                            background: `linear-gradient(to bottom right, 
                              ${review.color === 'indigo' ? '#6366F1' : 
                                review.color === 'blue' ? '#3B82F6' : '#8B5CF6'}, 
                              transparent)`
                          }}
                        ></div>
                        
                        {/* Content */}
                        <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 flex items-center">
                          {/* Icon */}
                          <div className={`p-3 rounded-lg ${colorScheme.bg} ${colorScheme.text} mr-4 inline-flex items-center justify-center w-12 h-12 flex-shrink-0`}>
                            {review.icon === "eye" && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            )}
                            {review.icon === "check" && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                            {review.icon === "map" && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                              </svg>
                            )}
                          </div>
                          
                          {/* Content */}
                          <div>
                            <span className={`text-lg font-semibold ${colorScheme.text}`}>{review.timeline}</span>
                            <p className="text-gray-400 text-sm">{review.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Final dot at timeline end */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-purple-500/30 border-2 border-purple-700/30 z-10"></div>
            </div>
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
        
        .timeline:after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.5) 0%, transparent 70%);
          border-radius: 50%;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          filter: blur(4px);
        }
      `}</style>
    </motion.section>
  );
};

export default CaseStudy;