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
        danger: "#ee4444",
        priGreen: "#7ea33e",
        priGray: "#858f9a",
        priBlack: "#15222f",
        secBlack: "#121d28",
        pureBlack: "#000000",
        priBlue: "#acdaee",
        secBlue: "#209bd0",
        pureBlue: "#213347",
        priBrown: "#707070",
        pureWhite: "#ffffff",
      },
      boxShadow: {
        "3xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};
export default config;
