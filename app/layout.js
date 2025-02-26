import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

// Ultra-clean system-first font stack with Geist Sans fallback
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

// Monospace for technical content
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "SalamGuard",
  description:
    "Transform your devices from sources of distraction into tools for growth. We'll show you exactly how.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>{metadata.title}</title>
        <meta
          property="og:title"
          content="Your Complete Guide to Digital Purity & Productivity"
        />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://salamguard.com" />
        <meta
          property="og:image"
          content="https://salamguard.com/images/og.png"
        />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans text-base tracking-normal antialiased bg-[#111827]`}
        cz-shortcut-listen="true"
      >
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-45MXD1L5XW"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-45MXD1L5XW', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
