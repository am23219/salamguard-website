"use client";

import Header from "../../public/components/Header";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import BlockingDisclaimer from "../../public/components/BlockingDisclaimer";

export default function MacPage() {
  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      <Header type="mac" title="SalamGuard for Mac" />

      {/* Hero Section */}
      <section className="relative min-h-screen py-20 pt-24 pb-20 flex items-center bg-gradient-to-b from-[#111827] to-[#1B2432] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-2/3 w-72 h-72 bg-[#51A4FA]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-down delay-0 inline-block mb-4">
              <span className="bg-[#61EBCE]/10 text-[#61EBCE] text-sm font-medium px-3 py-1.5 rounded-full">
                Free Download
              </span>
            </div>

            <h1 className="animate-fade-up delay-400 text-3xl sm:text-6xl font-bold leading-tight mb-4">
              Built to Defend.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mt-2">
                SalamGuard for Mac.
              </span>
            </h1>

            <p className="animate-fade-up delay-800 text-lg sm:text-2xl text-gray-300 mb-12 leading-relaxed">
              <span className="font-semibold text-[#61EBCE]">Fortify your computer with one click. </span>
              It&apos;s that simple.
            </p>

            {/* Sites Counter Banner */}
            <div className="animate-fade-up delay-1200 bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-8 border border-[#374151] mb-12 transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h2 className="text-4xl font-bold mb-4">
                    <span className="text-[#61EBCE]">50,000+</span>
                    <span className="bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] bg-clip-text text-transparent"> Explicit Sites</span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                  Blocked instantly with a single click. Uninstalling or closing the app does not undo the block.
                  </p>
                </div>
                <div className="bg-[#162031] p-8 rounded-full">
                  <FontAwesomeIcon 
                    icon={faShieldAlt} 
                    className="text-[#61EBCE] text-5xl md:text-6xl animate-pulse"
                  />
                </div>
              </div>
            </div>

            <div className="animate-fade-up delay-1400">
              <BlockingDisclaimer />
            </div>

            {/* Tutorial Video */}
            <div className="animate-fade-up delay-1600 mb-12">
              <div className="bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-4 border border-[#374151]">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/kRy_yjCFdBQ"
                    title="How to Install SalamGuard for Mac"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="animate-fade-up delay-2000">
              <div className="bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-8 border border-[#374151] max-w-2xl mx-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-[#61EBCE] mb-3">
                      <FontAwesomeIcon icon={faShieldAlt} className="w-5 h-5" />
                      <span className="text-lg font-medium">IMPORTANT INSTALLATION NOTICE</span>
                    </div>
                    <p className="text-gray-300 text-lg mb-2">
                      Please watch the installation video above before downloading.
                    </p>
                    <p className="text-[#61EBCE] text-lg font-medium">
                      The app requires special installation steps and will not launch if these steps are skipped.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <button 
                      onClick={() => {
                        window.location.href = 'https://drive.google.com/uc?export=download&id=1jxq1ze7cO2hD9yoRaYSZSDSalEpKwiCk';
                      }}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-[#61EBCE] hover:bg-[#51A4FA] text-gray-900 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgb(97,235,206,0.2)]"
                    >
                      <FontAwesomeIcon 
                        icon={faDownload} 
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                      />
                      <span>Download SalamGuard</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      {/* Feature Highlight Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#1B2432] to-[#1C1F26]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-8 border border-[#374151] transform hover:scale-105 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                  <span className="text-[#61EBCE]">Robust </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">Protection</span>
                </h2>
                <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed">
                  Unlike traditional parental controls, SalamGuard&apos;s protection stays active even after uninstalling the app. One click creates a system-level block that keeps working without any background processes.
                </p>
              </div>
              <div className="bg-[#162031] p-8 rounded-full">
                <FontAwesomeIcon 
                  icon={faShieldAlt} 
                  className="text-[#61EBCE] text-5xl md:text-6xl animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
