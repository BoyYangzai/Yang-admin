import { patchrequest } from "../login/login";
export function setAvatar(QQ: string) {
    return patchrequest("user/info", {
      "Avatar": `https://q1.qlogo.cn/g?b=qq&nk=${QQ}&s=100`,
    });
}