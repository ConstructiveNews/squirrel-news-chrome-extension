import SearchBar from "./components/SearchBar";
import NewsBar from "./components/NewsBar";
import firebaseConfig from '../firebase-config.json';
import { useEffect } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"

firebase.initializeApp(firebaseConfig);

export default function App() {
  useEffect(() => {
    const fetchIssues = async () => {
      const db = firebase.firestore();
      
      try {
        const snapshot = await db
          .collection('issues')
          .orderBy('publishedAt', 'desc')
          .limit(4)
          .get();

        const fetchedIssues: unknown[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          fetchedIssues.push({
            id: doc.id,
            // Add other fields as needed
            // For example: title: data.title, description: data.description, ...
            publishedAt: data.publishedAt,
          });
        });

        console.log(fetchedIssues);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, []);
  
  return (
    <div className="h-screen container">
      <SearchBar />
      <NewsBar />
    </div>
  )
}
