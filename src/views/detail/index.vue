<template>
  <div>
    title:
    {{ title }}
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const route = useRoute();
    const title = ref("");
    onMounted(() => {
      title.value = route.query.title as string;
    });
    return { title };
  },
};
</script>

<style lang="scss" scoped>
</style>