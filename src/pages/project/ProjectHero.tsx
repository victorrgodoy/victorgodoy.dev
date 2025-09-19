import { motion } from "framer-motion";
import { itemVariants } from "../../util/Motion";

function ProjectHero() {
  return (
    <motion.div variants={itemVariants}>
      <h1 className="font-medium text-[3vh] mb-[3vh]">PROJECTS</h1>
      <p className="font-normal text-[1.8vh] text-[var(--color-detail)]">
        Explore the group and personal projects I developed during university.
      </p>
    </motion.div>
  );
}

export default ProjectHero;
