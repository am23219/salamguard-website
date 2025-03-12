"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StageCard({ card, index, stageColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Link 
        href={card.href}
        className="group h-full"
      >
        <div className={`h-full p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-${stageColor}/50 shadow-lg hover:shadow-${stageColor}/5 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden`}>
          {/* Subtle gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br from-${stageColor}/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          
          {/* Recommended badge */}
          {card.recommended && (
            <div className="absolute top-3 right-3">
              <div className={`bg-${stageColor}/10 text-${stageColor} text-xs font-medium px-3 py-1 rounded-full border border-${stageColor}/20 backdrop-blur-sm`}>
                Recommended
              </div>
            </div>
          )}
          
          <div className="flex flex-col h-full relative">
            {/* Icon */}
            <div className="mb-6">
              <div className={`relative bg-gradient-to-br from-${stageColor}/20 to-${stageColor}/5 p-4 rounded-xl w-fit`}>
                <i className={`${card.icon} text-2xl text-${stageColor} group-hover:text-white transition-colors duration-300`}></i>
              </div>
            </div>
            
            {/* Title */}
            <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-${stageColor} transition-colors duration-300`}>
              {card.title}
            </h3>
            
            {/* Description */}
            <p className="text-slate-400 flex-grow group-hover:text-slate-300 transition-colors duration-300">
              {card.description}
            </p>
            
            {/* Button */}
            <div className="mt-6 pt-4 border-t border-slate-700/50">
              <span className={`inline-flex items-center text-${stageColor} font-medium text-sm group-hover:translate-x-1 transition-transform duration-300`}>
                {card.buttonText || "Learn more"}
                <i className="fas fa-arrow-right w-4 h-4 ml-2"></i>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 