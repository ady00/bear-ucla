import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: "#0262FB", ink: "#0147b8" },
        ink: "#0A0A0A",
        paper: { DEFAULT: "#FAFAF8", 2: "#EFEEEA" },
        rule: "rgba(10,10,10,.12)",
      },
      fontFamily: {
        display: ['"Konkhmer Sleokchher"', "sans-serif"],
        sans: ['"Montserrat"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      keyframes: {
        pulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(2,98,251,.55)" },
          "70%": { boxShadow: "0 0 0 12px rgba(2,98,251,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(2,98,251,0)" },
        },
        tick: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        spin: { to: { transform: "rotate(360deg)" } },
        rise: { to: { transform: "translateY(0)" } },
      },
      animation: {
        "bear-pulse": "pulse 1.8s ease-out infinite",
        tick: "tick 36s linear infinite",
        "tick-strip": "tick 42s linear infinite",
        "spin-slow": "spin 26s linear infinite",
        "spin-mid": "spin 14s linear infinite",
        rise: "rise .9s cubic-bezier(.2,.8,.2,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
