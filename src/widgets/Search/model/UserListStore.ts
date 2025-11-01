import { create } from "zustand";
import type { User } from "../type/User";
import { UserListApi } from "../api/UserListApi";

interface UserResponse {
  count: number;
  users: User[];
}

interface UserListInitialStore {
  error: string | null;
  loading: boolean;
  users: UserResponse;
  fetchUsers: () => Promise<void>;
}

export const UserListStore = create<UserListInitialStore>((set) => ({
  loading: false,
  users: { count: 0, users: [] },
  error: null,

  fetchUsers: async () => {
    set({ loading: true });
    try {
      const { data } = await UserListApi.getAll();
      set({ users: data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
