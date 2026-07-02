import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grid: {
          void: "hsl(220 28% 3%)",
          cyan: "rgb(var(--grid-cyan) / <alpha-value>)",
          blue: "rgb(var(--grid-blue) / <alpha-value>)",
          purple: "rgb(var(--grid-purple) / <alpha-value>)",
          magenta: "rgb(var(--grid-magenta) / <alpha-value>)",
          red: "rgb(var(--grid-red) / <alpha-value>)",
          gold: "rgb(var(--grid-gold) / <alpha-value>)",
          emerald: "rgb(var(--grid-emerald) / <alpha-value>)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
      },
      fontFamily: {
        sans: ["Inter", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(34, 211, 238, 0.16)",
        "glow-strong": "0 0 48px rgba(34, 211, 238, 0.22)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.34)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      keyframes: {
        "pulse-line": {
          "0%, 100%": { opacity: "0.25", transform: "scaleX(0.96)" },
          "50%": { opacity: "0.8", transform: "scaleX(1)" },
        },
      },
      animation: {
        "pulse-line": "pulse-line 4s ease-in-out infinite",
        "grid-scan": "grid-scan 14s linear infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
