import { useState, useEffect } from "react"
import { motion, useMotionValue, animate, MotionValue} from "motion/react"

export default function Splash() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [display, setDisplay] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(false);
  const count:MotionValue<number> = useMotionValue(0)

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 3,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
      onComplete: () => {
        setShowText(true)
        setTimeout(() => setIsVisible(false), 2000)
      }
    })
    return () => controls.stop()
  }, [count])

  if (!isVisible) return null
  return (
    <motion.div 
        className="fixed h-screen w-screen inset-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className="bg-[#DDD9D5] absolute inset-0"></div>
        <motion.div 
        className="bg-[#262C31] h-full absolute flex items-center justify-center text-[#DDD9D5] text-6xl"
        style={{ width: `${display}%`}}
        >
        {display}%
        </motion.div>

        {showText && 
        < motion.div
        className="absolute inset-0 flex items-center justify-center text-[#DDD9D5] font-extralight text-xl translate-y-[-4rem]"
        initial={{ scale: 0.9}}
        animate={{ scale: 1}}
        transition={{ duration: 2 }}
      >
        Victor Godoy
      </motion.div>
        }
    </motion.div>
  )
}