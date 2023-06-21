/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      blue: "#022994",
      "gray-light": "#FFFDFD",
      yellow: "#F8C20D",
      lightblue: "#33A8CB",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
