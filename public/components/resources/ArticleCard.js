import React from 'react';

const ArticleCard = ({ article, categoryId }) => {
  const { title, description, icon, readTime, comingSoon } = article;
  
  // Generate the article URL
  const articleUrl = comingSoon 
    ? "#" 
    : `/resources/${categoryId}/${title.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <div className="group h-full">
      {/* Card with layered design for better performance */}
      <div className="relative h-full rounded-2xl border border-[#374151] overflow-hidden transition-all duration-300 hover:border-[#61EBCE]/30 hover:shadow-lg hover:shadow-[#61EBCE]/5 bg-gradient-to-br from-[#28324E] to-[#1F2937]">
        {/* Card content */}
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-start gap-4 mb-4">
            {/* Icon container */}
            <div className="bg-[#162031] p-3 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#1A2A40]">
              <i className={`${icon} text-[#61EBCE] text-xl transition-transform duration-300 group-hover:scale-110`}></i>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#61EBCE]">
                  {title}
                </h3>
                {comingSoon && (
                  <span className="bg-[#61EBCE]/10 text-[#61EBCE] text-xs px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm">{readTime}</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm mb-5">{description}</p>
          
          {/* Spacer to push the button to the bottom */}
          <div className="flex-grow"></div>
          
          {/* Read button with animated arrow */}
          <a 
            href={articleUrl}
            className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
              comingSoon 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-[#61EBCE] group-hover:text-[#51A4FA]'
            }`}
            aria-disabled={comingSoon}
          >
            {comingSoon ? 'Coming soon' : 'Read article'}
            {!comingSoon && (
              <span className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
                <i className="fas fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
            )}
          </a>
        </div>
        
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-[#61EBCE] to-[#51A4FA] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ArticleCard; 