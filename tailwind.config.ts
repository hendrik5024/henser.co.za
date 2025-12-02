import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { lg: "1024px", xl: "1280px" },
    },
    extend: {
      colors: {
        brand: { DEFAULT: "#0ea5e9", dark: "#0284c7" },
      },
    },
  },
  plugins: [],
};

export default config;
