import { Logo } from "../interface/Icon";
import ObserverDarkMode from "../interface/ObserverDarkMode";
import ButtonModeDark from "../interface/ButtonModeDark";

function Navbar() {
  const [isDark] = ObserverDarkMode();

  return (
    <nav className="px-10 h-20 flex justify-between items-center">
      <Logo className="fill-[var(--color-text-1)]" />
      <div className="flex gap-x-5 items-center">
        <p className="text-sm text-[var(--color-text-1)]">Mode: {isDark ? "Dark" : "Light"}</p>
        <ButtonModeDark
          background="var(--color-background)"
          spring="var(--color-text-1)"
        />
      </div>
    </nav>
  );
}

export default Navbar;
