<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span style="font-weight: 700">富文本编辑器</span>
      </div>
    </template>
    <div id="toolbar-container"></div>
    <div id="editor-container" style="width: 100%; height: 100%"></div>
  </el-card>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import "@wangeditor/editor/dist/css/style.css";
import {
  createEditor,
  createToolbar,
  IEditorConfig,
  IDomEditor,
} from "@wangeditor/editor";

onMounted(() => {
  const editorConfig: Partial<IEditorConfig> = {};
  editorConfig.placeholder = "默认居中对齐";
  editorConfig.onChange = (editor: IDomEditor) => {
    // 当编辑器选区、内容变化时，即触发
  };

  // 创建编辑器
  const editor = createEditor({
    selector: "#editor-container",
    config: editorConfig,
    mode: "simple", // 或 'simple' 参考下文
  });
  // 创建工具栏
  const toolbar = createToolbar({
    editor,
    selector: "#toolbar-container",
    mode: "default", // 或 'simple' 参考下文
  });
});
</script>

<style lang="less" scoped>
:deep(.el-card__body) {
  padding: 0;
  height: 100%;
}
</style>
