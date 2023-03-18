/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#F2F3F7",
        "primary-red": "#D00D00",
        "black-main": "rgba(45, 48, 56, 1)",
      },
    },
  },
  plugins: [],
};
