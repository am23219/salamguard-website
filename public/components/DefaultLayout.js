"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";

export default function DefaultLayout({ title, children }) {
  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-[#3A4A60] text-white shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold tracking-wide">{title || "Page"}</h1>
          <ul className="hidden sm:flex space-x-8 text-sm">
            {["Browser Extensions", "Phone Apps", "Tech Philosophy"].map(
              (text, idx) => (
                <li key={idx}>
                  <Link
                    href={`#${text.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-gray-300 transition duration-300"
                  >
                    {text}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="sm:hidden">
            <button className="text-white">☰</button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1C1F26] text-gray-400 py-6">
        <div className="container mx-auto text-center px-6">
          <p className="text-sm">
            Don’t forget the Ummah and Palestine in your Duas
          </p>
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
