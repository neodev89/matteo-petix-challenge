/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- ESSENZIALE per attivare il toggle via classe .dark
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}