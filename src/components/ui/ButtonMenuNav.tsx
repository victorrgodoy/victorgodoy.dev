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
        setIsOpen(!isOpen);
        play();
      }}
      className="flex flex-col justify-between cursor-pointer py-2 px-7 gap-2 border-1 rounded-md border-[var-(--color-text-2)]"
      whileHover={{ scale: 1.06, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className={`h-[2px] w-8 ${!isOpen ? "bg-[var(--color-text)]" : "bg-[var(--color-background)]"}`}
      />
      <motion.div
        className={`h-[2px] w-8 ${!isOpen ? "bg-[var(--color-text)]" : "bg-[var(--color-background)]"}`}
      />
    </motion.button>
  );
}

export default ButtonMenuNav;
