const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Display", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins"],
      },
      colors: {
        body: "#051C2A",
        secondary: "#1DA1F2",
        tertiary: "#F38016",
      },
      backgroundImage: {
        hero: "url('/hero.png')",
        heroText:
          "linear-gradient(20deg,rgb(243.31, 128.39, 22.3) 0%,rgb(174.25, 206.55, 255) 59.38%,rgb(185.75, 137.19, 247.56) 100%)",
      },
      animation: {
        textClip: "textclip 10s ease infinite alternate",
      },
      keyframes: {
        textclip: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
      },
    },
  },
  plugins: [],
};
