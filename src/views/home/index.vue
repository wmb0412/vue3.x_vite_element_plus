<template>
  <div id="home">
    <h1>{{ role }}你好这里是首页</h1>
    <el-button @click="handelClick"> 权限页面 </el-button>
    <el-divider></el-divider>
    <div>
      <el-button @click="changeShowVuexDemo"> 加载异步组件 </el-button>
      <VuexDemo v-if="showVuexDemo" />
    </div>
    <el-divider></el-divider>

    <div class="cards-box">
      <el-card
        style="width: 200px"
        v-for="(item, index) in listData"
        :key="index"
      >
        <template #header>
          <div class="card-header">
            <span>{{ item.title }}</span>
            <el-button @click="handelClickGoods(item)" class="button" type="text">进入</el-button>
          </div>
        </template>
        <div>价格： ¥{{ item.price }}</div>
      </el-card>
    </div>

    <!-- <VuexDemo /> -->
  </div>
</template>

<script lang="ts">
// import VuexDemo from "@/components/VuexDemo.vue";
import { defineComponent, defineAsyncComponent, ref, onMounted } from "vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "@/store/index";
import { useRouter } from "vue-router";
import { list } from "@/api/goods";
export default defineComponent({
  components: {
    VuexDemo: defineAsyncComponent(() => import("@/components/VuexDemo.vue")),
  },
  setup() {
    const { role, handelClick } = usePower();
    const { showVuexDemo, changeShowVuexDemo } = useLoadComponent();
    const { listData,handelClickGoods } = useGoods();
    return {
      role,
      handelClick,
      showVuexDemo,
      changeShowVuexDemo,
      listData,handelClickGoods
    };
  },
});
//首页权限相关
function usePower() {
  const router = useRouter();
  const store = useStore();
  const role = computed(() => store.getters["user/getRoleName"]);
  const handelClick = () => {
    router.push("/power");
  };
  return { role, handelClick };
}
//首页加载组件相关
function useLoadComponent() {
  const showVuexDemo = ref<boolean>(false);
  const changeShowVuexDemo = () => {
    showVuexDemo.value = true;
  };
  return { showVuexDemo, changeShowVuexDemo };
}
//货物相关
function useGoods() {
  interface Goods {
    id: number;
    title: string;
    price: number;
  }
  const router = useRouter();
  const listData = ref<Goods[]>([]);
  const getListData = async () => {
    const res = await list();
    listData.value = res.data;
  };
  const handelClickGoods = (goods: Goods) => {
    const { title } = goods;
    router.push({
      path: "/detail",
      query: {
        title,
      },
    });
  };
  onMounted(() => {
    getListData();
  });
  return {
    listData,
    handelClickGoods,
  };
}
</script>

<style lang="scss" scoped>
#home {
  text-align: center;
}
.cards-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>