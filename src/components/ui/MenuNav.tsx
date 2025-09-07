import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonMode from "./ButtonMode";
import useSound from "use-sound";
import clickSound from "../../assets/sounds/click.wav";

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
      <motion.button
        onClick={() => setIsOpen(true)}
        className="md:hidden bg-[var(--text-color)] border-2 border-dashed p-1 text-sm cursor-pointer"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9 }}
      >
        MENU
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: -10, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-[var(--color-text)] text-[var(--color-background)] text-base absolute top-0 bottom-0 right-0 flex flex-col items-center shadow-lg w-1/2"
          >
            <button
              className="w-17 h-12 mt-6 cursor-pointer"
              onClick={() => {
                play();
                setIsOpen(false);
              }}
            >
              CLOSE
            </button>
            <ul className="flex flex-col gap-5 items-center mt-20 font-normal">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MenuNav;
