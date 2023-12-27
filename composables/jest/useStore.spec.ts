import { useStore } from '../useStore';

(useNuxtApp as jest.Mock).mockReturnValue({
  $store: {
    state: {
      msg: 'hello nuxt',
    },
  },
});

it('test', () => {
  expect(useStore().state.msg).toBe('hello nuxt');
});
