'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RamadanChallenge() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const features = [
    {
      title: "Scrolling to Solace",
      before: "Endless reels before Iftaar",
      after: "Peaceful moments in prayer",
      icon: "🌙",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Food Videos to Dua",
      before: "Watching recipe after recipe",
      after: "Time for dua and reflection",
      icon: "✨",
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Group Chats to Quran",
      before: "Lost in group messages",
      after: "Connected with Allah's words",
      icon: "📖",
      color: "from-emerald-700 to-teal-700"
    }
  ];

  const recommendedApps = [
    {
      category: "Quran",
      description: "Connect with the words of Allah through these trusted companions",
      apps: [
        {
          name: "Al-Quran",
          image: "/images/alquran.png",
          description: "Complete Quran with translations"
        },
        {
          name: "Quranly",
          image: "/images/quranly.png",
          description: "Track your recitation & create a habit"
        }
      ]
    },
    {
      category: "Dua",
      description: "Strengthen your connection with authentic duas",
      apps: [
        {
          name: "Dhikr",
          image: "/images/dhikr.png",
          description: "An essential collection of duas"
        }
      ]
    },
    {
      category: "Sadaqah",
      description: "Make giving a daily habit this Ramadan",
      apps: [
        {
          name: "Feeling Blessed",
          image: "/images/feelingblessed.png",
          description: "Track and manage your charitable giving"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/80 to-teal-50/80 dark:from-emerald-950/50 dark:to-teal-950/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/islamic-pattern.svg"
            alt="Islamic Pattern"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-700 to-teal-700 dark:from-emerald-300 dark:to-teal-300 text-transparent bg-clip-text animate-fade-down">
              Ramadan GO/DUMB Challenge
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 animate-fade-up delay-400">
              30 days of focus. Infinite spiritual rewards.
            </p>
            <div className="flex justify-center gap-4 animate-fade-up delay-800">
              <button
                onClick={() => setIsSignedUp(true)}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Join the Challenge
              </button>
              <Link href="/dumb-phone" className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 animate-fade-up bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 text-transparent bg-clip-text">
          Transform Your Ramadan
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl transform transition-transform group-hover:scale-105 border border-emerald-100/50 dark:border-emerald-700/50" />
              <div className="relative p-8">
                <div className="flex flex-col items-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} shadow-lg flex items-center justify-center mb-6 text-2xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-8 text-emerald-900 dark:text-emerald-100">
                    {feature.title}
                  </h3>
                  <div className="w-full space-y-4">
                    <div className="relative">
                      <div className="absolute -left-3 top-1/2 w-6 h-px bg-rose-200 dark:bg-rose-800" />
                      <div className="pl-6 py-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-r-xl border-l-4 border-rose-400 dark:border-rose-600">
                        <div className="flex items-center">
                          <span className="text-base mr-3">🚫</span>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {feature.before}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-3 top-1/2 w-6 h-px bg-emerald-200 dark:bg-emerald-800" />
                      <div className="pl-6 py-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-r-xl border-l-4 border-emerald-400 dark:border-emerald-600">
                        <div className="flex items-center">
                          <span className="text-base mr-3">✨</span>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {feature.after}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Apps */}
      <div className="container mx-auto px-4 py-16 bg-emerald-50 dark:bg-emerald-900/30 rounded-3xl my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">Essential Apps for Your Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendedApps.map((category, index) => (
            <div
              key={category.category}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition-all hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-emerald-600 dark:text-emerald-400">{category.category}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{category.description}</p>
              <div className="space-y-4">
                {category.apps.map((app) => (
                  <Link
                    key={app.name}
                    href="/apps"
                    className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <Image
                          src={app.image}
                          alt={app.name}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">{app.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{app.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">Ready to Transform Your Ramadan?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-up delay-400">
            Join thousands of Muslims worldwide in this transformative challenge. Make this Ramadan your most focused and spiritually enriching yet.
          </p>
          <button
            onClick={() => setIsSignedUp(true)}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 animate-fade-up delay-800"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
} 