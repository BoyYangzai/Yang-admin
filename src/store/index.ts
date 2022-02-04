import { defineStore } from "pinia";
import { getrequest } from "../network/login/login";
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
      getrequest(`user/info/${studentId}`).then((res) => {
        this.userInfo.studentId = res.data.data.userInfo.studentId;
        this.userInfo.nickname = res.data.data.userInfo.nickname;
        this.userInfo.avatar = res.data.data.userInfo.avatar;
        this.userInfo.sex = res.data.data.userInfo.sex;
        this.userInfo.description = res.data.data.userInfo.description;
        this.userInfo.fan = res.data.data.userInfo.fan;
      });
    },
  },
});
