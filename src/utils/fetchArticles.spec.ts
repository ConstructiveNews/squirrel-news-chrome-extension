import { mocked } from "jest-mock";
import latestIssue from "../../spec/fixtures/latestIssue/enIssue.json";
import latestIssueArticles from "../../spec/fixtures/latestIssue/enArticles.json";
import olderIssue from "../../spec/fixtures/latestIssue/enIssue.json";
import olderIssueArticles from "../../spec/fixtures/latestIssue/enArticles.json";
import {
  fakeFirebase,
  initializeAppFunc,
  collectionFn,
  whereFn,
  orderByFn,
  startAfterFn,
  limitFn,
  getFn,
  MockedFirestoreTimestamp,
  lastIssueSnapshot,
  articlesSnapshot
} from "../../spec/utils/fake-firebase";

// Design note: design_notes/5_fake_firebase.md

jest.mock("firebase/compat/app", () => fakeFirebase);

import { fetchArticles } from "./fetchArticles";

describe("fetchArticles", () => {
  describe("when issueTimestamp is not provided", () => {
    beforeEach(() => {
      mocked(getFn).mockReturnValueOnce(lastIssueSnapshot(latestIssue));
      mocked(getFn).mockReturnValueOnce(articlesSnapshot(latestIssueArticles));
    });

    it("returns first issue articles", async () => {
      const articles = await fetchArticles();

      expect(initializeAppFunc).toHaveBeenCalledTimes(1);
      expect(collectionFn).toHaveBeenCalledWith("issues");
      expect(whereFn).toHaveBeenCalledWith("language", "==", "en");
      expect(orderByFn).toHaveBeenCalledWith("dateCreated", "desc");
      expect(limitFn).toHaveBeenCalledWith(1);

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
  });

  describe("when issueTimestamp is provided", () => {
    beforeEach(() => {
      mocked(getFn).mockReturnValueOnce(lastIssueSnapshot(olderIssue));
      mocked(getFn).mockReturnValueOnce(articlesSnapshot(olderIssueArticles));
    });

    it("returns next issue articles", async () => {
      const articles = await fetchArticles({
        issueTimestamp: latestIssue.dateCreated
      });

      expect(initializeAppFunc).toHaveBeenCalledTimes(1);
      expect(collectionFn).toHaveBeenCalledWith("issues");
      expect(whereFn).toHaveBeenCalledWith("language", "==", "en");
      expect(orderByFn).toHaveBeenCalledWith("dateCreated", "desc");
      expect(limitFn).toHaveBeenCalledWith(1);
      expect(startAfterFn).toHaveBeenCalledWith(
        new MockedFirestoreTimestamp(
          latestIssue.dateCreated.seconds,
          latestIssue.dateCreated.nanoseconds
        )
      );

      expect(articles).toEqual({
        articles: olderIssueArticles.map((article) => ({
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
  });
});
