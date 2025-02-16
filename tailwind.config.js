// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

// eslint-disable-next-line no-undef
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#778BEB",
        natural: "#f8fafc",
        base: "#EEEEEE", // Fixed
        danger: "#ef4444",
        paragraph: "text-gray-800",
      },
      fontFamily: {
        primary: "'Nunito', serif",
        title: "'Playwrite DE Grund', serif",
      },
    },
  },
  darkMode: 'media', 

  plugins: [],
});
