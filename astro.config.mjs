import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://juashyam.com",
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: netlify(),
});
