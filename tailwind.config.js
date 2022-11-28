/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sansPro: ["Source Sans Pro", "sans-serif"],
    },
    screens: {
      mobile: "320px",
      lg: "1024px",
    },
  },

  plugins: [],
};
