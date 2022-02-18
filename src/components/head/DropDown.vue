<template>
  <el-dropdown @command="handleCommand" class="dropdown">
    <span class="el-dropdown-link">
      {{ store.userInfo.studentId }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="visible = true">
          <el-popover v-model:visible="visible" :width="160" placement="left">
            <p>请输入您的QQ号:</p>
            <div style="text-align: right; margin: 0">
              <el-form ref="qqFormRef" :rules="qqRule" :model="qqForm">
                <el-form-item label="" prop="QQ">
                  <el-input
                    v-model="qqForm.QQ"
                    @keyup.enter="changeAvatar(qqFormRef)"
                  ></el-input>
                </el-form-item>
              </el-form>
              <el-button size="small" type="text" @click="visible = false"
                >取消</el-button
              >
              <el-button
                size="small"
                type="primary"
                @click="changeAvatar(qqFormRef)"
                >更换</el-button
              >
            </div>
            <template #reference>
              <div style="width: 100%">更换头像</div>
            </template>
          </el-popover></el-dropdown-item
        >
        <el-dropdown-item @click="goMyself">个人资料</el-dropdown-item>
        <el-dropdown-item >Action 3</el-dropdown-item>
        <el-dropdown-item divided command="exit">退出账号</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import router from "../../router";
import { useStore } from "../../store";

import { reactive, ref } from "vue";
import { setAvatar } from "../../network/core/myself";
//更换头像
import type { ElForm } from "element-plus";
type FormInstance = InstanceType<typeof ElForm>;
const visible = ref(false);
const qqFormRef = ref<FormInstance>();
const qqForm = reactive({
  QQ: "",
});

const qqRule = reactive({
  QQ: [
    {
      required: true,
      message: "请输入QQ号",
      trigger: "blur",
    },
    {
      min: 6,
      max: 10,
      message: "请输入正确的QQ号",
      trigger: "blur",
    },
  ],
});

const changeAvatar = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      setAvatar(qqForm.QQ);
      visible.value = false;
      qqForm.QQ = "";
      setTimeout(() => {
        store.getUserInfo(window.localStorage.getItem("userId") as string);
      }, 100);
    } else {
      return false;
    }
  });
};

//注销登录
let store = useStore();
const handleCommand = (command: string | number | object) => {
  if (command == "exit") {
    ElMessage.closeAll();
    ElMessageBox.confirm(
      '<span style="font-size:1vw;font-weight:700; ">请确认是否     <span style="color:orange;font-weight:1000;font-size:1.3vw;">退出</span></span>',
      "谨慎操作",
      {
        confirmButtonText: "确认退出",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true,
        center: true,
      }
    )
      .then(() => {
        window.localStorage.setItem("token", "null");
        window.localStorage.setItem("userId", "null");
        window.localStorage.setItem("tagList", "[]");
        router.replace("/");
        ElMessage.closeAll();
        ElMessage({
          type: "success",
          message: "退出成功",
          center: true,
        });
      })
      .catch(() => {
        ElMessage.closeAll();
        ElMessage({
          type: "info",
          message: "已取消",
        });
      });
  }
};

//跳转个人资料
let goMyself=function(){
  router.push('/myself')
}
</script>

<style lang="less" scoped>
.el-dropdown-link {
  position: relative;
  top: 40%;
  transform: translate(0, -100%);
  right: 0.2vw;
}
</style>
