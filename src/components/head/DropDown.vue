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
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
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

let store = useStore();
const handleCommand = (command: string | number | object) => {
  if (command == "exit") {
   ElMessageBox.confirm(
     '<span style="font-size:1vw;font-weight:700">请确认是否     <span style="color:orange;font-weight:1000;font-size:1.3vw">退出</span></span>',
    '谨慎操作',
    {
      confirmButtonText: '确认退出',
      cancelButtonText: '取消',
      type: 'warning',
      dangerouslyUseHTMLString:true,
      center:true
    }
  )
    .then(() => {
         window.localStorage.setItem("token", "null");
    window.localStorage.setItem("userId", "null");
    window.localStorage.setItem('tagList','[]')
    router.replace("/");
      ElMessage({
        type: 'success',
        message: '退出成功',
        center:true
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消',
      })
    })
 
  }
};
</script>

<style lang="less" scoped>
.el-dropdown-link {
  position: relative;
  top: 40%;
  transform: translate(0, -100%);
  right: 0.2vw;
}
</style>
