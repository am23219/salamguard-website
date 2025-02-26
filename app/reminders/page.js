"use client";

import Header from "../../public/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCheckCircle,
  faQuran,
  faVideo,
  faHeart,
  faBarsProgress,
  faWineBottle
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const verses = [
  {
    arabic: "قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ ۚ ذَٰلِكَ أَزْكَىٰ لَهُمْ",
    translation: "Tell the believing men to lower their gaze and guard their private parts. That is purer for them.",
    reference: "Surah An-Nur, 24:30",
  },
  {
    arabic: "وَلَا تَقْرَبُوا الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ",
    translation: "And do not approach immoralities - what is apparent of them and what is concealed.",
    reference: "Surah Al-An'am, 6:151",
  },
  {
    arabic: "الَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ",
    translation: "And they who guard their private parts.",
    reference: "Surah Al-Mu'minun, 23:5",
  },
  {
    arabic: "وَٱصْبِرْ نَفْسَكَ مَعَ ٱلَّذِينَ يَدْعُونَ رَبَّهُم بِٱلْغَدَوٰةِ وَٱلْعَشِىِّ يُرِيدُونَ وَجْهَهُۥ",
    translation: "And keep yourself patient [by being] with those who call upon their Lord in the morning and the evening, seeking His countenance.",
    reference: "Surah Al-Kahf 18:28"
  },
  {
    arabic:"إِنَّ ٱلْمُسْلِمِينَ وَٱلْمُسْلِمَـٰتِ وَٱلْمُؤْمِنِينَ وَٱلْمُؤْمِنَـٰتِ وَٱلْقَـٰنِتِينَ وَٱلْقَـٰنِتَـٰتِ وَٱلصَّـٰدِقِينَ وَٱلصَّـٰدِقَـٰتِ وَٱلصَّـٰبِرِينَ وَٱلصَّـٰبِرَٰتِ وَٱلْخَـٰشِعِينَ وَٱلْخَـٰشِعَـٰتِ وَٱلْمُتَصَدِّقِينَ وَٱلْمُتَصَدِّقَـٰتِ وَٱلصَّـٰٓئِمِينَ وَٱلصَّـٰٓئِمَـٰتِ وَٱلْحَـٰفِظِينَ فُرُوجَهُمْ وَٱلْحَـٰفِظَـٰتِ وَٱلذَّٰكِرِينَ ٱللَّهَ كَثِيرًۭا وَٱلذَّٰكِرَٰتِ أَعَدَّ ٱللَّهُ لَهُم مَّغْفِرَةًۭ وَأَجْرًا عَظِيمًۭا",
    translation: "Verily, the Muslim men and women, the believing men and women, the obedient men and women, the truthful men and women, the patient men and women, the humble men and women, the charitable men and women, the fasting men and women, the chaste men and women, the men and women who remember Allah often, Allah has prepared for them forgiveness and a great reward.",
    reference: "Surah Al-Ahzab 33:35"
  }
];

const hadiths = [
  {
    text: "O young men, if you are able to support a wife, get married. Verily, it lowers the gaze and guards chastity. Whoever is not able to do so, he must fast as it will restrain his passions.",
    reference: "al-Bukhari 1806",
  },
  {
    text: "The eyes commit zina, and their zina is looking at forbidden things. The hands commit zina, and their zina is touching and grabbing. The feet commit zina, and their zina is walking to forbidden things. The heart wishes and desires, and the private parts confirm or deny that.",
    reference: "Muslim",
  },
  {
    text: "Seven are the people whom Allah will shade under His shade on the day when there will be no shade except His shade... [among them is] a person who is invited by a charming lady of noble birth, but he rejects her offer by saying: 'I fear Allah.'",
    reference: "al-Bukhari 6806",
  },
  {
    text: "Guarantee for me six deeds and I will guarantee for you Paradise: Be truthful when you speak, keep your promises when you make them, fulfill the trust when you are trusted, guard your chastity, lower your gaze, and restrain your hands from harming others.",
    reference: "Musnad Aḥmad 22251"
  },
  {
    text: "O young men of Quraysh, do not commit adultery and guard your chastity. No doubt, whoever guards his chastity will certainly enter Paradise.",
    reference: "al-Mu'jam al-Awsaṭ 6750"
  },
  {
    text: "Verily, modesty, abstinence, reticence of the tongue but not the heart, and deeds are all part of faith. They bring gain in the Hereafter and loss in the world: what is gained in the Hereafter is much greater than what is missed in the world.",
    reference: "al-Sunan al-Kubrá 20808"
  },
  {
    text: "Whoever guards what is between his jaws and his thighs, he will enter Paradise.",
    reference: "al-Mu'jam al-Kabīr 914"
  },
  {
    text: "The best of your women are loving, fertile, suitable, and comforting, if they fear Allah. The worst of your women unveil their beauty, take pride in their appearance, and they are hypocrites. None of them will enter Paradise except as rarely as you see a red-beaked crow.",
    reference: "al-Sunan al-Kubrá lil-Bayhaqī 13478"
  },
  {
    text: "I have not left a trial after me more harmful to men than women.",
    reference: "al-Bukhārī 5096, Muslim 2740"
  },
  {text: "Modesty does not bring anything but goodness.",
    reference: "al-Bukhari 6117"
  },
  {
    text: "No one has a greater sense of honor than Allah, so He has made obscenities unlawful in public and in private. And no one loves to be praised more than Allah.",
    reference: "al-Bukhārī 4637"
  },
{
    text: "Verily, modesty and faith come together. If one of the two is missing, so is the other.",
    reference: "al-Adab al-Mufrad lil-Bukhārī 1313"
},
{
    text: "The world is sweet and green. Verily, Allah will make you successors in it to see how you will behave. Beware of the world and beware of women. Verily, the first trial of the children of Israel was with women.",
    reference: "Muslim 2742"
},
];

const videos = [
  {
    title: "Social Media, Technology, and Addictions",
    embedUrl: "https://www.youtube.com/embed/80BtsjXkCI0"
  },
  {
title: "How to Control Your Desires & Lower Your Gaze | Life-Changing Wisdom by Shaykh Kamaluddin",
embedUrl: "https://youtube.com/embed/K53D-TroqHQ"
  },
  {
    title: "TikTok: Scrolling Your Modesty Away?",
    embedUrl: "https://www.youtube.com/embed/l2xY6U_szUg"
  },

];

export default function RemindersPage() {
  const [activeTab, setActiveTab] = useState('Verses');
  

  const reminders = [
    {
      title: "Losing Progress",
      text: "It takes 3 months to grow a beard, but it takes 5 minutes to shave it off. Don't lose the progress you've made for 5 minutes.",
      icon: faBarsProgress
    },
    {
        title: "Recovering Alcoholic",
        text: "A recovering alcoholic does not sleep with a bottle of alcohol on his nightstand. When you are in recovery, you don't keep the things that can harm you accessible.",
        icon: faWineBottle
      },
    // Add more reminders as needed
  ];
  const [view, setView] = useState("Talks");
  
    return (
      <div className="min-h-screen bg-[#1C1F26]">
        <Header type="reminders" title="Islamic Reminders" />
        
        <main className="container mx-auto px-4 py-12 pt-24 pb-20">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <span className="bg-[#61EBCE]/10 text-[#61EBCE] text-sm font-medium px-3 py-1.5 rounded-full">
              Strengthen Your Faith
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] to-[#51A4FA]">
                Islamic Reminders
              </span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Find strength and guidance through powerful talks, Quranic verses, 
              authentic hadiths, and beneficial reminders
            </p>
          </div>
  
          {/* View Toggle */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4">
            {["Talks", "Quran & Hadith", "Reminders"].map((type) => (
              <button
                key={type}
                onClick={() => setView(type)}
                className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto ${
                  view === type
                    ? "bg-[#61EBCE] text-gray-900"
                    : "bg-[#28324E] text-gray-200 hover:bg-[#3A4A60]"
                }`}
              >
                <FontAwesomeIcon 
                  icon={
                    type === "Talks" ? faVideo :
                    type === "Quran & Hadith" ? faQuran :
                    faHeart
                  }
                  className="text-sm"
                />
                {type}
              </button>
            ))}
          </div>
  
          {/* Content */}
          <div className="max-w-6xl mx-auto">
            {view === "Talks" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                  <div key={index} className="bg-[#28324E] rounded-xl overflow-hidden border border-gray-700/30 hover:border-[#61EBCE]/30 transition-all duration-300">
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={video.embedUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#61EBCE] mb-2">{video.title}</h3>
                      <p className="text-gray-400">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
  
            {view === "Quran & Hadith" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...verses, ...hadiths].map((item, index) => (
                  <div key={index} className="bg-[#28324E] rounded-xl p-6 border border-gray-700/30 hover:border-[#61EBCE]/30 transition-all duration-300">
                    {'arabic' in item ? (
                      <>
                        <p className="text-2xl font-arabic text-gray-200 leading-relaxed mb-4 text-right">{item.arabic}</p>
                        <p className="text-gray-300 mb-4">{item.translation}</p>
                        <p className="text-[#61EBCE] text-sm">{item.reference}</p>
                      </>
                    ) : (
                      <>
                        <p className="text-gray-300 mb-4">{item.text}</p>
                        <p className="text-[#61EBCE] text-sm mb-2">{item.reference}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
  
            {view === "Reminders" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reminders.map((reminder, index) => (
                  <div key={index} className="bg-[#28324E] rounded-xl p-6 border border-gray-700/30 hover:border-[#61EBCE]/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <FontAwesomeIcon icon={reminder.icon} className="text-[#61EBCE] text-xl" />
                      <h3 className="text-xl font-semibold text-[#61EBCE]">{reminder.title}</h3>
                    </div>
                    <p className="text-gray-300">{reminder.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    )}