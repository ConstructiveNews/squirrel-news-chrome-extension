import { useTranslation } from "react-i18next";

export default function LoadMoreButton({
  loadMoreArticles
}: {
  loadMoreArticles: () => void;
}) {
  const { t } = useTranslation();

  return (
    <button
      className="rounded-full bg-[#cbcbcb] px-5 py-3 text-sm font-semibold text-[#121212] 
      shadow-sm hover:bg-[#121212] hover:text-white"
      onClick={loadMoreArticles}
    >
      {t("LoadMoreButton.more")}
    </button>
  );
}
