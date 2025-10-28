import { create } from "zustand";
import { carsApi } from "../api/ApplicationsApi";
import type { ApplicationsProp } from "../types/ApplicationsTypes";

interface ApplicationsState {
  shifts: ApplicationsProp[];
  error: string | null;
  loading: boolean;
  fetchApplications: () => Promise<void>;
}

export const useCarsStore = create<ApplicationsState>((set, get) => ({
  shifts: [],
  loading: false,
  error: null,

  fetchApplications: async () => {
    try {
      const { data } = await carsApi.getAll();
      set({ shifts: data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
