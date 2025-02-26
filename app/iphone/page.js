"use client";

import Header from "../../public/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowDown,
  faDownload,
  faCopy,
  faMoon,
  faHourglassHalf,
  faGlobe,
  faCheck,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlockingDisclaimer from "../../public/components/BlockingDisclaimer";

export default function IPhonePage() {
  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      <Header type="iphone" title="Three Steps to Fortify Your iPhone" />

      {/* Hero Section */}
      <section 
        id="hero" 
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
                Free Guide
              </span>
            </div>

            <h1 className="animate-fade-up delay-400 text-3xl sm:text-6xl font-bold leading-tight mb-4">
              Fortify Your iPhone in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mt-2">
                Three Simple Steps
              </span>
            </h1>

            <p className="animate-fade-up delay-800 text-lg sm:text-2xl text-gray-300 mb-12 leading-relaxed">
              <span className="font-semibold text-[#61EBCE]">Taking just two minutes </span>
              to block harmful and distracting content today can save you years of regret.
            </p>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Step One", desc: "Block Haram Sites" },
                { title: "Step Two", desc: "Block Ads" },
                { title: "Step Three", desc: "Limit Distractions" }
              ].map((step, index) => (
                <div 
                  key={index}
                  className={`animate-scale-up delay-${1200 + (index * 400)} bg-[#28324E]/50 p-6 rounded-lg border border-[#61EBCE]/10 transform transition-all duration-500 hover:scale-105 hover:border-[#61EBCE]/30`}
                >
                  <h3 className="text-xl font-bold text-[#61EBCE] mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('steps-overview');
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
              className="animate-fade-up delay-2400 group px-8 py-4 bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] text-gray-900 rounded-full text-lg font-semibold hover:shadow-lg transform transition-all duration-500 hover:scale-105"
            >
              Get Started
              <FontAwesomeIcon 
                icon={faArrowDown}
                className="ml-2 group-hover:translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Steps Overview */}
        <div id="steps-overview" className="relative py-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#51A4FA]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#61EBCE]/10 text-[#61EBCE] text-sm font-medium mb-4">
                Getting Started
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">
                Your Path to Digital Wellbeing
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Follow our comprehensive guide to transform your iPhone device into a focused, distraction-free tool.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Block Explicit Sites",
                  description: "Set up Screen Time to block explicit content and prevent changes.",
                  icon: "ri:shield-check-fill",
                  step: "Step 1",
                  link: "#step-1"
                },
                {
                  title: "Block Ads",
                  description: "Install Brave Browser to block ads and trackers.",
                  icon: "ri:shield-flash-fill",
                  step: "Step 2",
                  link: "#step-2"
                },
                {
                  title: "Limit Distractions",
                  description: "Optimize your phone for productivity and minimize distractions.",
                  icon: "ri:time-fill",
                  step: "Step 3",
                  link: "#step-3"
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="group relative bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-6 border border-[#374151] hover:border-[#61EBCE]/30 transition-all duration-300 transform hover:scale-[1.02] flex flex-col"
                >
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-[#162031] p-3 rounded-lg">
                        <Icon icon={item.icon} className="text-[#61EBCE] text-2xl" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#61EBCE]">{item.step}</div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Step One */}
        <section id="controls">
          {/* Part One: Blocking Explicit Sites */}
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#183355] mb-6">
                <Icon
                  icon="ri:shield-check-fill"
                  className="text-[#61EBCE] text-2xl"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">
                Step One: Block Explicit Sites
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Protect yourself from harmful content with powerful content filtering.
              </p>
            </div>

            <BlockingDisclaimer />

            {/* Steps */}
            <div className="space-y-8 mt-12">
              {[
                {
                  step: "Step 1: Set up Screen Time",
                  description: `Navigate to Settings > Screen Time > App & Website Activity.`,
                  images: [
                    {
                      src: "/images/ios/1.PNG",
                      alt: "Settings",
                      subtitle: "Open the Settings app.",
                    },
                    {
                      src: "/images/ios/2.PNG",
                      alt: "Screen Time",
                      subtitle: "Tap on 'Screen Time.'",
                    },
                    {
                      src: "/images/ios/3.PNG",
                      alt: "App",
                      subtitle:
                        "Tap on 'App & Website Activity' if you see it. If you don't, skip this.",
                    },
                    {
                      src: "/images/ios/4.PNG",
                      alt: "Turn On",
                      subtitle: "Turn 'App & Website Activity' on.",
                    },
                    {
                      src: "/images/ios/5.PNG",
                      alt: "On",
                      subtitle: "Your 'Screen Time' is now on.",
                    },
                  ],
                },
                {
                  step: "Step 2: Block Haram Content",
                  description: `Navigate to Content & Privacy Restrictions > Store, Web, Siri, & Game Center Content (Also knows as Content Restrictions) > Web Content, and then limit adult websites.`,
                  images: [
                    {
                      src: "/images/ios/6.PNG",
                      alt: "6",
                      subtitle:
                        "Scroll down and select 'Content & Privacy Restrictions.'",
                    },
                    {
                      src: "/images/ios/7.PNG",
                      alt: "7",
                      subtitle: "Turn it on.",
                    },
                    {
                      src: "/images/ios/8.jpeg",
                      alt: "8",
                      subtitle:
                        "Select the option that contains 'Web' or 'Content Restrictions.'",
                    },
                    {
                      src: "/images/ios/9.PNG",
                      alt: "9",
                      subtitle: "Select 'Web Content.'",
                    },
                    {
                      src: "/images/ios/10.jpeg",
                      alt: "10",
                      subtitle: "Switch the selection to 'Limit Adult Websites.'",
                    },
                    {
                      src: "/images/ios/11.PNG",
                      alt: "11",
                      subtitle:
                        "Directly pornographic sites will now be filtered out on any browser.",
                    },
                  ],
                },
                {
                  step: "Step 3: Block Triggering Sites",
                  description: `Under "Never Allow," list sites with problematic content. For example, Reddit.com and X.com often host Haram content that bypasses "Adult Content" filters. Blocking such sites is recommended.`,
                  images: [
                    {
                      src: "/images/ios/12.PNG",
                      alt: "12",
                      subtitle: "Select 'Add Website' under 'Never Allow.'",
                    },
                    {
                      src: "/images/ios/13.PNG",
                      alt: "13",
                      subtitle:
                        "Type in the URL for a site you would additionally like to block that contains triggering or Haram content.",
                    },
                    {
                      src: "/images/ios/14.PNG",
                      alt: "14",
                      subtitle:
                        "Your custom list of sites are now also blocked on any browser.",
                    },
                  ],
                },
                {
                  step: "Step 4: Lock Screen Time Settings (Important!)",
                  description: (
                    <>
                    <strong>Option A:</strong><br />
                      Have a trusted friend lock your settings using their Apple ID (recommended)<br /><br />
                      
                      <strong>Option B:</strong><br />
                      Use Password Locker to create a hard-to-remember passcode you control
                    </>
                  ),
                  images: [
                    {
                      src: "/images/ios/15.PNG",
                      alt: "15",
                      subtitle: "Navigate back to the initial 'Screen Time' page.",
                    },
                    {
                      src: "/images/ios/16.PNG",
                      alt: "16",
                      subtitle: "Select 'Lock Screen Time Settings.'",
                    },
                    {
                      src: "/images/ios/17.PNG",
                      alt: "17",
                      subtitle: "Choose your preferred locking method:",
                    },
                    {
                      src: "/images/ios/19.jpeg",
                      alt: "19",
                      subtitle: "Option A: Have a trusted friend lock with their Apple ID (not yours)",
                    },
                    {
                      src: "/images/ios/20.PNG",
                      alt: "20",
                      subtitle: "Option B: Visit password-locker.com to create a secure, hard-to-remember passcode",
                    },
                  ],
                  additionalContent: (
                    <div className="mt-6 p-4 bg-[#162031] rounded-lg border border-[#374151]">
                      <h4 className="text-[#61EBCE] font-semibold mb-2">No Trusted Friend Available?</h4>
                      <p className="text-gray-300 mb-4">
                        Use Password Locker - a free service that helps you create and securely store a Screen Time passcode in a way you won't remember. Retrieval requires a ~20-minute process to prevent impulsive unblocking.
                      </p>
                      <Link
                        href="https://password-locker.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#61EBCE] hover:text-[#51A4FA] transition-colors duration-300"
                      >
                        <span>Visit Password Locker</span>
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </Link>
                    </div>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-6 border border-[#374151] hover:border-[#61EBCE]/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mb-4">
                    {item.step}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {item.images && (
                    <div className="mt-6">
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true, type: "fraction" }}
                        modules={[Navigation, Pagination]}
                        className="w-full"
                      >
                        {item.images.map((image, imgIndex) => (
                          <SwiperSlide key={imgIndex} className="pb-10">
                            <div className="space-y-2 sm:space-y-3">
                              <div className="bg-[#1C1F26]/60 p-2 sm:p-3 rounded-lg">
                                <p className="text-[#61EBCE] text-sm font-medium text-center">
                                  {image.subtitle}
                                </p>
                              </div>
                              <div className="relative aspect-[9/16] sm:aspect-[3/4] md:aspect-[4/3] w-full max-w-xl mx-auto">
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  layout="fill"
                                  className="object-contain rounded-lg"
                                  priority={imgIndex === 0}
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  )}

                  {item.additionalContent && (
                    <div className="mt-6 p-4 bg-[#162031] rounded-lg border border-[#374151]">
                      {item.additionalContent}
                    </div>
                  )}

                  {index < 3 && (
                    <div className="mt-6 flex justify-center">
                      <button
                        onClick={() => {
                          const nextElement = document.querySelectorAll('#controls .space-y-8 > div')[index + 1];
                          if (nextElement) {
                            const headerOffset = 80;
                            const elementPosition = nextElement.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: "smooth"
                            });
                          }
                        }}
                        className="group inline-flex items-center px-5 py-2 rounded-lg bg-[#28324E]/50 hover:bg-[#28324E] border border-[#374151] hover:border-[#61EBCE]/30 transition-all duration-300"
                      >
                        <span className="text-[#61EBCE] mr-2 text-sm sm:text-base">Next Step</span>
                        <FontAwesomeIcon 
                          icon={faArrowRight} 
                          className="text-[#61EBCE] transform group-hover:translate-x-1 transition-transform duration-300" 
                        />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-t border-gray-500 my-16" />

          {/* Part Two: Blocking Ads */}
          <section id="step-2" className="relative py-16">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
              <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-[#51A4FA]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#183355] mb-6">
                  <Icon icon="ri:shield-flash-fill" className="text-[#61EBCE] text-2xl" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">
                  Step Two: Block Ads on Browser
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Install Brave Browser and make it your default for an ad-free experience.
                </p>
              </div>

              <div className="flex justify-center mb-6">
                <Image
                  src="../images/brave.png"
                  alt="Brave Browser Icon"
                  width={128}
                  height={128}
                  className="rounded-lg animate-bounceSlow"
                />
              </div>

              <div className="flex justify-center mb-12">
                <Link
                  href="https://apps.apple.com/us/app/brave-browser-search-engine/id1052879175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out"
                >
                  Download Brave Browser
                </Link>
              </div>

              {/* Steps for Brave setup */}
              <div className="space-y-8">
                {[
                  {
                    step: "Make Brave Your Default Browser",
                    description: `This ensures all links open in Brave, providing an ad-free experience.`,
                    images: [
                      {
                        src: "/images/brave/2.PNG",
                        alt: "Step 1",
                        subtitle: "Download and open Brave from the link above. Tap 'Set Default' to begin.",
                      },
                      {
                        src: "/images/brave/3.PNG",
                        alt: "Step 2",
                        subtitle: "Choose 'Default Browser App.'",
                      },
                      {
                        src: "/images/brave/4.PNG",
                        alt: "Step 3",
                        subtitle: "Select 'Brave' from the list.",
                      },
                      {
                        src: "/images/brave/5.PNG",
                        alt: "Step 4",
                        subtitle: "Toggle the switch to complete setup.",
                      },
                      {
                        src: "/images/brave/6.jpeg",
                        alt: "Step 6",
                        subtitle:
                          "Use all websites that have ads like YouTube in the Brave Browser instead of in-app to avoid seeing ads.",
                      },
                    ],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-6 border border-[#374151] hover:border-[#61EBCE]/30 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mb-4">
                      {item.step}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      navigation={true}
                      pagination={{ clickable: true, type: "fraction" }}
                      modules={[Navigation, Pagination]}
                      className="w-full"
                    >
                      {item.images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex} className="pb-10">
                          <div className="space-y-2 sm:space-y-3">
                            <div className="bg-[#1C1F26]/60 p-2 sm:p-3 rounded-lg">
                              <p className="text-[#61EBCE] text-sm font-medium text-center">
                                {image.subtitle}
                              </p>
                            </div>
                            <div className="relative aspect-[9/16] sm:aspect-[3/4] md:aspect-[4/3] w-full max-w-xl mx-auto">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                className="object-contain rounded-lg"
                                priority={imgIndex === 0}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-t border-gray-500 my-16" />

          {/* Part Three: Remove & Limit Distractions */}
          <section id="step-3" className="relative py-16">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
              <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-[#51A4FA]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#183355] mb-6">
                  <Icon icon="ri:time-fill" className="text-[#61EBCE] text-2xl" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">
                  Step Three: Remove & Limit Distractions
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Take control of your device by limiting or removing distracting apps and sites.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Block YouTube Shorts & Homepage",
                    description: "Make YouTube Less Addictive",
                    icon: faYoutube,
                    steps: [
                      "Use YouTube exclusively in the Brave Browser",
                      "Login to YouTube using your Google Account",
                      "Navigate to Google Activity Controls",
                      "Turn YouTube History off"
                    ]
                  },
                  {
                    title: "Schedule Phone-Free Time",
                    description: "Schedule specific hours when apps are blocked",
                    icon: faMoon,
                    steps: [
                      "Open Settings → Screen Time",
                      "Tap Downtime",
                      "Enable and set schedule",
                      "Choose blocked apps"
                    ]
                  },
                  {
                    title: "Set App Time Limits",
                    description: "Set daily time limits for distracting apps",
                    icon: faHourglassHalf,
                    steps: [
                      "Open Settings → Screen Time",
                      "Tap App Limits → Add Limit",
                      "Select apps to limit",
                      "Set daily time allowance"
                    ]
                  },
                  {
                    title: "Block Specific Sites",
                    description: "Block specific websites that waste your time",
                    icon: faGlobe,
                    steps: [
                      "Open Settings → Screen Time",
                      "Tap Content & Privacy",
                      "Select Content Restrictions",
                      "Add sites to Never Allow"
                    ]
                  },
                  {
                    title: "Restrict App Downloads",
                    description: "Stop yourself from downloading blocked browsers or apps",
                    icon: faLock,
                    steps: [
                      "Open Settings → Screen Time",
                      "Tap Content & Privacy",
                      "Select iTunes & App Store Purchases",
                      "Set Installing Apps to Don't Allow"
                    ]
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-6 border border-[#374151] hover:border-[#61EBCE]/30 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-[#162031] p-3 rounded-lg">
                        <FontAwesomeIcon icon={feature.icon} className="text-[#61EBCE] text-xl" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#61EBCE] ml-4">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <div className="space-y-3">
                      {feature.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-[#162031] flex items-center justify-center text-[#61EBCE] text-sm mr-3">
                            {stepIndex + 1}
                          </div>
                          <p className="text-gray-300">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <div className="bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-6 border border-[#374151]">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#162031] p-3 rounded-lg">
                      <Icon icon="ri:lightbulb-flash-fill" className="text-[#61EBCE] text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-4">Pro Tips</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-300">
                      Start with blocking your most distracting apps and setting a reasonable daily limit (like 3-4 hours).
                    </p>
                    <p className="text-gray-300">
                      Schedule phone-free time during your most productive hours and before bedtime.
                    </p>
                    <p className="text-gray-300">
                      Remember, you can always adjust these settings as needed to find the right balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
