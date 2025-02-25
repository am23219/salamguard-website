// components/AppsList.js
import AppCard from "./AppCard";

const appsData = [
  {
    icon: "../images/alquran.png",
    name: "Al Quran (Tafsir & by Word)",
    description: "A wonderful app for reading and understanding Quran.",
    benefits: (
      <p>
        This app lets you read and listen to the Quran ad-free. It also provides
        word meanings and allows easy access to different tafsirs for each Ayah,
        making it ideal for students of knowledge.
      </p>
    ),
    category: "spirituality",
    iosLink:
      "https://apps.apple.com/us/app/al-quran-tafsir-by-word/id1437038111",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.greentech.quran&hl=en_US&pli=1",
  },
  {
    icon: "../images/dhikr.png",
    name: "Dhikr & Dua",
    description: "A collection of Duas from the Quran and Sunnah.",
    benefits: (
      <p>
        This app very conveniently groups Duas from the Quran and Sunnah into
        convenient categories, making it easy to look up the right Duas for
        different occasions (such as in the morning, at the time of travelling,
        at the time of wearing new clothes, etc.). It also provides the
        transliteration, translation, and source of the Duas as well.
      </p>
    ),
    category: "spirituality",
    iosLink: "https://apps.apple.com/gb/app/dhikr-dua/id1561598617",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.alifewithallah.app&hl=en_US",
  },
  {
    icon: "../images/feelingblessed.png",
    name: "Feeling Blessed",
    description:
      "Donate to your favorite Masajid and Organizations through one app.",
    benefits: (
      <p>
        Feeling Blessed has a collection of hundreds of Masajid and
        Organizations to make it very easy to donate to any organization through
        the same platform. You can also manage and track all your charitable
        giving in one place.
      </p>
    ),
    category: "spirituality",
    iosLink:
      "https://apps.apple.com/us/app/feeling-blessed-donation-app/id1061970335",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.nextgeni.feelingblessed&hl=en_US",
  },
  {
    icon: "../images/pillars.png",
    name: "Pillars: Prayer Times & Qibla",
    description: "An ad-free and and privacy focused prayer times app.",
    benefits: (
      <p>
        Pillars offers a great user experience in viewing prayer timings and
        finding the Qiblah. Is also has widgets you can keep on your lock-screen
        and home-screen making it easy to see prayer timings without opening the
        app. They also offer a prayer tracker and fasting tracker to keep
        yourself accountable.
      </p>
    ),
    category: "spirituality",
    iosLink:
      "https://apps.apple.com/us/app/pillars-prayer-times-qibla/id1559086853",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.pillars.pillars&hl=en_US",
  },
  {
    icon: "../images/tarteel.png",
    name: "Tarteel - Memorize Quran",
    description: "An AI that helps in memorizing the Quran.",
    benefits: (
      <p>
        Tarteel is an AI that will listen to your recitation and correct any
        words that you miss or mispronounce. It is great for those trying to
        memorize the Quran and need someone to listen to them. Note that this
        app does not correct Tajweed and also requires a paid subscription for
        some of its features.
      </p>
    ),
    category: "spirituality",
    iosLink:
      "https://apps.apple.com/us/app/tarteel-%D8%AA%D8%B1%D8%AA%D9%8A%D9%84-memorize-quran/id1391009396",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.mmmoussa.iqra&hl=en_US",
  },
  {
    icon: "../images/qaza.png",
    name: "Qaza",
    description:
      "An app to help keep track of Qaza Salah for those who have to make them up.",
    benefits: (
      <p>
        For those who need to make up any Salawaat, Qaza offers an easy way to
        log your Salawaat and also provides Fiqhi instructions on how to make up
        your Salah.
      </p>
    ),
    category: "spirituality",
    iosLink: "https://apps.apple.com/us/app/qaza/id1500158900",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.thesunniway.qaza&hl=en_US",
  },
  {
    icon: "../images/quranic.png",
    name: "Quranic",
    description: "Learn Quranic Arabic in an easy and light way.",
    benefits: (
      <p>
        Learn Quranic Arabic in a fun way and build your vocaulary and
        understanding over time.
      </p>
    ),
    category: "spirituality",
    iosLink:
      "https://apps.apple.com/us/app/quranic-quran-arabic-learning/id1381145375",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.pnw.quranic.quranicandroid&hl=en_US",
  },
  {
    icon: "../images/quranly.png",
    name: "Quranly",
    description:
      "Quranly is a habit-building app that makes the Quran a part of your daily life.",
    benefits: <p>Track your Quran recitation day-by-day.</p>,
    category: "spirituality",
    iosLink: "https://apps.apple.com/us/app/quranly/id1559233786",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.quranly.app&hl=en_US&pli=1",
  },
  {
    icon: "../images/brave.png",
    name: "Brave Browser",
    description: "Recommended for iPhones only: A browser with a built in ad blocker.",
    benefits: (
      <p>
        Brave is designed to block trackers and ads on all sites and videos. It
        is developed by the former CEO of the Mozilla Corporation (who made
        Firefox), so it is quite reputable.
      </p>
    ),
    category: "productivity",
    iosLink:
      "https://apps.apple.com/us/app/brave-private-web-browser-vpn/id1052879175",
  },
  {
    icon: "../images/tahir.png",
    name: "Tahir Browser",
    description: "On Android only: A browser that blocks haram sites, ads, and has an AI blur.",
    benefits: (
      <p>
       Browse the web with a browser designed upon Islamic principles.
      </p>
    ),
    category: "productivity",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.ihyatech.tahir",
  },
  {
    icon: "../images/halaltrip.png",
    name: "Halal Trip",
    description: "Know when to pray Salah on flights.",
    benefits: (
      <p>
        Halal Trip will calculate your prayer timings and directions based on
        your flight information, making it much easier to pray on time when
        traveling.
      </p>
    ),
    category: "spirituality",
    iosLink:
      "https://apps.apple.com/us/app/halal-trip-food-travel-prayer/id680194589",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.halaltrip.app",
  },
];


export default function AppsList() {
  const productivityApps = appsData.filter(app => app.category === "productivity");
  const spiritualityApps = appsData.filter(app => app.category === "spirituality");

  return (
    <div className="container mx-auto px-4 sm:px-6">
      {/* Productivity Apps Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="bg-[#162031] p-5 rounded-full shadow-md mb-4 inline-block">
            <i className="fas fa-laptop text-3xl text-[#61EBCE]"></i>
          </div>
          <h2 className="text-4xl font-extrabold">
            <span className="text-[#61EBCE]">Protective</span> Tools
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Apps to facilitate a safer browsing experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productivityApps.map((app, index) => (
            <div key={index} className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <AppCard {...app} />
            </div>
          ))}
        </div>
      </section>

      {/* Spirituality Apps Section */}
      <section>
        <div className="text-center mb-12">
          <div className="bg-[#162031] p-5 rounded-full shadow-md mb-4 inline-block">
            <i className="fas fa-heart text-3xl text-[#61EBCE]"></i>
          </div>
          <h2 className="text-4xl font-extrabold">
            <span className="text-[#61EBCE]">Spiritual</span> Growth
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Apps to strengthen your spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spiritualityApps.map((app, index) => (
            <div key={index} className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <AppCard {...app} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
