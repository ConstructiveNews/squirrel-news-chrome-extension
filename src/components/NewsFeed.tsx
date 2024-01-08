import { useAppStore } from "../store";
import NewsItem from "./NewsItem";
import { fetchArticles } from "../utils/fetchArticles";
import { useEffect, useState } from "react";
import { Article } from "../types";
import { useTranslation } from "react-i18next";
import LoadMoreButton from "./LoadMoreButton";

export default function NewsFeed() {
  const { i18n } = useTranslation();
  const { articles, issueTimestamp } = useAppStore();
  const [previousArticles, setPreviousArticles] = useState<Article[]>([]);
  const [lastIssueTimestamp, setLastIssueTimestamp] = useState(issueTimestamp);

  useEffect(() => {
    setLastIssueTimestamp(issueTimestamp);
  }, [issueTimestamp]);

  useEffect(() => {
    setPreviousArticles([]);
  }, [i18n.language]);

  const loadMoreArticles = async () => {
    fetchArticles({ issueTimestamp: lastIssueTimestamp })
      .then((data) => {
        if (data) {
          setLastIssueTimestamp(data.lastIssueTimestamp);
          setPreviousArticles([...previousArticles, ...data.articles]);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12">
        {articles.concat(previousArticles).map((article) => (
          <div key={article.id}>
            <NewsItem article={article} />
          </div>
        ))}
      </div>

      {articles && (
        <div className="flex items-center justify-center">
          <LoadMoreButton loadMoreArticles={loadMoreArticles} />
        </div>
      )}
    </div>
  );
}
