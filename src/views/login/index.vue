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
import {useRouter} from 'vue-router'
export default defineComponent({
  setup() {
    const ruleForm = reactive({
      userName: "wmb",
      passWord: "123456",
    });
    const rules = {
      userName: [
        { required: true, message: "请选择活动资源", trigger: "change" },
      ],
      passWord: [
        { required: true, message: "请选择活动资源", trigger: "change" },
      ],
    };
    const router=useRouter()
    const ruleFormRef = ref(null);
    const submitForm = async () => {
      const res = await login({
        passWord: ruleForm.passWord,
        userName: ruleForm.userName,
      });
     if(!res.code){
       router.push({
         path:'/home'
       })
     }
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