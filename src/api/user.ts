import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

export type UserResult = {
  code: number;
  msg: string | null;
  data: {
    id: number;
    userName: string;
    name: string;
    token: string;
  };
};
//token时间戳自动设置为7天，因为后端没有传refreshToken,所以我们去除这个逻辑

// export type RefreshTokenResult = {
//   success: boolean;
//   data: {
//     /** `token` */
//     accessToken: string;
//     /** 用于调用刷新`accessToken`的接口时所需的`token` */
//     refreshToken: string;
//     /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
//     expires: Date;
//   };
// };

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", baseUrlApi("admin/employee/login"), {
    data
  });
};

// /** 刷新`token` */
// export const refreshTokenApi = (data?: object) => {
//   return http.request<RefreshTokenResult>("post", "/refresh-token", { data });
// };
