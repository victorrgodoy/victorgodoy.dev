import ButtonMode from "../ui/ButtonMode";
import { NavLink } from "react-router-dom";
import Clock from "../ui/Clock";
import MenuNav from "../ui/MenuNav";
import clickSound from "../../assets/sounds/click.wav";
import useSound from "use-sound";
import { Logo } from "../ui/Icon"; 

const links = [
  { name: "HOME", to: "/" },
  { name: "ABOUT", to: "/about" },
  { name: "SKILL", to: "/skill" },
  { name: "CONTACT", to: "/contact" },
];

function Navbar() {
  const [play] = useSound(clickSound, { volume: 0.5 });

  return (
    <nav className="h-20 flex justify-between items-center">
      <Logo/>
      <ul className="hidden md:flex gap-6 ms-20 items-center font-normal text-sm">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              onClick={() => play()}
              className={({ isActive }) =>
                `${isActive ? "text-[var(--color-link-active)]" : ""}`
              }
            >
              {link.name}
            </NavLink>
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
