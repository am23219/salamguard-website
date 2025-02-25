"use client";

import Header from "../../public/components/Header";
import ExtensionsList from "../../public/components/ExtensionsList";
import { Icon } from '@iconify/react';

export default function ExtensionsPage() {
  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      <Header type="extensions" title="Recommended Extensions for Muslims" />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen py-20 pt-24 pb-20 flex items-center bg-gradient-to-b from-[#111827] to-[#1B2432] overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-2/3 w-72 h-72 bg-[#51A4FA]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-down delay-0 inline-block mb-4">
              <span className="bg-[#61EBCE]/10 text-[#61EBCE] text-sm font-medium px-3 py-1.5 rounded-full">
                Free Recommendations
              </span>
            </div>

            <h1 className="animate-fade-up delay-400 text-4xl sm:text-6xl font-bold leading-tight mb-4">
              Essential Extensions for Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mt-2 pb-2">
                Digital Wellbeing Journey
              </span>
            </h1>

            <p className="animate-fade-up delay-800 text-lg sm:text-2xl text-gray-300 mb-12">
              Carefully curated extensions to enhance your browsing experience
              <span className="block mt-2 text-[#61EBCE]">while maintaining digital wellbeing.</span>
            </p>

            {/* CTA Section */}
            <div className="animate-fade-up delay-2400 flex flex-col sm:flex-row justify-center items-center gap-6">
              <button 
                onClick={() => document.getElementById('extensions-section').scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] text-[#1F2937] rounded-full text-lg font-semibold hover:shadow-lg transform transition-all duration-500 hover:scale-105 w-full sm:w-auto"
              >
                View Extensions
                <i className="fas fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
              </button>
              <div className="flex items-center gap-2 text-gray-400">
                <i className="fas fa-clock"></i>
                <span className="text-sm">Takes only 2 minutes to install</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extensions Section */}
      <section id="extensions-section" className="bg-[#1F2937] py-20">
        <ExtensionsList />
      </section>

      {/* Keep animations for consistency */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 1.2s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
