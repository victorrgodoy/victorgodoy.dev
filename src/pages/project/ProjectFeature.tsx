import { motion } from "framer-motion";
import { itemVariants } from "../../util/Motion";
import FilterButton from "./components/FilterButton";
import { projects } from "../../util/Info";

function ProjectFeature(){
    return(
            <motion.div variants={itemVariants}>
                <div className="flex justify-between text-[1.6vh] text-[var(--color-detail)] mb-[1vh]">
                    <p>Click on project</p>
                    <FilterButton/>
                </div>

                <ul className="flex flex-col gap-[2vh]">
                    {projects.map((p, i) => (
                        <li className="flex justify-between">
                        <div className="flex items-center gap-[1vh]">
                            <span className="text-blue-300 text-[1.3vh]">(0.{i + 1})</span>
                            <span>{p.name}</span>
                        </div>
                        <span className="text-[1.5vh] text-[var(--color-detail)]">{p.type}</span>
                        </li>
                    ))}
                    </ul>
            </motion.div>
    )
}

export default ProjectFeature;