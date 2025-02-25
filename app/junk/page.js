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
  faBan
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AndroidPage() {
  const [expandedStepOne, setExpandedStepOne] = useState(null);
  const [expandedStepTwo, setExpandedStepTwo] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const toggleStepOne = (step) => {
    setExpandedStepOne(expandedStepOne === step ? null : step);
  };

  const toggleStepTwo = (step) => {
    setExpandedStepTwo(expandedStepTwo === step ? null : step);
  };

  const handleCopy = async (text, index, subIndex = null) => {
    try {
      await navigator.clipboard.writeText(text);
      const copyIdentifier =
        subIndex !== null ? `${index}-${subIndex}` : `${index}`;
      setCopiedIndex(copyIdentifier); // Set unique copied identifier
      setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#1C1F26] via-[#0A0A0C] to-[#061417] text-gray-200 min-h-screen font-sans">
      {/* Header */}
      <Header type="android" title="Three Steps to Fortify Your Android" />
      <div className="h-1 bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] w-full mt-4"></div>

      {/* Top Section */}
      <div className="w-full bg-gradient-to-b from-[#1A3B61] to-[#0A1A2E] py-16">
        <h1 className="text-center text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] animate-slideUp">
          Fortify Your Android in Three Simple Steps
        </h1>
        <p className="text-center text-gray-300 text-lg md:text-xl mt-4 max-w-xl mx-auto px-6 leading-relaxed">
          <span className="font-semibold text-[#61EBCE]">
            Taking just two minutes{" "}
          </span>
          to block harmful and distracting content today can save you years of
          regret.
        </p>

        {/* Steps Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 md:px-12">
          {/* Step 1 */}
          <div className="bg-gradient-to-r from-[#0D2A40] to-[#1A3B61] p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-xl md:text-2xl font-bold text-[#61EBCE] mb-4 tracking-wide">
              Step One
            </h3>
            <p className="text-lg md:text-xl text-gray-200 font-semibold">
              Block Haram Sites
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-r from-[#0D2A40] to-[#1A3B61] p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-xl md:text-2xl font-bold text-[#61EBCE] mb-4 tracking-wide">
              Step Two
            </h3>
            <p className="text-lg md:text-xl text-gray-200 font-semibold">
              Block Ads
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-r from-[#0D2A40] to-[#1A3B61] p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-xl md:text-2xl font-bold text-[#61EBCE] mb-4 tracking-wide">
              Step Three
            </h3>
            <p className="text-lg md:text-xl text-gray-200 font-semibold">
              Limit Distractions
            </p>
          </div>
        </div>

        <button
          className="mt-12 px-8 py-4 bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] text-[#061417] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all mx-auto block font-semibold"
          onClick={() => {
            const stepOne = document.getElementById("step-1");
            if (stepOne) {
              stepOne.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get Started
        </button>
      </div>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4">
        {/* Step One */}
        <section id="controls">
          {/* Part One: Blocking Haram Sites */}
          <div
            id="step-1"
            className="flex flex-col items-center text-center mx-auto max-w-4xl px-6 mt-16 mb-16"
          >
            {/* Robust Icon + Section Header */}
            <div className="bg-[#183355] rounded-full p-6 md:p-10 mb-6 shadow-lg animate-bounceSlow">
              <Icon
                icon="ri:sword-fill"
                className="text-[#61EBCE] text-5xl md:text-7xl"
              />
            </div>
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mb-6">
              Step One: Block Haram Sites
            </h2>

            {/* Descriptive Content */}
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-2xl">
              Unlock the power of Android&apos;s{" "}
              <span className="font-medium">&apos;Digital Wellbeing&apos;</span>{" "}
              feature to safeguard your mind and soul from harmful content and
              distractions.
            </p>

            {/* Motivational Call-to-Action Box */}
          </div>

          <div className="container mx-auto py-10 px-4">
            {[
              {
                step: "Step 1: Set up Digital Wellbeing",
                description: `Navigate to Settings > Digital Wellbeing & Parental Controls > Set Up Parental Controls.`,
                images: [
                  {
                    src: "/images/android/1.PNG",
                    alt: "Settings",
                    subtitle: "Navigate to the Settings app.",
                  },
                  {
                    src: "/images/android/2.PNG",
                    alt: "Screen Time",
                    subtitle: "Scroll down to 'Digital Wellbeing & Parental Controls.'",
                  },
                  {
                    src: "/images/android/3.PNG",
                    alt: "App",
                    subtitle:
                      "Scroll down to 'Set Up Parental Controls'.",
                  },
                  {
                    src: "/images/android/4.PNG",
                    alt: "Turn On",
                    subtitle: "You should see this screen. Select 'Next.'",
                  },
                ],
              },
              {
                step: "Step 2: Have a Companion Set Up Parental Controls",
                description: `Have a companion set up Parental Controls for you. They will need to use their own Google Account to set it up.`,
                images: [
                  {
                    src: "/images/android/6.PNG",
                    alt: "6",
                    subtitle:
                      "Select your email account and press 'Supervise.'",
                  },
                  {
                    src: "/images/android/7.PNG",
                    alt: "7",
                    subtitle: "Hand your phone to your companion. They will set up Parental Controls for you. Press 'Next.'",
                  },
                  {
                    src: "/images/android/8.PNG",
                    alt: "8",
                    subtitle:
                      "Have your companion login to their own Google Account-not yours!",
                  },
                  {
                    src: "/images/android/9.PNG",
                    alt: "9",
                    subtitle: "Confirm the new settings by entering your password.",
                  },
                  {
                    src: "/images/android/11.PNG",
                    alt: "11",
                    subtitle:
                      "Allow your companion to supervise your device.",
                  },
                  {
                    src: "/images/android/12.PNG",
                    alt: "11",
                    subtitle:
                      "The default settings are already set up for you. Press 'Next.'",
                  },
                  {
                    src: "/images/android/13.PNG",
                    alt: "11",
                    subtitle:
                      "You are done on your side. Your companion will now supervise your device through their own phone.",
                  },
                ],
              },
              {
                step: "Step 3: Have Your Companion Edit Your Settings",
                description: <>
                Your companion, or &apos;Parent,&apos; can now change
                settings on your phone. Have them download the family link
                app on their own phone and login with the parent account
                they used. Your companion does not need to have an Android phone-iPhone works too! <br />
                
                <div className="flex justify-center space-x-4 pt-4">
                  <Link
                    href="https://apps.apple.com/us/app/google-family-link/id1150085200"
                    target="_blank"
                    rel="noopener noreferrer"
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
                <br />
              </>,
                images: [
                  {
                    src: "/images/android/14.PNG",
                    alt: "12",
                    subtitle: "Have your Companion download the Family Link app on their own phone through the links above. Have them login with the same account they used to set up Parental Controls on your phone.",
                  },
                  {
                    src: "/images/android/15.PNG",
                    alt: "13",
                    subtitle:
                      "Scroll down to 'Content Restrictions.'",
                  },
                  {
                    src: "/images/android/16.PNG",
                    alt: "14",
                    subtitle:
                      "This is where you can edit your settings. The default settings are already sufficient to block pornographic sites, but one can tweak them according to their needs.",
                  },
                  {
                    src: "/images/android/17.PNG",
                    alt: "14",
                    subtitle:
                      "Under 'Google Chrome and Web,' pornographic content is already blocked. You can add further restrictions here by either allowing 'Approved Sites' or by blocking any custom sites that may contain Haram content (such as Reddit, X, etc.).",
                  },
                  {
                    src: "/images/android/18.PNG",
                    alt: "14",
                    subtitle:
                      "Under 'YouTube,' you can turn on 'Restricted Mode' to potentially block any videos that may contain Haram content.",
                  },
                ],
              },
              {
                step: "Step 4: Delete Other Browsers On Your Phone (Important!)",
                description: `As these settings only block pornographic sites on Google Chrome, it is important to delete other browsers on your phone. You should also understand your new app download settings which will not allow you to download any new apps on your phone without your companion's help.`,
                images: [
                  {
                    src: "/images/android/19.PNG",
                    alt: "15",
                    subtitle:
                      "Delete all browsers besides Google Chrome on your phone. Google Chrome is the only browser that is protected by these settings (pictured below).",
                  },
                  {
                    src: "/images/android/20.PNG",
                    alt: "16",
                    subtitle: "Understand your new app download settings: you will need to seek permission from your companion to download any new apps on your phone. You can do this in person or send them a push notification on their phone",
                  },
                  {
                    src: "/images/android/21.PNG",
                    alt: "17",
                    subtitle:
                      "If you selected 'Send Message' in the previous step, your companion will receive a push notification on their phone. They can then approve your app download request in the Family Link app.",
                  },
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#28324E] rounded-lg shadow-lg p-6 mb-8 hover:shadow-xl transition duration-300"
              >
                {/* Step Header */}
                <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mb-4">
                  {item.step}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Swiper Carousel */}
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={true}
                  pagination={{ clickable: true, type: "fraction" }}
                  modules={[Navigation, Pagination]}
                  className="w-full"
                >
                  {item.images.map((image, imgIndex) => (
                    <SwiperSlide
                      key={imgIndex}
                      className="flex flex-col items-center"
                    >
                      {/* Subtitle */}
                      <div className="mb-2 w-full text-center">
                        <p className="text-white text-sm font-semibold">
                          {image.subtitle}
                        </p>
                      </div>

                      {/* Image Container */}
                      <div className="relative w-full max-w-[500px] h-[50vh] mx-auto flex justify-center items-center">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          layout="fill"
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}
          </div>

          {/* Part Two: Blocking Ads */}
          <hr className="border-t border-gray-600 my-8" />
          {/* Step Two */}
          <section id="step-2" className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mb-6">
              Step Two: Block Ads on Chrome
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
              Install{" "}
              <span className="font-bold text-[#61EBCE]">AdGuard: Content Blocker</span>{" "}
              which blocks ads on Google Chrome.
            </p>
          </section>
          <div className="flex justify-center mb-6">
            <Image
              src="../images/adguard.png"
              alt="Adguard Icon"
              width={128}
              height={128}
              className="rounded-lg animate-bounceSlow"
            />
          </div>
          <div className="flex justify-center">
            <Link
              href="https://play.google.com/store/apps/details?id=com.adguard.android.contentblocker&hl=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out"
            >
              Download AdGuard
            </Link>
          </div>

          {/* Steps Section */}
          <div id="step-1" className="container mx-auto py-10 px-6">
            {[
              {
                step: "Make Brave Your Default Browser",
                description: `This ensures all links open in Brave, providing an ad-free experience.`,
                images: [
                  {
                    src: "/images/brave/1.PNG",
                    alt: "Step 1",
                    subtitle: "Download and open Brave from the link above.",
                  },
                  {
                    src: "/images/brave/2.PNG",
                    alt: "Step 2",
                    subtitle: "Tap 'Set Default' to begin.",
                  },
                  {
                    src: "/images/brave/3.PNG",
                    alt: "Step 3",
                    subtitle: "Choose 'Default Browser App.'",
                  },
                  {
                    src: "/images/brave/4.PNG",
                    alt: "Step 4",
                    subtitle: "Select 'Brave' from the list.",
                  },
                  {
                    src: "/images/brave/5.PNG",
                    alt: "Step 5",
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
                className="bg-[#28324E] rounded-lg shadow-lg p-6 mb-8 hover:shadow-xl transition duration-300"
              >
                {/* Step Header */}
                <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mb-4">
                  {item.step}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Swiper Carousel */}
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={true}
                  pagination={{ clickable: true, type: "fraction" }}
                  modules={[Navigation, Pagination]}
                  className="w-full"
                >
                  {item.images.map((image, imgIndex) => (
                    <SwiperSlide
                      key={imgIndex}
                      className="flex flex-col items-center"
                    >
                      {/* Subtitle */}
                      <div className="mb-2 w-full text-center">
                        <p className="text-white text-sm font-semibold">
                          {image.subtitle}
                        </p>
                      </div>

                      {/* Image Container */}
                      <div className="relative w-full max-w-[500px] h-[50vh] mx-auto flex justify-center items-center">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          layout="fill"
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}
          </div>

          <hr className="border-t border-gray-500 my-8" />

          {/* Part Three: Blocking Distracting Sites */}
          <section id="step-3" className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mb-6">
              Step Three: Remove & Limit Distractions
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Take control of your device by limiting or removing distracting
              apps and sites with Screen Time.
            </p>
          </section>

         {/* Instruction Steps with Accordion for Part Two */}
         <div className="space-y-4">
            {[
              {
                step: "App Blocking & Time Limits",
                description: (
                  <>
                    <em>
                      Family Link lets you block access to specific apps or set
                      time limits for their usage.
                    </em>{" "}
                    <br />
                    <br /> 1. Ask your Family Link companion to open their app
                    and go to <strong>Controls &gt; App Limits</strong>
                    <br />
                    2. Select the app you want to block or limit, then choose
                    the desired option. <br />
                    3. Repeat this process for each app you want to manage.
                    <br />
                    <br />
                  </>
                ),
                icon: faBan,
              },
              {
                step: "Daily Screen Time Limit",
                description: (
                  <>
                    <em>
                      Family Link allows you to block access to all apps once a
                      device&apos;s screen time exceeds a set threshold.
                    </em>{" "}
                    <br />
                    <br /> 1. Ask your Family Link companion to open their app
                    and navigate to <strong>Controls</strong>
                    <br />
                    2. Under <strong>Daily Limit</strong>, select{" "}
                    <strong>Edit Weekly Schedule</strong> and enable it. <br />
                    3. Adjust the screen time allowance for each day as desired.
                  </>
                ),
                icon: faHourglassHalf,
              },
              {
                step: "Downtime",
                description: (
                  <>
                    <em>
                      Family Link enables you to block access to all apps
                      (except calling) during specific time periods. It’s
                      perfect for restricting app usage at night or during
                      designated productivity hours.
                    </em>{" "}
                    <br />
                    <br /> 1. Ask your Family Link companion to open their app
                    and go to <strong>Controls</strong>
                    <br />
                    2. Under <strong>Downtime</strong>, select{" "}
                    <strong>Edit Weekly Schedule</strong> and enable it. <br />
                    3. Customize the Downtime schedule for each day as needed.
                  </>
                ),
                icon: faMoon,
              },

              {
                step: "Block Specific Sites",
                description: (
                  <>
                    <em>
                      Family Link allows you to block specific sites that you
                      don&apos;t want to be accessed.
                    </em>
                    <br /> <br /> 1. Ask your Family Link companion to open
                    their app and navigate to{" "}
                    <strong>
                      Controls &gt; Content Restrictions &gt; Google Chrome
                    </strong>
                    <br />
                    2. Under <strong>Manage Sites</strong>, select{" "}
                    <strong>0 blocked sites</strong> and add any websites you
                    wish to block. <br /> <br />
                    <strong>Note: </strong> Make sure to restrict app downloads
                    without permission (as demonstrated in &apos;Step 3&apos; of
                    &apos;Part One&apos;), as blocking websites can be bypassed
                    if a different browser is downloaded.
                  </>
                ),
                icon: faGlobe,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#28324E] rounded-lg p-4 shadow-md hover:shadow-lg transform transition duration-300"
              >
                {/* Step Header with Icon and Toggle */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleStepTwo(index)}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon && (
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-[#61EBCE] text-xl"
                      />
                    )}
                    <h3 className="text-xl font-semibold text-white">
                      {item.step}
                    </h3>
                  </div>
                  <FontAwesomeIcon
                    icon={
                      expandedStepTwo === index ? faArrowDown : faArrowRight
                    }
                    className="text-gray-400"
                  />
                </div>

                {/* Step Description and Sub-Steps (Visible on Toggle) */}
                {expandedStepTwo === index && (
                  <div className="mt-4 text-gray-300">
                    <p>{item.description}</p>

                    {/* Render main step code if it exists */}
                    {item.code && (
                      <div className="relative">
                        <pre className="bg-[#1F2937] rounded-md p-4 mt-2 text-sm text-[#61EBCE] whitespace-pre overflow-x-auto">
                          {item.code}
                        </pre>
                        <button
                          onClick={() => handleCopy(item.code, index)}
                          className="absolute top-2 right-2 p-2 bg-[#61EBCE] text-[#1C1F26] font-semibold rounded-md hover:bg-[#4DD1B5] hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring focus:ring-[#4DD1B5] focus:ring-opacity-50"
                          aria-label="Copy code"
                        >
                          {copiedIndex === `${index}` ? (
                            <>
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-1"
                              />{" "}
                              Copied
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={faCopy} className="mr-1" />{" "}
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Render sub-steps if they exist */}
                    {item.subSteps &&
                      item.subSteps.map((subItem, subIndex) => (
                        <div key={subIndex} className="relative mt-4">
                          <h4 className="font-semibold">{subItem.subStep}</h4>
                          {subItem.code && (
                            <div className="relative">
                              <pre className="bg-[#1F2937] rounded-md p-4 mt-2 text-sm text-[#61EBCE] whitespace-pre overflow-x-auto">
                                {subItem.code}
                              </pre>
                              <button
                                onClick={() =>
                                  handleCopy(subItem.code, index, subIndex)
                                }
                                className="absolute top-2 right-2 p-2 bg-[#61EBCE] text-[#1C1F26] font-semibold rounded-md hover:bg-[#4DD1B5] hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring focus:ring-[#4DD1B5] focus:ring-opacity-50"
                                aria-label="Copy code"
                              >
                                {copiedIndex === `${index}-${subIndex}` ? (
                                  <>
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      className="mr-1"
                                    />{" "}
                                    Copied
                                  </>
                                ) : (
                                  <>
                                    <FontAwesomeIcon
                                      icon={faCopy}
                                      className="mr-1"
                                    />{" "}
                                    Copy
                                  </>
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
