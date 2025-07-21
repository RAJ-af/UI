/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind.config")

module.exports = {
  ...defaultConfig,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      fontFamily: {
        notebook: ["Comic Sans MS", "cursive"],
        mono: ["Courier New", "monospace"],
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
        notebook: {
          bg: "#f8f9fa",
          paper: "#ffffff",
          line: "#e5e5e5",
          margin: "#ff6b6b",
          text: "#2d3436",
          blue: "#74b9ff",
          green: "#00b894",
          yellow: "#fdcb6e",
          red: "#e17055",
        },
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        draw: "draw 2s ease-in-out infinite",
        splash: "splash 1.5s ease-out",
        "tap-bubble": "tapBubble 1s ease-out forwards",
        "sketch-draw": "sketchDraw 0.8s ease-out forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        draw: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        splash: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        tapBubble: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        sketchDraw: {
          "0%": { strokeDasharray: "0 100" },
          "100%": { strokeDasharray: "100 0" },
        },
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}
