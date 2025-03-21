import React, { useState, useEffect } from 'react';

const CTASection = () => {
  // Use state to store particles data
  const [particles, setParticles] = useState([]);
  
  // Generate particles only on the client side to avoid hydration mismatch
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, () => ({
        width: Math.random() * 8 + 2,
        height: Math.random() * 8 + 2,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5
      }));
      setParticles(newParticles);
    };
    
    generateParticles();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F26] to-[#111827]"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#61EBCE]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#51A4FA]/20 to-transparent"></div>
        
        {/* Animated particles - only rendered client-side */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-[#61EBCE]/10"
              style={{
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#61EBCE]/20 to-[#51A4FA]/20 mb-8">
            <i className="fas fa-heart text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]"></i>
          </div>
          
          {/* Main heading with gradient text */}
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Ready to Start Your 
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">
              Recovery Journey?
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward freedom from addiction with our comprehensive resources and supportive community.
          </p>
          
          {/* CTA buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="#how-to-quit" 
              className="group relative overflow-hidden px-8 py-4 rounded-xl font-medium text-[#0F172A] transition-all duration-500"
            >
              {/* Button background with animated gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] group-hover:scale-105 transition-transform duration-500"></div>
              
              {/* Button content */}
              <div className="relative flex items-center justify-center gap-2">
                <i className="fas fa-play-circle"></i>
                <span>Start Recovery Plan</span>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#61EBCE]/20 blur-xl -z-10"></div>
            </a>
            
            <a 
              href="/contact" 
              className="group relative overflow-hidden px-8 py-4 rounded-xl font-medium text-white transition-all duration-500"
            >
              {/* Button background */}
              <div className="absolute inset-0 bg-[#28324E] border border-[#374151] rounded-xl group-hover:border-[#61EBCE]/30 transition-all duration-500"></div>
              
              {/* Button content */}
              <div className="relative flex items-center justify-center gap-2">
                <i className="fas fa-headset text-[#61EBCE]"></i>
                <span>Get Support</span>
              </div>
            </a>
          </div>
          
          {/* Testimonial quote */}
          <div className="mt-16 max-w-2xl mx-auto">
            <blockquote className="italic text-gray-300 text-lg">
              "The resources here helped me understand my addiction and gave me practical steps to overcome it. I'm now 6 months free from my digital addictions."
            </blockquote>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#61EBCE]/30 to-[#51A4FA]/30 flex items-center justify-center">
                <i className="fas fa-user text-[#61EBCE] text-xs"></i>
              </div>
              <span className="text-white font-medium">Ahmed K.</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(20px);
          }
          75% {
            transform: translateY(-30px) translateX(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection; 