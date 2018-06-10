<template>
  <div>
    <h1>Hello, World!</h1>
    <version></version>
  </div>
</template>

<script>
import Version from './components/version.vue';

export default {
  components: { Version },
  data() {
    const mainColor = 'red';
    return {
      mainColor,
    };
  }
};
</script>

<style lang="scss">
@import './../style/variables';

h1 { color: $main-color; }
</style>
