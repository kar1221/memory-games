/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        determination: "'Determination Sans', 'sans-serif'",
        titleBack: "'Monster Friends 2 Back', 'sans-serif'",
        titleCenter: "'Monster Friends 2 Center', 'sans-serif'",
        titleFore: "'Monster Friends 2 Fore', 'sans-serif'",
      },
      colors: {
        utYellow: "#FFFF00",
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
