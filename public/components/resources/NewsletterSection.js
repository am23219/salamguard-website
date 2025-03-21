import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1E25] to-[#1C1F26]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      {/* Decorative elements - static to avoid hydration issues */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#51A4FA]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Card with glassmorphism effect */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Card content */}
            <div className="bg-gradient-to-br from-[#28324E]/95 to-[#1F2937]/95 p-10 sm:p-12 rounded-2xl relative border border-[#374151] shadow-xl shadow-[#111827]/20">
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-[#61EBCE]/20 opacity-50 pointer-events-none"></div>
              
              {/* Decorative icon */}
              <div className="absolute top-6 right-6 text-[#61EBCE]/10 opacity-50">
                <i className="fas fa-paper-plane text-6xl"></i>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-2">Stay Updated</h2>
                <p className="text-gray-300 mb-8 max-w-xl">Get notified when we publish new resources and recovery guides. Join our community of people committed to healing.</p>
                
                {isSubmitted ? (
                  <div className="bg-[#61EBCE]/10 border border-[#61EBCE]/30 rounded-xl p-4 text-[#61EBCE] flex items-center gap-3 transition-all duration-300">
                    <i className="fas fa-check-circle text-xl"></i>
                    <p>Thank you! You've been added to our newsletter.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-grow">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full py-4 px-5 pl-12 bg-[#1A1E25]/80 border border-[#374151] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#61EBCE]/50 focus:border-[#61EBCE]/50 transition-all duration-300"
                          required
                        />
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <i className="fas fa-envelope text-gray-400"></i>
                        </div>
                      </div>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`relative overflow-hidden py-4 px-8 rounded-xl font-medium transition-all duration-300 ${
                          isSubmitting 
                            ? 'bg-[#28324E] text-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] text-[#0F172A] hover:shadow-lg hover:shadow-[#61EBCE]/20'
                        }`}
                      >
                        <span className={isSubmitting ? 'opacity-0' : 'opacity-100'}>
                          Subscribe
                        </span>
                        {isSubmitting && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-[#61EBCE] border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm mt-3 ml-1">We respect your privacy. Unsubscribe at any time.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection; 