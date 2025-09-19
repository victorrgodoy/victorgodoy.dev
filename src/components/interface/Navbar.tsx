import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

function Navbar() {
  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Project", path: "/project" },
  ];

  return (
    <motion.nav
      key="navbar"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", stiffness: 30, damping: 18 }} // menos stiffness → mais suave
      className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 px-3 py-2"
    >
      <ul className="flex gap-4 relative font-normal">
        {links.map((link) => (
          <li
            key={link.id}
            className="relative border border-dashed rounded-lg text-[2vh]"
          >
            <NavLink to={link.path} end>
              {({ isActive }) => (
                <div className="relative px-4 py-1">
                  {isActive && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-[var(--color-text)]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 40,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive
                        ? "text-[var(--color-background)]"
                        : "text-[var(--color-text)]"
                    }`}
                  >
                    {link.name}
                  </span>
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
