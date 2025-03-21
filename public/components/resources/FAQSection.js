import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "How do I know if I have an addiction?",
      answer: "Addiction is characterized by compulsive use despite negative consequences, failed attempts to quit, withdrawal symptoms when stopping, and escalating usage over time. If your digital habits are interfering with daily life, relationships, or mental health, it may be time to seek help. Look for signs like using devices longer than intended, neglecting responsibilities, feeling anxious when unable to use technology, or continuing despite negative impacts on your life."
    },
    {
      question: "How long does recovery take?",
      answer: "Recovery timelines vary for each individual. While some people may experience significant improvements within 30-90 days, complete recovery is an ongoing process. The brain needs time to rewire and form new habits, which can take several months to a year or more. The most important factor is consistency in your recovery efforts and having realistic expectations. Many people report noticeable improvements in focus, mood, and productivity within the first month of reducing problematic digital use."
    },
    {
      question: "Can I recover on my own or do I need professional help?",
      answer: "Many people can make significant progress with self-help resources, accountability partners, and community support. However, if you're struggling with severe addiction, underlying mental health issues, or have tried to quit multiple times without success, professional help may be beneficial. Consider seeking professional support if your addiction is causing significant distress, if you experience severe withdrawal symptoms, or if you have co-occurring conditions like depression or anxiety that complicate recovery."
    },
    {
      question: "What if I relapse during recovery?",
      answer: "Relapses are a normal part of the recovery process and don't mean failure. They're opportunities to learn about your triggers and strengthen your recovery plan. The key is to respond with self-compassion, analyze what led to the relapse, and recommit to your recovery journey. Many successful recoveries include multiple relapses along the way. Each time you try again, you're building resilience and learning valuable information about what works and what doesn't for your unique situation."
    },
    {
      question: "How can I help a loved one who has an addiction?",
      answer: "Supporting a loved one with addiction requires patience, understanding, and boundaries. Approach them with compassion rather than judgment, express specific concerns about behaviors rather than criticizing them as a person, and offer to help them find resources. Remember that they must ultimately want to change for themselves. Set healthy boundaries to protect your own wellbeing, and consider joining a support group for family members of people with addictions to learn effective strategies and take care of your own mental health."
    }
  ];
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#1C1F26] relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Find answers to common questions about addiction and recovery. If you don't see your question here, feel free to contact us.</p>
          </div>
          
          {/* FAQ accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[#28324E]/80 to-[#1F2937]/80 rounded-xl overflow-hidden transition-all duration-300 border border-[#374151] hover:border-[#374151]/80"
              >
                {/* Question header */}
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 focus:outline-none group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className={`text-lg font-medium transition-colors duration-300 ${
                      openIndex === index 
                        ? 'text-[#61EBCE]' 
                        : 'text-white group-hover:text-[#61EBCE]'
                    }`}>
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-[#61EBCE]/20 text-[#61EBCE]' 
                        : 'bg-[#1A1E25] text-gray-400 group-hover:text-[#61EBCE]'
                    }`}>
                      <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}></i>
                    </div>
                  </div>
                </button>
                
                {/* Answer content with animated height */}
                <div 
                  id={`faq-answer-${index}`}
                  className="transition-all duration-300 ease-in-out"
                  style={{ 
                    maxHeight: openIndex === index ? '1000px' : '0',
                    opacity: openIndex === index ? 1 : 0,
                    overflow: 'hidden'
                  }}
                >
                  <div className="px-5 pb-5">
                    <div className="border-t border-[#374151] pt-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional help link */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">Still have questions?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#28324E] hover:bg-[#28324E]/80 border border-[#374151] hover:border-[#61EBCE]/30 transition-all duration-300 text-white group"
            >
              <i className="fas fa-envelope text-[#61EBCE]"></i>
              <span>Contact our support team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 