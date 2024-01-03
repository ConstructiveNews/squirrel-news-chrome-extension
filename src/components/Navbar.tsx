import Logo from "./Logo";
import Language from "./Language";
import Theme from "./Theme";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center pt-8 mb-16">
      <div>
        <Logo />  
      </div>
      <div className="flex flex-row gap-4">
        <Language />
        <Theme />
      </div>
    </div>
  );
}
