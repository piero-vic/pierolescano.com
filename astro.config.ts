import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import alpine from "@astrojs/alpinejs";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://pierolescano.com/",
  integrations: [
    tailwind(),
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
  markdown: {
    shikiConfig: {
      theme: "tokyo-night",
      langs: [],
      wrap: false,
    },
  },
  experimental: {
    contentLayer: true,
  },
});
