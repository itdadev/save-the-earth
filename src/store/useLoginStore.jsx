import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUserLoggedIn = create(
  persist(
    devtools(set => ({
      loggedIn: false,
      setLoggedIn: () => set({ loggedIn: true }),
      clearLoggedIn: () => set({ loggedIn: false }),
    })),
    { name: "userLogin" },
  ),
);

export { useUserLoggedIn };
