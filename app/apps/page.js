"use client";

import Header from "../../public/components/Header";
import AppList from "../../public/components/AppList";
import { Icon } from '@iconify/react';
import { faShieldCheck, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

export default function AppsPage() {
  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      <Header type="apps" title="Recommended Apps for Muslims" />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] py-20 pt-24 flex items-center bg-gradient-to-b from-[#111827] to-[#1B2432] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-2/3 w-72 h-72 bg-[#51A4FA]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="animate-fade-down delay-0 inline-block mb-4">
              <span className="bg-[#61EBCE]/10 text-[#61EBCE] text-sm font-medium px-3 py-1.5 rounded-full">
                Free Recommendations
              </span>
            </div>

            <h1 className="animate-fade-up delay-400 text-4xl sm:text-6xl font-bold leading-tight mb-4">
              Essential Apps for Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mt-2 pb-2">
                Digital Wellbeing Journey
              </span>
            </h1>

            <p className="animate-fade-up delay-800 text-lg sm:text-2xl text-gray-300 mb-12">
              Carefully curated apps to enhance your spiritual growth and productivity
              <span className="block mt-2 text-[#61EBCE]">while maintaining digital wellbeing.</span>
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {[
                {
                  icon: "ri:shield-check-fill",
                  title: "Vetted & Safe",
                  desc: "Every app carefully reviewed",
                  delay: "delay-1200"
                },
                {
                  icon: "ri:heart-fill",
                  title: "Muslim-Focused",
                  desc: "Made for our needs",
                  delay: "delay-1600"
                },
                {
                  icon: "ri:star-fill",
                  title: "Best in Class",
                  desc: "Top rated selections",
                  delay: "delay-2000"
                }
              ].map((card, index) => (
                <div 
                  key={index}
                  className={`animate-fade-up ${card.delay} bg-gradient-to-br from-[#28324E] to-[#1F2937] p-6 rounded-xl border border-[#374151] hover:border-[#61EBCE]/30 transform transition-all duration-500 hover:scale-105`}
                >
                  <div className="bg-[#162031] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                    <Icon icon={card.icon} className="text-[#61EBCE] text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">{card.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="bg-[#1F2937] py-20">
        <AppList />
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
