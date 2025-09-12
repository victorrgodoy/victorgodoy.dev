import { useState, useEffect } from "react";
import { motion, useMotionValue, animate, MotionValue } from "motion/react";

export default function Splash() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [display, setDisplay] = useState<number>(0);
  const count: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
      onComplete: () => {
        setTimeout(() => setIsVisible(false), 2000);
      },
    });
    return () => controls.stop();
  }, [count]);

  if (!isVisible) return null;

  return (
    <div className="fixed h-screen w-screen inset-0 flex bg-[#EAEAEA]">
      <motion.div
        className="bg-[#1C1C1C] h-full absolute flex items-center justify-center text-[#F5F5F5] text-3xl md:text-4xl font-normal"
        style={{ width: `${display}%` }}
      >
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.8 }}
          exit={{opacity:0}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {display}%
        </motion.p>
      </motion.div>
    </div>
  );
}
