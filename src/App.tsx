import { useEffect } from "react";
import { Article, useAppStore } from "./store";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import NewsItem from "./components/NewsItem";
import "./i18n";
import { fetchArticles } from "./utils/fetchArticles";
import i18n from "./i18n";

export default function App() {
  const { articles, setArticles, setMode } = useAppStore();

  useEffect(() => {
    const handleMode = () => {
      const currentMode = localStorage.theme;

      if (
        currentMode === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setMode("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setMode("light");
      }
    };
    
    handleMode();
  }, [setMode]);

  useEffect(() => {
    const defaultLanguage = navigator.language.split(/[-_]/)[0];
    i18n.changeLanguage(defaultLanguage !== "de" ? "en" : "de");
  }, []);

  useEffect(() => {
    fetchArticles(setArticles);
  }, [setArticles]);

  return (
    <div className="font-lato dark:bg-slate-800 lg:h-lvh">
      <div className="flex flex-col px-4 md:px-32">
        <Navbar />
        <SearchBar />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12 mb-10">
          {articles.map((article: Article) => (
            <div className="" key={article.id}>
              <NewsItem article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
