import * as vue from 'vue';

// add vue composition
for (const key of Object.keys(vue)) {
  global[key] = vue[key];
}

// add nuxt composition for auto imports
global.useNuxtApp = jest.fn();
