import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E88E5",
          "blue-light": "#42A5F5",
          dark: "#111111",
          gray: "#8C8C8C",
          "gray-light": "#D9D9D9",
        },
        surface: {
          dark: "#171A20",
          elevated: "#21252D",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.15)",
        deep: "0 20px 60px rgba(0, 0, 0, 0.35)",
        glow: "0 0 30px rgba(30, 136, 229, 0.4)",
        "glow-lg": "0 0 50px rgba(30, 136, 229, 0.55)",
      },
      borderRadius: {
        "corporate-sm": "12px",
        "corporate-md": "20px",
        "corporate-lg": "28px",
        "corporate-xl": "32px",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "orbit-slow": "orbit 60s linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
