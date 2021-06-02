<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const { title } = route.query;
    return { title };
  },
};
</script>

<style lang="scss" scoped>
</style>