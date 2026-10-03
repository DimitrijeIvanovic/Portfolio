/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        surface: "#f4f7f6",
        line: "#e1e6e3",
        ink: "#152420",
        muted: "#5c6b66",
        accent: {
          DEFAULT: "#0e7a6e",
          dark: "#0a5f56",
          soft: "#eaf5f3",
        },
      },
      fontFamily: {
        sans: ['"Source Sans 3"', "-apple-system", '"Segoe UI"', "sans-serif"],
        display: ["Manrope", "-apple-system", '"Segoe UI"', "sans-serif"],
      },
      maxWidth: {
        wrap: "880px",
      },
    },
  },
  plugins: [],
};
