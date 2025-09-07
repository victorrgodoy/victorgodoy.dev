import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  animate,
  MotionValue,
  AnimatePresence,
} from "motion/react";

export default function Splash() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [display, setDisplay] = useState<number>(0);
  const count: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.5,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
      onComplete: () => {
        setTimeout(() => setIsVisible(false), 3000);
      },
    });
    return () => controls.stop();
  }, [count]);

  if (!isVisible) return null;
  return (
    <motion.div
      className="fixed h-screen w-screen inset-0"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-[#DDD9D5] absolute inset-0"></div>
      <motion.div
        className="bg-[#262C31] h-full absolute flex items-center justify-center text-[#DDD9D5] text-4xl lg:text-4xl"
        style={{ width: `${display}%` }}
      >
        {display}%
      </motion.div>
    </motion.div>
  );
}
