import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://silver-frangollo-b56c92.netlify.app",
  integrations: [preact()]
});