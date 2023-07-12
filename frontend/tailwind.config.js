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
      blue_light: "#CBE6F7",
      brown_light: "#E6B99C",
      red: {
        200: "#fecaca",
        300: "#fca5a5",
      },
      yellowbutton: {
        200: "#fef08a",
      },
      gray: {
        200: "#e2e8f0",
        500: "#64748b",
      },
    },
    fontFamily: {
      sans: ["Montserrat"],
    },
    variants: {
      resp: ["responsive"],
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
};
