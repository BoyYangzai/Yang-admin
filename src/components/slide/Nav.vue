<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="true" class="false">
      <el-icon><icon-menu /></el-icon>off</el-radio-button
    >
    <el-radio-button :label="false" class="true">
      <el-icon><icon-menu /></el-icon>on</el-radio-button
    >
    <!-- 面包屑放在这里是为了更好地自适应 -->
    <el-breadcrumb separator="" v-if="router.currentRoute.value.name == '首页'">
      <el-breadcrumb-item
        ><a
          href="/core"
          style="font-size: 27px"
          >首页</a
        ></el-breadcrumb-item
      >
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>

    <el-breadcrumb
      separator="/"
      v-if="router.currentRoute.value.name != '首页'"
    >
      <el-breadcrumb-item
        to="/core"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item
        ><a :href="router.currentRoute.value.matched[1].path">{{
          router.currentRoute.value.name
        }}</a></el-breadcrumb-item
      >
    </el-breadcrumb>
  </el-radio-group>
  <el-menu
    :default-active="router.currentRoute.value.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    unique-opened
    router
  >
    <template v-for="(item, index) in router.options.routes">
      <el-sub-menu
        v-if="item.children?.length&& item.meta!.hidden!==true"
        :index="item.path"
        :key="item.name"
      >
        <template #title>
          <el-icon>
            <i :class="item.meta!.icon"></i>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <template
          v-if="item.children?.length != 0"
          v-for="(c_item, c_index) in item.children"
          :key="c_item.name"
        >
          <el-menu-item
            :index="c_item.path"
            style="padding: 0; min-width: 0; padding-left: 40px"
          >
            <el-icon>
              <i :class="c_item.meta!.icon"></i>
            </el-icon>
            <template #title>
              {{ c_item.name }}
            </template>
          </el-menu-item>
        </template>
      </el-sub-menu>

      <template v-if="!item.children?.length&& item.meta!.hidden!==true">
        <el-menu-item :index="item.path" :key="item.name">
          <el-icon>
            <i :class="item.meta!.icon "></i>
          </el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Menu as IconMenu, Setting } from "@element-plus/icons-vue";
import router from "../../router";
let a = "fa-spin";
const isCollapse = ref(false);

const handleOpen = (key: string, keyPath: string[]) => {
};
const handleClose = (key: string, keyPath: string[]) => {
};
</script>

<style>
.el-radio-group {
  position: absolute;
  z-index: 1;
  top: 2vh;
  left: 10.5vw;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/* 面包屑放在这里是为了更好地自适应  */
.el-breadcrumb {
  margin-left: 0.6vw;
  font-size: 20px;
}
</style>
