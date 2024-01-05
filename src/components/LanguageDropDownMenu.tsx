import { useTranslation } from "react-i18next";
import { fetchArticles } from "../utils/fetchArticles";
import { useAppStore } from "../store";

export type LanguageDropDownMenuProps = {
  setMenuOpen: (open: boolean) => void;
};

export default function LanguageDropDownMenu({
  setMenuOpen
}: LanguageDropDownMenuProps) {
  const { t, i18n } = useTranslation();

  const { setArticles } = useAppStore();

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const handleChange = (language: string) => {
    changeLanguage(language);
    setMenuOpen(false);
    fetchArticles(setArticles);
  };

  const availableLanguages =
    typeof i18n.options.resources === "object"
      ? Object.keys(i18n.options.resources)
      : [];

  return (
    <div
      className="absolute right-0 top-full z-10 flex 
      w-max origin-top-right flex-col items-center rounded-lg border-2
      bg-white text-stone-900 md:w-max border-stone-900"
    >
      {availableLanguages.map((language) => (
        <div
          className="flex w-20 text-base cursor-pointer flex-col items-center justify-center p-2 first:rounded-t-md last:rounded-b-md hover:bg-[#cbcbcb]"
          key={language}
          onClick={() => handleChange(language)}
        >
          {t(language)}
        </div>
      ))}
    </div>
  );
}
