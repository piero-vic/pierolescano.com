/** @type {import('prettier').Options} */
export default {
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  arrowParens: "avoid",
  proseWrap: "always",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  tailwindConfig: "./tailwind.config.js",
};
