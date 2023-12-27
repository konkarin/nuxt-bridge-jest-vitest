import { Store } from 'vuex';

export type State = {
  msg: string;
};

export const state = (): State => ({
  msg: 'hello nuxt',
});

declare module '#app' {
  interface NuxtApp {
    $store: Store<State>;
  }
  interface NuxtAppCompat {
    $store: Store<State>;
  }
}

declare module '@nuxt/bridge-schema' {
  interface NuxtAppCompat {
    $store: Store<State>;
  }
}
