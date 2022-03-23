import { ElMessage } from "element-plus";

export const vCopy = {
  mounted(el: HTMLElement, args: any) {
    el.addEventListener("click", () => {
      try {
        if (args.value.text) {
          let newtextarea = document.createElement("textarea"); 
          //copy命令只能复制文本框中的内容
          el.appendChild(newtextarea);
          newtextarea.value = args.value.text;
          newtextarea.style.display = "block";
          newtextarea.select(); //选中
          document.execCommand("copy"); //调用复制
          ElMessage.success({
            message: "复制成功",
          });
          el.removeChild(newtextarea);
        }
      } catch (err) {
        ElMessage.error({
          message: "未传入复制内容",
        });
      }
    });
  },
};