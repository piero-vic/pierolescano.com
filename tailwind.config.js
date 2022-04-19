module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#32344a",
      red: "#f7768e",
      green: "#9ece6a",
      yellow: "#e0af68",
      blue: "#7aa2f7",
      magenta: "#ad8ee6",
      cyan: "#449dab",
      white: "#787c99",
      background: "#1a1b26",
      foreground: "#a9b1d6",
    },
    extend: {
      spacing: {
        "5vw": "5vw",
        "10vw": "10vw",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
