/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor:'#0D92F4',
        primaryColor:'#77CDFF',
        secondaryColor:'#F95454',
        textColor:'#000000',
        buttonColor:'#C62E2E',
        hoverColor:'blue',
        inputColor:'#ffff',
        errorColor:'red'
      }
    },
  },
  plugins: [],
}

