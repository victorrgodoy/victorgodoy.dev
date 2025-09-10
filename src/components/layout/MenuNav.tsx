import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router-dom";
import ButtonModeDark from "../ui/ButtonModeDark";
import { Github, Linkedin } from "../ui/Icon";
import Clock from "../ui/Clock";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

function MenuNav({ isOpen, setIsOpen }: Props) {


  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Project", to: "/project" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-[var(--color-text)] text-base absolute top-0 right-0 flex flex-col shadow-lg w-1/2 h-full p-4 z-40"
        >
          {/* nav menu */}
          <div className="flex justify-between items-center text-2xl font-normal pb-4">
            <p className="text-[var(--color-background-2)]">Menu</p>
            <Clock color="var(--color-background-2)" />
            <div className="py-4 cursor-pointer items-center flex">
            <button 
            type="button"
            className="border-1 w-14 border-[var(--color-background-2)]"
            onClick={() => setIsOpen(false)}
            >cc</button>
            </div>
          </div>

          <hr className="text-[var(--color-background-2)]" />
          <div className="py-10 flex justify-end gap-4 ">
            <p className="text-[var(--color-background-2)]">Mode: Dark</p>
            <ButtonModeDark color={"var(--color-background-2)"} />
          </div>

          {/* links */}
          <div className="grid justify-items-stretch ">
            <ul className="justify-self-end flex flex-col gap-10 font-normal text-xl w-1/2 text-[var(--color-background-2)]">
              {links.map((link, index) => (
                <li key={link.name}>
                  <span className={`me-5 font-light`}>
                    {`${(index + 1) / 10}`} 
                    </span>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `${isActive ? "text-[var(--color-link-active)]" : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                  <hr className="w-full border-[var(--color-background-2)] mt-4" />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center mt-auto">
            <div className="flex">
              <Github className="w-10 h-10" />
              <Linkedin className="w-10 h-10" />
            </div>
            <p className="italic">by @victorrgodoy</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuNav;
