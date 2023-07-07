/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
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
      blue_light: "#CBE6F7",
    },
    fontFamily: {
      sans: ["Montserrat"],
    },
    extend: {
      keyframes: {
        "rotate-2s": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(-15deg)" },
          "75%": { transform: "rotate(30deg)" },
          "100%": { transform: "rotate(-30deg)" },
        },
      },
      animation: {
        "spin-2s": "rotate-2s 7s alternate-reverse",
      },
    },
  },
  plugins: [],
});
