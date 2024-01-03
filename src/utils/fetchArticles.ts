import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import i18n from "../i18n";
import firebaseConfig from "../../firebase-config.json";
import { Article } from "../../src/store";

firebase.initializeApp(firebaseConfig);

export const fetchArticles = async (setArticles: (articles: Article[]) => void) => {
  const db = firebase.firestore();

  console.log("lang:", i18n.language)
  try {
    const issuesSnapshot = await db
      .collection("issues")
      .where("language", "==", i18n.language)
      .orderBy("dateCreated", "desc")
      .limit(1)
      .get();

    if (!issuesSnapshot.empty) {
      const lastIssueId = issuesSnapshot.docs[0].id;

      const articlesSnapshot = await db
        .collection("issues")
        .doc(lastIssueId)
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
