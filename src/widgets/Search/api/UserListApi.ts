import { api } from "../../../shared/api/AxiosInstanse";

export const UserListApi = {
  getAll: () => api.get("/user"),
  updateUser: (id: number, data: any) => api.patch(`/user/${id}`, data),
  addShift: (
    userId: number,
    shift: { operation: string; date: string; status: string }
  ) => api.post(`/user/shift/${userId}`, shift),
};
