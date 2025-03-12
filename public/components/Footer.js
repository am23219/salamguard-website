// components/Footer.js
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Resources",
      links: [
        { name: "Browser Extensions", href: "/extensions" },
        { name: "Phone Apps", href: "/apps" },
        { name: "Dumb Phone Guide", href: "/dumb-phone" },
        { name: "Ramadan Challenge", href: "/ramadan-challenge" }
      ]
    },
    {
      title: "Platforms",
      links: [
        { name: "iPhone", href: "/iphone" },
        { name: "Android", href: "/android" },
        { name: "Windows", href: "/windows" },
        { name: "Mac", href: "/mac" }
      ]
    },
    {
      title: "Spiritual",
      links: [
        { name: "Spiritual Remedies", href: "/spiritual-remedies" },
        { name: "Powerful Talks", href: "/reminders" },
        { name: "Community Leaders", href: "/community-leaders" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.5c-2.968 0-5.71 1.08-7.811 2.871m13.237 1.675A11.955 11.955 0 0112 21.5c-5.523 0-10-3.582-10-8 0-1.6.786-3.068 1.618-3.984" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Salam<span className="text-teal-500">Guard</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Helping Muslims navigate the digital world with purpose, focus, and spiritual well-being.
            </p>
          </div>
          
          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm hover:text-teal-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-sm">
            Don't forget the Ummah and Palestine in your Duas
          </p>
          <p className="text-xs mt-4">
            &copy; {currentYear} SalamGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}