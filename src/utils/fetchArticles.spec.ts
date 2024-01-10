import { when } from "jest-when";
import enArticles from "../../spec/fixtures/enArticles.json";
import enIssues from "../../spec/fixtures/enIssues.json";
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

const articleSnapshot = {
  docs: enArticles.map((article) => ({
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

const lastIssuesSnapshot = {
  docs: enIssues.map((issue) => ({
    id: issue.id,
    data: () => ({
      dateCreated: issue.dateCreated
    })
  }))
};

const getFn = jest.fn();
mocked(getFn).mockReturnValueOnce(lastIssuesSnapshot);
mocked(getFn).mockReturnValueOnce(articleSnapshot);

const docFn = jest.fn();
when(docFn).calledWith("1").mockReturnValue(firestoreInstance);

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
  it("should return articles", async () => {
    const articles = await fetchArticles();

    expect(initializeAppFunc).toHaveBeenCalledTimes(1);
    expect(collectionFn).toHaveBeenCalledWith("issues");
    expect(whereFn).toHaveBeenCalledWith("language", "==", "en");
    expect(orderByFn).toHaveBeenCalledWith("dateCreated", "desc");
    console.log(articles?.lastIssueTimestamp);
    console.log(enIssues[0].dateCreated);

    expect(articles).toEqual({
      articles: enArticles.map((article) => ({
        id: article.id,
        credit: article.credit,
        dateCreated: article.dateCreated.seconds * 1000,
        imageUrl: article.imageUrl,
        source: article.source,
        teaser: article.teaser,
        title: article.title,
        url: article.url
      })),
      lastIssueTimestamp: enIssues[0].dateCreated
    });
  });
});
