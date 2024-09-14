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
      }
    },
  },
  plugins: [],
}

