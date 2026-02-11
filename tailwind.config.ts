import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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

        // Tokens semánticos (te ayudan a un look consistente)
        surface: {
          0: "rgba(255,255,255,0.92)",
          1: "rgba(255,255,255,0.78)",
          2: "rgba(255,255,255,0.65)",
        },
        ink: {
          1: "#0B1220",
          2: "#334155",
          3: "#64748B",
        },
      },

      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
        glow: "0 18px 60px rgba(33, 78, 230, 0.18)",
        glowAccent: "0 18px 60px rgba(255, 46, 109, 0.18)",
        header: "0 18px 55px rgba(2, 6, 23, 0.08)",
        ring: "0 0 0 6px rgba(59,108,255,0.15)",
      },

      backgroundImage: {
        // degradado “firma” del logo
        "brand-accent":
          "linear-gradient(90deg, rgba(33,78,230,1) 0%, rgba(255,46,109,1) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
