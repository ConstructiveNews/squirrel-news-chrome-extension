import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ModeSwitcher from "./ModeSwitcher";

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
        <ModeSwitcher />
      </div>
    </div>
  );
}
