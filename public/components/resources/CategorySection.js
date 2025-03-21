import React, { useEffect, useRef } from 'react';
import ArticleCard from './ArticleCard';

const CategorySection = ({ category, index }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  
  // Add scroll reveal animation with improved implementation
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          sectionObserver.unobserve(entry.target);
          
          // Once the section appears, set up observers for each card
          setupCardObservers();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    const setupCardObservers = () => {
      const cardElements = cardsRef.current.filter(Boolean);
      
      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('card-appear');
              cardObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );
      
      cardElements.forEach(card => {
        cardObserver.observe(card);
      });
      
      return () => {
        cardElements.forEach(card => {
          cardObserver.unobserve(card);
        });
      };
    };
    
    sectionObserver.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      id={category.id} 
      className="scroll-mt-32 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      {/* Category Header with decorative elements */}
      <div className="relative mb-12">
        {/* Decorative line */}
        <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#374151] to-transparent opacity-30"></div>
        
        {/* Enhanced anchor point for better scroll positioning */}
        <div className="absolute -top-16 left-0 w-full h-1 opacity-0" id={`${category.id}-anchor`} aria-hidden="true"></div>
        
        <div className="relative flex items-center gap-6 mb-6">
          {/* Icon container with animated gradient */}
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#61EBCE]/20 to-[#51A4FA]/20 opacity-70 blur-sm"></div>
            <div className="relative bg-[#162031] p-4 rounded-xl w-16 h-16 flex items-center justify-center border border-[#374151]">
              <i className={`${category.icon} text-[#61EBCE] text-2xl`}></i>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white">
              {category.title}
              <div className="h-1 w-12 bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] rounded-full mt-2"></div>
            </h2>
            <p className="text-gray-300 mt-2 max-w-3xl">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Articles Grid with improved animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.articles.map((article, articleIndex) => (
          <div 
            key={articleIndex} 
            ref={el => cardsRef.current[articleIndex] = el}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: `${articleIndex * 100}ms` }}
          >
            <ArticleCard article={article} categoryId={category.id} />
          </div>
        ))}
      </div>
      
      {/* View all articles link */}
      {category.articles.length > 3 && (
        <div className="mt-10 text-center">
          <a 
            href={`/resources/${category.id}`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#28324E]/60 hover:bg-[#28324E] border border-[#374151] hover:border-[#61EBCE]/30 transition-all duration-300 text-white group"
          >
            <span>View all {category.title.toLowerCase()} resources</span>
            <i className="fas fa-chevron-right text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>
      )}
      
      <style jsx>{`
        .appear {
          opacity: 1;
          transform: translateY(0);
        }
        
        .card-appear {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default CategorySection; 