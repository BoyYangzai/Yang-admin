<script setup lang="ts">
import Theme from "./components/common/Theme.vue";


</script>

<template>
  <theme></theme>
  <router-view> </router-view>
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
</style>
