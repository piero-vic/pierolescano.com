const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#0d0c0c",
      red: "#c4746e",
      green: "#8a9a7b",
      yellow: "#c4b28a",
      blue: "#8ba4b0",
      magenta: "#a292a3",
      cyan: "#8ea4a2",
      white: "#c8c093",
      background: "#181616",
      foreground: "#c5c9c5",
    },
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.foreground"),
            "--tw-prose-headings": theme("colors.blue"),
            "--tw-prose-links": theme("colors.blue"),
            "--tw-prose-bold": theme("colors.blue"),
            "--tw-prose-counters": theme("colors.foreground"),
            "--tw-prose-bullets": theme("colors.foreground"),
            "--tw-prose-hr": theme("colors.black"),
            "--tw-prose-quotes": theme("colors.foreground"),
            "--tw-prose-quote-borders": theme("colors.blue"),
            "--tw-prose-captions": theme("colors.foreground"),
            "--tw-prose-code": theme("colors.foreground"),
            "--tw-prose-pre-code": theme("colors.foreground"),
            "--tw-prose-pre-bg": theme("colors.black"),
            "--tw-prose-th-borders": theme("colors.blue"),
            "--tw-prose-td-borders": theme("colors.blue"),
            // NOTE: This is for disabling the backticks on inline code blocks
            "code::before": {
              content: '""',
              "padding-left": "0.25rem",
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem",
            },
            // NOTE: This is for configuring inline tags
            // TODO: Find a bette way to do this.
            "span.inline-tag": {
              "margin-left": "0.25rem",
              "margin-right": "0.25rem",
              "border-radius": "0.25rem",
              "border-width": "1px",
              "background-color": theme("colors.background"),
              "padding-left": "0.25rem",
              "padding-right": "0.25rem",
              "font-size": "0.75rem",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    // NOTE: This is for targeting inline code blocks with `prose-inline-code`
    // See: https://aaronfrancis.com/2023/targeting-only-inline-code-elements-with-tailwind-typography-3b5e8d43
    plugin(function({ addVariant }) {
      addVariant("prose-inline-code", '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))');
    }),
  ],
};
