import { api } from "../../../shared/api/AxiosInstanse";

export const carsApi = {
  getAll: () => api.get("shifts"),
};
