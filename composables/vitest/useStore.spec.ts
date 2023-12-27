import { it, expect, vi } from 'vitest';

import { useStore } from '../useStore';

vi.mock('#app', () => ({
  useNuxtApp: () => ({
    $store: {
      state: {
        msg: 'hello nuxt',
      },
    },
  }),
}));

it('test', () => {
  expect(useStore().state.msg).toBe('hello nuxt');
});
