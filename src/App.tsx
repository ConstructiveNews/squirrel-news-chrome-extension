import SearchBar from "./components/SearchBar";
import NewsBar from "./components/NewsBar";
import firebaseConfig from '../firebase-config.json';
import { useEffect } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
import {Issue, useAppStore} from "./store";

firebase.initializeApp(firebaseConfig);

export default function App() {
  const {setIssues} = useAppStore();

  useEffect(() => {
    const fetchIssues = async () => {
      const db = firebase.firestore();
      
      try {
        const snapshot = await db
          .collection('issues')
          .orderBy("issueURL")
          .where("issueURL", "!=", "")
          .orderBy('publishedAt', 'desc')
          .limit(4)
          .get();

        const fetchedIssues: unknown[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          fetchedIssues.push({
            id: doc.id,
            headline: data.headline,
            teaser: data.teaser,
            image: data.image,
            issueURL: data.issueURL,
            publishedAt: new Date(data.publishedAt.seconds * 1000),
            language: data.language
          });
        });

        setIssues(fetchedIssues as Issue[]);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, [setIssues]);
  
  return (
    <div className="h-screen container">
      <SearchBar />
      <NewsBar />
    </div>
  )
}
