import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: 'The Evolution of AI in Nepal\'s Cybersecurity Landscape',
      description: 'An in-depth analysis of how artificial intelligence is transforming cybersecurity practices in Nepal\'s digital infrastructure...',
      author: 'Dr. Prakash Sharma',
      authorTitle: 'AI Security Expert',
      initials: 'PS',
      date: 'March 15, 2024',
      category: 'Featured',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Understanding Nepal\'s Electronic Transaction Act',
      description: 'Key points and recent amendments to Nepal\'s primary cyber law framework...',
      date: 'March 10, 2024',
      category: 'Legal Analysis',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Emerging Cybercrime Trends in Banking Sector',
      description: 'Analysis of recent cyber attacks targeting Nepal\'s financial institutions...',
      date: 'March 8, 2024',
      category: 'Security Analysis',
      color: 'teal'
    },
    {
      id: 4,
      title: 'Best Practices for Digital Evidence Collection',
      description: 'Guidelines for proper handling and preservation of digital evidence...',
      date: 'March 6, 2024',
      category: 'Technical Guide',
      color: 'amber'
    },
  ];

  const blogCategories = [
    { name: 'Cyber Law', color: 'indigo' },
    { name: 'AI Security', color: 'blue' },
    { name: 'Digital Forensics', color: 'teal' },
    { name: 'Incident Response', color: 'amber' },
    { name: 'Policy Updates', color: 'purple' }
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
            <span className="text-blue-300 text-sm font-semibold tracking-wider">CYBERSECURITY INSIGHTS</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Stay Informed with Latest Cybersecurity Trends
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover the latest insights, trends, and developments in cybersecurity and cyber law in Nepal through our expert-written blog.
          </p>
        </motion.div>

        {/* Featured Post - Glass Card Design */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="group relative overflow-hidden rounded-2xl">
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="animate-pulse w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">{blogPosts[0].category}</span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 text-lg">
                    {blogPosts[0].description}
                  </p>
                  
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">
                        {blogPosts[0].initials}
                      </div>
                      <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-ping opacity-30"></div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-medium">{blogPosts[0].author}</p>
                      <p className="text-gray-500 text-sm">{blogPosts[0].authorTitle}</p>
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 shadow-lg shadow-blue-500/30 transform group-hover:translate-y-0.5"
                  >
                    Read Full Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
                
                <div className="relative rounded-xl overflow-hidden h-full min-h-64 hidden lg:block">
                  {/* Futuristic cyber pattern background */}
                  <div className="absolute inset-0 cyber-pattern opacity-30"></div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-purple-900/40"></div>
                  
                  {/* Featured article highlight */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">Featured Article</h4>
                    <p className="text-blue-200 text-sm">
                      Our most impactful cybersecurity insight this month
                    </p>
                    
                    {/* Animated dots */}
                    <div className="absolute bottom-6 flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Posts - Modern Card Grid */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">Recent Articles</h3>
            </div>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center group">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map(post => {
              const colorScheme = getColorScheme(post.color);
              
              return (
                <div key={post.id} className="group relative">
                  {/* Hover glow effect */}
                  <div 
                    className="absolute -inset-0.5 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-xl" 
                    style={{background: `radial-gradient(circle, #${colorScheme.glow.split('-')[1]} 0%, transparent 70%)`}}
                  ></div>
                  
                  {/* Card */}
                  <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 group-hover:translate-y-1 h-full">
                    {/* Top color line */}
                    <div className={`h-1 w-full ${colorScheme.bg}`}></div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className={`px-3 py-1 rounded-full ${colorScheme.bg} ${colorScheme.text} text-xs font-semibold`}>
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.date}</span>
                      </div>
                      
                      <h3 className={`text-xl font-semibold mb-3 group-hover:${colorScheme.text} transition-colors duration-300`}>
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6">{post.description}</p>
                      
                      <a 
                        href="#" 
                        className={`inline-flex items-center ${colorScheme.text} group-hover:translate-x-1 transition-all duration-300`}
                      >
                        Read Article
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Blog Categories and Newsletter - Two Column Layout */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="group relative lg:col-span-1">
            <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Blog Categories
              </h3>
              
              <div className="space-y-3">
                {blogCategories.map(category => {
                  const colorScheme = getColorScheme(category.color);
                  
                  return (
                    <a 
                      key={category.name} 
                      href="#" 
                      className={`flex items-center justify-between p-3 rounded-lg ${colorScheme.bg} border ${colorScheme.border} group/category hover:scale-105 transition-transform duration-300`}
                    >
                      <span className={`${colorScheme.text} font-medium`}>{category.name}</span>
                      <div className={`w-6 h-6 rounded-full ${colorScheme.iconBg} flex items-center justify-center group-hover/category:bg-opacity-100`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white group-hover/category:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-2 relative group">
            <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-xl bg-gradient-to-r from-blue-500 to-teal-500"></div>
            
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 p-8 overflow-hidden">
              {/* Background cyber pattern */}
              <div className="absolute inset-0 cyber-pattern opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 rounded-lg bg-blue-500/20 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Stay Updated</h3>
                    <p className="text-gray-400">Get the latest cybersecurity insights delivered to your inbox</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="w-full bg-gray-900/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white rounded-lg py-3 px-4 outline-none transition-all duration-300"
                    />
                    <div className="absolute inset-0 -z-10 opacity-0 focus-within:opacity-30 rounded-lg blur transition-opacity duration-300" style={{background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)"}}></div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500/50" />
                    <label htmlFor="consent" className="text-gray-400 text-sm">I agree to receive cybersecurity updates and newsletter</label>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 flex items-center justify-center space-x-2 group/btn">
                    <span>Subscribe Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <p className="text-gray-500 text-xs text-center">We respect your privacy. Unsubscribe at any time.</p>
                </div>
              </div>
              
              {/* Animated circles */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-blue-500/5 backdrop-blur-3xl"></div>
              <div className="absolute -right-5 -bottom-5 w-20 h-20 rounded-full bg-teal-500/10 backdrop-blur-3xl animate-pulse"></div>
            </div>
          </div>
        </motion.div>
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

export default Blog;