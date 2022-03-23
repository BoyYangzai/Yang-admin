import { postrequest } from "../login/login";
export function setAvatar(studentId:string,QQ: string) {
    return postrequest("user/avatar", {
      "studentId": studentId,
      "qq": QQ
    });
}