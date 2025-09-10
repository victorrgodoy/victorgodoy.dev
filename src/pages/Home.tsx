import { motion } from "motion/react";
import SocialLink from "../components/ui/SocialLink";

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, y: -100 },
};

function Home() {
  return (
    <>
      <motion.section
        className="grid grid-cols-24 gap-6 bg-red-600 h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="col-span-7 flex flex-col justify-between bg-black">
          <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-9">
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
          <p className="font-light text-sm text-[var(--color-text-2)] ">A full-stack developer</p>
        </div>
      </motion.section>
    </>
  );
}

export default Home;
