import PopUpLogo from "./PopUpLogo";

export default function PopUpContent() {
  return (
    <div>
      <a
        href="https://squirrel-news.net/"
        target="_blank"
        className="flex flex-row items-center text-lg mb-8"
      >
        <PopUpLogo />
        Squirrel News
      </a>
    </div>
  );
}
