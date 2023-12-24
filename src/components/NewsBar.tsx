import NewsItem from "./NewsItem";

export default function NewsBar() {
  return (
    <div className="flex flex-row gap-20 items-center justify-center">
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
  </div>
  )
}