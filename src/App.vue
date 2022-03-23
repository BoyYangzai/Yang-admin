<script setup lang="ts">
import { elFormKey, ElMessage, inputEmits } from "element-plus";
import { getCurrentInstance, ref } from "vue";
// const testInstance = getCurrentInstance()'123'// testInstance?.appContext.config.globalProperties.myTestFunc();
// let testCss = ref(
//   `rgba(${Math.floor(Math.random() * 100)},${Math.floor(
//     Math.random() * 100
//   )},${Math.floor(Math.random() * 100)},${Math.random().toFixed(1)})`
// );
// let changeColor = () => {
//   console.log(testCss.value);
//   testCss.value = `rgba(${Math.floor(Math.random() * 100)},${Math.floor(
//     Math.random() * 100
//   )},${Math.floor(Math.random() * 100)},${Math.random().toFixed(1)})`;
// };

// let copyContext = ref("my name is Yang");
// const vCopy = {
//   mounted(el: HTMLElement, args: any) {
//     el.addEventListener("click", () => {
//       try {
//         if (args.value.text) {
//           let newtextarea = document.createElement("textarea");
//           //copy命令只能复制文本框中的内容
//           el.appendChild(newtextarea);
//           newtextarea.value = args.value.text;
//           newtextarea.style.display = "block";
//           newtextarea.select(); //选中
//           document.execCommand("copy"); //调用复制
//           ElMessage.success({
//             message: "复制成功",
//           });
//           el.removeChild(newtextarea);
//         }
//       } catch (err) {
//         ElMessage.error({
//           message: "未传入复制内容",
//         });
//       }
//     });
//   },
// };

// const vWaterMarker = {
//   mounted(el: HTMLElement, args: any) {
//     let str = args.value.text;
//     let font = args.value.font;
//     let textColor = args.value.textColor;
//     var can = document.createElement("canvas");
//     el.appendChild(can);
//     can.width = 150;
//     can.height = 200;
//     can.style.display = "block";
//     var cans = can.getContext("2d") as any;
//     cans.rotate((-20 * Math.PI) / 180);
//     cans.font = font || "16px Microsoft JhengHei";
//     cans.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";
//     cans.textAlign = "left";
//     cans.textBaseline = "Middle";
//     cans.fillText(str, can.width / 10, can.height / 2);
//     el.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
//   },
// };
let copyContext = ref("my name is Yang");

// const vWaterMarker = {
//   mounted(el, args) {
//     var can = document.createElement("canvas");
//     el.appendChild(can);
//     can.width = 200;
//     can.height = 150;
//     can.style.display = "none";
//     var cans = can.getContext("2d");
//     cans.rotate((-20 * Math.PI) / 180);
//     cans.font = font || "16px Microsoft JhengHei";
//     cans.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";
//     cans.textAlign = "left";
//     cans.textBaseline = "Middle";
//     cans.fillText(str, can.width / 10, can.height / 2);
//     el.style.backgroundImage =
//       "url(" + can.toDataURL("image/png") + ")";
//   },
// };
</script>
<template>
  <!-- <div class="test"></div>
  <button @click="changeColor">更改</button> -->
  <input type="text" v-copy="{ text: copyContext }">
  <theme></theme>
  <router-view v-watermarker="{
   text: 'Yang版权所有',
   textColor: 'rgba(180, 180, 180, 0.4)',
 }"
> </router-view>
</template>

<style>

* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.theme {
  position: absolute;
  z-index: 1;
  top: 0vw;
  right: 1vw;
  width: 3.1vw;
  height: 3.1vw;
}
/*core里的所有大卡片 */
.box-card {
  width: 97%;
  margin-left: 0.5vw;
  height: 95%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1vw;
  font-weight: 700;
  font-family: "黑体", Times, serif;
}
</style>
