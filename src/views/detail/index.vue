<template>
  <el-button @click="getList"> 获取数据</el-button>
  <ul>
    <li v-for="(user, index) in data" :key="index">
      <div>name:{{ user.name }}</div>
      <div>age:{{ user.age }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { list } from "@/api/detail";
import { nextTick, ref, reactive, toRefs } from "vue";
export default {
  setup() {
    const data = ref([]);
    const getList = async () => {
      const res = await list();
      data.value = res.data.data;
    };
    getList()
    return { data, getList };
  },
};
</script>

<style  scoped>
</style>