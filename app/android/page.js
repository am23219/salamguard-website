"use client";

import Header from "../../public/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  faBan
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlockingDisclaimer from "../../public/components/BlockingDisclaimer";

export default function AndroidPage() {
  const [expandedStepOne, setExpandedStepOne] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = async (text, index, subIndex = null) => {
    try {
      await navigator.clipboard.writeText(text);
      const copyIdentifier = subIndex !== null ? `${index}-${subIndex}` : `${index}`;
      setCopiedIndex(copyIdentifier);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      <Header type="android" title="Three Steps to Fortify Your Android" />

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
              Fortify Your Android in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mt-2">
                Two Simple Steps
              </span>
            </h1>

            <p className="animate-fade-up delay-800 text-lg sm:text-2xl text-gray-300 mb-12 leading-relaxed">
              <span className="font-semibold text-[#61EBCE]">Taking just two minutes </span>
              to block harmful and distracting content today can save you years of regret.
            </p>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
              {[
                { title: "Step One", desc: "Cleanup Browser & YouTube" },
                { title: "Step Two", desc: "Limit Distractions" }
              ].map((step, index) => (
                <div 
                  key={index}
                  className={`animate-scale-up delay-${1200 + (index * 400)} bg-[#28324E]/50 p-3 sm:p-4 lg:p-5 rounded-lg border border-[#61EBCE]/10 transform transition-all duration-500 hover:scale-105 hover:border-[#61EBCE]/30`}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-[#61EBCE] mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{step.desc}</p>
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
                Follow our comprehensive guide to transform your Android device into a focused, distraction-free tool.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Cleanup Browser & YouTube",
                  description: "Block porn and ads on the browser, disable YouTube Shorts, and set up parental controls to prevent changes.",
                  icon: "ri:shield-check-fill",
                  step: "Step 1",
                  link: "#step-1"
                },
                {
                  title: "Limit Distractions",
                  description: "Optimize your phone for productivity and minimize distractions.",
                  icon: "ri:time-fill",
                  step: "Step 2",
                  link: "#step-2"
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
                  <div className="mt-auto pt-4 flex items-center text-[#61EBCE] text-sm font-medium">
                    Learn more
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Step One Section */}
        <section id="step-1" className="relative py-16 border-t border-gray-800">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#183355] mb-6">
                <Icon
                  icon="ri:shield-check-fill"
                  className="text-[#61EBCE] text-2xl"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">
                Step One: Cleanup Browser & YouTube
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
                  step: "Step 1: Download NewPipe",
                  description: <>
                    <div className="space-y-6">
                      <div className="bg-[#1C1F26]/60 p-4 rounded-lg">
                        <h4 className="text-[#61EBCE] font-medium mb-3">NewPipe removes ads and allows removing Shorts from YouTube:</h4>
                        <div className="flex justify-center space-x-4 pt-4">
                      <Link
                        href="https://newpipe.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[135px] sm:w-[180px]"
                      >
                        <Image
                          src="/images/newpipe.svg"
                          alt="Get it on F-Droid"
                          width={180}
                          height={53}
                          className="hover:opacity-80 transition-opacity duration-150 ease-in-out w-full h-auto"
                        />
                      </Link>
                    </div>  
                      </div>

                      <div className="bg-[#1C1F26]/60 p-4 rounded-lg">
                        <h4 className="text-[#61EBCE] font-medium mb-3">Follow these steps:</h4>
                        <div className="space-y-2">
                          {[
                           "1. Go to the downloaded file → Install",
                           "2. If Permission is denied:\n   Settings → Security & Privacy →\n   Install Unknown Apps → Allow from this source",
                           "3. In NewPipe Settings:\n   Settings → Content →\n   Content of Main Page →\n   Remove Default Kiosk and What's New"
                          ].map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start space-x-3 p-2">
                              <div className="w-6 h-6 rounded-full bg-[#162031] flex items-center justify-center text-[#61EBCE] text-xs shrink-0 mt-1">
                                {stepIndex + 1}
                              </div>
                              <p className="text-gray-300 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                                {step}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                },
                {
                  step: "Step 2: Download Tahir Browser",
                  description: <>
                    <div className="mb-6">
                      Tahir is a Chrome alternative that blocks haram images, haram sites, ads, and allows blurring images.
                      <div className="w-full max-w-3xl mx-auto aspect-video mt-5">
                        <iframe
                          className="w-full h-full rounded-lg shadow-lg"
                          src="https://www.youtube.com/embed/RYQFs1TOXM8?start=35"
                          title="Tahir Browser Tutorial"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-4 pt-4">
                      <Link
                        href="https://play.google.com/store/apps/details?id=com.ihyatech.tahir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[135px] sm:w-[180px]"
                      >
                        <Image
                          src="/images/google-play-store-icon.png"
                          alt="Get it on Google Play"
                          width={180}
                          height={53}
                          className="hover:opacity-80 transition-opacity duration-150 ease-in-out w-full h-auto"
                        />
                      </Link>
                    </div>  
                    <br />
                  </>
                },
                {
                  step: "Step 3: Set up Parental Controls",
                  description: "Navigate to your phone's parental control settings",
                  images: [
                    {
                      src: "/images/android/2.PNG",
                      alt: "Screen Time",
                      subtitle: "Find 'Digital Wellbeing & Parental Controls'"
                    },
                    {
                      src: "/images/android/3.PNG",
                      alt: "App",
                      subtitle: "Tap 'Set Up Parental Controls'"
                    },
                  ]
                },
                {
                  step: "Step 4: Have Your Companion Manage Your Device",
                  description: `You'll need a trusted friend or family member to manage your parental controls from their own phone. Have them sign in with their own Google Account to manage your device. Complete the setup with default settings.`,
              
                },
                {
                  step: "Step 5: Set Parental Controls",
                  description: <>
                    <div className="space-y-6">
                      <div className="bg-[#1C1F26]/60 p-4 rounded-lg">
                        <h4 className="text-[#61EBCE] font-medium mb-3">Have your companion download and open Family Link:</h4>
                        <div className="flex flex-wrap justify-center gap-4">
                          <Link
                            href="https://apps.apple.com/us/app/google-family-link/id1150085200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition-all duration-300 hover:scale-105"
                          >
                            <Image
                              src="/images/ios-app-store-icon.png"
                              alt="Download on the App Store"
                              width={135}
                              height={40}
                              className="hover:opacity-80 transition-opacity duration-150 ease-in-out"
                            />
                          </Link>

                          <Link
                            href="https://play.google.com/store/apps/details?id=com.google.android.apps.kids.familylink&hl=en_US"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition-all duration-300 hover:scale-105"
                          >
                            <Image
                              src="/images/google-play-store-icon.png"
                              alt="Get it on Google Play"
                              width={135}
                              height={40}
                              className="hover:opacity-80 transition-opacity duration-150 ease-in-out"
                            />
                          </Link>
                        </div>
                      </div>

                      <div className="bg-[#1C1F26]/60 p-4 rounded-lg">
                        <h4 className="text-[#61EBCE] font-medium mb-3">Follow these steps:</h4>
                        <div className="space-y-2">
                          {[
                            "Go to App Limits",
                            "Go to Chrome → Block",
                            "Go to YouTube → Block"
                          ].map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-center">
                              <div className="w-5 h-5 rounded-full bg-[#162031] flex items-center justify-center text-[#61EBCE] text-xs mr-2">
                                {stepIndex + 1}
                              </div>
                              <p className="text-gray-300 text-sm sm:text-base">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-6 border border-[#374151] transition-all duration-300 hover:border-[#61EBCE]/30"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mb-3 sm:mb-4">
                    {item.step}
                  </h3>

                  <div className="prose prose-invert max-w-none mb-4 sm:mb-5 text-sm sm:text-base">
                    {item.description}
                  </div>

                  {item.images && (
                    <div className="relative">
                      <Swiper
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ 
                          clickable: true, 
                          type: "fraction",
                          renderFraction: (currentClass, totalClass) => `
                            <span class="text-[#61EBCE] text-sm">
                              <span class="${currentClass}"></span>
                              <span class="mx-1">/</span>
                              <span class="${totalClass}"></span>
                            </span>
                          `
                        }}
                        modules={[Navigation, Pagination]}
                        className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden"
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

                  {index < 3 && mounted && (
                    <div className="mt-6 flex justify-center">
                      <button
                        onClick={() => {
                          const nextElement = index === 3 ? 
                            document.getElementById('step-2') : 
                            document.querySelectorAll('#step-1 .space-y-8 > div')[index + 1];
                          
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
        </section>

        <hr className="border-t border-gray-500 my-8" />

        {/* Step Two Section */}
        <section id="step-2" className="relative py-16 border-t border-gray-800">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-[#51A4FA]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#183355] mb-6">
                <Icon icon="ri:time-fill" className="text-[#61EBCE] text-2xl" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">
                Step Two: Remove & Limit Distractions
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Take control of your device by limiting or removing distracting apps and sites.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Block Distracting Apps",
                  description: "Block or limit specific apps that you find distracting",
                  icon: faBan,
                  steps: [
                    "Have Your Companion Open Family Link",
                    "Go to Controls → App Limits",
                    "Select apps to block or limit",
                    "Choose block or set time limit"
                  ]
                },
                {
                  title: "Set Daily Screen Time",
                  description: "Create healthy daily limits for your total screen time",
                  icon: faHourglassHalf,
                  steps: [
                    "Have Your Companion Open Family Link",
                    "Go to Controls → Daily Limit",
                    "Enable Edit Weekly Schedule",
                    "Set custom time limits"
                  ]
                },
                {
                  title: "Schedule Phone-Free Time",
                  description: "Set up Downtime to automatically block apps during specific hours",
                  icon: faMoon,
                  steps: [
                    "Have Your Companion Open Family Link",
                    "Go to Controls → Downtime",
                    "Enable Edit Weekly Schedule",
                    "Set phone-free hours"
                  ]
                },
                {
                  title: "Block Distracting Sites",
                  description: "Block specific websites that waste your time",
                  icon: faGlobe,
                  steps: [
                    "Have Your Companion Open Family Link",
                    "Go to Controls → Content Restrictions",
                    "Select Google Chrome",
                    "Add sites to block"
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
                    <h3 className="text-xl font-semibold text-white ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-[#162031] flex items-center justify-center text-[#61EBCE] text-xs mr-2">
                          {stepIndex + 1}
                        </div>
                        <p className="text-gray-300 text-sm">{step}</p>
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
      </main>
    </div>
  );
}
