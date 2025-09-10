import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonMode from "./ButtonModeDark";
import useSound from "use-sound";
import clickSound from "../../assets/sounds/click.wav";
import ButtonMenuNav from "./ButtonMenuNav";
import { Github, Linkedin } from "./Icon";

function MenuNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [play] = useSound(clickSound, { volume: 0.5 });

  const links = [
    { name: "HOME", to: "/" },
    { name: "ABOUT", to: "/about" },
    { name: "SKILL", to: "/skill" },
    { name: "CONTACT", to: "/contact" },
  ];

  return (
    <>
      <ButtonMenuNav isOpen={isOpen} setIsOpen={setIsOpen} play={play} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-[var(--color-text)] text-[var(--color-background)] text-base absolute top-0 right-0 flex flex-col shadow-lg w-full h-auto py-10 px-4 z-40"
          >
            <ul className="flex flex-col gap-5 items-center mt-20 mb-20 font-medium">
              <ButtonMode />
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    onClick={() => {
                      play();
                      setIsOpen(false);
                    }}
                    className={({ isActive }) =>
                      `${isActive ? "text-[var(--color-link-active)]" : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <div className="flex">
                <Github className="w-10 h-10" />
                <Linkedin className="w-10 h-10" />
              </div>
              <p className="italic">by @victorrgodoy</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MenuNav;
