import { useAppStore } from "../store";

export type ThemeModeDropDownMenuProps = {
  setMenuOpen: (open: boolean) => void;
};

export default function ThemeModeDropDownMenu({
  setMenuOpen
}: ThemeModeDropDownMenuProps) {
  const { setThemeMode } = useAppStore();

  const handleChange = (themeMode: string) => {
    const updatedMode = themeMode.toLowerCase(); // Convert to lowercase for consistency

    if (updatedMode === "dark") {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    setThemeMode(updatedMode);

    document.documentElement.classList.remove("dark");
    if (updatedMode === "dark") {
      document.documentElement.classList.add("dark");
    }

    setMenuOpen(false);
  };

  const availableModes = ["light", "dark"];

  return (
    <div
      className="absolute right-0 top-full z-10 flex 
      w-max origin-top-right flex-col items-center rounded-lg border-2
      border-stone-900 bg-white text-stone-900 md:w-max "
    >
      {availableModes.map((themeMode) => (
        <div
          className="flex w-20 cursor-pointer flex-col items-center justify-center p-2 text-base first:rounded-t-md last:rounded-b hover:bg-[#cbcbcb]"
          key={themeMode}
          onClick={() => handleChange(themeMode)}
        >
          {themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}
        </div>
      ))}
    </div>
  );
}
