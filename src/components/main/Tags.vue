<template>
  <el-tag
    v-for="tag in store.tagList"
    :class="
      router.currentRoute.value.path == tag.path ? 'checked' : 'notchecked'
    "
    :key="tag"
    class="mx-1"
    :closable="tag.name !== '首页'"
    :disable-transitions="false"
    @close="deleteTag(tag)"
    @click="clickTag(tag)"
  >
    {{ tag.name }}
  </el-tag>
</template>

<script lang="ts" setup>
import router from "../../router";
import { useStore } from "../../store";
interface tag {
  name?: string;
  path: string;
}

let store = useStore();
//点击跳转
let clickTag = function (tag: any) {
  router.push(tag.path);
};
//点击路由增加tag
const setTag = function (to: any) {
  let isExist = store.tagList.some((item: tag) => to.path == item.path);
  if (!isExist) {
    store.tagList.push({
      name: to.name,
      path: to.path,
    });
    window.localStorage.setItem("tagList", JSON.stringify(store.tagList));
  }
};
router.afterEach((to, from, next) => {
  if (to.path !== "/" && from.path !== "/") {
    setTag(to);
  }
});
//点击删除
const deleteTag = (tag: tag) => {
  let index = store.tagList.findIndex((item) => item === tag);
  store.tagList.splice(index, 1);
  window.localStorage.setItem("tagList", JSON.stringify(store.tagList));
  if (tag.path == router.currentRoute.value.path) {
    router.push(store.tagList[index - 1].path);
  }
};
</script>
<style scoped>
.el-tag {
  float: left;
  height: 3vh;
  margin: 1vh 0 0;
  margin-left: 0.5vw;
}
.el-tag :hover {
  cursor: pointer;
}
.checked {
  border: white 1px;
  color: black;
  background-color: white;
}
.notchecked {
  font-weight: normal;
}
</style>
