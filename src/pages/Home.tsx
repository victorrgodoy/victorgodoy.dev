import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, y: -100 },
};

function Home() {
  return (
    <motion.section
      className="w-[450px] mt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }} // <- aqui
    >
      <h1 className="mb-4 font-medium text-2xl md:text-3xl">
        FULL STACK DEVELOPER
      </h1>

      <div className="font-normal text-xs mb-14">
        <p>Backend and frontend.</p>
        <p>Developer specializing in modern web applications.</p>
        <p>AI-driven solutions.</p>
        <p>Server-side development with databases.</p>
      </div>

      <div className="flex gap-2 text-base">
        <a
          className="underline"
          href="https://github.com/victorrgodoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        /
        <a
          className="underline"
          href="https://www.linkedin.com/in/victorgodoy-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
}

export default Home;