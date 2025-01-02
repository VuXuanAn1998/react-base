import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssMotion from "tailwindcss-motion";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],

  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "900px",
        lg: "1200px",
        xl: "1600px",
        "2xl": "2000px",
        "max-h-800": { "max-height": "800px" },
      },
      fontFamily: { sans: [...defaultTheme.fontFamily.sans] },
      keyframes: {
        collapse: { from: { height: "0px" }, to: { height: "var(--height)" } },
      },
      borderRadius: {
        DEFAULT: "6px",
      },
      animation: {
        collapse: "collapse",
      },
      colors: { primary: "#323232", secondary: "#4C7753" },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(135deg, rgba(76, 119, 83, 0.15) 0%, rgba(76, 119, 83, 0.01) 100%)",
      },
      fontSize: {
        "12-14-500": [
          `12px !important`,
          { lineHeight: `14px !important`, fontWeight: 500 },
        ],
        "14-32-500": [
          `14px !important`,
          { lineHeight: `32px !important`, fontWeight: 500 },
        ],
        "14-20-400": [
          `14px !important`,
          { lineHeight: `20px !important`, fontWeight: 400 },
        ],
        "16-14-500": [
          `16px !important`,
          { lineHeight: `14px !important`, fontWeight: 500 },
        ],
        "16-24-400": [
          `16px !important`,
          { lineHeight: `24px !important`, fontWeight: 400 },
        ],
        "16-28-400": [
          `16px !important`,
          { lineHeight: `28px !important`, fontWeight: 400 },
        ],
        "17-20-500": [
          `17px !important`,
          { lineHeight: `20px !important`, fontWeight: 500 },
        ],
        "20-20-600": [
          `20px !important`,
          { lineHeight: `20px !important`, fontWeight: 600 },
        ],
        "34-32-400": [
          `34px !important`,
          { lineHeight: `32px !important`, fontWeight: 400 },
        ],
      },
      boxShadow: {
        button:
          "0px 0px 10px 0px var(--color), 0px 1px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -3px 0px 0px rgba(0, 0, 0, 0.15) inset, 0px 0px 12px 0px var(--shadow-color) inset",
      },
    },
  },

  plugins: [tailwindcssAnimate, tailwindcssMotion],
};

export default config;
