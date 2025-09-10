import { motion } from "motion/react";
import ObserverDarkMode from "./ObserverDarkMode";

function ButtonModeDark() {
  const [isDark, setIsDark] = ObserverDarkMode();

  const toggleSwitch = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      className="border-1 rounded-2xl w-9 h-5 flex items-center cursor-pointer"
      style={{ justifyContent: isDark ? "flex-end" : "flex-start" }}
      onClick={toggleSwitch}
    >
      <motion.div
        className="bg-[var(--color-text)] w-3 h-3 rounded-full mx-0.5 cursor-pointer"
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}

export default ButtonModeDark;
