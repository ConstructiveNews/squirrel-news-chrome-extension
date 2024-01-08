import PopUpContent from "./components/PopUpContent";
import PopUpFooter from "./components/PopUpFooter";

export default function PopUpMenu() {
  return (
    <div className="flex w-52 flex-col p-4">
      <PopUpContent />
      <PopUpFooter />
    </div>
  );
}
