/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'var(--font-geist)',
          'system-ui',
          'sans-serif'
        ],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e2e8f0',
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
            a: {
              color: '#61EBCE',
              '&:hover': {
                color: '#51A4FA',
              },
            },
            code: {
              color: '#e2e8f0',
              backgroundColor: '#1E293B',
              padding: '0.25rem',
              borderRadius: '0.25rem',
            },
            blockquote: {
              color: '#94a3b8',
              borderLeftColor: '#4b5563',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
