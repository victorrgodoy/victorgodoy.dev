import {
  animate,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  motion,
  MotionValue,
} from "motion/react";
import { useEffect } from "react";

interface Props {
  setShowAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

function StartAnimation({ setShowAnimation }: Props) {
  const count: MotionValue<number> = useMotionValue(0);
  const rounded: MotionValue<number> = useTransform(count, (latest) =>
    Math.round(latest),
  );
  const display: MotionValue<string> = useMotionTemplate`${rounded}%`;

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.5,
      onComplete: () => {
        setTimeout(() => setShowAnimation(false), 500);
      },
    });
    return () => controls.stop();
  }, [count]);

  return (
    <motion.div
      className="bg-[#0A0A0A] absolute inset-0 text-2xl text-[#FFFFFF] items-center flex justify-center"
      variants={variants}
      initial="visible"
      animate="visible"
      exit="hidden"
      style={{ width: display }}
    >
      <motion.p>{display}</motion.p>
    </motion.div>
  );
}

export default StartAnimation;
