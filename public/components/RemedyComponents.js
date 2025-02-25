import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const DuaCard = ({ title, arabic, translation, source }) => (
  <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg border border-gray-700/30 hover:border-[#61EBCE]/30 transition-all duration-300">
    <h3 className="text-xl font-semibold text-[#61EBCE] mb-4">{title}</h3>
    <p className="text-2xl font-arabic text-gray-200 leading-relaxed mb-4 text-right">
      {arabic}
    </p>
    <p className="text-gray-300 italic mb-4">{translation}</p>
    {source && <p className="text-sm text-gray-500">{source}</p>}
  </div>
);

export const CategoryButton = ({ name, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-200 ${
      isSelected
        ? "bg-[#61EBCE] text-gray-900"
        : "bg-[#1F2937] text-gray-200 hover:bg-[#61EBCE]/10"
    }`}
  >
    {name}
  </button>
);

export const AmalCard = ({ title, description, steps, content, source, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg border border-gray-700/30 hover:border-[#61EBCE]/30 transition-all duration-300 flex flex-col min-h-[300px]">
      <div className="flex items-center gap-4 mb-4">
        {icon && <FontAwesomeIcon icon={icon} className="text-[#61EBCE] text-2xl" />}
        <h3 className="text-xl font-semibold text-[#61EBCE]">{title}</h3>
      </div>
      
      <div className="flex-grow">
        <div className="text-gray-300 space-y-4">
          <p>{description}</p>
          {steps && (
            <ol className="list-decimal list-inside space-y-2 pl-4">
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          )}
          {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        </div>
      </div>

      {source && (
        <div className="mt-6 pt-4 border-t border-gray-700/30">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm text-[#61EBCE]/70 hover:text-[#61EBCE] transition-colors"
          >
            <FontAwesomeIcon 
              icon={isExpanded ? "chevron-up" : "chevron-down"} 
              className="w-4 h-4" 
            />
            {isExpanded ? "Hide Source & Virtue" : "Show Source & Virtue"}
          </button>
          
          {isExpanded && (
            <div className="mt-4 p-4 bg-[#161D2B] rounded-lg border border-gray-700/30">
              {source.type === "html" ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: source.text }} 
                  className="prose prose-invert max-w-none text-sm text-gray-400"
                />
              ) : (
                <p className="text-sm text-gray-400">{source}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}; 