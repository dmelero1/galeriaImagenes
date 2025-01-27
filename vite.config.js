import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    root: "./", 
    outDir: "./docs",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
    },
  },
  base: './galeriaImagenes',
});