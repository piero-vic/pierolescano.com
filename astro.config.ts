import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import alpine from "@astrojs/alpinejs";
import icon from "astro-icon";

import rehypeMermaid from "rehype-mermaid";
import { remarkGitMetadata } from "./src/lib/remark-git-metadata";
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
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid", "math"],
    },
    remarkPlugins: [remarkGitMetadata, remarkInlineTags],
    rehypePlugins: [
      [
        rehypeMermaid,
        {
          mermaidConfig: {
            theme: "dark",
            fontFamily: '"JetBrains Mono", monospace',
          },
        },
      ],
    ],
  },
});
