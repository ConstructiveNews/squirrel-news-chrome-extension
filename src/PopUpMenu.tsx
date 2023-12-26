import PopUpContent from "./components/PopUpContent";
import PopUpFooter from "./components/PopUpFooter";

export default function PopUpMenu() {

  return (
    <div className="flex flex-col w-52 p-4">
      <PopUpContent />
      <PopUpFooter />
    </div>
  )
}

