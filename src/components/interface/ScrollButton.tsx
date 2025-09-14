import { motion } from "motion/react";

function ScrollButton() {
  return (
    <motion.button
      className="text-center cursor-pointer"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      Scroll
    </motion.button>
  );
}

export default ScrollButton;
