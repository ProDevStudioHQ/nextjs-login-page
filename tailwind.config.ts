import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#040907",
        "midnight-blue": "#061410",
        "deep-purple": "#0A1C16",
        "neon-primary": "#00FF88",
        "neon-secondary": "#00F0FF",
        "soft-accent": "#88FFCC",
      },
    },
  },
  plugins: [],
};

export default config;
