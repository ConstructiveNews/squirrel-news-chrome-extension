import { useAppStore } from "../store";
import NewsItem from "./NewsItem";
import { fetchArticles } from "../utils/fetchArticles";

export default function NewsFeed() {
  const { articles, issueTimestamp, setIssueTimestamp, setArticles } = useAppStore();

  const loadMoreArticles = async () => {
    fetchArticles({ issueTimestamp, setIssueTimestamp, setArticles }); 
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12 mb-10">
        {articles.map((article) => (
          <div key={article.id}>
            <NewsItem article={article} />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center">
        <button onClick={loadMoreArticles} >Load more</button>
      </div>
    </div>
  )
}