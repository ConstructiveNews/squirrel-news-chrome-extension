// https://firebase.google.com/docs/firestore/query-data/query-cursors
export type IssueTimestamp = {
  seconds: number;
  nanoseconds: number;
};

export type Article = {
  id: string;
  credit: string;
  dateCreated: number;
  image: string;
  source: string;
  teaser: string;
  title: string;
  url: string;
};