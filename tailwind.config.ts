import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          // Keep default Tailwind violet palette; extend if needed
        },
      },
      fontFamily: {
        sans: ["DM Sans", "Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
      },
      backdropBlur: {
        md: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
