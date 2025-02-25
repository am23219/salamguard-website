"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../fontawesome.js";
import Header from "@/public/components/Header";

export default function CommunityLeaders() {
  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen py-20 pt-24 pb-20 flex items-center bg-gradient-to-b from-[#111827] to-[#1B2432] overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-2/3 w-72 h-72 bg-[#51A4FA]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#10B981]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="animate-fade-down delay-0 inline-block mb-4">
              <span className="bg-[#61EBCE]/10 text-[#61EBCE] text-sm font-medium px-3 py-1.5 rounded-full">
                Coming Soon
              </span>
            </div>

            {/* Main heading */}
            <h1 className="animate-fade-up delay-400 text-3xl sm:text-6xl font-bold leading-tight mb-4">
              For Community
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mt-4 pb-2">
                Leaders
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up delay-800 text-lg sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              We&apos;re building something special for community leaders.
              <span className="block mt-2 text-[#61EBCE]">Stay tuned for updates.</span>
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {[
                {
                  icon: "fas fa-users",
                  title: "Resources",
                  desc: "Prewritten Khutbahs and Reminders",
                  delay: "delay-1200"
                },
                {
                  icon: "fas fa-book",
                  title: "Mentoring Guide",
                  desc: "Learn how to mentor those suffering from pornography addiction",
                  delay: "delay-1600"
                },
                {
                  icon: "fas fa-hands-helping",
                  title: "Uniting Scholarship",
                  desc: "Opportunities for scholars to come together and discuss this issue in depth",
                  delay: "delay-2000"
                }
              ].map((card, index) => (
                <div 
                  key={index}
                  className={`animate-fade-up ${card.delay} bg-gradient-to-br from-[#28324E] to-[#1F2937] p-6 rounded-xl border border-[#374151] hover:border-[#61EBCE]/30 transform transition-all duration-500 hover:scale-105`}
                >
                  <div className="bg-[#162031] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                    <i className={`${card.icon} text-[#61EBCE] text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">{card.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 