import Logo from "../../icons/Logo";
import Navbar from "../interface/Navbar";

import ObserverDarkMode from "../../util/ObserverDarkMode";
import ButtonModeDark from "../interface/ButtonModeDark";

function Header() {
  const [isDark] = ObserverDarkMode();

  return (
    <header className="grid grid-cols-2">
      <Logo className="col-start-1 fill-[var(--color-text)]" />
      <div className="col-start-2  flex justify-between">
        <Navbar />
        <div className="flex gap-x-5 items-center">
          <p className="text-lg text-[var(--color-text)]">
            {isDark ? "DARK" : "LIGHT"} MODE
          </p>
          <ButtonModeDark
            background="var(--color-background)"
            spring="var(--color-text)"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
