import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Issue = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  publishedAt: string;
};

export type AppStore = {
  issues: Issue[];
  setIssues: (issues: Issue[]) => void;
};

type AppStoreState = {
  $$storeMutators?: Array<[(state: AppStore) => void, string]>;
} & AppStore;

export const useAppStore = create(
  persist<AppStoreState>(
    (set) => ({
      issues: [],
      setIssues: (issues) => set({ issues })
    }),
    {
      name: "squirrel-news-tab-storage",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
