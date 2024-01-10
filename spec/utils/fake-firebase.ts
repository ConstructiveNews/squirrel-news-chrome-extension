import { when } from "jest-when";
import latestIssue from "../fixtures/latestIssue/enIssue.json";
import latestIssueArticles from "../fixtures/latestIssue/enArticles.json";

type MockedFirestoreInstance = {
  collection?: jest.Mock;
  where?: jest.Mock;
  orderBy?: jest.Mock;
  startAfter?: jest.Mock;
  limit?: jest.Mock;
  doc?: jest.Mock;
  get?: jest.Mock;
};

const firestoreInstance: MockedFirestoreInstance = {};

export const articlesSnapshot = (rawArticles: typeof latestIssueArticles) => {
  return {
    docs: rawArticles.map((article) => ({
      id: article.id,
      data: () => ({
        credit: article.credit,
        dateCreated: {
          seconds: article.dateCreated.seconds
        },
        imageUrl: article.imageUrl,
        source: article.source,
        teaser: article.teaser,
        title: article.title,
        url: article.url
      })
    }))
  };
};

export const lastIssueSnapshot = (rawIssue: typeof latestIssue) => {
  return {
    docs: [
      {
        id: rawIssue.id,
        data: () => ({
          dateCreated: rawIssue.dateCreated
        })
      }
    ]
  };
};

export const getFn = jest.fn();
firestoreInstance.get = getFn;

export const docFn = jest.fn();
firestoreInstance.doc = docFn;
when(docFn).calledWith(latestIssue.id).mockReturnValue(firestoreInstance);

export const limitFn = jest.fn();
firestoreInstance.limit = limitFn;
when(limitFn).calledWith(1).mockReturnValue(firestoreInstance);

export class MockedFirestoreTimestamp {
  seconds: number;
  nanoseconds: number;

  constructor(seconds: number, nanoseconds: number) {
    this.seconds = seconds;
    this.nanoseconds = nanoseconds;
  }
}

export const startAfterFn = jest.fn();
firestoreInstance.startAfter = startAfterFn;
when(startAfterFn)
  .calledWith(
    new MockedFirestoreTimestamp(
      latestIssue.dateCreated.seconds,
      latestIssue.dateCreated.nanoseconds
    )
  )
  .mockReturnValue(firestoreInstance);

export const orderByFn = jest.fn();
firestoreInstance.orderBy = orderByFn;
when(orderByFn)
  .calledWith("dateCreated", "desc")
  .mockReturnValue(firestoreInstance);

export const whereFn = jest.fn();
firestoreInstance.where = whereFn;
when(whereFn)
  .calledWith("language", "==", "en")
  .mockReturnValue(firestoreInstance);

export const collectionFn = jest.fn();
when(collectionFn).calledWith("issues").mockReturnValue(firestoreInstance);
when(collectionFn).calledWith("articles").mockReturnValue(firestoreInstance);
firestoreInstance.collection = collectionFn;

export const firestoreFunc = jest.fn();
firestoreFunc.mockReturnValue(firestoreInstance);
(firestoreFunc as any).Timestamp = MockedFirestoreTimestamp; // eslint-disable-line @typescript-eslint/no-explicit-any

export const initializeAppFunc = jest.fn();

export const fakeFirebase = {
  firestore: firestoreFunc,
  initializeApp: initializeAppFunc
};
