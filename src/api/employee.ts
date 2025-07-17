import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

export type queryEmployeeResult = {
  code: number;
  msg: string | null;
  data: {
    record: any[];
    total: number;
  };
};

export type Result = {
  code: number;
  msg: string | null;
  data: {
    createTime: string;
    createUser: number;
    id: number;
    idNumber: number;
    name: string;
    password: string;
    phone: number;
    sex: number;
    status: number;
    updateTime: string;
    updateUser: number;
    username: string;
  };
};

/**条件查询员工信息 */
export const getEmployee = (data: object) => {
  return http.request<queryEmployeeResult>(
    "get",
    baseUrlApi("admin/employee/page"),
    { data }
  );
};

/** 获取员工管理-权限-菜单权限-根据员工 id 查对应菜单 */
export const getEmployeeMenuIds = (data?: object) => {
  return http.request<Result>("post", baseUrlApi("admin/employee"), { data });
};
