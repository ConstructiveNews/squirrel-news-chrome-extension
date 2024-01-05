import { useAppStore } from "../store";

export type ModeDropDownMenuProps = {
  setMenuOpen: (open: boolean) => void;
};

export default function ModeDropDownMenu({
  setMenuOpen,
}: ModeDropDownMenuProps) {
  const { setMode } = useAppStore();

  const handleChange = (mode: string) => {
    const updatedMode = mode.toLowerCase(); // Convert to lowercase for consistency

    if (updatedMode === "dark") {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    setMode(updatedMode);

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
      bg-white text-stone-900 md:w-max border-stone-900 "
    >
      {availableModes.map((mode) => (
        <div
          className="flex w-20 text-base cursor-pointer flex-col items-center justify-center p-2 first:rounded-t-md last:rounded-b hover:bg-[#e40c5a]"
          key={mode}
          onClick={() => handleChange(mode)}
        >
          {mode.charAt(0).toUpperCase() + mode.slice(1)}
        </div>
      ))}
    </div>
  );
}
