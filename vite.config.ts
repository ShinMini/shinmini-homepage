import { defineConfig, loadEnv } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log('env: ', env);

  return {
    define: {
      'process.env': env,
    },
    plugins: [react(), tsconfigPaths(), EnvironmentPlugin('all')],
    build: {
      sourcemap: true,
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
