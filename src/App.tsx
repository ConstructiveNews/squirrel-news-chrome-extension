import { useEffect } from "react";
import { Article, useAppStore } from "./store";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import NewsItem from "./components/NewsItem";
import "./i18n";
import { fetchArticles } from "./utils/fetchArticles";

export default function App() {
  const { articles, setArticles } = useAppStore();

  useEffect(() => {
    fetchArticles(setArticles);
  }, [setArticles]);

  return (
    <div className="h-screen font-lato">
      <div className="flex flex-col px-4 md:px-32">
        <Navbar />
        <SearchBar />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12 mb-12">
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
