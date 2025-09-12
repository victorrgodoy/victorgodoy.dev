import { motion } from "motion/react";
import useSound from "use-sound";
import clickSfx from "../../assets/sounds/click.wav";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

function ButtonMenuNav({ isOpen, setIsOpen }: Props) {
  const [play] = useSound(clickSfx); 

  return (
    <motion.button
      onClick={() => {
        setIsOpen(!isOpen);
        play(); 
      }}
      className="bg-[var(--color-text-2)] flex flex-col justify-between cursor-pointer py-2 px-7 gap-2 rounded-md text-[var(--color-background)]"
      whileHover={{ scale: 1.06, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9 }}
    >
      OPEN
    </motion.button>
  );
}

export default ButtonMenuNav;