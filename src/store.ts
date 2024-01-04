import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Article = {
  id: string;
  credit: string;
  dateCreated: number;
  image: string;
  source: string;
  teaser: string;
  title: string;
  url: string;
};

export type AppStore = {
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
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
