/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        NavBarColor: '#FFCB00',
        TextBarColor: '#D40511',
        
      }
      
    },
  },
  plugins: [],
}