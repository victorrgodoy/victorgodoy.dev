import ButtonMode from "../ui/ButtonMode";
import { NavLink } from "react-router-dom";
import ClickSound from "../ui/ClickSound";
import Clock from "../ui/Clock";
import MenuNav from "../ui/MenuNav";

const links = [
  { name: "HOME", to: "/" },
  { name: "ABOUT", to: "/about" },
  { name: "SKILL", to: "/skill" },
  { name: "CONTACT", to: "/contact" },
];

function Navbar() {
  return (
    <nav className="h-20 flex justify-between items-center">
      <div className="font-medium text-5xl">Vg</div>
      <ul className="hidden md:flex gap-6 ms-20 items-center font-normal text-sm">
        {links.map((link) => (
          <li key={link.name}>
            <ClickSound>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${isActive ? "text-[var(--color-link-active)]" : ""}`
                }
              >
                {link.name}
              </NavLink>
            </ClickSound>
          </li>
        ))}
        <ButtonMode />
      </ul>
      <div className="md:ml-auto text-center lg:text-end">
        <p className="text-xs md:text-sm font-light">TIME</p>
        <Clock />
      </div>
      <div className="md:hidden">
        <MenuNav />
      </div>
    </nav>
  );
}

export default Navbar;
