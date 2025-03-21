import React, { useEffect, useRef } from 'react';

const ResourceHero = ({ scrollToSection }) => {
  const heroRef = useRef(null);
  
  // Add animation triggers on component mount
  useEffect(() => {
    if (!heroRef.current) return;
    
    // Add a small delay before starting animations
    setTimeout(() => {
      const elements = heroRef.current.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-visible');
        }, index * 200); // Stagger the animations
      });
    }, 100);
  }, []);

  return (
    <section ref={heroRef} className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#1B2432]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-2/3 w-96 h-96 bg-[#51A4FA]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#10B981]/5 rounded-full blur-3xl"></div>
        
        {/* Subtle particle effect */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#ffffff15 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#61EBCE]/20 to-[#51A4FA]/20 backdrop-blur-sm border border-[#61EBCE]/20 mb-6 animate-on-load opacity-0 transform translate-y-4">
            <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">
              Healing Journey
            </span>
          </div>
          
          {/* Main heading with animated reveal */}
          <h1 className="text-4xl sm:text-7xl font-bold leading-tight mb-6 animate-on-load opacity-0 transform translate-y-4">
            Recovery
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mt-2">
              Resources
            </span>
          </h1>

          {/* Subtitle with animated reveal */}
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-on-load opacity-0 transform translate-y-4">
            Comprehensive guides and articles to help you understand and overcome 
            social media and pornography addictions.
          </p>

          {/* Search bar with animated reveal */}
          <div className="max-w-2xl mx-auto mb-8 animate-on-load opacity-0 transform translate-y-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full py-4 px-6 pl-14 bg-[#28324E]/60 backdrop-blur-sm border border-[#374151] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#61EBCE]/50 focus:border-[#61EBCE]/50 transition-all duration-300 shadow-lg shadow-[#111827]/50"
              />
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none group-focus-within:text-[#61EBCE] transition-colors duration-300">
                <i className="fas fa-search text-gray-400 group-focus-within:text-[#61EBCE]"></i>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#61EBCE]/0 to-[#51A4FA]/0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
            </div>
          </div>
          
          {/* Quick action buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-on-load opacity-0 transform translate-y-4">
            <button 
              onClick={() => scrollToSection('how-to-quit')}
              className="px-6 py-2.5 rounded-xl bg-[#61EBCE]/10 hover:bg-[#61EBCE]/20 border border-[#61EBCE]/30 text-[#61EBCE] transition-all duration-300 flex items-center gap-2"
            >
              <i className="fas fa-play-circle"></i>
              <span>Start Recovery</span>
            </button>
            <button 
              onClick={() => scrollToSection('parents-guide')}
              className="px-6 py-2.5 rounded-xl bg-[#51A4FA]/10 hover:bg-[#51A4FA]/20 border border-[#51A4FA]/30 text-[#51A4FA] transition-all duration-300 flex items-center gap-2"
            >
              <i className="fas fa-child"></i>
              <span>Parents Guide</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1A1E25] -mb-1">
        <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24L60 32C120 40 240 56 360 56C480 56 600 40 720 34.7C840 29.3 960 34.7 1080 42.7C1200 50.7 1320 61.3 1380 66.7L1440 72V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0V24Z" fill="#1A1E25"/>
        </svg>
      </div>
      
      <style jsx>{`
        .animate-on-load {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default ResourceHero; 