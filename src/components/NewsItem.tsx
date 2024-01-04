import { Article } from "../store";
// import moment from "moment"; // Uncomment this line to use moment.js in 15 line of code when needed

interface NewsItemProps {
  article: Article;
}

export default function NewsItem({ article }: NewsItemProps) {

  return (
    <a 
      href={article.url}
      className="flex flex-col">
      {/* <div className="mb-2 text-sm">{moment(article.dateCreated).format('MMMM Do YYYY')}</div> */}
      <img className="mb-2 h-40 object-cover" src={article.image} alt={article.title} />
      <div className="text-gray-500 dark:text-gray-400 text-sm mb-2 uppercase">{article.source}</div>
      <h3 className="text-base mb-4 dark:text-white leading-tight	font-bold dark:font-semibold">{article.title}</h3>      
      {/* <div>{article.teaser}</div> */}
    </a>
  );
}
