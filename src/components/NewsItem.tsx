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
      <img className="mb-4" src={article.image} alt={article.title} />
      <div className="text-slate-400	">{article.source}</div>
      <div className="mb-1 text-sm">{moment(article.dateCreated).format('MMMM Do YYYY')}</div>
      <h3 className="text-base font-bold mb-4 leading-tight	">{article.title}</h3>      
      {/* <div>{article.teaser}</div> */}
    </a>
  );
}
