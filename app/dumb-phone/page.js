"use client";
import Header from "../../public/components/Header";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowDown,
  faBan,
  faShieldAlt,
  faHourglassHalf,
  faDownload,
  faMoon,
  faTrashAlt,
  faClock,
  faTimesCircle,
  faExternalLinkAlt,
  faBook,
  faMobileAlt,
  faLaptop,
  faCheckCircle,
  faChevronDown,
  faChevronRight,
  faCog,
  faLightbulb,
  faCheck,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { faApple, faAndroid, faSafari, faChrome } from "@fortawesome/free-brands-svg-icons";

export default function DumbPhonePage() {

  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      <Header type="dumbphone" title="Switch to a Dumb Phone" />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-10 flex items-center bg-gradient-to-b from-[#111827] to-[#1B2432] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-2/3 w-72 h-72 bg-[#10B981]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-down delay-0 inline-block mb-4">
              <span className="bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium px-3 py-1.5 rounded-full">
                Stage 2: Optimize
              </span>
            </div>

            <h1 className="animate-fade-up delay-400 text-4xl sm:text-6xl font-bold mb-8 leading-[1.2]">
              Switch to a Dumb Phone:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-4 pb-2">
                The Ultimate Digital Detox
              </span>
            </h1>

            <p className="animate-fade-up delay-800 text-lg sm:text-2xl text-gray-300 mb-8">
              <span className="font-semibold text-[#3B82F6]">Make it impossible</span> to misuse your phone.
            </p>

            <div className="animate-fade-up delay-1000 max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <span className="text-[#3B82F6] text-lg font-medium">Highly Effective Against:</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: faShieldAlt,
                    title: "Pornography Addiction",
                    badge: "Most Critical",
                    description: "Create an impenetrable barrier against explicit content",
                    color: "from-[#E53E3E] to-[#3B82F6]"
                  },
                  {
                    icon: faMobileAlt,
                    title: "Social Media Addiction",
                    description: "End the cycle of endless scrolling and digital distractions",
                    color: "from-[#3B82F6] to-[#10B981]"
                  },
                  {
                    icon: faBook,
                    title: "Unorganized Time Waste",
                    description: "Reclaim your time and focus for what truly matters",
                    color: "from-[#10B981] to-[#3B82F6]"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-[#1F2937] p-6 rounded-xl border border-[#374151] hover:border-[#3B82F6] transition-all duration-300 relative group">
                    {/* Priority Badge */}
                    {benefit.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className={`bg-gradient-to-r ${benefit.color} px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg`}>
                        {benefit.badge}
                      </div>
                    </div>)}

                    <div className="bg-[#3B82F6]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto mt-2">
                      <FontAwesomeIcon icon={benefit.icon} className="text-[#3B82F6] text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white text-center">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm text-center">{benefit.description}</p>

                    {/* Hover Effect Gradient Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>

              {/* Learn How Button */}
              <div className="text-center mt-12">
                <button
                  onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white rounded-full text-lg font-semibold hover:shadow-lg transform transition-all duration-500 hover:scale-105"
                >
                  Learn How
                  <FontAwesomeIcon icon={faArrowDown} className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works"  className="relative pt-20 pb-20 bg-gradient-to-b from-[#1F2937] to-[#1B2432]">
            {/* How It Works Section */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  How It Works
                </h3>
                <p className="mt-2 text-gray-400 text-base sm:text-lg">
                  Transform your smartphone into a tool of productivity
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                <div className="group bg-[#1C1F26]/60 hover:bg-[#1C1F26] rounded-xl p-5 sm:p-6 transition-all duration-300 border border-[#374151] hover:border-[#3B82F6]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#3B82F6]/10 w-8 h-8 flex items-center justify-center rounded-lg text-[#3B82F6] font-bold group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">Simplify</h4>
                  </div>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed pl-12">
                    Remove all non-essential apps and features that can be accessed on your computer instead. 
                    <span className="text-white"> Keep your phone simple and focused.</span>
                  </p>
                </div>

                <div className="group bg-[#1C1F26]/60 hover:bg-[#1C1F26] rounded-xl p-5 sm:p-6 transition-all duration-300 border border-[#374151] hover:border-[#3B82F6]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#3B82F6]/10 w-8 h-8 flex items-center justify-center rounded-lg text-[#3B82F6] font-bold group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">Keep Essentials</h4>
                  </div>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed pl-12">
                    Maintain essential tools like <span className="text-white">maps, banking, and communication apps</span> that you genuinely need on the go.
                  </p>
                </div>

                <div className="group bg-[#1C1F26]/60 hover:bg-[#1C1F26] rounded-xl p-5 sm:p-6 transition-all duration-300 border border-[#374151] hover:border-[#3B82F6]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#3B82F6]/10 w-8 h-8 flex items-center justify-center rounded-lg text-[#3B82F6] font-bold group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">Lock Down</h4>
                  </div>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed pl-12">
                    Lock down your settings with restrictions to prevent future changes. 
                    <span className="text-white"> Make it difficult to undo your progress.</span>
                  </p>
                </div>
              </div>

              {/* Flexibility Note */}
              <div className="mt-8 text-center">
                <div className="inline-block bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10 rounded-xl p-5 sm:p-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <FontAwesomeIcon icon={faLightbulb} className="text-[#3B82F6] text-xl" />
                    <span className="text-lg sm:text-xl font-semibold text-white">Pro Tip</span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                    Start with these steps and adjust based on your needs. You can always 
                    <span className="text-white"> fine-tune the settings until you find the right balance</span> for your digital well-being.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Divider */}
            <div className="w-full max-w-4xl mx-auto px-4 py-12">
              <div className="h-px bg-gradient-to-r from-transparent via-[#61EBCE]/20 to-transparent"></div>
            </div>

            {/* Transition to Transform Section */}
            <div className="relative pt-5">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1F2937] to-[#1F2937] opacity-90"></div>
              
              {/* Content */}
              <div className="relative max-w-5xl mx-auto text-center px-4">
                <div className="inline-block bg-[#28324E] rounded-full px-8 py-3 mb-8 border border-[#61EBCE]/20 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-[#61EBCE] font-medium text-lg">Step-by-Step Guide</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Time To Make
                  <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#00A3A3]">
                    The Switch
                  </span>
                </h2>
                
                <p className="text-gray-300 text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                  Follow our simple guide below tailor your phone to your needs.
                </p>

            

                {/* Phone Type Selector */}
                <div className="max-w-xl mx-auto ">
                  <div className="bg-[#1F2937] rounded-xl p-4 sm:p-6 border border-[#374151]">
                    <div className="grid grid-cols-2 gap-4" id="device-selector">
                      <button
                        onClick={(e) => {
                          document.getElementById('android-section').style.display = 'none';
                          document.getElementById('iphone-section').style.display = 'block';
                          e.currentTarget.classList.add('border-2', 'border-[#61EBCE]');
                          e.currentTarget.nextElementSibling.classList.remove('border-2', 'border-[#61EBCE]');
                        }}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg bg-[#28324E] hover:bg-[#3B4663] transition-all duration-300 group border-2 border-[#61EBCE]"
                      >
                        <FontAwesomeIcon icon={faApple} className="text-3xl sm:text-4xl text-white" />
                        <span className="text-lg font-medium text-white">iPhone</span>
                      </button>
                      <button
                        onClick={(e) => {
                          document.getElementById('iphone-section').style.display = 'none';
                          document.getElementById('android-section').style.display = 'block';
                          e.currentTarget.classList.add('border-2', 'border-[#61EBCE]');
                          e.currentTarget.previousElementSibling.classList.remove('border-2', 'border-[#61EBCE]');
                        }}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg bg-[#28324E] hover:bg-[#3B4663] transition-all duration-300 group"
                      >
                        <FontAwesomeIcon icon={faAndroid} className="text-3xl sm:text-4xl text-[#3DDC84]" />
                        <span className="text-lg font-medium text-white">Android</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Device Sections Container */}
            <div className="bg-[#1F2937] pt-8">
              {/* iPhone Section */}
              <section id="iphone-section" className="transition-opacity duration-300">
                <div className="max-w-3xl mx-auto px-4 text-center mb-8">
                  <div className="inline-block bg-[#28324E]/50 rounded-full px-6 py-2 mb-4 border border-[#61EBCE]/20">
                    <span className="text-[#61EBCE] font-medium">Follow these steps in order</span>
                  </div>
                  <div className="w-1 h-12 bg-gradient-to-b from-[#61EBCE] to-transparent mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-3xl mx-auto px-4 sm:px-6">
                  {[
                    {
                      step: "1. Remove Apps",
                      icon: faTrashAlt,
                      title: "Keep Only Essential Apps",
                      description: "Delete apps that can be accessed on your computer instead (like social media). Focus on keeping only what you need while mobile:",
                      examples: ["Navigation apps", "Banking apps", "Essential communication tools"],
                      color: "from-[#FF6B6B] to-[#FF8E8E]"
                    },
                    {
                      step: "2. Enable Screen Time",
                      icon: faShieldAlt,
                      title: "Set Up Restrictions",
                      description: "Have a trusted friend help you set this up:",
                      steps: [
                        "Go to Settings > Screen Time > App & Website Activity",
                        "Turn On App & Website Activity",
                        "Scroll to Lock Screen Time Settings",
                        "Have them set a password and lock with their Apple ID"
                      ],
                      color: "from-[#4ECDC4] to-[#56E0D6]"
                    },
                    {
                      step: "3. Block App Store",
                      icon: faDownload,
                      title: "Prevent New Downloads",
                      description: "In Screen Time settings, navigate to:",
                      steps: [
                        "Content & Privacy Restrictions",
                        "iTunes and App Store Purchases",
                        "Installing Apps > Don't Allow"
                      ],
                      color: "from-[#6C5CE7] to-[#897DEC]"
                    },
                    {
                      step: "4. Remove Safari",
                      icon: faSafari,
                      title: "Disable Web Browser",
                      description: "Final steps to secure your phone:",
                      steps: [
                        "In Screen Time > Content & Privacy Restrictions",
                        "Go to Allowed Apps",
                        "Disable Safari",
                        "Use computer + hotspot for browsing instead"
                      ],
                      color: "from-[#3B82F6] to-[#60A5FA]"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-[#1F2937] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#374151] group"
                    >
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${item.color} p-4 sm:p-5 flex items-center gap-4`}>
                        <div className="bg-white/10 rounded-full p-2 sm:p-3">
                          <FontAwesomeIcon icon={item.icon} className="text-white text-lg sm:text-xl" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                        <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
                        
                        {item.examples && (
                          <ul className="space-y-2">
                            {item.examples.map((example, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                                <span className="text-[#61EBCE] text-lg">•</span>
                                {example}
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {item.steps && (
                          <ul className="space-y-2">
                            {item.steps.map((step, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                                <span className="text-[#61EBCE] text-lg">•</span>
                                {step}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Android Section */}
              <section id="android-section" className="transition-opacity duration-300" style={{ display: 'none' }}>
               <div className="max-w-3xl mx-auto px-4 text-center mb-8">
                  <div className="inline-block bg-[#28324E]/50 rounded-full px-6 py-2 mb-4 border border-[#61EBCE]/20">
                    <span className="text-[#61EBCE] font-medium">Follow these steps in order</span>
                  </div>
                  <div className="w-1 h-12 bg-gradient-to-b from-[#61EBCE] to-transparent mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-3xl mx-auto px-4 sm:px-6">
                  {[
                    {
                      step: "1. Remove Apps",
                      icon: faTrashAlt,
                      title: "Keep Only Essential Apps",
                      description: "Delete apps that can be accessed on your computer instead (like social media). Focus on keeping only what you need while mobile:",
                      examples: ["Navigation apps", "Banking apps", "Essential communication tools"],
                      color: "from-[#FF6B6B] to-[#FF8E8E]"
                    },
                    {
                      step: "2. Set Up Digital Wellbeing",
                      icon: faShieldAlt,
                      title: "Enable Parental Controls",
                      description: "Have a trusted friend help you set up Digital Wellbeing and Family Link:",
                      steps: [
                        "Install Google Family Link on both devices",
                        "Set up your phone as a child device",
                        "Have your companion set up as parent",
                        "Enable all relevant restrictions"
                      ],
                      note: "For detailed setup instructions, visit our Android guide",
                      color: "from-[#4ECDC4] to-[#56E0D6]"
                    },
                    {
                      step: "3. Block System Apps",
                      icon: faChrome,
                      title: "Block System Apps",
                      description: "Have your companion use Family Link to manage system apps:",
                      steps: [
                        "Open Family Link companion app",
                        "Navigate to Controls > App Limits",
                        "Select unessential apps to block (e.g., Chrome, Gmail)",
                        "Set appropriate time limits or block completely"
                      ],
                      tip: "You can always adjust these settings later if needed",
                     color: "from-[#3B82F6] to-[#60A5FA]"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-[#1F2937] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#374151] group"
                    >
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${item.color} p-4 sm:p-5 flex items-center gap-4`}>
                        <div className="bg-white/10 rounded-full p-2 sm:p-3">
                          <FontAwesomeIcon icon={item.icon} className="text-white text-lg sm:text-xl" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                        <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
                        
                        {item.examples && (
                          <ul className="space-y-2">
                            {item.examples.map((example, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                                <span className="text-[#61EBCE] text-lg">•</span>
                                {example}
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {item.steps && (
                          <ul className="space-y-2">
                            {item.steps.map((step, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                                <span className="text-[#61EBCE] text-lg">•</span>
                                {step}
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.note && (
                          <p className="text-[#61EBCE] text-sm sm:text-base italic mt-4">
                            Note: {item.note}
                          </p>
                        )}

                        {item.tip && (
                          <p className="text-[#61EBCE] text-sm sm:text-base italic mt-4">
                            Tip: {item.tip}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </section>

       
        </div>
  );
}
