import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

let normalRoutes: any = [];
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "login",
    component: () => import("../components/Login.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/core",
    name: "core",
    component: () => import("../components/Core.vue"),
    meta: {
      hidden: true,
    },
    redirect: "house",
    children: [
      {
        path: "/house",
        name: "首页",
        component: () => import("../components/main/House.vue"),
        meta: {
          icon: "fa fa-desktop",
        },
      },
    ],
  },
  {
    path: "/house",
    name: "首页 ",
    component: () => import("../components/Core.vue"),
    meta: {
      icon: "fa fa-desktop",
    },
    redirect: "house",
  },
  {
    path: "/core",
    name: "学生信息",
    component: () => import("../components/Core.vue"),
    meta: {
      icon: "fa fa-id-card-o   ",
      hidden: false,
    },
    redirect: "/myself",
    children: [
      {
        path: "/myself",
        name: "个人档案",
        component: () => import("../components/main/Myself.vue"),
        meta: {
          icon: "fa fa-user-o",
        },
      },

      {
        path: "/test3",
        name: "没想好三",
        component: () => import("../components/main/test3.vue"),
        meta: {
          icon: "fa fa-hourglass-start",
        },
      },
      {
        path: "/test4",
        name: "没想好四",
        component: () => import("../components/main/test4.vue"),
        meta: {
          icon: "fa fa-folder ",
        },
      },
    ],
  },
  {
    path: "/classinfo",
    name: "班级信息",
    component: () => import("../components/Core.vue"),
    meta: {
      icon: "fa fa-address-book",
      hidden: false,
    },
    redirect: "/test1",
    children: [
      {
        path: "/class",
        name: "我的班级",
        component: () => import("../components/main/Class.vue"),
        meta: {
          icon: "fa fa-graduation-cap",
        },
      },
      {
        path: "/test5",
        name: "没想好五",
        component: () => import("../components/main/test5.vue"),
        meta: {
          icon: "fa fa-handshake-o",
        },
      },
    ],
  },
  {
    path: "/gradeinfo",
    name: "年级信息",
    component: () => import("../components/Core.vue"),
    meta: {
      icon: "fa fa-university",
      hidden: false,
    },
    redirect: "/infoconrtol",
    children: [
      {
        path: "/infocontrol",
        name: "信息管理",
        component: () => import("../components/main/InfoControl.vue"),
        meta: {
          icon: "fa fa-file-text",
        },
      },
      {
        path: "/test1",
        name: "没想好一",
        component: () => import("../components/main/test1.vue"),
        meta: {
          icon: "fa fa-users",
        },
      },
    ],
  },
  {
    path: "/control",
    name: "功能",
    component: () => import("../components/Core.vue"),
    meta: {
      icon: "fa fa-cog  fa-spin",
    },
    children: [
      {
        path: "/editor",
        name: "富文本编辑器",
        component: () => import("../components/main/tool/Editor.vue"),
        meta: {
          icon: "fa fa-text-width",
        },
      },
      {
        path: "/404show",
        name: "404页面",
        component: () => import("../components/main/tool/404show.vue"),
        meta: {
          icon: "fa fa-exclamation-circle fa-lg",
        },
      },
      {
        path: "/echarts",
        name: "自定义图表",
        component: () => import("../components/main/tool/Echarts.vue"),
        meta: {
          icon: "fa fa-line-chart",
        },
      },
      {
        path: "/qrcode",
        name: "自定义二维码",
        component: () => import("../components/main/tool/Qrcode.vue"),
        meta: {
          icon: "fa fa-qrcode fa-lg",
        },
      },
      {
        path: "/personCard",
        name: "人物卡片",
        component: () => import("../components/main/tool/PersonCard.vue"),
        meta: {
          icon: "fa fa-id-card ",
        },
      },
      {
        path: "/waterMarker",
        name: "自定义水印",
        component: () => import("../components/main/tool/waterMarker.vue"),
        meta: {
          icon: "fa fa-tags",
        },
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../components/404.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
    meta: {
      hidden: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
