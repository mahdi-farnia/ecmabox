import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stylexPlugin from '@stylexjs/rollup-plugin';

declare const __dirname: string;
declare const process: { env: Record<string, string | undefined> };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylexPlugin({
      // Required. File path for the generated CSS file.
      fileName: './.build/stylex.css',
      // default: false
      dev: process.env.NODE_ENV !== 'production',
      // prefix for all generated classNames
      classNamePrefix: 'x',
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: 'commonJS',
        // The absolute path to the root directory of your project
        rootDir: __dirname
      }
    })
  ]
});
