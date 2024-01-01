import { Article } from "../store";
import moment from "moment";

interface NewsItemProps {
  article: Article;
}

export default function NewsItem({ article }: NewsItemProps) {

  return (
    <a 
      href={article.url}
      target="_blank"
      className="flex flex-col">
      <div className="text-slate-400 text-sm">{article.source}</div>
      <div className="mb-2 text-sm">{moment(article.dateCreated).format('MMMM Do YYYY')}</div>
      <img className="mb-2 h-40 object-cover" src={article.image} alt={article.title} />
      <h3 className="text-base mb-4 leading-tight	">{article.title}</h3>      
      {/* <div>{article.teaser}</div> */}
    </a>
  );
}
