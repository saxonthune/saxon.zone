import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://saxon.zone',
  output: 'static',
  // Matches the directory-style output Cloudflare Pages serves.
  trailingSlash: 'ignore'
});
