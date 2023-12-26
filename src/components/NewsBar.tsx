import NewsItem from "./NewsItem";
import { Issue, useAppStore } from "../store";
import Logo from "./Logo";

export default function NewsBar() {
  const { issues } = useAppStore();

  return (
    <div className="flex flex-col px-32">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="grid grid-cols-4 gap-12">
        {issues.map((issue: Issue) => (
          <div className="" key={issue.id}>
            <NewsItem issue={issue} />
          </div>
        ))}
      </div>
    </div>
  );
}
