import { defineStore } from "pinia";
import { getrequest, postrequest } from "../network/login/login";
interface tag {
  name: string;
  path: string;
}
interface userInfo {
  studentId?: string;
  nickname?: string;
  avatar?: string;
  sex?: string;
  description?: string;
  follower?: number;
  fan?: number;
  isFollow?: boolean | undefined;
}

let userInfo: userInfo = {
  studentId: "请检查网络设置",
  nickname: "",
  avatar: "",
  sex: "",
  description: "",
  follower: 0,
  fan: 0,
  isFollow: undefined,
};
let tagList: tag[] = [];
export const useStore = defineStore("main", {
  state: () => {
    return {
      userInfo,
      tagList,
    };
  },
  getters: {},
  actions: {
    getUserInfo(studentId: string) {
      postrequest(`admin/query`, { studentId: studentId }).then((res) => {
        console.log(res,'213');
        
        this.userInfo.studentId = res.data.data.studentId;
        this.userInfo.nickname = res.data.data.nickname;
        this.userInfo.avatar = res.data.data.avatar;
        this.userInfo.sex = res.data.data.sex;
      });
    },
  },
});
