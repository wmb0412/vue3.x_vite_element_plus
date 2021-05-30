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
        <el-form-item label="用户名" prop="age">
          <el-input v-model="ruleForm.name"></el-input>
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
import { defineComponent, reactive, ref, toRefs} from "vue";

export default defineComponent({
  setup() {
    const ruleForm = reactive({
      name: "wmb",
      passWord: "12345",
    });
    const rules = {
      name: [{ required: true, message: "请选择活动资源", trigger: "change" }],
      passWord: [
        { required: true, message: "请选择活动资源", trigger: "change" },
      ],
    };
    const ruleFormRef = ref(null);
    const submitForm = () => {};
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