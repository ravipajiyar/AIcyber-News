import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [resourcesModalOpen, setResourcesModalOpen] = useState(false);
  const [activeResourceTab, setActiveResourceTab] = useState('guides');

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

  // Resources Modal Component
  const ResourcesModal = ({ isOpen, onClose }) => {
    const modalVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 300
        }
      },
      exit: {
        opacity: 0,
        scale: 0.9,
        transition: {
          duration: 0.2
        }
      }
    };

    const resourceCategories = [
      { id: 'guides', label: 'Guides & Documentation' },
      { id: 'tools', label: 'Security Tools' },
      { id: 'training', label: 'Training Resources' },
      { id: 'frameworks', label: 'Legal Frameworks' }
    ];

    const resourcesContent = {
      guides: [
        { title: 'Cybersecurity Best Practices Guide', description: 'Essential security practices for organizations in Nepal', icon: 'document' },
        { title: 'Digital Infrastructure Protection', description: 'Comprehensive guide to protecting critical infrastructure', icon: 'shield' },
        { title: 'Incident Response Playbook', description: 'Step-by-step guide for handling security incidents', icon: 'alert' }
      ],
      tools: [
        { title: 'Network Vulnerability Scanner', description: 'Open-source tool for detecting network vulnerabilities', icon: 'search' },
        { title: 'Encryption Tools Suite', description: 'Essential encryption tools for data protection', icon: 'lock' },
        { title: 'Security Monitoring Dashboard', description: 'Real-time security monitoring solution', icon: 'chart' }
      ],
      training: [
        { title: 'Cybersecurity Fundamentals Course', description: 'Free online training for security basics', icon: 'academic' },
        { title: 'Advanced Threat Detection Workshop', description: 'Hands-on workshop for security professionals', icon: 'target' },
        { title: 'Security Certification Programs', description: 'Industry-recognized certification paths', icon: 'certificate' }
      ],
      frameworks: [
        { title: 'Nepal Digital Security Act', description: 'Official documentation of digital security regulations', icon: 'scale' },
        { title: 'Compliance Requirements Guide', description: 'Guide to meeting regulatory requirements', icon: 'check' },
        { title: 'International Standards Adaptation', description: 'Implementing global standards in local context', icon: 'globe' }
      ]
    };

    const getIconComponent = (iconName) => {
      const icons = {
        document: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        ),
        shield: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        ),
        alert: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        ),
        search: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        ),
        lock: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        ),
        chart: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
        ),
        academic: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
        ),
        target: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        certificate: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        ),
        scale: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
          </svg>
        ),
        check: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        globe: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        )
      };

      return icons[iconName] || icons.document;
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              className="bg-gray-900 rounded-2xl border border-gray-700 shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden z-10"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Cybersecurity Resources
                </h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="px-6 pt-4 flex overflow-x-auto scrollbar-hide">
                {resourceCategories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 mr-2 rounded-lg font-medium flex-shrink-0 transition-all duration-200 ${activeResourceTab === category.id
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800 border border-transparent'
                      }`}
                    onClick={() => setActiveResourceTab(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resourcesContent[activeResourceTab].map((resource, index) => (
                    <motion.div
                      key={`${activeResourceTab}-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-start">
                        <span className="text-teal-400 mr-4 bg-teal-400/10 p-2 rounded-lg">
                          {getIconComponent(resource.icon)}
                        </span>
                        <div>
                          <h4 className="font-bold text-white group-hover:text-teal-300 transition-colors">{resource.title}</h4>
                          <p className="text-gray-400 mt-1 text-sm">{resource.description}</p>
                          <div className="mt-3">
                            <a href="#resources" onClick={onClose} className="text-teal-400 text-sm hover:text-teal-300 inline-flex items-center group">
                              Access resource
                              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-800 bg-gray-900/80">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="text-gray-400 text-sm">
                    <span className="text-teal-400">●</span> Updated with latest resources from Q1 2025
                  </div>
                  <button
                    className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };

  // Enhanced Security Updates
  const SecurityUpdateCard = ({
    icon,
    color,
    title,
    description,
    actionLabel,
    actionIcon,
    href = "#latest-updates",
    delay = 0,
  }) => {
    const schemes = {
      teal: {
        card: "hover:shadow-teal-500/10 hover:border-teal-500/30",
        icon: "text-teal-400 bg-teal-400/20",
        link: "text-teal-400 hover:text-teal-300",
      },
      red: {
        card: "hover:shadow-red-500/10 hover:border-red-500/30",
        icon: "text-red-400 bg-red-400/20",
        link: "text-red-400 hover:text-red-300",
      },
      blue: {
        card: "hover:shadow-blue-500/10 hover:border-blue-500/30",
        icon: "text-blue-400 bg-blue-400/20",
        link: "text-blue-400 hover:text-blue-300",
      },
    };
    const scheme = schemes[color] || schemes.teal;

    return (
      <motion.li
        className={`flex rounded-lg border border-transparent bg-gray-700/40 p-3 transition-all duration-300 hover:-translate-x-1 hover:translate-y-1 hover:bg-gray-700/60 hover:shadow-lg ${scheme.card}`}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay }}
      >
        <span className={`mr-4 rounded-lg p-3 ${scheme.icon}`}>{icon}</span>
        <div>
          <h4 className="font-bold text-white">{title}</h4>
          <p className="mt-1 text-gray-400">{description}</p>
          <div className="mt-2">
            <a
              href={href}
              className={`inline-flex items-center text-sm group ${scheme.link}`}
            >
              {actionLabel}
              {actionIcon}
            </a>
          </div>
        </div>
      </motion.li>
    );
  };

  return (
    <>
      <motion.section
        id="stats"
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
                animation: `pulse-glow ${Math.random() * 5 + 2}s infinite alternate`,
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
                <a
                  href="#report-incident"
                  className="group relative overflow-hidden rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition-colors hover:bg-red-600"
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Report an Incident
                  </span>
                </a>

                <button
                  className="relative overflow-hidden px-6 py-3 bg-transparent border-2 border-teal-400 text-teal-400 rounded-lg font-medium group"
                  onClick={() => setResourcesModalOpen(true)}>
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
                <SecurityUpdateCard
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 00-4.5-4.5H6.75A2.25 2.25 0 004.5 4.5v13.5a2.25 2.25 0 002.25 2.25h4.5a4.5 4.5 0 004.5-4.5V13.5" />
                    </svg>
                  }
                  color="teal"
                  href="#cyber-laws"
                  title="New Cyber Law Amendment"
                  description="Updated regulations for digital transactions"
                  actionLabel="Learn more"
                  actionIcon={
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                  delay={0.1}
                />

                <SecurityUpdateCard
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  }
                  color="red"
                  href="#ai-solutions"
                  title="AI Security Integration"
                  description="Enhanced threat detection systems"
                  actionLabel="Learn more"
                  actionIcon={
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                  delay={0.3}
                />

                <SecurityUpdateCard
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                }
                color="blue"
                href="#resources"
                title="Latest Security Report"
                description="Insights from the first quarter of 2025"
                actionLabel="Download report"
                actionIcon={
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                }
                delay={0.5}
              />
            </ul>
          </motion.div>
        </div>
      </div>

      <ResourcesModal isOpen={resourcesModalOpen} onClose={() => setResourcesModalOpen(false)} />
    </motion.section>
    </>
  );
};

export default StatsSection;