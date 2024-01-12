import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageDropDownMenu from "./LanguageDropDownMenu";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (!menuOpen) return;
      if (menuOpen && !target.closest("[data-testid='language-switcher-icon']"))
        setMenuOpen(false);
    });
  }, [menuOpen]);

  return (
    <div className="relative flex items-center justify-end">
      <div
        role="button"
        data-testid="language-switcher-icon"
        className="text-base hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
        onClick={toggleMenu}
      >
        {i18n.language.toUpperCase()}
      </div>
      {menuOpen && <LanguageDropDownMenu setMenuOpen={setMenuOpen} />}
    </div>
  );
}
