import { motion } from "framer-motion";
import { itemVariants } from "../../util/Motion";
import { projects } from "../../util/Info";

function ProjectFeature() {
  return (
   <motion.div variants={itemVariants} className="grid grid-cols-[2fr_1fr_1fr] gap-x-[2vh]">

  <div className="col-span-1 flex flex-col gap-y-[2vh]">
    <p className="text-[var(--color-detail)]">Description</p>
    <ul className="flex flex-col gap-y-[1.5vh]">
      {projects.map((p, i) => (
        <li className="flex justify-between" key={p.id}>
          <div className="flex items-center gap-[1vh]">
            <span className="text-[var(--color-tag-category)] text-[1.3vh]">(0.{i + 1})</span>
            <span>{p.name}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>

  {/* Coluna 2 - Category */}
  <div className="flex flex-col gap-y-[2vh]">
    <p className="text-[var(--color-detail)]">Category</p>
    <ul className="flex flex-col gap-y-[1.5vh]">
      {projects.map((p, i) => (
        <li key={i} className="flex flex-wrap gap-[1.5vh]">
          {p.type.category.map((c, idx) => (
            <span
              key={idx}
              className={"text-[var(--color-tag-category)]"}
            >
              {c}
            </span>
          ))}
        </li>
      ))}
    </ul>
  </div>

  {/* Coluna 3 se quiser adicionar outra info ou apenas espaço */}
  <div className="flex flex-col gap-y-[2vh]">
    <p className="text-[var(--color-detail)]">Plataform</p>
    <ul className="flex flex-col gap-y-[1.5vh]">
      {projects.map((p, i) => (
        <li key={i} className="text-[var(--color-tag-category-2)]">
          {p.type.platform}
        </li>
      ))}
    </ul>
  </div>
</motion.div>
  );
}

export default ProjectFeature;
