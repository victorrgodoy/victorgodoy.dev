import Logo from "../../icons/Logo";
import Navbar from "../interface/Navbar";

import ObserverDarkMode from "../../util/ObserverDarkMode";
import ButtonModeDark from "../interface/ButtonModeDark";

function Header() {
  const [isDark] = ObserverDarkMode();

  return (
    <nav className="fixed top-0 left-0 w-full pt-8 flex items-center justify-between px-10">
      <Logo className="fill-[var(--color-text)]" />
      <Navbar />
      <div className="flex gap-x-5 items-center">
        <p className="text-sm text-[var(--color-text)]">
          Mode: {isDark ? "Dark" : "Light"}
        </p>
        <ButtonModeDark
          background="var(--color-background)"
          spring="var(--color-text)"
        />
      </div>
    </nav>
  );
}

export default Header;
