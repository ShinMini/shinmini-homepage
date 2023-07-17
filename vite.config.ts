import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  if (mode === 'development') {
    console.log('env: ', env);
  }

  return {
    define: {
      'process.env': env,
    },
    plugins: [react(), tsconfigPaths()],
    build: {
      outDir: 'public',
    },
    server: {
      open: true,
      port: 3000,
    },
    esbuild: {
      target: 'ESNext',
    },
  };
});
