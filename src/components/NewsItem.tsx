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
      className="flex flex-col">
      <img className="mb-4" src={issue.image} alt={issue.headline} />
      <div className="mb-1 text-sm">{moment(issue.publishedAt).format('MMMM Do YYYY')}</div>
      <h3 className="text-md font-bold mb-4">{issue.headline}</h3>      
      {/* <div>{issue.teaser}</div> */}
    </a>
  );
}
