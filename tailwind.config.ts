import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9FBF0",
        foreground: "#000000",
        primary: {
          DEFAULT: "#CF4A3C",
          light: "rgba(207, 74, 60, 0.1)",
          medium: "rgba(207, 74, 60, 0.3)",
        },
        surface: {
          DEFAULT: "#F6F1E6",
          light: "rgba(246, 241, 230, 0.5)",
        },
        gray: {
          50: "rgb(249, 250, 251)",
          500: "rgb(107, 114, 128)",
          600: "rgb(75, 85, 99)",
          700: "rgb(55, 65, 81)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
