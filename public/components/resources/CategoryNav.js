import React, { useState, useEffect, useCallback, useRef } from 'react';

const CategoryNav = ({ categories, scrollToSection }) => {
  const [activeCategory, setActiveCategory] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64); // Default fallback
  const navRef = useRef(null); // Reference to the nav element itself

  // Get actual header height on mount
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        const height = headerElement.offsetHeight;
        setHeaderHeight(height);
      }
    };

    // Initial measurement
    updateHeaderHeight();
    
    // Also update on resize
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Improved scroll detection with throttling
  const handleScroll = useCallback(() => {
    // Update sticky nav appearance
    setIsScrolled(window.scrollY > 300);
    
    // Find the current section in view with improved calculation
    const viewportHeight = window.innerHeight;
    const viewportMiddle = viewportHeight / 2;
    
    // Get all category elements
    const categoryElements = categories.map(cat => 
      document.getElementById(cat.id)
    ).filter(Boolean);
    
    // Find which category is closest to the middle of the viewport
    let closestCategory = { id: '', distance: Infinity };
    
    categoryElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elementMiddle = rect.top + rect.height / 2;
      const distanceToMiddle = Math.abs(elementMiddle - viewportMiddle);
      
      // If this element is closer to the middle than our current closest
      if (distanceToMiddle < closestCategory.distance) {
        closestCategory = { 
          id: el.id, 
          distance: distanceToMiddle 
        };
      }
    });
    
    // Only update if we found a category and it's reasonably close to the viewport
    if (closestCategory.id && closestCategory.distance < viewportHeight) {
      setActiveCategory(closestCategory.id);
    }
  }, [categories]);

  // Throttle scroll event for better performance
  useEffect(() => {
    let scrollTimeout;
    
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 100); // Throttle to once every 100ms
      }
    };

    window.addEventListener('scroll', throttledScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  // Handle click on category nav items using the shared scrollToSection function
  const handleCategoryClick = (e, categoryId) => {
    e.preventDefault();
    scrollToSection(categoryId);
  };

  return (
    <nav 
      ref={navRef}
      className={`sticky z-30 py-3 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1A1E25]/95 backdrop-blur-md shadow-lg' 
          : 'bg-[#1A1E25] border-y border-[#2D3748]/50'
      }`}
      style={{ 
        top: `${headerHeight}px`,
        marginTop: '-1px', // Eliminate any potential gap
        borderTop: isScrolled ? '1px solid #1C1F26' : undefined // Match header bg color for seamless join
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h2 className={`text-lg font-medium text-white transition-opacity duration-300 opacity-100`}>
            <i className="fas fa-book-open mr-2 text-[#61EBCE]"></i> 
            Resources
          </h2>
          
          <div className="overflow-x-auto hide-scrollbar py-2 flex-grow">
            <div className="flex items-center gap-3 md:justify-center">
              {categories.map((category) => (
                <a 
                  key={category.id}
                  href={`#${category.id}`}
                  onClick={(e) => handleCategoryClick(e, category.id)}
                  className={`
                    px-4 py-2 rounded-xl border transition-all duration-300 whitespace-nowrap flex items-center gap-2
                    ${activeCategory === category.id
                      ? 'bg-gradient-to-r from-[#61EBCE]/20 to-[#51A4FA]/20 border-[#61EBCE]/50 text-white shadow-md'
                      : 'bg-[#28324E]/40 hover:bg-[#28324E]/70 border-[#374151] hover:border-[#61EBCE]/30 text-gray-300'
                    }
                  `}
                  aria-current={activeCategory === category.id ? 'page' : undefined}
                >
                  <div className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] text-[#0F172A]'
                      : 'bg-[#1A1E25] text-[#61EBCE]'
                  }`}>
                    <i className={`${category.icon} text-xs`}></i>
                  </div>
                  <span className="text-sm font-medium">{category.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default CategoryNav; 