import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ClickSound from "./ClickSound";
import { NavLink } from "react-router-dom";
import ButtonMode from "./ButtonMode";

function MenuNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        className="md:hidden bg-[var(--text-color)] border-2 border-dashed w-6 h-6 cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 45, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
      ></motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: -10, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-[var(--color-text)] text-[var(--color-background)] text-base absolute top-0 right-0 flex flex-col shadow-lg w-1/2 h-full"
          >
            <ClickSound>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-9 cursor-pointer bg-amber-300 "
              >
                CLOSE
              </button>
            </ClickSound>
            <ul className="flex flex-col gap-5 items-center mt-20 font-normal">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MenuNav;
