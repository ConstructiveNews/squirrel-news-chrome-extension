import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Article } from "./types";

type AppStore = {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
  mode: string;
  setMode: (mode: string) => void;
};

type AppStoreState = {
  $$storeMutators?: Array<[(state: AppStore) => void, string]>;
} & AppStore;

export const useAppStore = create(
  persist<AppStoreState>(
    (set) => ({
      articles: [],
      setArticles: (articles) => set({ articles }),
      mode: "",
      setMode: (mode) => set({ mode }),
    }),
    {
      name: "squirrel-news-tab-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
