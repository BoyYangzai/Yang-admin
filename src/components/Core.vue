<template>
  <el-container class="core">
    <el-aside height="100vh">
      <img src="../assets/picture/light.png" alt="" class="logo" />
      <Nav></Nav>
    </el-aside>
    <el-container>
      <el-header>
        <hello></hello>
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="isFullscreenChinses"
          placement="bottom"
        >
          <div class="fullscreen">
            <i class="fa fa-arrows-alt" aria-hidden="true" @click="toggle"></i>
          </div>
        </el-tooltip>
        <drop-down></drop-down>
        <avatar></avatar>
      </el-header>
      <el-main>
        <tags></tags>
        <router-view> </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import router from "../router";
import { useStore } from "../store";
import { useFullscreen } from "@vueuse/core";
import { computed, ref } from "vue";

const el = ref<HTMLElement | null>(document.querySelector("html"));

const { isFullscreen, enter, exit, toggle } = useFullscreen(el);
let isFullscreenChinses = computed(() => {
  if (isFullscreen.value == false) {
    return "全屏";
  } else {
    return "取消全屏";
  }
});
</script>

<style lang="less" scoped>
.house {
  width: 100%;
}

.el-header {
  display: flex;
  position: relative;
  justify-content: flex-end;
  height: 6.4vh;
  background-color: white;
}
.fullscreen {
  position: relative;
  top: 50%;
  font-size: 1.3vw;
  transform: translate(-1vw, -38%);
  display: inline;
  height: 1.5vw;
}
.fullscreen :hover {
  cursor: pointer;
}
.box-item {
  position: relative;
  top: -10vh;
}

.el-aside {
  overflow: hidden;
  background-color: white;
  width: 10.5vw;
}
.el-aside :deep(ul) {
  overflow: hidden;
  width: 100%;
}
.el-aside :deep(li) {
  width: 100%;
}
@keyframes logo {
  from {
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.logo {
  width: 50%;
  animation: logo linear 20s infinite;
}
.el-main {
  height: 93.6vh;
  padding: 0;
  background-color: #f5f7f9;
}

.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  font-weight: 700;
  color: var(--el-text-color-regular);
  cursor: text;
}
</style>
