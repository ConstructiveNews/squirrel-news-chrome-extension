import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Issue = {
  id: number;
  headline: string;
  teaser: string;
  image: string;
  issueURL: string;
  publishedAt: string;
  language: "en" | "de";
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
