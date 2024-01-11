# `fetchArticles` Function

The App's main fuctionality is to fetch the latest news from the Squirrel News website and display them in the App. This function can be found in the `src/utils/fetchArticles.ts` file.

### Overview:

The `fetchArticles` function is a vital part of this React application. It retrieves articles from a Firestore database using the Firebase SDK.

### Initialization:

The function begins by initializing the Firebase SDK using the provided configuration (`firebaseConfig`), establishing a connection to Firestore.

```javascript
firebase.initializeApp(firebaseConfig);
```

### Function Definition:

The `fetchArticles` function can take an optional `issueTimestamp` parameter of type `IssueTimestamp` (or null). It is designed to be flexible and allows for timestamp-based filtering.

```javascript
export const fetchArticles = async ({
  issueTimestamp
}: fetchArticlesProps = {}) => {
  // Function body...
};
```

### Firestore Connection:

A connection to Firestore is established using Firebase.

```javascript
const db = firebase.firestore();
```

### Query Construction:

The function creates a Firestore query to get issues from the 'issues' collection. It filters the results by language, using the `i18n.language` variable, and orders them by the 'dateCreated' field in descending order.

```javascript
let issuesSnapshotQuery = db
  .collection("issues")
  .where("language", "==", i18n.language)
  .orderBy("dateCreated", "desc");
```

### Timestamp Filtering:

If you provide an `issueTimestamp`, the query will be adjusted to retrieve issues created after the specified timestamp.

```javascript
if (issueTimestamp) {
  // Timestamp conversion and query modification...
}
```

### Query Execution:

The constructed query is executed to retrieve a snapshot of issues from Firestore.

```javascript
const issuesSnapshot = await issuesSnapshotQuery.limit(1).get();
```

### Data Processing:

If the snapshot has data, the function will retrieve the latest issue and then fetch a collection of articles related to that issue.

```javascript
if (!issuesSnapshot.empty && issuesSnapshot.docs && issuesSnapshot.docs.length > 0) {
  // Data retrieval and processing...
}
```

### Data Transformation:

The function transforms article data into the desired format, including converting Firestore timestamps. It returns an object that contains the fetched articles and the timestamp of the last issue.

```javascript
return {
  articles: articlesData,
  lastIssueTimestamp: lastIssue.data().dateCreated
};
```

### Error Handling:

The function has error handling to log any issues that may occur while retrieving data.

```javascript
} catch (error) {
  console.error("Error fetching issues:", error);
}
```

### Testing the Function:

Check design note: [4_testing_fetchArticles.md](./4_test_fetchArticles.md)