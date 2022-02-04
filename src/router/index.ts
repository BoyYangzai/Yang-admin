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
        path: "/class",
        name: "班级信息",
        component: () => import("../components/main/Class.vue"),
        meta: {
          icon: "fa fa-graduation-cap",
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
      hidden: false,
    },
    children: [
      {
        path: "/infocontrol",
        name: "信息管理",
        component: () => import("../components/main/InfoControl.vue"),
        meta: {
          icon: "fa fa-file-text",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
