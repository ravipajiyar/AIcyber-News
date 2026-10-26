import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ReportingTools = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const controls = useAnimation();
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeModal]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
        setSubmitted(false);
        setFormData({});
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease: "easeIn" } }
  };

  const openModal = (type) => {
    setActiveModal(type);
    setSubmitted(false);
    setFormData({});
  };

  const closeModal = () => {
    setActiveModal(null);
    setSubmitted(false);
    setFormData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${activeModal} submitted:`, formData);
    setSubmitted(true);
  };

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

  const getColorScheme = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-700/30',
        iconBg: 'bg-blue-500/20', gradientFrom: 'from-blue-600/20', gradientTo: 'to-blue-400/10',
        buttonBg: 'bg-blue-600', buttonHover: 'hover:bg-blue-500', shadow: 'shadow-blue-500/30'
      },
      purple: {
        bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-700/30',
        iconBg: 'bg-purple-500/20', gradientFrom: 'from-purple-600/20', gradientTo: 'to-purple-400/10',
        buttonBg: 'bg-purple-600', buttonHover: 'hover:bg-purple-500', shadow: 'shadow-purple-500/30'
      },
      teal: {
        bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-700/30',
        iconBg: 'bg-teal-500/20', gradientFrom: 'from-teal-600/20', gradientTo: 'to-teal-400/10',
        buttonBg: 'bg-teal-600', buttonHover: 'hover:bg-teal-500', shadow: 'shadow-teal-500/30'
      },
      red: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-700/30', iconBg: 'bg-red-500/20' },
      amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-700/30', iconBg: 'bg-amber-500/20' },
      indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-700/30', iconBg: 'bg-indigo-500/20' }
    };
    return colors[color] || colors.blue;
  };

  const renderIcon = (icon) => {
    if (icon === "report") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H4.5A2.25 2.25 0 002.25 4.5v15A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V14.25M16.875 18.75v-1.5a2.25 2.25 0 00-2.25-2.25H9.375a2.25 2.25 0 00-2.25 2.25v1.5m7.5-15h-1.5a2.25 2.25 0 00-2.25 2.25V7.5" />
        </svg>
      );
    }
    if (icon === "anonymous") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12v-.008z" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125H5.25a1.125 1.125 0 01-1.125-1.125V17.25m11.215-14.25a3.375 3.375 0 016.75 0v5.25a3.375 3.375 0 01-3.375 3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 013.375-3.375zm-8.477 9.75c.078-.553.32-1.05.632-1.487m5.609 1.487a3.376 3.376 0 01-6.126 0m6.126 0c.09.205.153.432.196.675M5.905 14.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-.008z" />
      </svg>
    );
  };

  const renderModal = () => {
    if (!activeModal) return null;

    const modalTitle = {
      report: 'Report a Cybersecurity Incident',
      anonymous: 'Submit Anonymous Tip',
      evidence: 'Evidence Collection Guide'
    };

    return (
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-70 backdrop-blur-sm" onClick={closeModal}>
            <motion.div
              className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">{modalTitle[activeModal]}</h3>
                <button onClick={closeModal} className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Submitted Successfully!</h4>
                    <p className="text-gray-400 mb-6">
                      {activeModal === 'report' && 'Your incident report has been recorded. Our team will review it and contact you shortly.'}
                      {activeModal === 'anonymous' && 'Your anonymous tip has been submitted. Thank you for helping us improve cybersecurity.'}
                      {activeModal === 'evidence' && 'Your evidence collection checklist has been saved. Follow the steps provided.'}
                    </p>
                    <button onClick={closeModal} className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors">
                      Close
                    </button>
                  </div>
                ) : activeModal === 'report' ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                        <input name="name" type="text" required value={formData.name || ''} onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                          placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                        <input name="email" type="email" required value={formData.email || ''} onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                          placeholder="your.email@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                        <input name="phone" type="tel" value={formData.phone || ''} onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                          placeholder="Your contact number" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Incident Type *</label>
                        <select name="incidentType" required value={formData.incidentType || ''} onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white">
                          <option value="">Select type</option>
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
                        <label className="block text-sm font-medium text-gray-300 mb-1">Incident Date *</label>
                        <input name="incidentDate" type="date" required value={formData.incidentDate || ''} onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Impact Level</label>
                        <div className="flex items-center space-x-4 mt-2">
                          {['low', 'medium', 'high', 'critical'].map((level) => (
                            <label key={level} className="flex items-center space-x-1 cursor-pointer">
                              <input type="radio" name="impactLevel" value={level} checked={formData.impactLevel === level} onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-400 focus:ring-2 focus:ring-blue-400" />
                              <span className="text-sm text-gray-300 capitalize">{level}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Affected Systems</label>
                      <input name="affectedSystems" type="text" value={formData.affectedSystems || ''} onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                        placeholder="e.g., Website, Email, Database, Network" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Incident Description *</label>
                      <textarea name="description" rows={4} required value={formData.description || ''} onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white resize-none"
                        placeholder="Please provide a detailed description of what happened..."></textarea>
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                      <button type="button" onClick={closeModal} className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors">Cancel</button>
                      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-all duration-300">Submit Report</button>
                    </div>
                  </form>
                ) : activeModal === 'anonymous' ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-700 text-gray-300 text-sm">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Your identity will not be recorded. This tip is completely anonymous.</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Threat Category *</label>
                      <select name="threatCategory" required value={formData.threatCategory || ''} onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white">
                        <option value="">Select category</option>
                        <option value="phishing">Phishing / Scam</option>
                        <option value="malware">Malware Distribution</option>
                        <option value="data_leak">Data Leak / Breach</option>
                        <option value="hacking">Unauthorized Access / Hacking</option>
                        <option value="fraud">Online Fraud</option>
                        <option value="harassment">Cyber Harassment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Target / Platform</label>
                      <input name="target" type="text" value={formData.target || ''} onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                        placeholder="e.g., Bank name, Website URL, Social media platform" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Description of Threat *</label>
                      <textarea name="tipDescription" rows={5} required value={formData.tipDescription || ''} onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white resize-none"
                        placeholder="Please describe the threat in detail. Include any URLs, email addresses, phone numbers, or other relevant information..."></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Any Evidence? (URLs, screenshots info)</label>
                      <input name="evidenceInfo" type="text" value={formData.evidenceInfo || ''} onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                        placeholder="Paste any relevant links or describe evidence" />
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                      <button type="button" onClick={closeModal} className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors">Cancel</button>
                      <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-500 transition-all duration-300">Submit Anonymous Tip</button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-700 text-gray-300 text-sm">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <p>Follow these steps to properly collect and preserve digital evidence for your case.</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                      <input name="collectorName" type="text" value={formData.collectorName || ''} onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
                        placeholder="Your name (optional)" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Incident Reference</label>
                      <input name="incidentRef" type="text" value={formData.incidentRef || ''} onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
                        placeholder="e.g., Report ID or reference number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Type of Evidence *</label>
                      <select name="evidenceType" required value={formData.evidenceType || ''} onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white">
                        <option value="">Select evidence type</option>
                        <option value="screenshot">Screenshots</option>
                        <option value="email">Email headers / messages</option>
                        <option value="url">URLs / Web pages</option>
                        <option value="transaction">Financial transaction records</option>
                        <option value="logs">System / Access logs</option>
                        <option value="communication">Chat / Communication records</option>
                        <option value="multiple">Multiple types</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Evidence Description *</label>
                      <textarea name="evidenceDescription" rows={4} required value={formData.evidenceDescription || ''} onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white resize-none"
                        placeholder="Describe what evidence you have and how it was collected..."></textarea>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 border border-teal-700/30">
                      <h4 className="text-sm font-semibold text-teal-400 mb-2">Evidence Collection Checklist</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start">
                          <input type="checkbox" className="form-checkbox mt-0.5 h-4 w-4 text-teal-400 rounded" />
                          <span className="ml-2">Take screenshots with date/time visible</span>
                        </li>
                        <li className="flex items-start">
                          <input type="checkbox" className="form-checkbox mt-0.5 h-4 w-4 text-teal-400 rounded" />
                          <span className="ml-2">Save original URLs and do not modify them</span>
                        </li>
                        <li className="flex items-start">
                          <input type="checkbox" className="form-checkbox mt-0.5 h-4 w-4 text-teal-400 rounded" />
                          <span className="ml-2">Preserve email headers (not just the body)</span>
                        </li>
                        <li className="flex items-start">
                          <input type="checkbox" className="form-checkbox mt-0.5 h-4 w-4 text-teal-400 rounded" />
                          <span className="ml-2">Document timeline of events chronologically</span>
                        </li>
                        <li className="flex items-start">
                          <input type="checkbox" className="form-checkbox mt-0.5 h-4 w-4 text-teal-400 rounded" />
                          <span className="ml-2">Note down any IP addresses or device info</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                      <button type="button" onClick={closeModal} className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors">Cancel</button>
                      <button type="submit" className="px-6 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-500 transition-all duration-300">Save Evidence Log</button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <motion.section
      id="report-incident"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-gray-900 text-white py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white opacity-20"
            style={{
              top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 4 + 1}px`,
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

        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reportingTools.map((tool) => {
              const colorScheme = getColorScheme(tool.color);
              return (
                <div key={tool.id} className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-2">
                  <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-b opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to bottom right, ${tool.color === 'blue' ? '#3B82F6' : tool.color === 'purple' ? '#8B5CF6' : '#14B8A6'}, transparent)`
                    }}></div>
                  <div className="relative h-full bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 flex flex-col">
                    <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 ${colorScheme.gradientFrom} ${colorScheme.gradientTo}`}></div>
                    <div className={`p-3 rounded-lg ${colorScheme.bg} ${colorScheme.text} mb-4 inline-flex items-center justify-center w-12 h-12`}>
                      {renderIcon(tool.icon)}
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${colorScheme.text} group-hover:translate-x-0.5 transition-transform duration-300`}>{tool.title}</h3>
                    <p className="text-gray-400 flex-grow mb-6">{tool.description}</p>
                    <button
                      onClick={() => openModal(tool.icon)}
                      className={`inline-flex items-center justify-center px-4 py-2 rounded-lg ${colorScheme.buttonBg} ${colorScheme.buttonHover} text-white transition-all duration-300 shadow-lg ${colorScheme.shadow} transform group-hover:translate-y-0.5 cursor-pointer`}
                    >
                      {tool.action}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

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
                <div key={contact.id} className={`relative group ${index !== emergencyContacts.length - 1 ? 'border-b border-gray-700/50' : ''}`}>
                  <div className="absolute inset-y-0 left-0 w-1 transition-all duration-300 group-hover:w-2 group-hover:opacity-100 opacity-50"
                    style={{
                      background: `linear-gradient(to bottom, ${contact.color === 'red' ? '#EF4444' : contact.color === 'amber' ? '#F59E0B' : '#6366F1'}, transparent)`,
                      opacity: 0.6
                    }}></div>
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
                        <a href={`tel:${contact.hotline}`} className="font-mono tracking-wider text-gray-400 transition-colors hover:text-white">{contact.hotline}</a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${contact.email}`} className="text-gray-400 transition-colors hover:text-white">{contact.email}</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {renderModal()}

    </motion.section>
  );
};

export default ReportingTools;
