import logo from "../assets/logo.webp";

export default function Logo() {
  return (
    <div className="flex items-center w-32">
        <a href="https://squirrel-news.net/news/" target="_blank">
          <img src={logo} alt="Logo" />
        </a>
      </div>
  );
}
