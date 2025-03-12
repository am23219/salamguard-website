// components/StagesIntro.js
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StagesIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const stageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      }
    })
  };
  
  const stages = [
    { 
      number: "1", 
      text: "Block", 
      color: "bg-red-500", 
      id: "stage-1",
      description: "Block harmful content across all your devices"
    },
    { 
      number: "2", 
      text: "Optimize", 
      color: "bg-blue-600", 
      id: "stage-2",
      description: "Enhance your digital experience with powerful tools"
    },
    { 
      number: "3", 
      text: "Strengthen", 
      color: "bg-emerald-500", 
      id: "stage-3",
      description: "Build spiritual resilience for long-term success"
    }
  ];

  return (
    <section 
      id="stages-intro" 
      ref={ref}
      className="relative min-h-screen py-20 flex items-center bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-2/3 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Follow Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-600 to-emerald-500">
              Three-Stage Journey
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 leading-relaxed mb-16"
          >
            Transform your digital experience and protect your well-being with our comprehensive approach.
          </motion.p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-6 text-slate-300 mb-16">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative"
              >
                <button 
                  onClick={() => document.getElementById(stage.id).scrollIntoView({ behavior: 'smooth' })}
                  className="flex flex-col items-center group cursor-pointer w-full md:w-auto"
                >
                  <div className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center text-slate-900 font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stage.number}
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">{stage.text}</div>
                    <p className="text-sm text-slate-400 mt-2 max-w-[200px]">{stage.description}</p>
                  </div>
                  
                  {/* Connection line between stages */}
                  {index < stages.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-current to-next transform translate-x-3"></div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button 
              onClick={() => document.getElementById('stage-1').scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-lg font-medium hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
            >
              Begin Your Journey
              <i className="fas fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}