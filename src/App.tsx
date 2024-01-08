import { useEffect } from "react";
import { useAppStore } from "./store";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { fetchArticles } from "./utils/fetchArticles";
import NewsFeed from "./components/NewsFeed";

export default function App() {
  const { articles, setIssueTimestamp, setArticles, setThemeMode } =
    useAppStore();

  useEffect(() => {
    const handleThemeMode = () => {
      const currentMode = localStorage.theme;

      if (
        currentMode === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setThemeMode("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setThemeMode("light");
      }
    };

    handleThemeMode();
  }, [setThemeMode]);

  useEffect(() => {
    if (articles.length === 0) {
      fetchArticles()
        .then((data) => {
          if (data) {
            setIssueTimestamp(data.lastIssueTimestamp);
            setArticles(data.articles);
          }
        })
        .catch((error) => console.error(error));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="font-lato dark:bg-[#121212]">
      <div className="flex flex-col px-4 pb-12 md:px-32">
        <Navbar className="mb-16" />
        <SearchBar className="mb-24" />
        <NewsFeed />
      </div>
    </div>
  );
}
