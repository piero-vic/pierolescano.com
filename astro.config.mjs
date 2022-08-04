import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.pierolescano.com/",
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  markdown: {
    shikiConfig: {
      theme: "material-palenight",
      langs: [],
      wrap: false,
    },
  },
  legacy: {
    astroFlavoredMarkdown: true,
  },
});
