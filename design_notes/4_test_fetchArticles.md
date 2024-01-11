# Jest Test for `fetchArticles` Function

### Overview:

This test suite checks if the function fetches articles from Firestore. It covers scenarios where an `issueTimestamp` is provided and when it is not.

### Test Setup:

1. **Mocked Firebase:** The test uses a fake Firebase setup, as outlined in design note: [5_fake_firebase.md](./5_fake_firebase.md)

2. **Fixture Data:** Fixture data, resembling actual Firestore responses, is utilized for both the latest and older issues and their associated articles. (`spec/fixtures`)

### Test Cases:

1. **Without `issueTimestamp`:**
   - **Setup:** Mocked Firestore functions simulate fetching the latest issue and its articles.
   - **Expectations:** Verifies that the function correctly initializes Firebase, constructs the Firestore query, and transforms the fetched data.

2. **With `issueTimestamp`:**
   - **Setup:** Simulates fetching an older issue and its articles using a provided `issueTimestamp`.
   - **Expectations:** Checks that the function handles the timestamp filtering correctly, ensuring the retrieval of the next issue's articles.