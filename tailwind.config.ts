import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#F3F7FF",
          100: "#EAF2FF",
          200: "#CFE0FF",
          300: "#A7C4FF",
          400: "#6C99FF",
          500: "#3B6CFF",
          600: "#214EE6",
          700: "#163D7A",
          800: "#0B2A5B",
          900: "#071D3F",
        },
        accent: {
          50: "#FFF1F5",
          100: "#FFE4EC",
          200: "#FFC0D2",
          300: "#FF93B2",
          400: "#FF5F8E",
          500: "#FF2E6D",
          600: "#E61E5D",
          700: "#B91349",
          800: "#8A0D37",
          900: "#5C0825",
        },
        ink: {
          1: "#0B1220",
          2: "#334155",
          3: "#64748B",
        },
      },
      boxShadow: {
        soft: "0 4px 24px rgba(2, 6, 23, 0.06)",
        card: "0 1px 3px rgba(2,6,23,0.06), 0 8px 24px rgba(2,6,23,0.06)",
        hero: "0 30px 80px rgba(2, 6, 23, 0.18)",
      },
      animation: {
        "fade-up":  "fadeUp  0.65s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":  "fadeIn  0.55s ease-out both",
        "scale-in": "scaleIn 0.6s  cubic-bezier(0.16,1,0.3,1) both",
        "float":    "float   4s    ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.96)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
