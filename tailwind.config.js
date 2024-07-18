/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        determination: "'Determination Sans', 'sans-serif'",
        titleBack: "'MF2Back', 'sans-serif'",
        titleCenter: "'MF2Center', 'sans-serif'",
        titleFore: "'MF2Fore', 'sans-serif'",
      },
      colors: {
        utYellow: "#FFFF00",
        utRed: "#FF0000",
      },
      keyframes: {
        flipKey: {
          "0%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(0)" },
        },
      },
      animation: {
        flip: "flipKey 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
