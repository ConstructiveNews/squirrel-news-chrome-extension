import PopUpLogo from "./PopUpLogo";

export default function PopUpContent() {
  return (
    <div>
      <a
        href="https://squirrel-news.net/"
        target="_blank"
        className="mb-8 flex flex-row items-center text-lg"
      >
        <PopUpLogo />
        Squirrel News
      </a>
    </div>
  );
}
