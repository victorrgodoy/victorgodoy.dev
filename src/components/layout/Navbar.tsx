import ButtonModeDark from "../ui/ButtonModeDark";
import Clock from "../ui/Clock";
import { Logo } from "../ui/Icon";
import ObserverDarkMode from "../ui/ObserverDarkMode";

function Navbar() {
  const [isDark] = ObserverDarkMode();

  return (
    <nav className="h-20 flex justify-between items-center">
      <Logo />
      <Clock />
      <div className="flex gap-x-5 items-center text-[var(--color-text)]">
        <p>Mode: {isDark ? "Dark" : "Light"}</p>
        <ButtonModeDark />
      </div>
    </nav>
  );
}

export default Navbar;
