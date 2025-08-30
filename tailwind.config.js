/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line tells Tailwind to scan all JS, TS, JSX, and TSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


