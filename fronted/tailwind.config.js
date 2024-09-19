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
      }
    },
  },
  plugins: [],
}

