import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      "2xsm": "10px",
      xsm: "12px",
      sm: "14px",
      reg: "16px",
      lg: "20px",
      xl: "32px",
      "2xl": "36px",
      "3xl": "40px",
      "4xl": "42px",
      "5xl": "48px",
      "6xl": "50px",
      "7xl": "70px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#2E1437",
      secondary: "#51425F",
      neutral: "#948E99",
      mint: {
        light: "#CAD1C3",
        contrast: "#E7EED0",
      },
      gray: { dark: "#5f6984", light: "#D3D3D3" },
      red: "#AC2005",
    },
  },
  plugins: [],
};
export default config;
