// components/HeroSection.js
"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="bg-teal-500/10 text-teal-400 text-sm font-medium px-4 py-2 rounded-full border border-teal-500/20">
              Free Guide & Resources
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold leading-tight mb-6"
          >
            Your Complete Guide to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mt-2">
              Digital Purity & Productivity
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Transform your devices from sources of distraction into tools for growth.
            <span className="block mt-2 text-teal-400">We'll show you exactly how.</span>
          </motion.p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {[
              {
                icon: "fas fa-check-circle",
                title: "Step-by-Step",
                desc: "Clear guidance for all devices",
                delay: 0.6
              },
              {
                icon: "fas fa-infinity",
                title: "Always Free",
                desc: "No hidden costs",
                delay: 0.8
              },
              {
                icon: "fas fa-heart",
                title: "Community",
                desc: "Join others on the journey",
                delay: 1.0
              }
            ].map((card, index) => (
              <motion.div 
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: card.delay }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-teal-500/30 shadow-lg hover:shadow-teal-500/5 transform transition-all duration-500 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <i className={`${card.icon} text-teal-400 text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-slate-300 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <button 
              onClick={() => document.getElementById('stages-intro').scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full text-lg font-medium hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              Learn How It Works
              <i className="fas fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
            </button>
            <div className="flex items-center gap-2 text-slate-400">
              <i className="fas fa-clock"></i>
              <span className="text-sm">Takes only 5-10 minutes to set up</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}