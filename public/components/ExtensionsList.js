// ExtensionsList.js

import ExtensionCard from "./ExtensionCard";

const extensionsData = [
  {
    icon: "/images/ublock.png",
    name: "uBlock Origin",
    description:
      "Block ads on your computer on all websites (including YouTube).",
    benefits: (
      <p>
        Ads can contain very distracting and at times Haram content. Especially
        around children, it is extremely important to have these ads blocked.
        uBlock will <strong>block all ads (images and videos)</strong>.
      </p>
    ),
    link: "https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en",
    category: "productivity",
  },
  {
    icon: "/images/tahir.png",
    name: "Tahir",
    description: "Avoid haram images & videos on the Internet. (Manual Blur)",
    benefits: (
      <p>
        Tahir{" "}
        <strong>
          allows you to blur images by default on any website you browse
        </strong>
        , with the option to uncover them if need be. It is very helpful in
        browsing sites that may contain immodest images.
      </p>
    ),
    link: "https://chromewebstore.google.com/detail/tahir/ihmoammkfbdpokfiiifajdkfglmfejca?hl=en",
    category: "productivity",
  },
  {
    icon: "/images/haramblur.png",
    name: "Haram Blur",
    description: "Avoid haram images & videos on the Internet. (Auto Blur)",
    benefits: (
      <p>
        Haram Blur automatically detects "Haram" content in images and videos in real-time and blurs them to keep your browsing experience as "Halal" as possible. 
      </p>
    ),
    link: "https://chromewebstore.google.com/detail/haramblur-blur-haram-nsfw/pbcoegikffnadpahojjhgdladmmddeji",
    category: "productivity",
  },
  {
    icon: "/images/undistracted.png",
    name: "UnDistracted",
    description:
      "Remove Youtube Shorts, Trending, Recommendations, and blur thumbails. Also features for Facebook, Twitter, Reddit, and other sites.",
    benefits: (
      <div>
        <p>
          This extension allows you to limit widely used sites like Youtube to
          only those features that you find utility in.
        </p>
        <p>
          For example, you can{" "}
          <strong>
            block elements like the home feed on Twitter, LinkedIn, Reddit, and
            Facebook
          </strong>{" "}
          to avoid getting distracted and to help you only use those sites for
          what you need.
        </p>
      </div>
    ),
    link: "https://chromewebstore.google.com/detail/undistracted-hide-faceboo/pjjgklgkfeoeiebjogplpnibpfnffkng?hl=en",
    category: "productivity",
  },
  {
    icon: "/images/qurantab.png",
    name: "Quran Tab",
    description: "A better new tab page for Muslims.",
    benefits: (
      <div>
        <p>
          Quran Tab is an Islamic new tab page that will keep you inspired by a
          verse from the Quran every time you open a new tab. It also features
          prayer timings amongst other nice features.
        </p>
      </div>
    ),
    link: "https://chromewebstore.google.com/detail/quran-tab/afaihcdgkjebgabomemccdneglknjkdd",
    category: "spirituality",
  },
  {
    icon: "/images/wudooh.png",
    name: "Wudooh",
    description: "Read Arabic text easier online.",
    benefits: (
      <div>
        <p>
          Wudooh allows you to customize the way Arabic script text is displayed
          on your browser by allowing you to change the font, font size, and
          line height of all Arabic text by default.
        </p>
      </div>
    ),
    link: "https://chromewebstore.google.com/detail/wudooh-%D9%88%D8%B6%D9%88%D8%AD/nigfaloeeeakmmgndbdcijjegolpjfhn?hl=en",
    category: "spirituality",
  },
];

export default function ExtensionsList() {
  const productivityExtensions = extensionsData.filter(
    (extension) => extension.category === "productivity"
  );
  const spiritualityExtensions = extensionsData.filter(
    (extension) => extension.category === "spirituality"
  );

  return (
    <div className="container mx-auto px-4 sm:px-6">
      {/* Productivity Extensions Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="bg-[#162031] p-5 rounded-full shadow-md mb-4 inline-block">
            <i className="fas fa-laptop text-3xl text-[#61EBCE]"></i>
          </div>
          <h2 className="text-4xl font-extrabold">
            <span className="text-[#61EBCE]">Protective</span> Tools
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Extensions to facilitate a safer browsing experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productivityExtensions.map((extension, index) => (
            <div key={index} className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <ExtensionCard {...extension} />
            </div>
          ))}
        </div>
      </section>

      {/* Spirituality Extensions Section */}
      <section>
        <div className="text-center mb-12">
          <div className="bg-[#162031] p-5 rounded-full shadow-md mb-4 inline-block">
            <i className="fas fa-heart text-3xl text-[#61EBCE]"></i>
          </div>
          <h2 className="text-4xl font-extrabold">
            <span className="text-[#61EBCE]">Spiritual</span> Growth
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Extensions to strengthen your spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spiritualityExtensions.map((extension, index) => (
            <div key={index} className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <ExtensionCard {...extension} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
