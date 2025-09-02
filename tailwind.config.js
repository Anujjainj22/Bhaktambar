/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line tells Tailwind to scan all JS, TS, JSX, and TSX files in the src directory
  ],
  theme: {
    extend: {
      textShadow: {
        'golden-glow': '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700',
      },
      colors: {
        'golden': '#FFD700',
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-golden-glow': {
          textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}




