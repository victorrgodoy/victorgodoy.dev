import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const links = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Project", path: "/project" },
];

function Navbar() {
  return (
    <motion.nav
      key="navbar"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <ul className=" flex gap-x-5 text-lg relative font-normal ">
        {links.map((link) => (
          <li key={link.id} className="relative ">
            <NavLink to={link.path} end>
              {({ isActive }) => (
                <div className="relative px-6 py-2 ">
                  {isActive && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-[var(--color-text)] rounded-full"
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
                        ? "text-[var(--color-text-2)]"
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
