import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactUs = () => {
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

  // Function to get color schemes similar to the Blog component
  const getColorScheme = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        border: 'border-blue-700/30',
        gradientFrom: 'from-blue-600/20',
        gradientTo: 'to-blue-400/10',
        buttonBg: 'bg-blue-600',
        buttonHover: 'hover:bg-blue-500',
        shadow: 'shadow-blue-500/30',
        ring: 'ring-blue-500/50',
        focus: 'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50'
      }
    };
    return colors[color] || colors.blue;
  };

  const colorScheme = getColorScheme('blue');

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
            <span className="text-blue-300 text-sm font-semibold tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Contact Our Cybersecurity Experts
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Connect with our dedicated team for assistance or to report cyber incidents. We're committed to enhancing Nepal's digital security landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Glass Card Design */}
          <motion.div variants={itemVariants} className="lg:col-span-2 group relative">
            {/* Glow effect on hover */}
            <div 
              className="absolute -inset-1 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl rounded-2xl" 
              style={{background: `radial-gradient(circle, #3B82F6 0%, transparent 70%)`}}
            ></div>
            
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-2xl border border-gray-700/30 overflow-hidden">
              <div className="absolute inset-0 rotate-border"></div>
            </div>
            
            {/* Content */}
            <div className="relative bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 transition-all duration-300 group-hover:translate-y-1">
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 rounded-lg bg-blue-500/20 text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Send us a Message</h3>
                  <p className="text-gray-400">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <label htmlFor="fullName" className="block text-gray-400 text-sm mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      className={`w-full bg-gray-900/50 border border-gray-700 ${colorScheme.focus} text-white rounded-lg py-3 px-4 outline-none transition-all duration-300`}
                      placeholder="Enter your name" 
                    />
                    <div className="absolute inset-0 -z-10 opacity-0 focus-within:opacity-30 rounded-lg blur transition-opacity duration-300" 
                      style={{background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)"}}></div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="emailAddress" className="block text-gray-400 text-sm mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="emailAddress" 
                      className={`w-full bg-gray-900/50 border border-gray-700 ${colorScheme.focus} text-white rounded-lg py-3 px-4 outline-none transition-all duration-300`}
                      placeholder="Enter your email" 
                    />
                    <div className="absolute inset-0 -z-10 opacity-0 focus-within:opacity-30 rounded-lg blur transition-opacity duration-300" 
                      style={{background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)"}}></div>
                  </div>
                </div>
                
                <div className="mb-6 relative">
                  <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">Subject</label>
                  <div className="relative">
                    <select 
                      id="subject" 
                      className={`w-full bg-gray-900/50 border border-gray-700 ${colorScheme.focus} text-white rounded-lg py-3 px-4 outline-none transition-all duration-300 appearance-none`}
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="report">Report Cyber Incident</option>
                      <option value="technical">Technical Support</option>
                      <option value="training">Training & Workshops</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                    <div className="absolute inset-0 -z-10 opacity-0 focus-within:opacity-30 rounded-lg blur transition-opacity duration-300" 
                      style={{background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)"}}></div>
                  </div>
                </div>
                
                <div className="mb-6 relative">
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className={`w-full bg-gray-900/50 border border-gray-700 ${colorScheme.focus} text-white rounded-lg py-3 px-4 outline-none transition-all duration-300`}
                    placeholder="Describe your inquiry or incident in detail..."
                  ></textarea>
                  <div className="absolute inset-0 -z-10 opacity-0 focus-within:opacity-30 rounded-lg blur transition-opacity duration-300" 
                    style={{background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)"}}></div>
                </div>
                
                <div className="flex items-center space-x-2 mb-6">
                  <input type="checkbox" id="consent" className={`rounded bg-gray-700 border-gray-600 text-blue-500 ${colorScheme.ring}`} />
                  <label htmlFor="consent" className="text-gray-400 text-sm">I consent to the processing of my data as per the privacy policy</label>
                </div>
                
                <button 
                  type="submit" 
                  className={`${colorScheme.buttonBg} ${colorScheme.buttonHover} text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-lg ${colorScheme.shadow} transform hover:-translate-y-1 flex items-center justify-center space-x-2 w-full md:w-auto`}
                >
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-6">
              {/* Emergency Contacts Card */}
              <div className="group relative">
                <div 
                  className="absolute -inset-1 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl rounded-xl" 
                  style={{background: `radial-gradient(circle, #3B82F6 0%, transparent 70%)`}}
                ></div>
                
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 p-6">
                  <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-blue-500/5 backdrop-blur-3xl"></div>
                  <div className="absolute -right-5 -bottom-5 w-16 h-16 rounded-full bg-blue-500/10 backdrop-blur-3xl animate-pulse"></div>
                  
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-400 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.001 6.001 0 005-5.192V4.675a1.125 1.125 0 00-1.125-1.125h-2.5a1.125 1.125 0 00-1.125 1.125v.051A6.001 6.001 0 007 5.308v1.522m0 0a6.001 6.001 0 01-5 5.192v4.675a1.125 1.125 0 011.125 1.125h2.5a1.125 1.125 0 011.125-1.125v-.051A6.001 6.001 0 0112 18zm0-8.474V9a6.001 6.001 0 005-5.192m-5 5.192H7" />
                    </svg>
                    Emergency Response
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-3 rounded-lg bg-blue-500/10 border border-blue-700/30">
                      <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">24/7 Cyber Hotline</p>
                        <p className="text-blue-300">100</p>
                        <p className="text-gray-400 text-sm">Direct: +977-1-4411689</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-3 rounded-lg bg-blue-500/10 border border-blue-700/30">
                      <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Email Support</p>
                        <a href="mailto:cyber@nepalpolice.gov.np" className="text-blue-300 hover:underline transition-all duration-300">cyber@nepalpolice.gov.np</a>
                        <p className="text-gray-400 text-sm">Response time: 12-24 hrs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Location Card */}
              <div className="group relative">
                <div 
                  className="absolute -inset-1 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl rounded-xl" 
                  style={{background: `radial-gradient(circle, #9333EA 0%, transparent 70%)`}}
                ></div>
                
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 p-6">
                  <div className="absolute -left-12 -bottom-12 w-32 h-32 rounded-full bg-purple-500/5 backdrop-blur-3xl"></div>
                  <div className="absolute -left-5 -bottom-5 w-16 h-16 rounded-full bg-purple-500/10 backdrop-blur-3xl animate-pulse"></div>
                  
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-400 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Office Location
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-700/30 relative overflow-hidden">
                      <div className="absolute inset-0 cyber-pattern opacity-10"></div>
                      <div className="relative z-10">
                        <p className="text-white font-medium">Nepal Cyber Bureau</p>
                        <p className="text-gray-400 mb-2">Naxal, Kathmandu, Nepal</p>
                        
                        <div className="flex items-center mt-3 text-purple-300 text-sm">
                          <div className="animate-pulse w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          <span>Open Monday - Friday, 9:00 - 17:00</span>
                        </div>
                      </div>
                    </div>
                    
                    <a 
                      href="#"
                      className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-all duration-300 shadow-lg shadow-purple-500/30 transform hover:-translate-y-1 group/btn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <span>View Location Map</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Connect with us card */}
              <div className="group relative">
                <div 
                  className="absolute -inset-1 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl rounded-xl" 
                  style={{background: `radial-gradient(circle, #0EA5E9 0%, transparent 70%)`}}
                ></div>
                
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    Connect With Us
                  </h3>
                  
                  <div className="flex justify-between space-x-2">
                    {['facebook', 'twitter', 'linkedin', 'youtube'].map((platform) => (
                      <a 
                        key={platform}
                        href="#" 
                        className="p-3 bg-sky-500/10 rounded-lg border border-sky-700/30 hover:bg-sky-500/20 transition-all duration-300 flex items-center justify-center flex-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Custom animation and styling */}
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
        
        @keyframes border-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .rotate-border {
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
          width: 200%;
          height: 200%;
          animation: border-rotate 8s linear infinite;
        }
        
        .cyber-pattern {
          background-image: 
            radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 20px 20px, 40px 40px, 40px 40px;
          background-position: 0 0, 10px 10px, 10px 10px;
        }
      `}</style>
    </motion.section>
  );
};

export default ContactUs;