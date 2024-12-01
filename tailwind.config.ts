import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssMotion from "tailwindcss-motion";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
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
      boxShadow: {
        button:
          "0px 0px 10px 0px var(--color), 0px 1px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -3px 0px 0px rgba(0, 0, 0, 0.15) inset, 0px 0px 12px 0px var(--shadow-color) inset",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssMotion],
};

export default config;
