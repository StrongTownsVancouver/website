import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

// See configuration guide: https://astro.build/config
export default defineConfig({
  site: 'https://strongtownsvan.org',
  integrations: [mdx(), sitemap(), tailwind(), robotsTxt()],
  output: "static"
});