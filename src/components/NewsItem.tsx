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
      <div>{issue.headline}</div>      
      <div>{moment(issue.publishedAt).format('MMMM Do YYYY')}</div>
      <div>{issue.teaser}</div>
    </a>
  );
}
