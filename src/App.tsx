import firebaseConfig from "../firebase-config.json";
import { useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Article, useAppStore } from "./store";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import NewsItem from "./components/NewsItem";
import "./i18n";
import i18n from "./i18n";

firebase.initializeApp(firebaseConfig);

export default function App() {
  const { articles, setArticles } = useAppStore();

  useEffect(() => {
    const fetchIssues = async () => {
      const db = firebase.firestore();

      try {
        const issuesSnapshot = await db
          .collection("issues")
          .where("language", "==", i18n.language)
          .orderBy("publishedAt", "desc")
          .limit(1)
          .get();

        if (!issuesSnapshot.empty) {
          const lastIssueId = issuesSnapshot.docs[0].id;

          const articlesSnapshot = await db
            .collection("issues")
            .doc(lastIssueId)
            .collection("articles")
            .limit(8)
            .get();

          const articlesData = articlesSnapshot.docs.map((doc) => {
            const article = doc.data();

            return {
              id: doc.id,
              credit: article.credit,
              dateCreated: article.dateCreated?.seconds * 1000,
              image: article.imageUrl,
              source: article.source,
              teaser: article.teaser,
              title: article.title,
              url: article.url,
            };
          });

          setArticles(articlesData as Article[]);
        }
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchIssues();
  }, [setArticles]);

  return (
    <div className="h-screen font-lato">
      <div className="flex flex-col px-4 md:px-32">
        <Navbar />
          <SearchBar />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12 mb-12">
          {articles.map((article: Article) => (
            <div className="" key={article.id}>
              <NewsItem article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
