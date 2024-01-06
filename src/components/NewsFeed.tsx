import { useAppStore } from "../store";
import NewsItem from "./NewsItem";

export default function NewsFeed() {
  const { articles } = useAppStore();

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12 mb-10">
      {articles.map((article) => (
        <div key={article.id}>
          <NewsItem article={article} />
        </div>
      ))}
    </div>
  )
}