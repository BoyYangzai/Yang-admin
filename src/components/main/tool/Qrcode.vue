<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span style="font-weight: 700">自定义二维码</span>
      </div>
    </template>
    <img :src="qrcode" alt="QR Code" />

    <input v-model="text" type="text" />
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useQRCode } from "@vueuse/integrations/useQRCode";

const text = ref("请输入二维码文本内容");
const qrcode = useQRCode(text);
</script>

<style lang="less" scoped>
img{
  vertical-align: middle;
}</style>
