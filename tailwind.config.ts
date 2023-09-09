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
        "Erie-Black": "#161A1E",
        "Spring-Green": "#17FB99",
        "Bright-Sun": "#FCD731",
        "Spiro-Disco": "#1FCFF0",
        Lavender: "#9745F6",
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
