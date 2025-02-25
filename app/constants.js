const optimizeCards = [
  {
    title: "Turn Your Phone Into a Dumb Phone",
    description: "The ultimate solution for those looking to break free from smartphone addiction.",
    href: "/dumb-phone",
    icon: "fa-solid fa-phone",
    category: "phone"
  },
  {
    title: "For Phones: Apps to Download",
    description: "Essential apps to strengthen your digital protection",
    href: "/apps",
    icon: "fa-solid fa-mobile-screen",
    category: "phone"
  },
  {
    title: "For Computers: Apps & Extensions",
    description: "Powerful tools to safeguard your browsing experience",
    href: "/extensions",
    icon: "fa-solid fa-laptop",
    category: "computer"
  }
];

const deviceCards = [
  { 
    href: "/iphone", 
    src: "/images/iphone.png", 
    icon: "fa-brands fa-apple",
    title: "iPhone",
    alt: "iPhone device icon",
    method: "Block through 'Screen Time' Settings"
  },
  { 
    href: "/android", 
    src: "/images/android.png", 
    icon: "fa-brands fa-android",
    title: "Android",
    alt: "Android device icon",
    method: "Block through 'Family Link' Settings"
  },
  { 
    href: "/mac", 
    src: "/images/mac.png", 
    icon: "fa-brands fa-apple",
    title: "Mac",
    alt: "Mac device icon",
    method: "Block Through our Mac App"
  },
  { 
    href: "/windows", 
    src: "/images/windows.png", 
    icon: "fa-brands fa-windows",
    title: "Windows",
    alt: "Windows device icon",
    method: "Block Through our Windows Script"
  },
];

const spiritualCards = [
  {
    title: "Spiritual Remedies",
    description: "Powerful duas and practices to maintain a pure heart",
    href: "/spiritual-remedies",
    icon: "fa-solid fa-heart-pulse",
    buttonText: "View remedies"
  },
  {
    title: "Powerful Talks & Reminders",
    description: "Inspiration and guidance to stay steadfast on your journey",
    href: "/reminders",
    icon: "fa-solid fa-microphone",
    buttonText: "View reminders"
  },
  {
    title: "For Community Leaders",
    description: "Essential reading to help guide your community",
    href: "/community-leaders",
    icon: "fas fa-mosque",
    buttonText: "View resources"
  }
];

export { optimizeCards, deviceCards, spiritualCards }; 