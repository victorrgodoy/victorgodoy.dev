import { Logo } from "../../util/Icons";
import Clock from "../interface/Clock";
import ButtonModeDark from "../interface/ButtonModeDark";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <Logo fill="var(--color-text)" />
      <div className="flex items-center gap-4">
        <Clock color="var(--color-text)" />
      <ButtonModeDark
        background="var(--color-background)"
        spring="var(--color-text)"
      />
      
      </div>
    </header>
  );
}
export default Header;
