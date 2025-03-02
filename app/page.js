"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import { useEffect } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../fontawesome.js"; // Import your setup file
import { useState } from "react"; // Import useState
import Header from '../public/components/Header'
import { optimizeCards, deviceCards, spiritualCards } from './constants';



export default function Home() {
  useEffect(() => {
    // Add this to handle initial page load
    document.documentElement.style.backgroundColor = '#111827';  // Match the darkest background color
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'transition-opacity', 'duration-500');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Observer for full stage sections
    const stageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    // Observer for staggered elements within each stage
    const elementObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            elementObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '-10px'
      }
    );

    // Observe all stage sections
    document.querySelectorAll('.stage-section').forEach(section => {
      stageObserver.observe(section);
    });

    // Observe all stagger items
    document.querySelectorAll('.stagger-item').forEach(item => {
      elementObserver.observe(item);
    });

    return () => {
      stageObserver.disconnect();
      elementObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
     <Header />

      {/* Hero Section */}
      <section 
        id="hero" 
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
                Free Guide & Resources
              </span>
            </div>

            {/* Main heading */}
            <h1 className="animate-fade-up delay-400 text-3xl sm:text-6xl font-bold leading-tight mb-4">
              Your Complete Guide to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mt-4 pb-2">
                Digital Purity & Productivity
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up delay-800 text-lg sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform your devices from sources of distraction into tools for growth. 
              <span className="block mt-2 text-[#61EBCE]">We&apos;ll show you exactly how.</span>
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {[
                {
                  icon: "fas fa-check-circle",
                  title: "Step-by-Step",
                  desc: "Clear guidance for all devices",
                  delay: "delay-1200"
                },
                {
                  icon: "fas fa-infinity",
                  title: "Always Free",
                  desc: "No hidden costs",
                  delay: "delay-1600"
                },
                {
                  icon: "fas fa-heart",
                  title: "Community",
                  desc: "Join others on the journey",
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

            {/* CTA Section */}
            <div className="animate-fade-up delay-2400 flex flex-col sm:flex-row justify-center items-center gap-6">
              <button 
                onClick={() => document.getElementById('stages-intro').scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] text-[#1F2937] rounded-full text-lg font-semibold hover:shadow-lg transform transition-all duration-500 hover:scale-105 w-full sm:w-auto"
              >
                Learn How It Works
                <i className="fas fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
              </button>
              <div className="flex items-center gap-2 text-gray-400">
                <i className="fas fa-clock"></i>
                <span className="text-sm">Takes only 5-10 minutes to set up</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-slideUp {
          animation: slideUp 1.2s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.8s ease-out forwards;
        }
        .animate-bounceSlow {
          animation: bounceSlow 6s infinite;
        }
      `}</style>

      {/* Stages Introduction */}
      <section 
        id="stages-intro" 
        className="relative min-h-screen py-20 flex items-center bg-gradient-to-b from-[#111827] to-[#1B2432] overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#E53E3E]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-2/3 w-72 h-72 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#10B981]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="animate-fade-up delay-0 text-3xl md:text-4xl font-bold text-white mb-6">
                Follow Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53E3E] via-[#3B82F6] to-[#10B981]">
                  Three-Stage Journey
                </span>
              </h2>
              
              <p className="animate-fade-up delay-400 text-xl text-gray-300 leading-relaxed mb-12">
                Transform your digital experience and protect your well-being with our comprehensive approach.
              </p>

              <div className="animate-fade-up delay-800 flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 text-gray-300 mb-16">
                {[
                  { number: "1", text: "Block", color: "bg-[#E53E3E]", id: "stage-1" },
                  { number: "2", text: "Optimize", color: "bg-[#3B82F6]", id: "stage-2" },
                  { number: "3", text: "Strengthen", color: "bg-[#10B981]", id: "stage-3" }
                ].map((stage, index) => (
                  <button 
                    key={index} 
                    onClick={() => document.getElementById(stage.id).scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-full ${stage.color} flex items-center justify-center text-[#1B2432] font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {stage.number}
                    </div>
                    <div className="ml-3 opacity-90 group-hover:opacity-100">{stage.text}</div>
                    {index < 2 && (
                      <div className="hidden sm:block h-[2px] w-12 bg-gradient-to-r from-current to-next ml-8"></div>
                    )}
                  </button>
                ))}
              </div>

              <div className="animate-fade-up delay-1200">
                <button 
                  onClick={() => document.getElementById('stage-1').scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-4 bg-gradient-to-r from-[#E53E3E] to-[#EF4444] text-white rounded-full text-lg font-semibold hover:shadow-lg transform transition-all duration-500 hover:scale-105"
                >
                  Begin Your Journey
                  <i className="fas fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 1: Block Content */}
      <section 
        id="stage-1" 
        className="relative min-h-screen py-20 flex items-center bg-gradient-to-b from-[#111827] to-[#1B2432] overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#E53E3E]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="animate-fade-up">
                  <div className="bg-[#E53E3E] p-5 rounded-full shadow-md mb-4 inline-block">
                    <i className="fas fa-shield-alt text-3xl text-[#1F2937]"></i>
                  </div>
                </div>
                <h2 className="animate-fade-up delay-200 text-4xl font-extrabold">
                  <span className="text-[#E53E3E]">Stage 1:</span> Block Harmful Content
                </h2>
                <p className="animate-fade-up delay-400 text-gray-400 text-lg mt-4">
                  Are you doing what you need to ensure your digital purity? Block access to explicit content.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { ...deviceCards.find(card => card.title.includes('iPhone')), delay: '600' },
                  { ...deviceCards.find(card => card.title.includes('Android')), delay: '750' },
                  { ...deviceCards.find(card => card.title.includes('Mac')), delay: '900' },
                  { ...deviceCards.find(card => card.title.includes('Windows')), delay: '1050' }
                ].map((card, index) => (
                  <Link 
                    key={index} 
                    href={card.href} 
                    className={`animate-fade-up delay-${card.delay}`}
                  >
                    <div className="h-full p-8 rounded-xl bg-gradient-to-br from-[#28324E] to-[#1F2937] border border-[#374151] hover:border-[#E53E3E] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                      <div className="flex flex-col items-center h-full">
                        <i className={`${card.icon} text-4xl text-[#E53E3E] mb-4`}></i>
                        <h3 className="text-2xl font-bold text-white mb-5 text-center">
                          {card.title}
                        </h3>
                        <p className="text-lg text-gray-300 flex-grow text-center mb-6">
                          {card.method}
                        </p>
                        <div className="mt-auto">
                          <div className="bg-gradient-to-r from-[#E53E3E] to-[#F56565] p-px rounded-lg inline-block">
                            <div className="px-6 py-2 rounded-lg bg-[#1F2937] group-hover:bg-transparent transition-colors">
                              <span className="text-[#E53E3E] group-hover:text-white font-medium">
                                Get Started →
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center animate-fade-up delay-1200">
                <button 
                  onClick={() => document.getElementById('stage-2').scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-4 bg-gradient-to-r from-[#E53E3E] to-[#EF4444] text-white rounded-full text-lg font-semibold hover:shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                  Continue to Stage 2
                  <i className="fas fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider for Smooth Transition */}
      <div className="bg-gradient-to-b from-[#1F2937] to-[#1C1F26] h-2"></div>

      {/* Stage 2: Optimize */}
      <section 
        id="stage-2" 
        className="relative min-h-screen py-20 flex items-center bg-[#1F2937] overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="stagger-item delay-100">
                <div className="bg-[#3B82F6] p-5 rounded-full shadow-md mb-4 inline-block">
                  <i className="fas fa-cog text-3xl text-[#1F2937]"></i>
                </div>
              </div>
              <h2 className="stagger-item delay-200 text-4xl font-extrabold">
                <span className="text-[#3B82F6]">Stage 2:</span> Optimize Your Devices
              </h2>
              <p className="stagger-item delay-300 text-gray-400 text-lg mt-4">
                Take control of your devices with these powerful tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {optimizeCards.map((card, index) => (
                <Link 
                  key={index} 
                  href={card.href}
                  className={`group ${card.title.includes('Dumb Phone') ? 'md:scale-[1.02] md:shadow-lg' : ''}`}
                >
                  <div className={`h-full p-8 rounded-xl bg-gradient-to-br from-[#28324E] to-[#1F2937] border ${
                    card.title.includes('Dumb Phone') 
                      ? 'border-[#3B82F6] shadow-lg' 
                      : 'border-[#374151]'
                  } hover:border-[#3B82F6] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden`}>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Recommended badge for dumb phone */}
                    {card.title.includes('Dumb Phone') && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-medium px-3 py-1 rounded-full border border-[#3B82F6]/20 backdrop-blur-sm">
                          Recommended
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-col h-full relative">
                      {/* Icon container */}
                      <div className="mb-6">
                        <div className={`relative p-4 rounded-2xl w-fit ${
                          card.title.includes('Dumb Phone')
                            ? 'bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/5'
                            : 'bg-[#1F2937]'
                        } transition-colors duration-300`}>
                          <i className={`${
                            card.title.includes('Dumb Phone') 
                              ? 'fas fa-mobile-alt' 
                              : card.icon
                          } text-2xl ${
                            card.title.includes('Dumb Phone') 
                              ? 'text-[#3B82F6]' 
                              : 'text-white group-hover:text-[#3B82F6]'
                          } transition-colors duration-300`}></i>
                        </div>
                      </div>

                      <h3 className={`text-xl font-bold mb-4 ${
                        card.title.includes('Dumb Phone')
                          ? 'text-[#3B82F6]'
                          : 'text-white group-hover:text-[#3B82F6]'
                      } transition-colors duration-300`}>
                        {card.title}
                      </h3>
                      
                      <p className="text-gray-400 flex-grow group-hover:text-gray-300 transition-colors duration-300">
                        {card.description}
                      </p>

                      {/* Button with enhanced hover effect */}
                      <div className="mt-6">
                        <div className="inline-block">
                          <div className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                            card.title.includes('Dumb Phone')
                              ? 'bg-[#3B82F6]/10 group-hover:bg-[#3B82F6]/20'
                              : 'bg-[#1F2937] group-hover:bg-[#3B82F6]/10'
                          }`}>
                            <span className="text-[#3B82F6] font-medium inline-flex items-center">
                              Learn More 
                              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center animate-fade-up delay-1200">
              <button 
                onClick={() => document.getElementById('stage-3').scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white rounded-full text-lg font-semibold hover:shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                Continue to Stage 3
                <i className="fas fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 3: Spiritual */}
      <section 
        id="stage-3" 
        className="relative min-h-screen py-20 flex items-center bg-gradient-to-b from-[#1F2937] to-[#111827] overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#10B981]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="animate-fade-up">
              <div className="bg-[#10B981] p-5 rounded-full shadow-md mb-4 inline-block">
                <i className="fas fa-heart text-3xl text-[#1F2937]"></i>
              </div>
            </div>
            <h2 className="animate-fade-up delay-200 text-4xl font-extrabold">
              <span className="text-[#10B981]">Stage 3:</span> Strengthen Your Spiritual Guard
            </h2>
            <p className="animate-fade-up delay-400 text-gray-400 text-lg mt-4">
              Build a spiritual shield to protect yourself and your community
            </p>
          </div>

          {/* Spiritual Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spiritualCards.map((card, index) => (
              <Link 
                key={index} 
                href={card.href}
                className="group"
              >
                <div className="h-full p-8 rounded-xl bg-gradient-to-br from-[#28324E] to-[#1F2937] border border-[#374151] hover:border-[#10B981] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                  {/* Add subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex flex-col h-full relative">
                    {/* Updated icon styling */}
                    <div className="mb-6 relative">
                      <div className="relative bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/5 p-4 rounded-2xl w-fit transition-colors duration-300">
                        <i className={`${card.icon} text-2xl text-[#10B981] group-hover:text-white transition-colors duration-300`}></i>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#10B981] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-gray-400 flex-grow group-hover:text-gray-300 transition-colors duration-300">
                      {card.description}
                    </p>

                    {/* Updated button styling */}
                    <div className="mt-6">
                      <div className="inline-block">
                        <div className="px-6 py-2 rounded-lg bg-[#10B981]/10 group-hover:bg-[#10B981]/20 transition-colors duration-300">
                          <span className="text-[#10B981] font-medium inline-flex items-center">
                            {card.buttonText}
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#34D399] text-white rounded-full text-lg font-semibold hover:shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Back to Top
              <i className="fas fa-arrow-up ml-2 group-hover:-translate-y-1 transition-transform duration-300"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Hadith Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#111827] to-[#1B2432] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#10B981]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-400 mb-4">
              The Prophet ﷺ said that Allah said:
            </p>
            <p className="text-xl text-gray-300 mb-4">
            &quot;[An evil glance] is a poisoned arrow from Iblis.
            </p>
            <p className="text-2xl font-medium text-[#61EBCE] leading-relaxed">
              Whoever abandons it out of fear of Me,
              <span className="block mt-2">
                I will replace it with faith whose sweetness they will find in their heart.&quot;
              </span>
            </p>
            <p className="text-sm mt-8 text-gray-500">
              Al Mu&apos;jamul Kabir, Hadith: 10362
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B2432] py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center">
            <p className="text-gray-400 text-lg font-medium">
              Don&apos;t forget the Ummah and Palestine in your Duas
            </p>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
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
      `}</style>
    </div>
  );
}
