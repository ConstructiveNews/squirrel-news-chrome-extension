import { useState, useEffect } from "react";
import { useAppStore } from "../store";
import ModeDropDownMenu from "./ModeDropDownMenu";

export default function ModeSwitcher() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode } = useAppStore();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (!menuOpen) return;
      if (menuOpen && !target.closest("[data-testid='mode-switcher-icon']"))
        setMenuOpen(false);
    });
  }, [menuOpen]);

  return (
    <div className="relative flex items-center justify-end">
      <div
        role="button"
        data-testid="mode-switcher-icon"
        className="w-8"
        onClick={toggleMenu}
      >
        <img
          src={`/icons/mode/${mode}.png`}
          alt={`Mode: ${mode}`}
        />
      </div>
      {menuOpen && <ModeDropDownMenu setMenuOpen={setMenuOpen} />}
    </div>
  );
}