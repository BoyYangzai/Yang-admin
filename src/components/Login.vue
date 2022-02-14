<template>
  <div class="loginpage">
    <img src="../assets/picture/1.png" alt="" class="bgc" />
    <div class="login" @keyup.enter="enter">
      <el-form
        ref="loginFormRef"
        label-width="80px"
        :model="loginForm"
        :rules="login_rules"
        v-show="islogin"
        key="login_form"
        v-loading="isloading"
        element-loading-background="rgba(0, 0, 0, 0.01)"
      >
        <img src="../assets/picture/light.png" alt="" class="logo" />

        <h1 class="gradient-text">Yang-admin-system</h1>

        <div class="info">
          Yang-admin-system是基于Vue3.2x+Vite2.x+Typescript+Axios+Element
          Plus+Pinia+Vue-router4.x+Vueuse搭建的后台管理系统
        </div>
        <el-form-item label="用户名" prop="username" v-if="islogin">
          <el-input
            ref="loginForm_username"
            placeholder="请输入用户名"
            v-model="loginForm.username"
            autocomplete="off"
            v-if="islogin"
            key="login_name"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="islogin">
          <el-input
            ref="loginForm_password"
            placeholder="请输入密码"
            show-password
            v-model="loginForm.password"
            v-if="islogin"
            key="login_password"
          ></el-input>
        </el-form-item>
      </el-form>

      <el-form
        ref="registerFormRef"
        label-width="80px"
        :model="registerForm"
        :rules="register_rules"
        v-show="!islogin"
        key="register_form"
        v-loading="isloading"
        element-loading-background="rgba(0, 0, 0, 0.01)"
      >
        <img src="../assets/picture/light.png" alt="" class="logo" />

        <h1 class="gradient-text">账号注册</h1>
        <div class="info">如发现任何bug，请联系菜鸟作者Yang</div>
        <div class="info">QQ:2365539910 Wechat:hexiaoyangQAQ</div>
        <el-form-item label="用户名" prop="username" v-if="!islogin">
          <el-input
            ref="register_username"
            placeholder="请输入您的学号"
            v-model="registerForm.username"
            v-if="!islogin"
            key="register_name"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="!islogin">
          <el-input
            ref="register_password"
            placeholder="请自定义密码"
            show-password
            v-model="registerForm.password"
            v-if="!islogin"
            key="register_password"
          ></el-input>
        </el-form-item>
      </el-form>

      <transition name="login">
        <button
          @click="submitLoginForm(loginFormRef)"
          :class="{ loginbtn: islogin, registerbtn: !islogin }"
        class="custom-btn"
          >登录</button
        >
      </transition>
      <button
        :class="{ loginbtn: !islogin, registerbtn: islogin }"
        class="custom-btn"
        @click="submitRegisterForm(registerFormRef)"
        >注册</button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, reactive, onMounted } from "vue";
import { ElForm, ElMessage } from "element-plus";
import router from "../router";
import { postrequest } from "../network/login/login";
import { useStore } from "../store";
let store = useStore();
let islogin: Ref<boolean> = ref(true);
let isloading: Ref<boolean> = ref(false);
let currenttpye: Ref<string> = ref("login");
let loginURL = "user/login";
let registerURL = "user/register";
const formSize = ref("");
const loginFormRef = ref<InstanceType<typeof ElForm>>();
const registerFormRef = ref<InstanceType<typeof ElForm>>();

const loginForm = reactive({
  username: "",
  password: "",
});
const login_rules = reactive({
  username: [
    {
      required: true,

      message: "用户名不能为空",
      trigger: "blur",
    },
    {
      min: 8,
      max: 8,
      message: "请正确填写学号",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
  ],
});
const registerForm = reactive({
  username: "",
  password: "",
});
const register_rules = reactive({
  username: [
    {
      required: true,

      message: "用户名不能为空",
      trigger: "blur",
    },
    {
      min: 8,
      max: 8,
      message: "请正确填写学号",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
    {
      min: 6,
      message: "密码长度不能低于6位",
      trigger: "blur",
    },
  ],
});
const register_password=ref()

const submitLoginForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
  if (currenttpye.value == "register") {
loginForm.username=''
loginForm.password=''

    islogin.value = !islogin.value;
    currenttpye.value = "login";
  } else {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        isloading.value = true;
        postrequest(loginURL, {
          studentId: loginForm.username,
          password: loginForm.password,
        }).then((res) => {
          if (res) {
            
            
            if ( window.localStorage.getItem("token")==null|| window.localStorage.getItem("token") == 'null') {
              window.localStorage.setItem("token", res.data.data.token);
            }
            
            window.localStorage.setItem("userId", loginForm.username);
            window.localStorage.setItem(
              "tagList",
              JSON.stringify([
                {
                  name: "首页",
                  path: "/house",
                },
              ])
            );
            router.replace("/core");
          }
          isloading.value = false;
        });
      } else {
        return false;
      }
    });
  }
};
const submitRegisterForm = (
  formEl: InstanceType<typeof ElForm> | undefined
) => {
  if (currenttpye.value == "login") {
    registerForm.username=''
registerForm.password=''
    islogin.value = !islogin.value;
    currenttpye.value = "register";
  } else {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        isloading.value = true;
        postrequest(registerURL, {
          studentId: registerForm.username,
          password: registerForm.password,
        })
          .then((res) => {
            if (res) {
              islogin.value = !islogin.value;
              currenttpye.value = "login";
            }
            isloading.value = false;
          })
          .catch(() => {
            isloading.value = false;
          });
      } else {
        return false;
      }
    });
  }
};

let enter = function () {
  if (currenttpye.value == "login") {
    submitLoginForm(loginFormRef.value);
  } else {
    submitRegisterForm(registerFormRef.value);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}
.logo {
  width: 20%;
  transform: translate(0, -2vh);
}
.info {
  font-size: 10px;
  color: rgba(158, 154, 154, 0.911);
  transform: translate(0, -1.5vh);
}
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  width: 32%;

  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.256);
  box-sizing: border-box;
  padding: 1.5vw;
}
.el-form-item {
  margin: 42px;
  transform: translate(-10px, -4vh);
}
.el-form-item :deep(.el-form-item__label) {
  font-size: 18px;
}
.el-form-item .el-input {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.btn {
  display: flex;
  justify-content: center;
}
.el-button {
  color: rgba(0, 0, 0, 0.623);
  width: 100px;
  box-shadow: 0, 0, 0;
  background: rgba(0, 153, 255, 0.657);
}
:deep(.el-loading-mask) {
  background-color: rgba(100, 89, 148, 0.075);
}

.bgc {
  position: absolute;
  z-index: -999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

/* btn */
.custom-btn {
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

.loginbtn {
  background-color: #89d8d3;
background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  border: none;
  z-index: 1;
}
.loginbtn:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
   background-color: #4dccc6;
background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.loginbtn:hover {
  color: #fff;
}
.loginbtn:hover:after {
  top: 0;
  height: 100%;
}


.loginbtn {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 40px;
  transform: translate(-50%, 345%);
  transition: all 1.5s;
}


.registerbtn {
  border: none;
  color: #000;
}
.registerbtn:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.registerbtn:hover {
  color: #000;
}
.registerbtn:hover:after {
  left: auto;
  right: 0;
  width: 100%;
}


.registerbtn {
  top: 50%;
  left: 50%;
  transform: translate(130%, 385%);
  width: 65px;
  height: 36px;
  font-size: 7px;
  text-align: center;
  line-height: 23px;
  position: absolute;
  transition: all 1.5s;
}
.registerbtn :deep(span) {
  position: absolute;
  transform: translate(0px, 0px);
}
/* h1 css 样式 */
body {
  height: 100vh;
  width: 100vw;
  background-color: #fbf8f1;

  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-family: "Poppins", sans-serif;
  font-size: 2vw;
  transform: translate(0, -3vh);
}

.gradient-text {
  color: transparent;
  background: conic-gradient(
    #d9d7f1 12%,
    #baabda 12%,
    #baabda 33%,
    #e7fbbe 33%,
    #e7fbbe 55%,
    #ffcbcb 55%,
    #ffcbcb 70%,
    #b5deff 70%,
    #b5deff 87%,
    #f7d1ba 87%
  );
  background-size: 50%;
  background-clip: text;
  -webkit-background-clip: text;

  animation: expand-rev 0.5s ease forwards;

  cursor: pointer;
}

.gradient-text:hover {
  animation: expand 0.5s ease forwards;
}

@keyframes expand {
  0% {
    background-size: 50%;
    background-position: 0 0;
  }
  20% {
    background-size: 55%;
    background-position: 0 1em;
  }
  100% {
    background-size: 325%;
    background-position: -10em -4em;
  }
}

@keyframes expand-rev {
  0% {
    background-size: 325%;
    background-position: -10em -4em;
  }
  20% {
    background-size: 55%;
    background-position: 0 1em;
  }
  100% {
    background-size: 50%;
    background-position: 0 0;
  }
}
</style>
