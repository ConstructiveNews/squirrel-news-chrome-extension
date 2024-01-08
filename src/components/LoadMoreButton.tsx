import { useTranslation } from "react-i18next";

export default function LoadMoreButton({
  loadMoreArticles
}: {
  loadMoreArticles: () => void;
}) {
  const { t } = useTranslation();

  return (
    <button
      className="rounded-full bg-[#cbcbcb] px-5 py-3 text-sm font-semibold text-black 
      shadow-sm hover:bg-[#121212] hover:text-white dark:bg-white dark:hover:bg-[#e4e4e4] dark:hover:text-black"
      onClick={loadMoreArticles}
    >
      {t("LoadMoreButton.more")}
    </button>
  );
}
