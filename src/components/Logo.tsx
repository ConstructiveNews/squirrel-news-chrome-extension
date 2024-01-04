import { useAppStore } from "../store";

export default function Logo() {
  const { mode } = useAppStore();

  return (
    <div className="w-40">
        <a href="https://squirrel-news.net/news/">
          <img src={`src/assets/logo-${mode}mode.svg`} alt="Logo" />
        </a>
      </div>
  );
}
