import { onMounted } from "vue";
import * as echarts from "echarts";

export function useEcharts() {
  onMounted(() => {
    document.querySelector(".zhu")?.removeAttribute("_echarts_instance_");
    document.querySelector(".zhu2")?.removeAttribute("_echarts_instance_");

    document.querySelector(".huan")?.removeAttribute("_echarts_instance_");
    document.querySelector(".zhexian")?.removeAttribute("_echarts_instance_");

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".zhu") as HTMLElement);
    // 绘制图表
    let option: any = {
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: [23, 24, 18, 25, 27, 28, 25],
        },
      ],
    };
    myChart.setOption(option);

    setTimeout(function () {
      window.onresize = function () {};
    }, 200);

    var myChart1 = echarts.init(document.querySelector(".huan") as HTMLElement);
    myChart1.setOption({
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "技术方向",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "35",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 25, name: "前端" },
            { value: 34, name: "后端" },
            { value: 21, name: "安卓" },
            { value: 10, name: "ios" },
            { value: 10, name: "游戏开发" },
          ],
        },
      ],
    });
    setTimeout(function () {
      window.onresize = function () {
        myChart.resize();
        myChart1.resize();
      };
    }, 200);

    var myChart2 = echarts.init(
      document.querySelector(".zhexian") as HTMLElement
    );
    myChart2.setOption({
      title: {
        text: "",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["21级", "20级", "19级", "18级", "17级"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {
            title:'下载',
          },
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "游戏开发",
          "ACM",
          "ios开发",
          "android开发",
          "大数据",
          "信息安全",
          "前端开发",
          "后端开发",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "21级",
          type: "line",
          stack: "Total",
          data: [0, 4, 0, 3, 4, 6, 3, 12],
        },
        {
          name: "20级",
          type: "line",
          stack: "Total",
          data: [3, 11, 10, 40, 34, 30, 15, 30],
        },
        {
          name: "19级",
          type: "line",
          stack: "Total",
          data: [5, 23, 19, 34, 43, 40, 24, 40],
        },
        {
          name: "18级",
          type: "line",
          stack: "Total",
          data: [10, 27, 20, 35, 51, 44, 34, 51],
        },
        {
          name: "17级",
          type: "line",
          stack: "Total",
          data: [15, 30, 26, 40, 40, 50, 40, 50],
        },
      ],
    });

    var myChart3 = echarts.init(document.querySelector(".zhu2") as HTMLElement);
    myChart3.setOption({
      xAxis: {
        data: ["C++", "Java", "Python"],
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: [
            31,
            {
              value: 51,
              // 设置单个柱子的样式
              itemStyle: {
                color: "#ff6c37",
                shadowColor: "#91cc75",
                borderType: "dashed",
                opacity: 0.5,
              },
            },
            {
              value: 43,
              // 设置单个柱子的样式
              itemStyle: {
                color: "#91cc75",
                shadowColor: "#91cc75",
                borderType: "dashed",
                opacity: 0.5,
              },
            },
          ],
        },
      ],
    });

    //自适应设置
    setTimeout(function () {
      window.onresize = function () {
        myChart.resize();
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
      };
    }, 200);
  });
}
