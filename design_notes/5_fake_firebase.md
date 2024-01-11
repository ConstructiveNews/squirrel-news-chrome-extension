# `fakeFirebase` Module

### Overview:

The `fakeFirebase` module offers a simulated implementation of Firebase Firestore and Firebase App initialization functions for testing purposes. It allows for the simulation of interactions with Firebase Firestore without making actual network calls.

### Mocked Firestore Instance:

The `firestoreInstance` object acts as a mock Firestore instance, with mock functions like `collection`, `where`, `orderBy`, `startAfter`, `limit`, `doc`, and `get`. These functions simulate Firestore query behaviors and are configured using Jest's `when` utility.

### Timestamp Mocking:

The module contains a `MockedFirestoreTimestamp` class that imitates Firestore Timestamp objects. This allows for realistic testing scenarios that involve timestamp-based queries.

### Data Snapshot Functions:

The `articlesSnapshot` and `lastIssueSnapshot` functions create mock data snapshots for articles and the latest issue, respectively. These snapshots mimic the structure of actual Firestore query results.

### Jest Mocking:

Jest's mocking capabilities are extensively used in functions such as `jest.fn()`, `when()` and specific function configurations (`mockReturnValue`, `calledWith`).

### Testing Convenience:

The module offers convenient functions to simplify the configuration of mock functions, such as `getFn`, `docFn`, `limitFn`, `startAfterFn`, `orderByFn`, `whereFn`, and `collectionFn`. These functions assist in setting up specific test scenarios.

### Initialization:

The `fakeFirebase` object contains a mock Firestore instance (`firestoreFunc`) and a mock `initializeApp` function. This enables the initialization of a Firebase app for testing purposes without connecting to a Firebase project.