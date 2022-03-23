<template>
  <el-card
    class="box-card"
    v-water-marker="{
      text: 'Yang版权所有',
      textColor: 'rgba(180, 180, 180, 0.4)',
    }"
  >
    <template #header>
      <div class="card-header">
        <span style="font-weight: 700">自定义水印</span>
      </div>
    </template>
    <button @click="waterMarker" style="transform: translate(-50%,0);">
      点击添加水印
      <span class="first"></span>
      <span class="second"></span>
      <span class="third"></span>
      <span class="fourth"></span>
    </button>

    <div id="search">
      <svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
        <rect class="bar" />

        <g class="magnifier">
          <circle class="glass" />
          <line class="handle" x1="32" y1="32" x2="44" y2="44"></line>
        </g>

        <g class="sparks">
          <circle class="spark" />
          <circle class="spark" />
          <circle class="spark" />
        </g>

        <g class="burst pattern-one">
          <circle class="particle circle" />
          <path class="particle triangle" />
          <circle class="particle circle" />
          <path class="particle plus" />
          <rect class="particle rect" />
          <path class="particle triangle" />
        </g>
        <g class="burst pattern-two">
          <path class="particle plus" />
          <circle class="particle circle" />
          <path class="particle triangle" />
          <rect class="particle rect" />
          <circle class="particle circle" />
          <path class="particle plus" />
        </g>
        <g class="burst pattern-three">
          <circle class="particle circle" />
          <rect class="particle rect" />
          <path class="particle plus" />
          <path class="particle triangle" />
          <rect class="particle rect" />
          <path class="particle plus" />
        </g>
      </svg>
      <input type="search" name="q" aria-label="Search for inspiration" />
    </div>

    <div id="results"></div>
  </el-card>
</template>

<script lang="ts" setup>
import { nextTick, ref } from "vue";

const isShow = ref(false);
let waterMarker = () => {
  isShow.value = !isShow.value;
  console.log(isShow.value);
};
const vWaterMarker = {
  mounted(el: HTMLElement, args: any) {
    addEventListener("click", () => {
      if (isShow.value) {
        let str = args.value.text;
        let font = args.value.font;
        let textColor = args.value.textColor;
        var can = document.createElement("canvas");
        can.className = "waterMarker";
        can.style.display = "none";
        el.appendChild(can);
        can.width = 250;
        can.height = 180;
        el.style.position = "relative";
        can.style.position = "absolute";
        var cans = can.getContext("2d") as any;
        cans.rotate((-20 * Math.PI) / 180);
        cans.font = font || "16px Microsoft JhengHei";
        cans.fillStyle = "rgba(191,146,81,0.8)";
        cans.textAlign = "left";
        cans.textBaseline = "Middle";
        cans.fillText(str, can.width / 10, can.height / 2);
        el.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
      }
    });
  },
};
</script>

<style lang="less" scoped>
button {
  border: none;
  padding: 0.5vw 2vh;
  font-size: 1vw;
  position: relative;
  z-index: 1;
  background: transparent;
  color: #ffa500;
  text-transform: uppercase;
  border: 3px solid #ffa500;
  cursor: pointer;
  transition: all 0.7s;
  overflow: hidden;
  border-radius: 100px;
}

button:hover {
  color: rgba(255, 255, 255, 0.801);
}
button > span {
  transition: all 0.7s;
  z-index: -1;
}

button .first {
  content: "";
  position: absolute;
  right: 100%;
  top: 0;
  width: 25%;
  height: 100%;
  background: #ffa500;
}

button:hover .first {
  top: 0;
  right: 0;
}
button .second {
  content: "";
  position: absolute;
  left: 25%;
  top: -100%;
  height: 100%;
  width: 25%;
  background: #ffa500;
}

button:hover .second {
  top: 0;
  left: 50%;
}

button .third {
  content: "";
  position: absolute;
  left: 50%;
  height: 100%;
  top: 100%;
  width: 25%;
  background: #ffa500;
}

button:hover .third {
  top: 0;
  left: 25%;
}

button .fourth {
  content: "";
  position: absolute;
  left: 100%;
  top: 0;
  height: 100%;
  width: 25%;
  background: #ffa500;
}

button:hover .fourth {
  top: 0;
  left: 0;
}
//search玩具

body {
  display: grid;
  grid-template:
    "search" minmax(300px, 50vh)
    "results" minmax(20%, auto)
    / 1fr;
  margin: 0;
  font: 24px/1.5 system-ui, sans-serif;
}

#search {
  position: relative;
  top: 4vh;
  right: 3vw;
  display: grid;
  grid-area: search;
  grid-template:
    "search" 60px
    / 420px;
  justify-content: center;
  align-content: center;
  justify-items: stretch;
  align-items: stretch;
  background: hsl(0, 0%, 99%);
}

#search input {
  display: block;
  grid-area: search;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  background: none;
  padding: 0 30px 0 60px;
  border: none;
  border-radius: 100px;
  font: 24px/1 system-ui, sans-serif;
  outline-offset: -8px;
}

#search svg {
  grid-area: search;
  overflow: visible;
  color: hsla(41, 100%, 50%, 0.856);
  fill: none;
  stroke: currentColor;
}

.spark {
  fill: currentColor;
  stroke: none;
  r: 15;
}

.spark:nth-child(1) {
  animation: spark-radius 2.03s 1s both, spark-one-motion 2s 1s both;
}

@keyframes spark-radius {
  0% {
    r: 0;
    animation-timing-function: cubic-bezier(0, 0.3, 0, 1.57);
  }
  30% {
    r: 15;
    animation-timing-function: cubic-bezier(1, -0.39, 0.68, 1.04);
  }
  95% {
    r: 8;
  }
  99% {
    r: 10;
  }
  99.99% {
    r: 7;
  }
  100% {
    r: 0;
  }
}

@keyframes spark-one-motion {
  0% {
    transform: translate(-20%, 50%);
    animation-timing-function: cubic-bezier(0.63, 0.88, 0, 1.25);
  }
  20% {
    transform: rotate(-0deg) translate(0%, -50%);
    animation-timing-function: ease-in;
  }
  80% {
    transform: rotate(-230deg) translateX(-20%) rotate(-100deg) translateX(15%);
    animation-timing-function: linear;
  }
  100% {
    transform: rotate(-360deg) translate(30px, 100%);
    animation-timing-function: cubic-bezier(0.64, 0.66, 0, 0.51);
  }
}

.spark:nth-child(2) {
  animation: spark-radius 2.03s 1s both, spark-two-motion 2.03s 1s both;
}

@keyframes spark-two-motion {
  0% {
    transform: translate(120%, 50%) rotate(-70deg) translateY(0%);
    animation-timing-function: cubic-bezier(0.36, 0.18, 0.94, 0.55);
  }
  20% {
    transform: translate(90%, -80%) rotate(60deg) translateY(-80%);
    animation-timing-function: cubic-bezier(0.16, 0.77, 1, 0.4);
  }
  40% {
    transform: translate(110%, -50%) rotate(-30deg) translateY(-120%);
    animation-timing-function: linear;
  }
  70% {
    transform: translate(100%, -50%) rotate(120deg) translateY(-100%);
    animation-timing-function: linear;
  }
  80% {
    transform: translate(95%, 50%) rotate(80deg) translateY(-150%);
    animation-timing-function: cubic-bezier(0.64, 0.66, 0, 0.51);
  }
  100% {
    transform: translate(100%, 50%) rotate(120deg) translateY(0%);
  }
}

.spark:nth-child(3) {
  animation: spark-radius 2.05s 1s both, spark-three-motion 2.03s 1s both;
}

@keyframes spark-three-motion {
  0% {
    transform: translate(50%, 100%) rotate(-40deg) translateX(0%);
    animation-timing-function: cubic-bezier(0.62, 0.56, 1, 0.54);
  }
  30% {
    transform: translate(40%, 70%) rotate(20deg) translateX(20%);
    animation-timing-function: cubic-bezier(0, 0.21, 0.88, 0.46);
  }
  40% {
    transform: translate(65%, 20%) rotate(-50deg) translateX(15%);
    animation-timing-function: cubic-bezier(0, 0.24, 1, 0.62);
  }
  60% {
    transform: translate(60%, -40%) rotate(-50deg) translateX(20%);
    animation-timing-function: cubic-bezier(0, 0.24, 1, 0.62);
  }
  70% {
    transform: translate(70%, -0%) rotate(-180deg) translateX(20%);
    animation-timing-function: cubic-bezier(0.15, 0.48, 0.76, 0.26);
  }
  100% {
    transform: translate(70%, -0%) rotate(-360deg) translateX(0%) rotate(180deg)
      translateX(20%);
  }
}

.burst {
  stroke-width: 3;
}

.burst :nth-child(2n) {
  color: #ff783e;
}
.burst :nth-child(3n) {
  color: #ffab00;
}
.burst :nth-child(4n) {
  color: #55e214;
}
.burst :nth-child(5n) {
  color: #82d9f5;
}

.circle {
  r: 6;
}

.rect {
  width: 10px;
  height: 10px;
}

.triangle {
  d: path("M0,-6 L7,6 L-7,6 Z");
  stroke-linejoin: round;
}

.plus {
  d: path("M0,-5 L0,5 M-5,0L 5,0");
  stroke-linecap: round;
}

.burst:nth-child(4) {
  transform: translate(30px, 100%) rotate(150deg);
}

.burst:nth-child(5) {
  transform: translate(50%, 0%) rotate(-20deg);
}

.burst:nth-child(6) {
  transform: translate(100%, 50%) rotate(75deg);
}

.burst * {
}

@keyframes particle-fade {
  0%,
  100% {
    opacity: 0;
  }
  5%,
  80% {
    opacity: 1;
  }
}

.burst :nth-child(1) {
  animation: particle-fade 600ms 2.95s both, particle-one-move 600ms 2.95s both;
}
.burst :nth-child(2) {
  animation: particle-fade 600ms 2.95s both, particle-two-move 600ms 2.95s both;
}
.burst :nth-child(3) {
  animation: particle-fade 600ms 2.95s both,
    particle-three-move 600ms 2.95s both;
}
.burst :nth-child(4) {
  animation: particle-fade 600ms 2.95s both, particle-four-move 600ms 2.95s both;
}
.burst :nth-child(5) {
  animation: particle-fade 600ms 2.95s both, particle-five-move 600ms 2.95s both;
}
.burst :nth-child(6) {
  animation: particle-fade 600ms 2.95s both, particle-six-move 600ms 2.95s both;
}

@keyframes particle-one-move {
  0% {
    transform: rotate(0deg) translate(-5%) scale(0.0001, 0.0001);
  }
  100% {
    transform: rotate(-20deg) translateX(8%) scale(0.5, 0.5);
  }
}
@keyframes particle-two-move {
  0% {
    transform: rotate(0deg) translate(-5%) scale(0.0001, 0.0001);
  }
  100% {
    transform: rotate(0deg) translateX(8%) scale(0.5, 0.5);
  }
}
@keyframes particle-three-move {
  0% {
    transform: rotate(0deg) translate(-5%) scale(0.0001, 0.0001);
  }
  100% {
    transform: rotate(20deg) translateX(8%) scale(0.5, 0.5);
  }
}
@keyframes particle-four-move {
  0% {
    transform: rotate(0deg) translate(-5%) scale(0.0001, 0.0001);
  }
  100% {
    transform: rotate(-35deg) translateX(12%);
  }
}
@keyframes particle-five-move {
  0% {
    transform: rotate(0deg) translate(-5%) scale(0.0001, 0.0001);
  }
  100% {
    transform: rotate(0deg) translateX(12%);
  }
}
@keyframes particle-six-move {
  0% {
    transform: rotate(0deg) translate(-5%) scale(0.0001, 0.0001);
  }
  100% {
    transform: rotate(35deg) translateX(12%);
  }
}

.bar {
  width: 100%;
  height: 100%;
  ry: 50%;
  stroke-width: 10;
  animation: bar-in 900ms 3s both;
}

@keyframes bar-in {
  0% {
    stroke-dasharray: 0 180 0 226 0 405 0 0;
  }
  100% {
    stroke-dasharray: 0 0 181 0 227 0 405 0;
  }
}

.magnifier {
  animation: magnifier-in 600ms 3.6s both;
  transform-box: fill-box;
}

@keyframes magnifier-in {
  0% {
    transform: translate(20px, 8px) rotate(-45deg) scale(0.01, 0.01);
  }
  50% {
    transform: translate(-4px, 8px) rotate(-45deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
}

.magnifier .glass {
  cx: 27;
  cy: 27;
  r: 8;
  stroke-width: 3;
}
.magnifier .handle {
  x1: 32;
  y1: 32;
  x2: 44;
  y2: 44;
  stroke-width: 3;
}

#results {
  grid-area: results;
  background: hsl(0, 0%, 95%);
}
</style>
