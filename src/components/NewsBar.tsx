import NewsItem from "./NewsItem";
import {Issue, useAppStore} from "../store";

export default function NewsBar() {
  const {issues} = useAppStore();

  return (
    <div className="grid grid-cols-4 gap-8">
      {issues.map((issue: Issue) => (
        <div 
          className=""
          key={issue.id}>
          <NewsItem
            issue={issue}
          />
        </div>
      ))}
  </div>
  )
}