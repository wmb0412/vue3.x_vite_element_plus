<template>
  <div>
    <div id="login-box">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleFormRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input
            type="password"
            v-model="ruleForm.passWord"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-radio v-model="ruleForm.role" :label="1">管理员</el-radio>
          <el-radio v-model="ruleForm.role" :label="0">普通用户</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { login } from "@/api/login";
import { defineComponent, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";
export default defineComponent({
  setup() {
    const store = useStore();
    const ruleForm = reactive({
      userName: "wmb",
      passWord: "123456",
      role: 1,
    });
    const rules = {
      userName: [
        { required: true, message: "请输入userName", trigger: "change" },
      ],
      passWord: [
        { required: true, message: "请输入passWord", trigger: "change" },
      ],
    };
    const ruleFormRef = ref(null);
    const submitForm = async () => {
      store.dispatch('user/login',ruleForm)
    };
    return {
      ruleFormRef: ruleFormRef,
      ruleForm: ruleForm,
      rules: rules,
      submitForm: submitForm,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>