import logo from "../assets/logo.webp";

export default function Logo() {
  return (
    <div className="flex items-center w-40">
        <a href="https://squirrel-news.net/news/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
  );
}
