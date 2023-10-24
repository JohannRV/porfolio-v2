/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Satoshi", "sans-serif"],
      },
      backgroundColor: {
        dark: "#18181B",
      },
      colors: {
        text_primary: "#E4E4E7",
        text_secondary: "#A1A1AA",
        linkHover: "#339989",
        borderMain: "#71717A",
        button: "#7DE2D1",
        tooltip: "#27272A",
        tooltip2: "#3F3F45",
        icons: "#A7A7A8",
      },
    },
  },
  plugins: [],
};
