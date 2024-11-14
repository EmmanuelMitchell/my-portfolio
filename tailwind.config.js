/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Setting custom fonts for the portfolio
        sans: ["Poppins", "Arial", "sans-serif"],
        body: ["Roboto", "Arial", "sans-serif"],
      },
    },
    plugins: [],
  },
};
