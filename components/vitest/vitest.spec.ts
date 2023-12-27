import { mount } from '@vue/test-utils';
import { it, expect, vi } from 'vitest';

import Comp from '../comp.vue';

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
  const wrapper = mount(Comp);
  expect(wrapper.text()).toBe('hello nuxt');
});
