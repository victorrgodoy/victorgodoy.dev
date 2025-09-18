import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../util/Motion";
import SocialLink from "./SocialLink";

const focus = [
  {
    id: 1,
    description: "Backend & Frontend",
  },
  {
    id: 2,
    description: "AI-Driven",
  },
  {
    id: 3,
    description: "Web Development",
  },
];

function Hero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="h-full flex flex-col items-center gap-[20vh] justify-center"
    >
      <div className="flex flex-col items-center">
        <motion.h2 variants={itemVariants} className="text-[var(--color-detail)] font-medium text-[1.4vh] font-mono">
          PORTFOLIO / 2025
        </motion.h2>
        <motion.h1 variants={itemVariants} className="font-bold text-[6vh] ">
          VICTOR <span className="text-[var(--color-detail)]">GODOY</span>
        </motion.h1>
        <motion.p variants={itemVariants} className=" text-[2vh] mb-[2vh]">
          Developer Backend & Frontend,{" "}
          <span className="text-[var(--color-detail)]">
            building scalable systems and modern interfaces.
          </span>
        </motion.p>
        <motion.ul variants={itemVariants} className="flex gap-4 text-[var(--color-text)]">
          {focus.map((f) => (
      <motion.li
        key={f.id}
        className="cursor-default border-[0.5px] px-4 py-2 rounded-sm text-[1.5vh]"
        whileHover={{ y: -4, boxShadow: "0px 8px 15px rgba(0,0,0,0.2)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {f.description}
      </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div variants={itemVariants} className="flex flex-col items-center text-[1.4vh]">
        <h3 className="text-[var(--color-detail)] font-mono mb-[2vh]">
          CONTACT
        </h3>
        <div className="flex gap-[2vh]">
          <SocialLink href="https://www.linkedin.com/in/victorgodoy-/" descripton="Linkedin"/>
          <SocialLink href="https://github.com/victorrgodoy" descripton="Github"/>
        </div>
        <motion.p variants={itemVariants}>
          <a href="" target="_blank" rel="noopener noreferrer"></a>
          victor.hgodoy@icloud.com
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
