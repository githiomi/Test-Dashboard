import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'brown': "#897d7d",
      'darkbrown': "#665c5c",
      'black': "#000000",
      'white': "#FFFFFF",
      'gray': '#dddfdf',
      'green': "#42b667",
      'orange': "#eb7600",
      'red': "#f82c1d",
    },
    // Screen Sizes
    /*
    320px — 480px: Mobile devices
    481px — 768px: iPads, Tablets
    769px — 1024px: Small screens, laptops
    1025px — 1200px: Desktops, large screens
    1201px and more —  Extra large screens, TV.
    */
  },
  plugins: [
    require("daisyui"),
  ],

};
export default config;
