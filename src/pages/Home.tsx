import { motion } from "motion/react";
import SocialLink from "../components/ui/SocialLink";
import { useState } from "react";
import useSound from "use-sound";
import clickSfx from "../assets/sounds/click.wav";
import ButtonMenuNav from "../components/ui/ButtonMenuNav";
import MenuNav from "../components/layout/MenuNav";

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, y: -100 },
};

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [play] = useSound(clickSfx);

  return (
    <>
      <motion.section
        className="grid grid-cols-24 gap-6 h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="col-span-8 flex flex-col justify-between ">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mt-24 mb-9">
              VICTOR GODOY
            </h1>

            <div className="font-light text-sm/5 mb-14 text-[var(--color-text-2)]">
              A Systems Analysis and Development student passionate about modern
              web applications, AI-powered solutions, and robust server-side
              development with databases.
            </div>

            <div className="flex gap-2 font-light text-sm text-[var(--color-text-2)]">
              <SocialLink
                href="https://github.com/victorrgodoy"
                descripton="GitHub"
              />

              <SocialLink
                href="https://www.linkedin.com/in/victorgodoy-/"
                descripton="LinkedIn"
              />
            </div>
          </div>
          <p className="font-light text-sm text-[var(--color-text-2)] ">
            A full-stack developer
          </p>
        </div>
        <div className="col-span-8 flex flex-col justify-end items-center font-light text-[var(--color-text-2)]">
          Menu
          <ButtonMenuNav isOpen={isOpen} setIsOpen={setIsOpen} play={play} />
        </div>
      </motion.section>

      {isOpen && <MenuNav isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default Home;
