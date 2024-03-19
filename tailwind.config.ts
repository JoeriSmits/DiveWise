import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      primary: {
        900: "#00024D",
        800: "#1a1b5f",
        700: "#333571",
        600: "#4d4e82",
        500: "#666794",
        400: "#8081a6",
        300: "#999ab8",
        200: "#b3b3ca",
        100: "#ccccdb",
        50: "#eef2ff",
      },
      neutral: {
        900: "#111827",
        800: "#1F2937",
        700: "#374151",
        600: "#6B7280",
        500: "#E5E7EB",
      }
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
