import { api } from "../../../shared/api/AxiosInstanse";
import type { User } from "../type/User";

export const UserListApi = {
  getAll: () => api.get("/user"),
};
