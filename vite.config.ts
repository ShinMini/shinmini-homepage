/* eslint-disable import/no-anonymous-default-export */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { config as dotEnvConfig } from 'dotenv';

/** @type {import('vite').UserConfig} */
export default ({ mode }) => {
  dotEnvConfig();

  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
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
  });
};
