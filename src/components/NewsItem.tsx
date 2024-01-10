import type { Article } from "../types";

interface NewsItemProps {
  article: Article;
}

export default function NewsItem({ article }: NewsItemProps) {
  return (
    <a href={article.url} className="flex flex-col">
      <img
        className="mb-2 h-40 object-cover"
        src={article.imageUrl}
        alt={article.title}
      />
      <div className="mb-2 text-sm uppercase text-gray-500 dark:text-gray-400">
        {article.source}
      </div>
      <h3 className="mb-4 text-base font-bold leading-tight	dark:font-semibold dark:text-white">
        {article.title}
      </h3>
    </a>
  );
}
