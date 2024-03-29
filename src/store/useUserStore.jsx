import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    devtools(set => ({
      user: null,
      setUser: userData => set({ user: userData }),
      clearUser: () => set({ user: null }),
    })),
    { name: "userStore" },
  ),
);

export { useUserStore };
