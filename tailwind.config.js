/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '400px',  // Point de rupture à 639px
      },
      height: {
        '600': '600px',
      },
      animation: {
        'fade-in-delay': 'fadeInDelay 0.5s ease-in-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'shine': 'shine 0.3s ease-in-out', 
      },
      keyframes: {
        fadeInDelay: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
