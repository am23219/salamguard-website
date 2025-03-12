"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StageCard from "./StageCard";

export default function StageSection({ 
  id, 
  title, 
  description, 
  icon, 
  color, 
  cards, 
  nextSectionId 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const scrollToNextSection = () => {
    document.getElementById(nextSectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id={id} 
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 bg-${color}/5 rounded-full blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`bg-${color} p-5 rounded-full shadow-lg mb-6 inline-block`}
            >
              <i className={`${icon} text-3xl text-slate-900`}></i>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold mb-6"
            >
              <span className={`text-${color}`}>{title}</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-xl max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cards.map((card, index) => (
              <StageCard 
                key={index}
                card={card}
                index={index}
                stageColor={color}
              />
            ))}
          </div>
          
          {/* Scroll Down Button */}
          {nextSectionId && (
            <div className="flex justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={scrollToNextSection}
                className="group flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="text-sm text-slate-400 mb-2">Continue to next section</span>
                <div className={`w-10 h-10 rounded-full border-2 border-${color} flex items-center justify-center`}>
                  <i className={`fas fa-arrow-down text-${color} group-hover:translate-y-1 transition-transform duration-300`}></i>
                </div>
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 