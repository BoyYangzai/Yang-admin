<template>
  <div @click="changeTheme" class="theme">
    <img :src="themepicture[0].url" alt="" v-if="nowtheme == 'light'" />
    <img :src="themepicture[1].url" alt="" v-if="nowtheme !== 'light'" />
    <span v-if="nowtheme == 'light'" class="word">晨间模式</span>
    <span v-if="nowtheme !== 'light'" class="word">夜间模式</span>
  </div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";
import { ElMessage } from "element-plus";
import { computed,  onMounted, ref } from "vue";

let themepicture = [
  { url: new URL("../../assets/picture/light.png", import.meta.url).href },
  { url: new URL("../../assets/picture/dark.png", import.meta.url).href },
];
let starttheme = computed(() => {
  if (window.localStorage.getItem("vueuse-color-scheme") == "auto") {
    return "light";
  } else if (window.localStorage.getItem("vueuse-color-scheme") == "dark") {
    return "dark";
  }
});
let nowtheme = ref(starttheme.value);
const isDark = useDark({
  selector: "html", //class渲染的标签
  valueDark: "dark", //暗黑class名字
  valueLight: "light", //高亮class名字
});
const toggleDark = useToggle(isDark);
let getThemePicture = function () {
  if (nowtheme.value == "dark") {
  } else if (nowtheme.value == "light") {
  }
};
getThemePicture();
let changeThemePicture = function () {
  if (nowtheme.value == "dark") {
    nowtheme.value = "light";
  } else if (nowtheme.value == "light") {
    nowtheme.value = "dark";
  }
};
let changeTheme = function () {
  toggleDark();
ElMessage.closeAll()
  ElMessage.success("切换主题成功");
  changeThemePicture();
};
onMounted(() => {});
</script>

<style lang="less" scoped>
.theme img {
  width: 100%;
  height: 100%;
}
.word {
  font-size: 0.3vw;
}
</style>
