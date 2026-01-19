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
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          'pulse-glow': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.5 },
          },
        },
      },
    },
    plugins: [],
  }