import { ElMessage } from "element-plus";
import { request } from "../network";
interface getBody {
  studentId: string;
}
interface postBody {
  studentId: string;
  password: string;
}
interface patchBody {
  Nickname?: string;
  Avatar?: string;
  Sex?: string;
  Description?: string;
  Background?: string;
}
export function getrequest(param: string) {
  return request.get(param);
}
export function postrequest(param: string, body: postBody) {
  return request.post(param, body);
}

export function patchrequest(param: string, body: patchBody) {
  return request.patch(param, body);
}

request.interceptors.request.use((config) => {
  if (window.localStorage.getItem("token") != "null") {
    config!.headers!.Authorization = `Bearer ${window.localStorage.getItem(
      "token"
    )}`;
  }
  return config;
});
request.interceptors.response.use(
  (res) => {
    if (res.status == 200) {
      if (res.data.code == 200) {
        if (res.data.data?.token) {
                  ElMessage.success({
                    message: `登录成功`,
                    center: true,
                  });
        } else {
        }
        return res;
      } else if (res.data.code == 1003) {
        ElMessage.error({
          message: res.data.message,
          center: true,
        });
        return;
      } else if (res.data.code == 1002) {
        ElMessage({
          message: res.data.message,
          center: true,
        });
        return;
      } else if (res.data.code == 1001) {
        ElMessage({
          message: res.data.message,
          center: true,
        });
        return;
      }
    } else {
      console.log("error");
      ElMessage.error({
        message: res.data.message,
        center: true,
      });
    }
  },
  (err: any) => {
    ElMessage.error({
      message: "请检查网络设置",
      center: true,
    });
    return;
  }
);
