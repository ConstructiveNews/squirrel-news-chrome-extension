import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeModeSwitcher from "./ThemeModeSwitcher";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={`flex w-full items-center justify-between pt-8 ${className}`}
    >
      <div>
        <Logo />
      </div>
      <div className="flex flex-row gap-4">
        <LanguageSwitcher />
        <ThemeModeSwitcher />
      </div>
    </div>
  );
}
