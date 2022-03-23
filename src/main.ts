import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";
import { useStore } from "./store";
import "./assets/css/font-awesome.min.css"; //font 样式
import { yangDirective } from "./utils/directive";
console.log(import.meta.env, "ENV");

// const test = {
//   install(app, options) {
//     app.config.globalProperties.myTestFunc = () => {
//       console.log(options);
//     };
//     app.config.globalProperties.myTestContext = "Yang";
//   },
// };
createApp(App)
  .use(router)
  // .use(test, {
  //   name: "Yang",
  // })
  .use(yangDirective)
  .use(createPinia())
  .mount("#app");
let store = useStore();

router.beforeEach((to, from, next) => {
  store.tagList = JSON.parse(window.localStorage.getItem("tagList") as string); //pinia状态持久化
  if (to.name !== "login") {
    if (
      window.localStorage.getItem("token") !== null &&
      window.localStorage.getItem("token") != "null"
    ) {
      store.getUserInfo(window.localStorage.getItem("userId") as string);
      next();
    } else if (
      window.localStorage.getItem("token") == null ||
      window.localStorage.getItem("token") == "null"
    ) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});
