import { useEffect } from "react";
import { useAppStore } from "./store";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { fetchArticles } from "./utils/fetchArticles";
import NewsFeed from "./components/NewsFeed";

export default function App() {
  const { articles, setIssueTimestamp, setArticles, setMode } = useAppStore();

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
    if (articles.length === 0) {
      fetchArticles({ setIssueTimestamp, setArticles });
    }
  }, []);

  return (
    <div className="font-lato dark:bg-[#121212] lg:h-lvh">
      <div className="flex flex-col px-4 md:px-32">
        <Navbar className="mb-16" />
        <SearchBar className="mb-24" />
        <NewsFeed />
      </div>
    </div>
  );
}
