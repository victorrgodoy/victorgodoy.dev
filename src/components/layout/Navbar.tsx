import ButtonMode from "../ui/ButtonMode";
import { NavLink } from "react-router-dom";
import ClickSound from "../ui/ClickSound";
import Clock from "../ui/Clock";

const links = [
    {name: "HOME", to: "/"},
    {name: "ABOUT ME", to: "/about"},
    {name: "SKILL", to: "/skill"},
    {name: "CONTACT", to: "/contact"},
]
    
function Navbar(){
    return(
        <nav className=" h-20 flex gap-44 items-center">
            <p className="font-['Hurricane'] text-5xl font-bold">VG</p>
            <ul className="flex gap-6 font-normal items-center text-sm">
                {links.map((link) => (
                    <li key={link.name}>
                        <ClickSound>
                        <NavLink
                            to={link.to}
                            className={({isActive}) => `${isActive ? "text-[var(--color-link-active)]" : ""}`
                            }
                        >
                         {link.name}
                        </NavLink>
                        </ClickSound>
                    </li>
                ))}
                <ButtonMode/>             
            </ul>
            <div className="text-end ml-auto">
                <p className="text-sm font-light">TIME</p>
                <Clock/>
            </div>
        </nav>
    )
}

export default Navbar;