import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

/** @type {import('vite').UserConfig} */
export default defineConfig(() => {
  return {
    plugins: [react(), tsconfigPaths(), EnvironmentPlugin('all')],
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
