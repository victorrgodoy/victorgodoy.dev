import { motion } from "motion/react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  play: () => void;
}

function ButtonMenuNav({ isOpen, setIsOpen, play }: Props) {
  return (
    <motion.button
      onClick={() => {
        setIsOpen(!isOpen)
        play()
    }}
      className="md:hidden flex flex-col justify-between cursor-pointer p-2 relative z-50 gap-2"
      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className={`h-[2px] w-8 ${!isOpen ? "bg-[var(--color-text)]" : "bg-[var(--color-background)]" }`}
        animate={isOpen ? { rotate: 47, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={`h-[2px] w-8 ${!isOpen ? "bg-[var(--color-text)]" : "bg-[var(--color-background)]" }`}
        animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}

export default ButtonMenuNav;
