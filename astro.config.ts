import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import alpine from "@astrojs/alpinejs";
import icon from "astro-icon";

import remarkMermaid from "remark-mermaidjs";
import { remarkGitLog } from "./src/lib/remark-git-log";
import { remarkInlineTags } from "./src/lib/remark-inline-tags";

// https://astro.build/config
export default defineConfig({
  site: "https://pierolescano.com/",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [
    react(),
    mdx(),
    alpine(),
    icon({
      include: {
        prime: ["*"],
        ph: ["*"],
        bi: ["*"],
        feather: ["*"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "tokyo-night",
      langs: [],
      wrap: false,
    },
    remarkPlugins: [remarkGitLog, remarkInlineTags, remarkMermaid],
  },
});
