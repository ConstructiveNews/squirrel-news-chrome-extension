import { Issue } from "../store";
import moment from "moment";

interface NewsItemProps {
  issue: Issue;
}

export default function NewsItem({ issue }: NewsItemProps) {
  return (
    <a 
      href={issue.issueURL}
      target="_blank"
      className="flex flex-col bg-slate-300 p-12 rounded-md hover:bg-slate-200">
      <h2 className="text-xl font-bold mb-4">{issue.headline}</h2>      
      <div className="mb-2">{moment(issue.publishedAt).format('MMMM Do YYYY')}</div>
      <img className="mb-4" src={issue.image} alt={issue.headline} />
      <div>{issue.teaser}</div>
    </a>
  );
}
