<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span style="font-weight: 700">人物卡片</span>
      </div>
    </template>
    <div
      class="container"
      v-for="(item, index) in cardInfo"
      :key="index"
      @mouseenter="hover($event, item)"
      @mouseleave="leave($event)"
    >
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img :src="item.src" />
            <h3>{{ item.h3 }}</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>{{ item.p }}</p>
            <a :href="item.herf" :target="item.blank ? '__blank' : ''">{{
              item.a
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let cardInfo = ref([
  {
    h3: "Yang",
    p: "努力努力再努力",
    a: "了解详情",
    src: new URL("../../../assets/picture/personcard/yang.jpg", import.meta.url).href,
    backgroundColor: "#ff9100b4",
    herf: "http://www.yuque.com/boyyang",
    blank: true,
  },
  {
    h3: "Ayano",
    p: "宇宙是一个50兆兆粒子的大城市",
    a: "了解详情",
    src: new URL("../../../assets/picture/personcard/hua.jpg", import.meta.url).href,
    backgroundColor: "#fc5953",
    herf: "#",
  },
  {
    h3: "Yang",
    p: "努力努力再努力",
    a: "了解详情",
    src: new URL("../../../assets/picture/personcard/yang.jpg", import.meta.url).href,
    backgroundColor: "#ff9100b4",
    herf: "http://www.yuque.com/boyyang",
    blank: true,
  },
]);
let hover = function (e: any, item: any) {
  e.target.children[0].children[0].style.backgroundColor = item.backgroundColor;
};
let leave = (e: any) => {
  e.target.children[0].children[0].style.backgroundColor = "#333333";
};
</script>

<style lang="less" scoped>
:deep(.el-card__body) {
  display: flex;
  justify-content: center;
}
.container {
  width: 1000px;
  position: relative;
  display: flex;
  justify-content: center;
}

.container .card {
  position: relative;
  cursor: pointer;
}

.container .card .face {
  width: 300px;
  height: 200px;
  transition: 0.5s;
}

.container .card .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.container .card:hover .face.face1 {
  transform: translateY(0);
}

.container .card .face.face1 .content {
  opacity: 0.2;
  transition: 0.5s;
}

.container .card:hover .face.face1 .content {
  opacity: 1;
}

.container .card .face.face1 .content img {
  max-width: 100px;
}

.container .card .face.face1 .content h3 {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}

.container .card .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.548);
  transform: translateY(-100px);
}

.container .card:hover .face.face2 {
  transform: translateY(0);
}

.container .card .face.face2 .content p {
  margin: 0;
  padding: 0;
}

.container .card .face.face2 .content a {
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
}

.container .card .face.face2 .content a:hover {
  background: #333;
  color: #fff;
}
</style>
