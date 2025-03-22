import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const youtubeVideoId = "sDOWUrBlHEA";
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showIncidentModal, setShowIncidentModal] = useState(false);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const statsData = [
    { value: '78%', label: 'Rise in Cyber Threats' },
    { value: '24/7', label: 'Monitoring' },
    { value: '500+', label: 'Cases Resolved' },
  ];

  // Form state for incident report
  const [incidentForm, setIncidentForm] = useState({
    name: '',
    email: '',
    phone: '',
    incidentType: '',
    incidentDate: '',
    description: '',
    affectedSystems: '',
    impactLevel: 'medium'
  });

  const handleIncidentFormChange = (e) => {
    const { name, value } = e.target;
    setIncidentForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleIncidentSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Incident form submitted:", incidentForm);
    alert("Thank you for reporting this incident. Our team will contact you shortly.");
    setShowIncidentModal(false);
    // Reset form
    setIncidentForm({
      name: '',
      email: '',
      phone: '',
      incidentType: '',
      incidentDate: '',
      description: '',
      affectedSystems: '',
      impactLevel: 'medium'
    });
  };

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowIncidentModal(false);
        setShowLearnMoreModal(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showIncidentModal || showLearnMoreModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showIncidentModal, showLearnMoreModal]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 bg-teal-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-2 px-3 py-1 bg-teal-500 bg-opacity-20 rounded-full text-teal-300 text-sm font-semibold tracking-wider">
            CYBERSECURITY FOR NEPAL
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Protecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Nepal's</span> Digital Future
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions and legal expertise for a safer digital Nepal. 
            We safeguard your data and digital presence against evolving cyber threats.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              onClick={() => setShowIncidentModal(true)}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Report an Incident
            </button>
            <button 
              onClick={() => setShowLearnMoreModal(true)}
              className="px-8 py-3 bg-transparent border-2 border-teal-400 text-teal-400 rounded-lg font-medium hover:bg-teal-400 hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Learn More
            </button>
          </motion.div>
          
          {/* Stats section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {statsData.map((stat, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 hover:border-teal-400 transition-colors duration-300 hover:shadow-lg hover:shadow-teal-500/10">
                <h3 className="text-4xl font-bold text-teal-400 mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          
          {/* Video Section with animated frame */}
          <motion.div 
            variants={itemVariants} 
            className="relative rounded-xl overflow-hidden shadow-2xl shadow-teal-500/10 border border-gray-700 transition-all duration-500"
            style={{ 
              transformStyle: "preserve-3d",
              transform: "perspective(1000px) rotateX(2deg)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 z-0"></div>
            
            {/* Loading overlay */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-10">
                <div className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="Cyber Crime Awareness Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                onLoad={() => setIsVideoLoaded(true)}
              ></iframe>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-teal-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-teal-500/20 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Report Incident Modal */}
      <AnimatePresence>
        {showIncidentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-70 backdrop-blur-sm">
            <motion.div 
              className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-2xl shadow-teal-500/10 border border-gray-700 overflow-hidden relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-700 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Report a Cybersecurity Incident</h3>
                </div>
                <button 
                  onClick={() => setShowIncidentModal(false)}
                  className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Modal content */}
              <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                <div className="bg-gray-900 rounded-lg p-4 mb-6 border border-gray-700 text-gray-300 text-sm">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Your information will be kept confidential and used only to investigate and respond to the reported incident. Our team will contact you within 24 hours.</p>
                  </div>
                </div>
                
                <form onSubmit={handleIncidentSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                        <input 
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={incidentForm.name}
                          onChange={handleIncidentFormChange}
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                        <input 
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={incidentForm.email}
                          onChange={handleIncidentFormChange}
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                        <input 
                          id="phone"
                          name="phone"
                          type="tel"
                          value={incidentForm.phone}
                          onChange={handleIncidentFormChange}
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
                          placeholder="Your contact number"
                        />
                      </div>
                    </div>
                    
                    {/* Incident Details */}
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="incidentType" className="block text-sm font-medium text-gray-300 mb-1">Type of Incident *</label>
                        <select
                          id="incidentType"
                          name="incidentType"
                          required
                          value={incidentForm.incidentType}
                          onChange={handleIncidentFormChange}
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
                        >
                          <option value="">Select incident type</option>
                          <option value="data_breach">Data Breach</option>
                          <option value="phishing">Phishing Attack</option>
                          <option value="malware">Malware/Ransomware</option>
                          <option value="ddos">DDoS Attack</option>
                          <option value="account_compromise">Account Compromise</option>
                          <option value="website_defacement">Website Defacement</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="incidentDate" className="block text-sm font-medium text-gray-300 mb-1">When did it occur? *</label>
                        <input 
                          id="incidentDate"
                          name="incidentDate"
                          type="date"
                          required
                          value={incidentForm.incidentDate}
                          onChange={handleIncidentFormChange}
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="impactLevel" className="block text-sm font-medium text-gray-300 mb-1">Impact Level</label>
                        <div className="flex items-center space-x-4">
                          {['low', 'medium', 'high', 'critical'].map((level) => (
                            <label key={level} className="flex items-center space-x-1 cursor-pointer">
                              <input
                                type="radio"
                                name="impactLevel"
                                value={level}
                                checked={incidentForm.impactLevel === level}
                                onChange={handleIncidentFormChange}
                                className="form-radio h-4 w-4 text-teal-400 focus:ring-2 focus:ring-teal-400"
                              />
                              <span className="text-sm text-gray-300 capitalize">{level}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="affectedSystems" className="block text-sm font-medium text-gray-300 mb-1">Affected Systems/Services</label>
                    <input 
                      id="affectedSystems"
                      name="affectedSystems"
                      type="text"
                      value={incidentForm.affectedSystems}
                      onChange={handleIncidentFormChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
                      placeholder="E.g., Website, Email, Database, Network"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Incident Description *</label>
                    <textarea 
                      id="description"
                      name="description"
                      rows={4}
                      required
                      value={incidentForm.description}
                      onChange={handleIncidentFormChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white resize-none"
                      placeholder="Please provide a detailed description of what happened..."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <button 
                      type="button"
                      onClick={() => setShowIncidentModal(false)}
                      className="px-6 py-2 mr-4 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Submit Report
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Learn More Modal */}
      <AnimatePresence>
        {showLearnMoreModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-70 backdrop-blur-sm" onClick={() => setShowLearnMoreModal(false)}>
            <motion.div 
              className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-2xl shadow-teal-500/10 border border-gray-700 overflow-hidden relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-700 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cybersecurity in Nepal</h3>
                </div>
                <button 
                  onClick={() => setShowLearnMoreModal(false)}
                  className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Modal content */}
              <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Info cards */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-teal-400 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mb-4 text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Our Mission</h4>
                    <p className="text-gray-300">To protect Nepal's digital infrastructure and empower organizations with cutting-edge cybersecurity solutions.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-teal-400 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mb-4 text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Our Approach</h4>
                    <p className="text-gray-300">Combining local expertise with global best practices to address Nepal's unique cybersecurity challenges.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-teal-400 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mb-4 text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Our Impact</h4>
                    <p className="text-gray-300">Safeguarding critical national infrastructure and helping businesses protect their valuable digital assets.</p>
                  </div>
                </div>
                
                {/* Main content */}
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 mb-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Cybersecurity Landscape in Nepal</h4>
                  
                  <div className="space-y-4 text-gray-300">
                  <p>Nepal's digital transformation has accelerated in recent years, with rapid growth in internet penetration, digital banking, e-commerce, and government services. However, this digital expansion has also increased vulnerability to cyber threats.</p>
                    
                    <p>Key challenges in Nepal's cybersecurity landscape include:</p>
                    
                    <ul className="list-disc list-inside ml-4 my-3 space-y-1">
                      <li>Limited cybersecurity awareness and education</li>
                      <li>Shortage of skilled cybersecurity professionals</li>
                      <li>Inadequate investment in security infrastructure</li>
                      <li>Evolving regulatory framework</li>
                      <li>Increasing incidents of phishing, ransomware, and data breaches</li>
                    </ul>
                    
                    <p>Our organization is working to address these challenges through comprehensive cybersecurity services, educational initiatives, and collaboration with government agencies.</p>
                  </div>
                </div>
                
                {/* Services section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Our Services
                    </h5>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Security Assessment & Auditing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Incident Response & Recovery</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Security Training & Awareness</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Managed Security Services</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Compliance & Regulatory Guidance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Why Choose Us
                    </h5>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Local expertise with international standards</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Certified security professionals</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>24/7 monitoring and support</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Customized solutions for Nepali organizations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>End-to-end security management</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl p-6 border border-teal-600/30 text-center">
                  <h4 className="text-xl font-semibold text-white mb-3">Ready to secure your digital assets?</h4>
                  <p className="text-gray-300 mb-5">Our team of experts is ready to help you navigate Nepal's cybersecurity challenges.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => {
                        setShowLearnMoreModal(false);
                        setShowIncidentModal(true);
                      }}
                      className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Report an Incident
                    </button>
                    <a 
                      href="tel:+9771234567"
                      className="px-6 py-2 bg-transparent border-2 border-teal-400 text-teal-400 rounded-lg font-medium hover:bg-teal-400 hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Hero;