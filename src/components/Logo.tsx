import { useAppStore } from "../store";

export default function Logo() {
  const { themeMode } = useAppStore();

  return (
    <div className="w-40">
      <a href="https://squirrel-news.net/news/">
        <img src={`icons/logos/logo-${themeMode}mode.svg`} alt="Logo" />
      </a>
    </div>
  );
}
