import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.pierolescano.com/",
  integrations: [react(), tailwind()],
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
});
