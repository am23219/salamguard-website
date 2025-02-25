"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { faHouse, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../fontawesome.js";

// Navigation items data with colors matching main page stages
const THREE_STAGE_ITEMS = [
  {
    stage: "1",
    text: "Block",
    color: "bg-[#E53E3E]",
    textColor: "text-[#E53E3E]",
    subItems: [
      { text: "iPhone", href: "/iphone" },
      { text: "Android", href: "/android" },
      { text: "Mac", href: "/mac" },
      { text: "Windows", href: "/windows" },
    ]
  },
  {
    stage: "2",
    text: "Optimize",
    color: "bg-[#3B82F6]",
    textColor: "text-[#3B82F6]",
    subItems: [
      { text: "Switch to Dumb Phone", href: "/dumb-phone" },
      { text: "Phone Apps", href: "/apps" },
      { text: "Browser Extensions", href: "/extensions" },
    ]
  },
  {
    stage: "3",
    text: "Strengthen",
    color: "bg-[#10B981]",
    textColor: "text-[#10B981]",
    subItems: [
      { text: "Spiritual Remedies", href: "/spiritual-remedies" },
      { text: "Powerful Talks", href: "/reminders" },
      { text: "Community Leaders", href: "/community-leaders" },
    ]
  }
];

// Logo Component
const Logo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <i className="fas fa-shield-alt text-[#61EBCE] text-xl"></i>
    <span className="text-xl font-semibold tracking-wide">
      Salam<span className="text-[#61EBCE]">Guard</span>
    </span>
  </Link>
);

export default function Header({ type, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(null);
  const [expandedMobileStage, setExpandedMobileStage] = useState(null);
  
  const toggleMobileStage = (stage) => {
    setExpandedMobileStage(expandedMobileStage === stage ? null : stage);
  };

  return (
    <>
      <header className="bg-[#1C1F26]/80 backdrop-blur-lg fixed w-full z-50 border-b border-[#374151]">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {THREE_STAGE_ITEMS.map((stage) => (
                <div 
                  key={stage.stage}
                  className="relative group"
                  onMouseEnter={() => setActiveStage(stage.stage)}
                  onMouseLeave={() => setActiveStage(null)}
                >
                  <button className="flex items-center space-x-2 text-gray-300 hover:text-[#61EBCE] transition-colors">
                    <span className={`text-sm font-medium ${stage.color} px-2 py-1 rounded-full text-[#1F2937]`}>
                      Stage {stage.stage}
                    </span>
                    <span>{stage.text}</span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute left-0 mt-2 w-48 bg-[#28324E] rounded-lg shadow-xl border border-[#374151] transition-all duration-300 ${activeStage === stage.stage ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    {stage.subItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-300 hover:text-[#61EBCE] hover:bg-[#1F2937] first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-[#61EBCE]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Improved Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 space-y-4 bg-[#28324E] rounded-lg p-4">
              {THREE_STAGE_ITEMS.map((stage) => (
                <div key={stage.stage} className="bg-[#1F2937] rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleMobileStage(stage.stage)}
                    className="w-full p-4 flex items-center justify-between text-left transition-colors hover:bg-[#1F2937]/50"
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`${stage.color} text-[#1F2937] text-sm font-medium px-2 py-1 rounded-full`}>
                        Stage {stage.stage}
                      </span>
                      <span className="text-gray-200">{stage.text}</span>
                    </div>
                    <FontAwesomeIcon
                      icon={expandedMobileStage === stage.stage ? faChevronDown : faChevronRight}
                      className={`${stage.textColor} transition-transform duration-200`}
                    />
                  </button>
                  
                  <div className={`transition-all duration-300 ${expandedMobileStage === stage.stage ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="p-4 space-y-2 bg-[#1C1F26]/50">
                      {stage.subItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-gray-300 hover:text-[#61EBCE] rounded-lg hover:bg-[#28324E] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </nav>
      </header>
      {/* Spacer div to prevent content from hiding behind fixed header */}
      {/* <div className="h-[72px]"></div> */}
    </>
  );
}
