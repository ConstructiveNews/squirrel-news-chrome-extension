import type { Article } from "../types";

interface NewsItemProps {
  article: Article;
}

export default function NewsItem({ article }: NewsItemProps) {
  return (
    <a 
      href={article.url}
      className="flex flex-col">
      <img className="mb-2 h-40 object-cover" src={article.image} alt={article.title} />
      <div className="text-gray-500 dark:text-gray-400 text-sm mb-2 uppercase">{article.source}</div>
      <h3 className="text-base mb-4 dark:text-white leading-tight	font-bold dark:font-semibold">{article.title}</h3>      
    </a>
  );
}
