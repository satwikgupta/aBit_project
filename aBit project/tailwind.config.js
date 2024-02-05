/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gloria: ['Gloria Hallelujah','cursive', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        
      },
      width:{
        '128' : '571px'
      }
    },
  },
  plugins: [],
}