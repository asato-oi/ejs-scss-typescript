import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
  plugins: [ViteEjsPlugin()],
  root: './src',
  build: {
    rollupOptions: {
      outDir: '../dist',
      emptyOutDir: true,

      input: {
        main: '/pages/index.ejs',
      },
      output: {
        entryFileNames: '[name].html',
      },
    },
  },
});
