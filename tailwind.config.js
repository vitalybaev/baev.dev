const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Noto Sans",
        "Ubuntu",
        "Cantarell",
        "Helvetica Neue",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    colors: {
      gray: colors.coolGray,
      pink: colors.pink,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
