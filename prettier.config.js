/** @type {import('prettier').Options} */
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  arrowParens: "avoid",
  proseWrap: "always",
  plugins: [require.resolve("prettier-plugin-astro"), require("prettier-plugin-tailwindcss")],
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
