/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgwhite: '#F0F1F5',
        primary: '#0A2D67',
        bgSecondary: '#E6ECF4'
      },
      fontFamily: {
        plush: ['"Plush-Trial"', "serif"],
        satoshi: ['"Satoshi"', "sans-serif"]
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }  
    },
  },
  plugins: [],
}