import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ModeSwitcher from "./ModeSwitcher";

export default function Navbar({ className }: { className?: string}) {
  return (
    <div className={`w-full flex justify-between items-center pt-8 ${className}`}>
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