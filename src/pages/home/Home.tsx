import HomeContent from "./HomeContent";
import { motion } from "motion/react";
import { useState } from "react";
import useSound from "use-sound";
import clickSfx from "../../assets/sounds/click.wav";

const variants = {
    initial: { opacity: 1, x:-30},
    animate: { opacity: 1, x:0},
  }


function Home(){
  const [isOpen, setIsOpen] = useState(false);
  const [play] = useSound(clickSfx);

    return(
           <motion.section
           className="h-full"
           id="home"
           variants={variants}
           initial="initial"
           animate="animate"
           transition={{ duration: 0.5, ease: "easeInOut" }}
           >
            <HomeContent/>
           </motion.section>
    )    
}

export default Home;