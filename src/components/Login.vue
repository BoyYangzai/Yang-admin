<template>
  <div class="loginpage">
    <img src="../assets/picture/1.png" alt="" class="bgc" />
    <div class="login" @keyup.enter="enter">
      <el-form
        ref="loginFormRef"
        label-width="80px"
        :model="loginForm"
        :rule="login_rules"
        v-if="islogin"
        key="login_form"
        v-loading="isloading"
        element-loading-background="rgba(0, 0, 0, 0.01)"
      >
    <img src="../assets/picture/light.png" alt="" class="logo" />

<h1>Yang-admin-system</h1>

        <div class="info">
          Yang-admin-system是基于Vue3.2x+Vite2.x+Typescript+Axios+Element
          Plus+Pinia+Vue-router4.x+Vueuse搭建的后台管理系统
        </div>
        <el-form-item label="用户名" prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="loginForm.username"
            autocomplete="off"
            v-if="islogin"
            key="login_name"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
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
        :rule="register_rules"
        v-if="!islogin"
        key="register_form"
        v-loading="isloading"
        element-loading-background="rgba(0, 0, 0, 0.01)"
      >
    <img src="../assets/picture/light.png" alt="" class="logo" />
    
        <h1>账号注册</h1>
                <div class="info">
         如发现任何bug，请联系菜鸟作者Yang
        </div>
        <div class="info">
          QQ:2365539910
          Wechat:hexiaoyangQAQ
        </div>
        <el-form-item label="用户名" prop="username">
          <el-input
            placeholder="请输入您的学号"
            v-model="registerForm.username"
            v-if="!islogin"
            key="register_name"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            placeholder="请自定义密码"
            show-password
            v-model="registerForm.password"
            key="register_password"
          ></el-input>
        </el-form-item>
      </el-form>

      <transition name="login">
        <el-button
          size="default"
          @click="submitLoginForm(loginFormRef)"
          :class="{ loginbtn: islogin, registerbtn: !islogin }"
          >登录</el-button
        >
      </transition>
      <el-button
        size="default"
        :class="{ loginbtn: !islogin, registerbtn: islogin }"
        @click="submitRegisterForm(registerFormRef)"
        >注册</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, reactive } from "vue";
import { ElForm, ElMessage } from "element-plus";
import router from "../router";
import { postrequest } from "../network/login/login";
import { useStore } from "../store";
let store=useStore()
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
const submitLoginForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
  if (currenttpye.value == "register") {
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
            if (window.localStorage.getItem("token") == "null") {
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
        console.log("error submit!");
        return false;
      }
    });
  }
};
const submitRegisterForm = (
  formEl: InstanceType<typeof ElForm> | undefined
) => {
  if (currenttpye.value == "login") {
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
            console.log("erro");
            isloading.value = false;
          });
      } else {
        console.log("error submit!");
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
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;

}
.logo{
  width: 20%;
  transform: translate(0, -2vh);
}
.info {
  font-size: 10px;
  color: rgba(158, 154, 154, 0.911);
  transform: translate(0, -1.5vh);
}
h1 {
  font-size:2vw;
  transform: translate(0, -3vh);
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

.loginbtn {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 36px;
  transform: translate(-50%, 345%);
  transition: all 1.5s;
}
.registerbtn {
  top: 50%;
  left: 50%;
  transform: translate(130%, 385%);
  width: 60px;
  height: 33px;
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
</style>
