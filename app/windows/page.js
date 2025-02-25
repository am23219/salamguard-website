"use client";

import Header from "../../public/components/Header";
import InstructionStep from "../../public/components/InstructionStep";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowDown,
  faDownload,
  faTerminal,
  faCode,
  faSyncAlt,
  faCheckCircle,
  faFolderOpen,
  faFileAlt,
  faPlusCircle,
  faBan,
  faSave,
  faShieldAlt,
  faPlayCircle,
  faCopy,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import BlockingDisclaimer from "../../public/components/BlockingDisclaimer";
import { Icon } from "@iconify/react";

// ... existing code ...
export default function WindowsPage() {
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
      setCopiedIndex(copyIdentifier);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      <Header type="windows" title="Block Haram and Distracting Content on Windows" />

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
              Fortify Your Windows PC in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] mt-2">
                Two Simple Parts
              </span>
            </h1>

            <p className="animate-fade-up delay-800 text-lg sm:text-2xl text-gray-300 mb-12 leading-relaxed">
              <span className="font-semibold text-[#61EBCE]">Taking just two minutes </span>
              to block harmful and distracting content today can save you years of regret.
            </p>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Part One", desc: "Block Haram Sites" },
                { title: "Part Two", desc: "Block Distracting Sites" }
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
                Follow our comprehensive guide to transform your Windows PC into a focused, distraction-free tool.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Block Haram Sites",
                  description: "Block over 13,000 explicit sites using our custom blocklist.",
                  icon: "ri:shield-check-fill",
                  step: "Part 1",
                  link: "#part-1"
                },
                {
                  title: "Block Distractions",
                  description: "Block distracting sites like social media and streaming platforms.",
                  icon: "ri:shield-flash-fill",
                  step: "Part 2",
                  link: "#part-2"
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

        <BlockingDisclaimer />

        {/* Part One: Blocking Haram Sites */}
        <section id="part-1" className="relative py-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#183355] mb-6">
                <Icon
                  icon="ri:shield-check-fill"
                  className="text-[#61EBCE] text-2xl"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">
                Part One: Block Haram Sites
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Follow these steps to block over 13,000 explicit websites on your Windows PC.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "Step 1: Download the Blocklist File",
                  description: (
                    <>
                      Download the custom blocklist file with over 13,000 haram sites.{" "}
                      <strong className="flash">Save it in your Downloads folder.</strong>{" "}
                      <a
                        href="https://drive.google.com/file/d/10B5XazGyG3P4l2nDeUhaoXZJH2lqrJ7o/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#61EBCE] underline"
                      >
                        Click here to download the file
                      </a>
                      .
                    </>
                  ),
                  icon: faDownload
                },
                {
                  step: "Step 2: Open Power Shell as an Administrator",
                  description: (
                    <>
                      Search for <strong>Power Shell</strong> in the{" "}
                      <strong>Start Menu</strong>. Right click it and select{" "}
                      <strong>Run As Administrator</strong>.
                    </>
                  ),
                  icon: faTerminal
                },
                {
                  step: "Step 3: Input the Block Script",
                  description: "Paste the following command and press enter:",
                  code: `# Run PowerShell as Administrator
if (Test-Path "$env:USERPROFILE\\Downloads\\blocklist.txt") {
    # Append the blocklist to the hosts file
    Get-Content "$env:USERPROFILE\\Downloads\\blocklist.txt" | Out-File -Append -Encoding ascii C:\\Windows\\System32\\drivers\\etc\\hosts
    
    # Flush the DNS cache
    ipconfig /flushdns
    
    # Remove the blocklist file
    Remove-Item "$env:USERPROFILE\\Downloads\\blocklist.txt"
}`,
                  icon: faCode
                },
                {
                  step: "Step 4: Test The Blocker",
                  description: (
                    <>
                      Click{" "}
                      <a
                        href="http://exampleadultsite.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>
                          <u>this link</u>
                        </strong>{" "}
                      </a>{" "}
                      to test if your blocker is working.
                      <br />
                      <br />
                      You should receive a black page that says something like{" "}
                      <strong>&quot;This site can&apos;t be reached.&quot;</strong>{" "}
                      If instead a page loads, then go through the steps again to ensure
                      that you did not miss steps.{" "}
                    </>
                  ),
                  icon: faCheckCircle
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-6 border border-[#374151] hover:border-[#61EBCE]/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#162031] p-3 rounded-lg">
                      <FontAwesomeIcon icon={item.icon} className="text-[#61EBCE] text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.step}</h3>
                  </div>

                  <div className="text-gray-300">
                    <p>{item.description}</p>

                    {item.code && (
                      <div className="relative mt-4">
                        <pre className="bg-[#1F2937] rounded-md p-4 text-sm text-[#61EBCE] whitespace-pre overflow-x-auto">
                          {item.code}
                        </pre>
                        <button
                          onClick={() => handleCopy(item.code, index)}
                          className="absolute top-2 right-2 p-2 bg-[#61EBCE] text-[#1C1F26] font-semibold rounded-md hover:bg-[#4DD1B5] hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring focus:ring-[#4DD1B5] focus:ring-opacity-50"
                          aria-label="Copy code"
                        >
                          {copiedIndex === `${index}` ? (
                            <>
                              <FontAwesomeIcon icon={faCheck} className="mr-1" /> Copied
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={faCopy} className="mr-1" /> Copy
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-500 my-16" />

        {/* Part Two: Blocking Distracting Sites */}
        <section id="part-2" className="relative py-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#183355] mb-6">
                <Icon icon="ri:shield-flash-fill" className="text-[#61EBCE] text-2xl" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">
                Part Two: Block Distracting Sites
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Follow these steps to block distracting websites like social media and streaming platforms.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "Step 1: Open the Hosts File",
                  description: (
                    <>
                      Open <strong>Command Prompt</strong> as an administrator by searching
                      for &apos;cmd&apos; in the Start menu, right-clicking, and selecting{" "}
                      <strong>Run as administrator</strong>. Then enter this command:
                    </>
                  ),
                  code: "notepad C:\\Windows\\System32\\drivers\\etc\\hosts",
                  icon: faFileAlt
                },
                {
                  step: "Step 2: Add Sites to Block",
                  description: "Add these lines at the bottom of the hosts file to block popular distracting sites:",
                  code: "127.0.0.1 youtube.com\n127.0.0.1 www.youtube.com\n127.0.0.1 tiktok.com\n127.0.0.1 www.tiktok.com\n127.0.0.1 instagram.com\n127.0.0.1 www.instagram.com\n127.0.0.1 facebook.com\n127.0.0.1 www.facebook.com\n127.0.0.1 x.com\n127.0.0.1 www.x.com\n127.0.0.1 reddit.com\n127.0.0.1 www.reddit.com\n127.0.0.1 netflix.com\n127.0.0.1 www.netflix.com\n127.0.0.1 hulu.com\n127.0.0.1 www.hulu.com\n127.0.0.1 primevideo.com\n127.0.0.1 www.primevideo.com\n127.0.0.1 disneyplus.com\n127.0.0.1 www.disneyplus.com\n127.0.0.1 max.com\n127.0.0.1 www.max.com\n127.0.0.1 twitch.tv\n127.0.0.1 www.twitch.tv",
                  icon: faBan
                },
                {
                  step: "Step 3: Save and Finalize",
                  description: (
                    <>
                      Save the hosts file and refresh your DNS cache by running this command
                      in the administrator Command Prompt:
                    </>
                  ),
                  code: "ipconfig /flushdns",
                  icon: faSave
                },
                {
                  step: "Step 4: Test the Blocker",
                  description: (
                    <>
                      Try visiting a blocked site to confirm it doesn&apos;t load. You should
                      see a message like <strong>&quot;This site can&apos;t be reached.&quot;</strong>
                      <br />
                      If a site still loads, go through the steps again to make sure
                      everything is correct.
                    </>
                  ),
                  icon: faCheckCircle
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-xl p-6 border border-[#374151] hover:border-[#61EBCE]/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#162031] p-3 rounded-lg">
                      <FontAwesomeIcon icon={item.icon} className="text-[#61EBCE] text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.step}</h3>
                  </div>

                  <div className="text-gray-300">
                    <p>{item.description}</p>

                    {item.code && (
                      <div className="relative mt-4">
                        <pre className="bg-[#1F2937] rounded-md p-4 text-sm text-[#61EBCE] whitespace-pre overflow-x-auto">
                          {item.code}
                        </pre>
                        <button
                          onClick={() => handleCopy(item.code, index)}
                          className="absolute top-2 right-2 p-2 bg-[#61EBCE] text-[#1C1F26] font-semibold rounded-md hover:bg-[#4DD1B5] hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring focus:ring-[#4DD1B5] focus:ring-opacity-50"
                          aria-label="Copy code"
                        >
                          {copiedIndex === `${index}` ? (
                            <>
                              <FontAwesomeIcon icon={faCheck} className="mr-1" /> Copied
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={faCopy} className="mr-1" /> Copy
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}