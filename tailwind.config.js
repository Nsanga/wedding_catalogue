/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          'serif': ['Playfair Display', 'Georgia', 'serif'],
          'sans': ['Inter', 'system-ui', 'sans-serif'],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 3s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite',
          'slide-up': 'slide-up 0.5s ease-out',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0) rotate(0)' },
            '50%': { transform: 'translateY(-20px) rotate(5deg)' },
          },
          glow: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.6 },
          },
          'slide-up': {
            '0%': { transform: 'translateY(20px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
        },
        colors: {
          'wedding-rose': '#E2725B',
          'wedding-bordeaux': '#800000',
          'wedding-light': '#FFF9F7',
          'wedding-dark': '#1a0a0a',
        },
      },
    },
    plugins: [],
  }