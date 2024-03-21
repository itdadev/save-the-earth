import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUserLoggedIn = create(
  persist(
    devtools(set => ({
      loggedIn: false,
      setLoggedIn: () => set({ user: true }),
      clearLoggedIn: () => set({ user: false }),
    })),
    { name: "userLogin" },
  ),
);

export { useUserLoggedIn };
