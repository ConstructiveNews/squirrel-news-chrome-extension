import NewsItem from "./NewsItem";
import {Issue, useAppStore} from "../store";

export default function NewsBar() {
  const {issues} = useAppStore();

  return (
    <div className="flex flex-row gap-20 items-center justify-center">
      {issues.map((issue: Issue) => (
        <div key={issue.id}>
          <NewsItem
            issue={issue}
          />
        </div>
      ))}
  </div>
  )
}