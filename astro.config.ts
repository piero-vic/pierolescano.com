import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import alpine from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://www.pierolescano.com/",
  integrations: [tailwind(), react(), mdx(), alpine()],
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
