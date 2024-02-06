import motionCanvas from '@motion-canvas/vite-plugin';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [
    motionCanvas({
      project: [
        './src/code-block.ts',
        
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        dir: '../../static/examples',
        entryFileNames: '[name].js',
      },
    },
  },
});
