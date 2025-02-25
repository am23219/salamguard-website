import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function FAQItem({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-[#28324E] rounded-lg p-6 shadow-lg transition hover:shadow-xl">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleExpand}
      >
        <h3 className="text-xl font-semibold text-white">{question}</h3>
        <FontAwesomeIcon
          icon={isExpanded ? faArrowDown : faArrowRight}
          className="text-gray-400"
        />
      </div>
      {isExpanded && <div className="mt-4 text-gray-300">{answer}</div>}
    </div>
  );
}

export default FAQItem;
