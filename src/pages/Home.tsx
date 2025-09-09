import { motion } from "motion/react";
import SocialLink from "../components/ui/SocialLink";
import ParticlesBackground from "../components/ui/ParticlesBackground";

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, y: -100 },
};

function Home() {
  return (
    <>
     <ParticlesBackground /> 
    <motion.section
      className="w-[450px] mt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="mb-4 font-medium text-3xl md:text-5xl/14">
        Web Developer Crafting Solutions
      </h1>

      <div className="font-normal text-sm/5 mb-14">
        <p>Modern web applications.</p>
        <p>AI-driven solutions.</p>
        <p>Server-side development with databases.</p>
      </div>

      <div className="flex gap-2 text-base">
        <SocialLink
          href="https://github.com/victorrgodoy"
          descripton="GitHub"
        />
        
        <SocialLink
          href="https://www.linkedin.com/in/victorgodoy-/"
          descripton="LinkedIn"
        />
      </div>
    </motion.section>
    </>
  );
}

export default Home;
