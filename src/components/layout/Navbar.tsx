import ButtonModeDark from "../ui/ButtonModeDark";
import Clock from "../ui/Clock";
import { Logo } from "../ui/Icon";
import ObserverDarkMode from "../ui/ObserverDarkMode";

function Navbar() {
  const [isDark] = ObserverDarkMode();

  return (
    <nav className="h-20 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Logo />
        <Clock color="var(--color-text)"/>
      </div>
      <div className="flex gap-x-5 items-center text-[var(--color-text)]">
        <p>Mode: {isDark ? "Dark" : "Light"}</p>
        <ButtonModeDark color="text-[var(--color-background)]"/>
      </div>
    </nav>
  );
}

export default Navbar;
