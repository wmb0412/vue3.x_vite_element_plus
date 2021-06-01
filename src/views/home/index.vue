<template>
  <div id="home">
    <h1>你好这里是首页</h1>
    <div>
      <h2>vuex相关</h2>
      <div>state:{{ count }}</div>
      <div>
        getter:{{getCout}}
      </div>
     <div>
       mutations: <el-button @click="increment"> increment </el-button>
     </div>
      <div>
       action: <el-button @click="incrementAsync"> increment </el-button>
     </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/runtime-core";
// import { useStore } from "vuex";
import { useStore } from "@/store/index";
export default {
  setup() {
    const store = useStore();
    const increment = () => {
      store.commit("user/increment");
    };
    const incrementAsync=()=>{
      store.dispatch('user/incrementAsync')
    }
    return {
      count: computed(() => store.state.user.count),
      getCout:computed(()=>store.getters['user/doubleCount']),
      increment: increment,
      incrementAsync:incrementAsync
    };
  },
};
</script>

<style lang="scss" scoped>
#home {
  text-align: center;
}
</style>