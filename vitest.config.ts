import path from 'path';

import { defineConfig } from 'vitest/config';

import AutoImport from 'unplugin-auto-import/vite';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          '#app': ['useNuxtApp'],
        },
      ],
    }),
  ],
  test: {
    include: ['**/vitest/*.spec.ts'],
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './'),
      '#imports': path.resolve(__dirname, '.nuxt/imports'),
      '#app': path.resolve(__dirname, 'node_modules/@nuxt/bridge/dist/runtime'),
    },
  },
});
