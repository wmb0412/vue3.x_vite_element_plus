<template>
  <div>
    <el-container>
      <el-header style="position: absolute">
        <div id="layouts-top">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
          >
            <el-menu-item index="1" @click="goback"> 返回 </el-menu-item>
          </el-menu>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
          >
            <el-menu-item index="1" @click="linkTo('/login')">
              退出
            </el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @click="linkTo('home')"
          >
            <el-menu-item index="1"> home </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const linkTo = (path: string) => {
      router.push(path);
    };
    const goback = () => {
      router.go(-1);
    };
    return {
      linkTo,
      goback,
    };
  },
};
</script>

<style lang="scss" scoped>
#layouts-top {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
::v-deep .el-header {
  position: sticky !important;
  top: 0;
}
</style>