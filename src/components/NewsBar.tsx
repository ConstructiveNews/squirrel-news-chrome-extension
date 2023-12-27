import NewsItem from "./NewsItem";
import { Article, useAppStore } from "../store";
import Logo from "./Logo";

export default function NewsBar() {
  const { articles } = useAppStore();

  return (
    <div className="flex flex-col px-32">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="grid grid-cols-4 gap-12">
        {articles.map((article: Article) => (
          <div className="" key={article.id}>
            <NewsItem article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
