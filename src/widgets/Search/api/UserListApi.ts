import { api } from "../../../shared/api/AxiosInstanse";

export const UserListApi = {
  getAll: () => api.get("/user"),
};
