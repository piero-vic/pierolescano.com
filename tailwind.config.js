const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
      fontFamily: {
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.foreground"),
            "--tw-prose-headings": theme("colors.green"),
            "--tw-prose-links": theme("colors.green"),
            "--tw-prose-bold": theme("colors.green"),
            "--tw-prose-counters": theme("colors.foreground"),
            "--tw-prose-bullets": theme("colors.foreground"),
            "--tw-prose-hr": theme("colors.black"),
            "--tw-prose-quotes": theme("colors.foreground"),
            "--tw-prose-quote-borders": theme("colors.black"),
            "--tw-prose-captions": theme("colors.foreground"),
            "--tw-prose-code": theme("colors.foreground"),
            "--tw-prose-pre-code": theme("colors.foreground"),
            "--tw-prose-pre-bg": theme("colors.black"),
            "--tw-prose-th-borders": theme("colors.black"),
            "--tw-prose-td-borders": theme("colors.black"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
