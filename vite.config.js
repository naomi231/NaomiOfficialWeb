import { defineConfig } from 'vite';

export default defineConfig({
  // Ensures assets are loaded with relative paths, vital for GitHub Pages subdirectories
  base: './',
});
