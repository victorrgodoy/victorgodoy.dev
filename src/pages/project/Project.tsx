import ProjectHero from "./ProjectHero";
import ProjectFeature from "./ProjectFeature";
import { motion } from "framer-motion";
import { containerVariants } from "../../util/Motion";

function Project(){
    return(
        <motion.div  
            variants={containerVariants} 
            initial="hidden"
            animate="show"
            className="h-full flex flex-col mx-auto justify-center max-w-[800px] gap-y-[10vh]">
            <section id="hero">
                <ProjectHero/>
            </section>
            <section id="feature">
                <ProjectFeature/>
            </section>
        </motion.div>
    )
}

export default Project;