import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    site: "https://www.pierolescano.com/",
    sitemap: true,
    pageUrlFormat: "directory",
  },
  integrations: [react(), tailwind()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  markdownOptions: {
    render: [
      "@astrojs/markdown-remark",
      {
        syntaxHighlight: "shiki",
        shikiConfig: {
          theme: "material-palenight",
          langs: [],
          wrap: false,
        },
      },
    ],
  },
});
