import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          900: "#007AF6",
        },
        secondary: {
          500: "#FFFFFFCC",
          600: "#5B616E",
          700: "#E7F0F8",
          800: "#171B21",
        },
        "black-40": "rgba(0, 0, 0, 0.4)",
      },
      fontFamily: {
        primary: ["Inter", ...defaultTheme.fontFamily.sans],
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
