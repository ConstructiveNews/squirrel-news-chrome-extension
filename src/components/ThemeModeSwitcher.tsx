import { useState, useEffect } from "react";
import { useAppStore } from "../store";
import ThemeModeDropDownMenu from "./ThemeModeDropDownMenu";

export default function ThemeModeSwitcher() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { themeMode } = useAppStore();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (!menuOpen) return;
      if (
        menuOpen &&
        !target.closest("[data-testid='theme-mode-switcher-icon']")
      )
        setMenuOpen(false);
    });
  }, [menuOpen]);

  return (
    <div className="relative flex items-center justify-end">
      <div
        role="button"
        data-testid="theme-mode-switcher-icon"
        className="w-8"
        onClick={toggleMenu}
      >
        <img
          src={`/icons/mode/${themeMode}.png`}
          alt={`Theme mode: ${themeMode}`}
        />
      </div>
      {menuOpen && <ThemeModeDropDownMenu setMenuOpen={setMenuOpen} />}
    </div>
  );
}
