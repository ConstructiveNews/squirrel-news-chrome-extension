import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import i18n from "../i18n";
import firebaseConfig from "../../firebase-config.json";
import type { IssueTimestamp, Article } from "../types";

firebase.initializeApp(firebaseConfig);

interface fetchArticlesProps {
  issueTimestamp?: IssueTimestamp | null;
  setIssueTimestamp: (timestamp: IssueTimestamp) => void;
  setArticles: (articles: Article[]) => void;
}

export const fetchArticles = async ({ issueTimestamp, setIssueTimestamp, setArticles }: fetchArticlesProps) => {
  const db = firebase.firestore();

  try {
    let issuesSnapshotQuery = db
      .collection("issues")
      .where("language", "==", i18n.language)
      .orderBy("dateCreated", "desc")
    
    if (issueTimestamp) {
      issuesSnapshotQuery = issuesSnapshotQuery.startAfter(issueTimestamp)
    }

    const issuesSnapshot = await issuesSnapshotQuery.limit(1).get()

    if (!issuesSnapshot.empty) {
      const lastIssue = issuesSnapshot.docs[0]
      
      setIssueTimestamp(lastIssue.data().dateCreated)

      const articlesSnapshot = await db
        .collection("issues")
        .doc(lastIssue.id)
        .collection("articles")
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

      setArticles(articlesData);
    }
  } catch (error) {
    console.error("Error fetching issues:", error);
  }
};
