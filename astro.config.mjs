import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import siteConfig from './src/data/site-config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: netlify(),
    site: siteConfig.website,
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()],
    experimental: {
        session: true,
    },
});
