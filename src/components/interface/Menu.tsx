import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const variants = {
  initial: { opacity: 0.8, x: "100%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0.8, x: "100%" }
};

const links = [
  { id: "01", name: "Home", to: "/" },
  { id: "02", name: "About", to: "/about" },
  { id: "03", name: "Project", to: "/project" },
  { id: "04", name: "Contact", to: "/contact" }
];

function Menu() {
  return (
    <motion.div
      key="menu"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-[var(--color-menu)] absolute right-0 top-1/2 -translate-y-1/2 flex flex-col w-2/5 rounded-l-lg"
    >
      {/* título */}
      <p className="px-6 text-[var(--color-text-1)] font-medium text-3xl mb-10 pt-10">MENU</p>
      <hr className="text-[var(--color-detail)]"/>

      {/* lista */}
     <ul className="px-6 text-[var(--color-text-2)] text-lg flex flex-col py-10">
      <p className="text-[var(--color-detail)] font-normal text-xl">(Links)</p>
  {links.map((link) => (
    <li key={link.id} className="py-4 flex flex-col gap-10 w-full items-end text-xl " >
      <div className="flex gap-8 w-2/3 justify-between items-center text-[var(--color-text-1)]">
      <div className="flex gap-10 ">
        <span>{`(${link.id})`}</span>
        <NavLink
          to={link.to}
        >
          {link.name}
        </NavLink>
        </div>
        <span className="w-3 h-3 rounded-full bg-[var(--color-text-1)]"></span>
      </div>
      <hr className="border-t border-[var(--color-detail)] w-2/3 self-end" />
    </li>
  ))}
</ul>
    </motion.div>
  );
}

export default Menu;
