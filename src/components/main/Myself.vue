<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span style="font-weight: 700">我的资料卡</span>
      </div>
    </template>
    <el-descriptions title="" border>
      <el-descriptions-item label-align="center" label="学号" width="50px">
        {{ store.userInfo.studentId }}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" label="性别" width="50px">{{
        store.userInfo.sex
      }}</el-descriptions-item>

      <el-descriptions-item label="头像" label-align="center" width="50px">
        <img
          class="avatar"
          :src="store.userInfo.avatar"
          alt=""
          style="display: inline; vertical-align: middle"
        />
      </el-descriptions-item>
      <el-descriptions-item label-align="center" label="学院"
        >计算机科学与技术学院</el-descriptions-item
      >
      <el-descriptions-item label-align="center" label="专业"
        >数据科学与大数据技术</el-descriptions-item
      >
      <el-descriptions-item label="排名" label-align="center"
        >NO.1</el-descriptions-item
      >

      <el-descriptions-item label="技术栈" label-align="center">
        <el-tag
          v-for="item in dynamicTags"
          :key="item"
          class="mx-1"
          closable
          @close="handleClose(item)"
          type="warning"
          effect="dark"
        >
          {{ item }}
        </el-tag>
        <el-input
          v-if="inputVisible"
          ref="InputRef"
          v-model="inputValue"
          class="ml-1 w-20"
          size="small"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button
          v-else
          class="button-new-tag ml-1"
          size="small"
          @click="showInput"
        >
          +添加技术栈
        </el-button>
      </el-descriptions-item>
      <el-descriptions-item label-align="center" label="家庭住址"
        >翻斗大街翻斗花园二号楼1001室</el-descriptions-item
      >
    </el-descriptions>
    <div class="leida"></div>
  </el-card>
</template>

<script lang="ts" setup>
import { useStore } from "../../store";

import * as echarts from "echarts";

import { ref, nextTick, onMounted } from "vue";
import type { ElInput } from "element-plus";
import { useEcharts } from "../../Hooks/useEcharts";
let store = useStore();

const inputValue = ref("");
const dynamicTags = ref(["前端", "Vue2", "Vue3"]);
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof ElInput>>();

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = "";
};

onMounted(() => {
  document.querySelector(".leida")?.removeAttribute("_echarts_instance_");

  var myChart4 = echarts.init(document.querySelector(".leida") as HTMLElement);
  // 绘制图表
  let option4 = {
    color: ["#67F9D8", "#FFE434", "#56A3F1", "#FF917C"],
    title: {
      text: "综合素质评测",
    },
    legend: {},
    radar: [
      {
        indicator: [
          { text: "德" },
          { text: "智" },
          { text: "体" },
          { text: "美" },
          { text: "劳" },
        ],
        center: ["25%", "50%"],
        radius: 120,
        startAngle: 90,
        splitNumber: 4,
        shape: "circle",
        axisName: {
          formatter: "【{value}】",
          color: "#428BD4",
        },
        splitArea: {
          areaStyle: {
            color: ["#77EADF", "#26C3BE", "#64AFE9", "#428BD4"],
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowBlur: 10,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(211, 253, 250, 0.8)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(211, 253, 250, 0.8)",
          },
        },
      },
      {
        indicator: [
          { text: "高等数学", max: 100 },
          { text: "大学物理", max: 100 },
          { text: "英语", max: 100 },
          { text: "体育", max: 100 },
          { text: "思修", max: 100 },
          { text: "专业技能", max: 72 },
        ],
        center: ["75%", "50%"],
        radius: 120,
        axisName: {
          color: "#fff",
          backgroundColor: "#666",
          borderRadius: 3,
          padding: [3, 5],
        },
      },
    ],
    series: [
      {
        type: "radar",
        emphasis: {
          lineStyle: {
            width: 4,
          },
        },
        data: [
          {
            value: [100, 8, 0.4, -80, 2000],
            name: "综合素质最高分",
          },
          {
            value: [60, 5, 0.3, -100, 1500],
            name: "我的综合素质",
            areaStyle: {
              color: "rgba(255, 228, 52, 0.6)",
            },
          },
        ],
      },
      {
        type: "radar",
        radarIndex: 1,
        data: [
          {
            value: [90, 94, 100, 100, 99, 70],
            name: "学科测评最高分",
            symbol: "rect",
            symbolSize: 12,
            lineStyle: {
              type: "dashed",
            },
            label: {
              show: true,
              formatter: function (params: any) {
                return params.value;
              },
            },
          },
          {
            value: [80, 93, 60, 90, 70, 60],
            name: "我的学科综合测评",
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: "rgba(255, 145, 124, 0.1)",
                  offset: 0,
                },
                {
                  color: "rgba(255, 145, 124, 0.9)",
                  offset: 1,
                },
              ]),
            },
          },
        ],
      },
    ],
  };
  myChart4.setOption(option4);
  //自适应设置
  setTimeout(function () {
    window.onresize = function () {
      myChart4.resize();
    };
  }, 100);
});
</script>
<style scoped lang="less">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1vw;
  font-weight: 700;
  font-family: "黑体", Times, serif;
}
:deep(.el-card__body) {
  height: 100%;
}
.text {
  font-size: 14px;
}

.box-card {
  width: 97%;
  height: 94.3%;
  margin-left: 0.5vw;
}

.leida {
  width: 80%;
  height: 50vh;
  margin-top: 5vh;
}
.avatar {
  width: 5vw;
}
</style>
