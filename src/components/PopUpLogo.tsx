import logo from '../assets/logo_small.svg';

export default function PopUpLogo() {
  return (
    <div className="text-lg mr-2">
      <img src={logo} alt="Squirrel News" className="h-8" />
    </div>
  )
}