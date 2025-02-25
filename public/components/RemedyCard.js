import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHandHoldingHeart,
  faShieldAlt,
  faStar,
  faHandHolding,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

// Add imported icons to the library
library.add(
  faHandHoldingHeart,
  faShieldAlt,
  faStar,
  faChevronDown,
  faChevronUp
);

export const DuaCard = ({
  title,
  arabic,
  transliteration,
  translation,
  icon,
}) => (
  <div className="bg-[#28324E] shadow-md rounded-2xl p-6 md:p-8 w-full max-w-2xl text-left transition duration-300 hover:shadow-lg hover:bg-[#3A4A60]">
    <div className="flex items-center mb-4 space-x-3">
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="text-2xl md:text-3xl text-[#61EBCE]"
        />
      )}
      <h2 className="text-xl md:text-2xl font-semibold text-[#61EBCE]">
        {title}
      </h2>
    </div>
    <p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
      {arabic}
    </p>
    <p className="text-md md:text-lg text-gray-400">
      <strong>Transliteration:</strong> {transliteration}
    </p>
    <p className="text-md md:text-lg text-gray-400">
      <strong>Translation:</strong> {translation}
    </p>
  </div>
);

export const AmalCard = ({
  title,
  description,
  steps,
  content,
  source,
  icon,
}) => {
  const [isSourceVisible, setIsSourceVisible] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#28324E] to-[#3A4A60] shadow-lg rounded-2xl p-6 md:p-8 w-full max-w-2xl text-left transition duration-300 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#3A4A60] hover:to-[#4A5A70]">
      <div className="flex items-center mb-4 space-x-3">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="text-2xl md:text-3xl text-[#61EBCE]"
          />
        )}
        <h2 className="text-xl md:text-2xl font-semibold text-[#61EBCE]">
          {title}
        </h2>
      </div>
      <p className="text-md md:text-lg text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {steps ? (
        <ol className="list-decimal list-inside mb-4 text-gray-300 space-y-2 text-md md:text-lg">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      ) : (
        <div
          className="text-md md:text-lg text-gray-300 mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {source && (
        <div className="mt-4">
          <button
            className="flex items-center text-sm md:text-base text-[#61EBCE] focus:outline-none transition-colors duration-200 hover:text-[#74F4E6]"
            onClick={() => setIsSourceVisible(!isSourceVisible)}
          >
            <FontAwesomeIcon
              icon={isSourceVisible ? faChevronUp : faChevronDown}
              className="mr-2"
            />
            {isSourceVisible
              ? "See Source and Virtue"
              : "See Source and Virtue"}
          </button>
          {isSourceVisible && (
            <div className="mt-2 text-sm md:text-base text-gray-400 bg-[#1E2A3D] p-4 rounded-lg shadow-md">
              {source}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
