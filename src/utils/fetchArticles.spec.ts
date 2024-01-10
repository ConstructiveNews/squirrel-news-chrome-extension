import { when } from "jest-when";
import latestIssue from "../../spec/fixtures/latestIssue/enIssue.json";
import latestIssueArticles from "../../spec/fixtures/latestIssue/enArticles.json";
// import olderIssue from "../../spec/fixtures/latestIssue/enIssue.json";
// import olderIssueArticles from "../../spec/fixtures/latestIssue/enArticles.json";
import { mocked } from "jest-mock";

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

const articlesSnapshot = (rawArticles: typeof latestIssueArticles) => {
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

const lastIssueSnapshot = (rawIssue: typeof latestIssue) => {
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

const getFn = jest.fn();
mocked(getFn).mockReturnValueOnce(lastIssueSnapshot(latestIssue));
mocked(getFn).mockReturnValueOnce(articlesSnapshot(latestIssueArticles));

const docFn = jest.fn();
when(docFn).calledWith(latestIssue.id).mockReturnValue(firestoreInstance);

const limitFn = jest.fn();
when(limitFn).calledWith(1).mockReturnValue(firestoreInstance);

const startAfterFn = jest.fn();
when(startAfterFn)
  .calledWith("latestTimestamp")
  .mockReturnValue(firestoreInstance);

const orderByFn = jest.fn();
when(orderByFn)
  .calledWith("dateCreated", "desc")
  .mockReturnValue(firestoreInstance);

const whereFn = jest.fn();
when(whereFn)
  .calledWith("language", "==", "en")
  .mockReturnValue(firestoreInstance);

const collectionFn = jest.fn();
when(collectionFn).calledWith("issues").mockReturnValue(firestoreInstance);
when(collectionFn).calledWith("articles").mockReturnValue(firestoreInstance);

firestoreInstance.collection = collectionFn;
firestoreInstance.where = whereFn;
firestoreInstance.orderBy = orderByFn;
firestoreInstance.startAfter = startAfterFn;
firestoreInstance.limit = limitFn;
firestoreInstance.doc = docFn;
firestoreInstance.get = getFn;

const firestoreFunc = jest.fn();
firestoreFunc.mockReturnValue(firestoreInstance);

const initializeAppFunc = jest.fn();

jest.mock("firebase/compat/app", () => {
  const fakeFirebase = {
    firestore: firestoreFunc,
    initializeApp: initializeAppFunc
  };

  return fakeFirebase;
});

import { fetchArticles } from "./fetchArticles";

describe("fetchArticles", () => {
  describe("when issueTimestamp is not provided", () => {
    it("returns first issue articles", async () => {
      const articles = await fetchArticles();

      expect(initializeAppFunc).toHaveBeenCalledTimes(1);
      expect(collectionFn).toHaveBeenCalledWith("issues");
      expect(whereFn).toHaveBeenCalledWith("language", "==", "en");
      expect(orderByFn).toHaveBeenCalledWith("dateCreated", "desc");

      expect(articles).toEqual({
        articles: latestIssueArticles.map((article) => ({
          id: article.id,
          credit: article.credit,
          dateCreated: article.dateCreated.seconds * 1000,
          imageUrl: article.imageUrl,
          source: article.source,
          teaser: article.teaser,
          title: article.title,
          url: article.url
        })),
        lastIssueTimestamp: latestIssue.dateCreated
      });
    });

    // describe("when issueTimestamp is provided", () => {
    //   it("returns next issue articles", async () => {
    //     const articles = await fetchArticles({
    //       issueTimestamp: {
    //         seconds: 123,
    //         nanoseconds: 456
    //       }
    //     });
    //   });
    // });
  });
});
