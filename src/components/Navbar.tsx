import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ModeSwitcher from "./ModeSwitcher";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center pt-8 mb-16">
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