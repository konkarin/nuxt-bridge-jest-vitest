import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  ssr: false,
  bridge: {
    nitro: true,
  },
});
