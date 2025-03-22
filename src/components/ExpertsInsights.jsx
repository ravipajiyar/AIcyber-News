import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExpertInsights = () => {
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

  const experts = [
    {
      id: 1,
      name: 'Dr. Ram Kumar',
      title: 'Cybersecurity Expert',
      initials: 'DR',
      quote: 'AI-driven threat detection is revolutionizing Nepal\'s cybersecurity landscape. Organizations must adapt to stay protected.',
      publication: 'Latest Publication: Artificial Intelligence in Cyber Defense',
      color: 'blue'
    },
    {
      id: 2,
      name: 'Sita Poudel',
      title: 'Cyber Law Specialist',
      initials: 'SP',
      quote: 'Nepal\'s cyber laws need continuous updates to address emerging threats and technological advancement.',
      publication: 'Latest Publication: Evolution of Cyber Law in Nepal',
      color: 'purple'
    },
    {
      id: 3,
      name: 'Anil Bhattarai',
      title: 'Digital Forensics Expert',
      initials: 'AB',
      quote: 'Digital evidence collection and preservation are crucial for successful cybercrime prosecution.',
      publication: 'Latest Publication: Digital Forensics Best Practices',
      color: 'teal'
    },
  ];

  const publications = [
    { 
      id: 1, 
      title: 'Cybersecurity Trends in Nepal 2024', 
      description: 'Comprehensive analysis of emerging cyber threats and defense strategies',
      icon: 'trend',
      color: 'amber'
    },
    { 
      id: 2, 
      title: 'AI Implementation in Cyber Defense', 
      description: 'How artificial intelligence is shaping cybersecurity measures',
      icon: 'ai',
      color: 'blue'
    },
    { 
      id: 3, 
      title: 'Legal Framework Updates 2024', 
      description: 'Recent changes in Nepal\'s cybersecurity legal landscape',
      icon: 'legal',
      color: 'indigo'
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
        <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full"></div>
        
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
          <div className="inline-block px-4 py-1 bg-purple-500/20 rounded-full mb-4">
            <span className="text-purple-300 text-sm font-semibold tracking-wider">EXPERT INSIGHTS</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Learn from Nepal's Cybersecurity Experts
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover strategies and perspectives from leading cybersecurity experts and legal professionals in Nepal.
          </p>
        </motion.div>

        {/* Expert Insights - Hexagonal Grid */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
            {experts.map((expert, index) => {
              const colorScheme = getColorScheme(expert.color);
              
              return (
                <div 
                  key={expert.id}
                  className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 flex justify-center"
                >
                  <div className="relative group">
                    {/* Hover glow effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl rounded-xl" 
                      style={{background: `radial-gradient(circle, #${colorScheme.glow.split('-')[1]} 0%, transparent 70%)`}}
                    ></div>
                    
                    {/* Main hexagon container */}
                    <div className="hexagon-container relative">
                      {/* Rotating border */}
                      <div className="hexagon-border absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-full w-full rounded-xl border border-gray-700/50 overflow-hidden">
                          <div className="absolute inset-0 rotate-border"></div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="hexagon relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 group-hover:translate-y-1 flex flex-col items-center text-center h-full">
                        {/* Expert avatar/initials */}
                        <div className={`relative w-20 h-20 rounded-full ${colorScheme.bg} flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110`}>
                          <span className={`text-xl font-bold ${colorScheme.text}`}>{expert.initials}</span>
                          
                          {/* Pulse effect */}
                          <div className={`absolute inset-0 rounded-full ${colorScheme.border} animate-ping opacity-30`}></div>
                        </div>
                        
                        {/* Expert name and title */}
                        <h3 className={`text-xl font-semibold ${colorScheme.text} mb-1`}>{expert.name}</h3>
                        <p className="text-gray-400 text-sm mb-4">{expert.title}</p>
                        
                        {/* Quote with quotation marks */}
                        <div className="relative mb-3 flex-grow">
                          <div className={`absolute -top-2 -left-1 text-4xl opacity-20 ${colorScheme.text}`}>"</div>
                          <p className="text-gray-300 italic px-4 mb-2">{expert.quote}</p>
                          <div className={`absolute -bottom-2 -right-1 text-4xl opacity-20 ${colorScheme.text}`}>"</div>
                        </div>
                        
                        {/* Publication line */}
                        <div className={`text-xs ${colorScheme.text} mt-4 border-t border-gray-700/30 pt-3 w-full`}>
                          {expert.publication}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Latest Publications - Timeline Style */}
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-1 rounded-full">
            <span className="animate-pulse w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="text-blue-300 text-sm font-semibold tracking-wider">LATEST PUBLICATIONS</span>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="relative publication-timeline">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform -translate-x-1/2"></div>
            
            {publications.map((publication, index) => {
              const colorScheme = getColorScheme(publication.color);
              const isEven = index % 2 === 0;
              
              return (
                <div key={publication.id} className="relative mb-12">
                  {/* Timeline connector and dot */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${colorScheme.bg} border-2 ${colorScheme.border} z-10`}></div>
                    <div className={`h-16 w-0.5 ${colorScheme.bg}`}></div>
                  </div>
                  
                  {/* Content box - alternating left/right */}
                  <div className={`flex ${isEven ? 'justify-end' : 'justify-start'} relative`}>
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:mr-16' : 'md:ml-16'}`}>
                      <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-1">
                        {/* Border gradient */}
                        <div
                          className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-b opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ 
                            background: `linear-gradient(to bottom right, 
                              ${publication.color === 'blue' ? '#3B82F6' : 
                                publication.color === 'purple' ? '#8B5CF6' : 
                                publication.color === 'amber' ? '#F59E0B' : '#6366F1'}, 
                              transparent)`
                          }}
                        ></div>
                        
                        {/* Content */}
                        <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 flex flex-col h-full">
                          {/* Glow effect */}
                          <div 
                            className={`absolute -top-6 -right-6 w-24 h-24 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                            style={{background: `radial-gradient(circle, #${colorScheme.glow.split('-')[1]} 0%, transparent 70%)`}}
                          ></div>
                          
                          {/* Icon */}
                          <div className={`p-3 rounded-lg ${colorScheme.bg} ${colorScheme.text} mb-4 inline-flex items-center justify-center w-12 h-12`}>
                            {publication.icon === "trend" && (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                              </svg>
                            )}
                            {publication.icon === "ai" && (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                              </svg>
                            )}
                            {publication.icon === "legal" && (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                              </svg>
                            )}
                          </div>
                          
                          {/* Content */}
                          <h3 className={`text-xl font-semibold mb-2 ${colorScheme.text} group-hover:translate-x-0.5 transition-transform duration-300`}>
                            {publication.title}
                          </h3>
                          <p className="text-gray-400 flex-grow mb-6">{publication.description}</p>
                          
                          {/* Action button */}
                          <a 
                            href="#" 
                            className={`inline-flex items-center justify-center px-4 py-2 rounded-lg ${colorScheme.buttonBg} ${colorScheme.buttonHover} text-white transition-all duration-300 shadow-lg ${colorScheme.shadow} transform group-hover:translate-y-0.5`}
                          >
                            Read Publication
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
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
        
        .hexagon-container {
          width: 320px;
          min-height: 340px;
        }
        
        @keyframes border-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .rotate-border {
          background: linear-gradient(90deg, transparent, rgba(142, 81, 234, 0.3), transparent);
          width: 200%;
          height: 200%;
          animation: border-rotate 8s linear infinite;
        }
        
        .publication-timeline:after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, transparent 70%);
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

export default ExpertInsights;