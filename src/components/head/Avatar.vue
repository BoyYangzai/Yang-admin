<template>
  <div class="avatar">
    <img :src="userinfo.avatar" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { useStore  } from "../../store";
let store = useStore();
let userinfo = store.userInfo;
</script>

<style lang="less" scoped>
.avatar {
  float: right;
  margin-right: 4vw;
  width: 3.4vw;
  height: 100%;
  border: 1px solid rgba(128, 128, 128, 0.185);
  border-radius: 60px;
  overflow: hidden;
  box-shadow: 0px 0px 2px 1px rgba(128, 128, 128, 0.322);
}
.avatar img {
  width: 100%;
  height: 100%;
}
</style>
