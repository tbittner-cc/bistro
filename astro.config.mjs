// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://tbittner-cc.github.io',
    base: '/bistro',
    vite: {
        plugins: [tailwindcss()],
    },
});
