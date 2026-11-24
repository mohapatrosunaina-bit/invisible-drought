import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        drought: {
          bg: "#080C0A",
          secondary: "#0E1512",
          surface: "#141E19",
          surfaceHover: "#1D2B24",
          surfaceElevated: "#23342C",
          border: "#24332A",
          borderLight: "#3B5244",
          borderGlow: "#4ADE80",
          text: "#FFFFFF",
          textBody: "#F5F6F0",
          textMuted: "#CBD5CE",
          textDim: "#8FA094",
          vegetation: "#22C55E",
          vegetationLight: "#4ADE80",
          vegetationBright: "#86EFAC",
          water: "#0EA5E9",
          waterLight: "#38BDF8",
          waterBright: "#7DD3FC",
          soil: "#F59E0B",
          soilLight: "#FBBF24",
          soilBright: "#FDE68A",
          alert: "#EF4444",
          alertLight: "#F87171",
          alertBright: "#FCA5A5",
          highlight: "#FDE047",
        },
      },
      fontFamily: {
        serif: ["Newsreader", "Charter", "Georgia", "Cambria", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        "editorial": "0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "subtle": "0 4px 20px -2px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        "glow-green": "0 0 35px rgba(74, 222, 128, 0.25)",
        "glow-blue": "0 0 35px rgba(56, 189, 248, 0.25)",
        "glow-amber": "0 0 35px rgba(251, 191, 36, 0.25)",
        "glow-alert": "0 0 35px rgba(248, 113, 113, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
