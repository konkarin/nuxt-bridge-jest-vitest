import { mount } from '@vue/test-utils';

import Comp from '../comp.vue';

(useNuxtApp as jest.Mock).mockReturnValue({
  $store: {
    state: {
      msg: 'hello nuxt',
    },
  },
});

it('test', () => {
  const wrapper = mount(Comp);
  expect(wrapper.text()).toBe('hello nuxt');
});
