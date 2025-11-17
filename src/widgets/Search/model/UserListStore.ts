import { create } from "zustand";
import type { User } from "../type/User";
import { UserListApi } from "../api/UserListApi";

interface UserResponse {
  count: number;
  users: User[];
}

interface UpdateUserDto {
  username?: string;
  firstName?: string;
  lastName?: string;
  isGoodWorker?: boolean;
}

interface UserListInitialStore {
  error: string | null;
  loading: boolean;
  users: UserResponse;

  fetchUsers: () => Promise<void>;
  updateUser: (id: number, dto: UpdateUserDto) => Promise<void>;
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

  updateUser: async (id: number, patch: Partial<User>) => {
    set({ loading: true });

    try {
      const { data } = await UserListApi.updateUser(id, patch);

      set((state) => ({
        users: {
          ...state.users,
          users: state.users.users.map((u) => (u.id === id ? data : u)),
        },
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
