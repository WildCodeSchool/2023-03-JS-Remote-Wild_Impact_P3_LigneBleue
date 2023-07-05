/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#022994",
      gray_light: "F9F4EC",
      yellow: "#F8C20D",
      light_blue: "#DADDEB",
      champagne: "#F9F4EC",
      white: "#FFFFFF",
      purple: "#E384E6",
    },
    fontFamily: {
      sans: ["Montserrat"],
    },
    extend: {},
  },
  plugins: [],
};