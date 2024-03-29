import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { IssueTimestamp, Article } from "./types";

type AppStore = {
  articles: Article[];
  resetArticles: () => void;
  setArticles: (articles: Article[]) => void;
  themeMode: string;
  setThemeMode: (themeMode: string) => void;
  issueTimestamp: IssueTimestamp | null;
  setIssueTimestamp: (issueTimestamp: IssueTimestamp) => void;
};

type AppStoreState = {
  $$storeMutators?: Array<[(state: AppStore) => void, string]>;
} & AppStore;

export const useAppStore = create(
  persist<AppStoreState>(
    (set, get) => ({
      articles: [],
      resetArticles: () =>
        set({
          articles: [],
          issueTimestamp: null
        }),
      setArticles: (articles) =>
        set({ articles: [...get().articles, ...articles] }),
      themeMode: "",
      setThemeMode: (themeMode) => set({ themeMode }),
      issueTimestamp: null,
      setIssueTimestamp: (issueTimestamp) => set({ issueTimestamp })
    }),
    {
      name: "squirrel-news-tab-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
