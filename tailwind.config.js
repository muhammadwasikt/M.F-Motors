/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor:'#FF6500',
        primaryColor:'#1E3E62',
        secondaryColor:'#0B192C',
        textColor:'#000000',
        buttonColor:'yellow',
        hoverColor:'blue'
      }
    },
  },
  plugins: [ ],
}

