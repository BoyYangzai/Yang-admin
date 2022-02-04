<template>
  <div class="house">
    <!-- <el-card class="box-card over">
        </el-card> -->
    <el-card class="box-card up">
      <template #header>
        <div class="card-header">
          <span>计算机学院发展分流意向</span>
        </div>
      </template>
      <div class="zhexian"></div>
    </el-card>
    <el-card class="box-card down">
      <template #header>
        <div class="card-header">
          <span>班级平均晚自习人数</span>
        </div>
      </template>
      <div class="zhu"></div>
    </el-card>
    <el-card class="box-card down">
      <template #header>
        <div class="card-header">
          <span>主流技术方向占比</span>
        </div>
      </template>
      <div class="huan"></div>
    </el-card>
    <el-card class="box-card down">
      <template #header>
        <div class="card-header">
          <span>编程语言偏向</span>
        </div>
      </template>
      <div class="zhu2"></div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useEcharts } from "../../Hooks/useEcharts";
useEcharts();
</script>

<style lang="less" scoped>
.house {
  display: flex;
  flex-wrap: wrap;
}
.card-header {
  display: flex;
  justify-content: space-between;

  align-items: center;
  font-size: 1vw;
  font-weight: 700;
  font-family: "黑体", Times, serif;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
  height: 100vh;
}
.over {
  width: 24vw;
}
.up {
  width: 95%;
  height: 43vh;
  margin-left: 0.5vw;
}
.zhexian {
  width: 100%;
  height: 36vh;
  margin-top: -18px;
}
.down {
  position: relative;
  top: 3vh;
  margin: 1.6vw;
  margin-left: 0.5vw;

  margin-top: -1vh;
  width: 30%;
  height: 43.8vh;
}
.zhu {
  width: 100%;
  height: 40vh;
  transform: translate(0, -3.5vh);
}
.huan {
  width: 100%;
  height: 40vh;
  transform: translate(0, -3.5vh);
}
.zhu2 {
  width: 100%;
  height: 40vh;
  transform: translate(0, -3.5vh);
}
</style>
