/* eslint-disable import/no-anonymous-default-export */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

/** @type {import('vite').UserConfig} */
export default defineConfig(() => {
  // const env = loadEnv(mode, process.cwd(), '');

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
    // define: {
    //   __APP_ENV__: env.APP_ENV,
    // },
  };
});
