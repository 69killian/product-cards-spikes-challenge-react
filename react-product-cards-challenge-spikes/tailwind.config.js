/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'custom-bg': "url('/public/background.png')", // L'URL de ton image
    },
  },
  plugins: [],
}