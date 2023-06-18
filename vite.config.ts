import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

/** @type {import('vite').UserConfig} */
export default defineConfig(() => {
  return {
    plugins: [react(), tsconfigPaths()],
    build: {
      sourcemap: true,
      outDir: 'public',
    },
    server: {
      port: 3000,
    },
    esbuild: {
      target: 'ESNext',
    },
  };
});
