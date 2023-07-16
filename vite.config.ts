import { defineConfig, loadEnv } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// import electron from 'vite-plugin-electron';
// import renderer from 'vite-plugin-electron-renderer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log('env: ', env);

  return {
    define: {
      'process.env': env,
    },
    plugins: [
      react(),
      tsconfigPaths(),
      EnvironmentPlugin('all'),
      // electron([
      //   {
      //     // Main-Process entry file of the Electron App.
      //     entry: 'electron/main.ts',
      //   },
      //   {
      //     entry: 'electron/preload.ts',
      //     onstart(options) {
      //       // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
      //       // instead of restarting the entire Electron App.
      //       options.reload();
      //     },
      //   },
      // ]),
      // renderer(),
    ],
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
