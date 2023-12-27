<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    return {
      msg: useNuxtApp().$store.state.msg,
    };
  },
});
</script>
