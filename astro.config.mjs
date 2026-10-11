// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://laurenluksay.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
