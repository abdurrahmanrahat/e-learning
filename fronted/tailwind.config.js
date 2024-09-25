/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#49BBBD",
        secondary: "#252641",
        myGray: "#696984"
      },
      boxShadow: {
        myCustomShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      },
      
    },
    
  },
  plugins: [],
}

