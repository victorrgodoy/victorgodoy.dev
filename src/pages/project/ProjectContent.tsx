import { motion, type Variants } from "framer-motion";
import { projects } from "./Projects";
import FilterButton from "./components/FilterButton";
import { useState } from "react";

function ProjectContent() {
  const [selectedYear, setSelectedYear] = useState<number | string>("Filter");

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const uniqueYears = Array.from(new Set(projects.map(p => p.year))).sort();
  const yearsWithAll = ["All", ...uniqueYears];

 const filteredProjects =
  selectedYear === "All" || selectedYear === "Filter"
    ? projects.sort((a,b) => b.year - a.year).sort((a,b) => b.id - a.id)
    : projects.filter((p) => p.year === selectedYear).sort((a,b) => b.id - a.id);


  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="py-40 flex flex-col max-w-[800px] justify-center mx-auto"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-medium mb-14 text-center"
      >
        PROJECTS
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="flex justify-between font-normal text-xl mb-20 relative"
      >
        <p>
          Explore the group and personal projects I developed during university.
        </p>

        <FilterButton 
          year={selectedYear} 
          years={yearsWithAll}
          onSelect={(year) => setSelectedYear(year)}
        />

      </motion.div>

      {filteredProjects.map((p) => (
        <motion.div variants={itemVariants} key={p.id} className="mb-30">
          <h2 className="font-medium text-2xl mb-5">{p.name}</h2>
          <div className="flex gap-6 items-center text-[var(--color-detail)]">
            <p className="text-xl mb-4">{p.description}</p>
            <div className="flex text-end gap-5">
              <p>
                Client{" "}
                <span className="text-[var(--color-text)]">{p.client}</span>
              </p>
              <p>
                {" "}
                Year <span className="text-[var(--color-text)]">{p.year}</span>
              </p>
              <p>
                Link <span className="text-[var(--color-text)]">{p.link}</span>
              </p>
            </div>
          </div>
          <div className="overflow-hidden w-[800px] rounded-xl mb-4">
            <motion.div
              className="flex gap-5"
              drag="x"
              dragConstraints={{ left: -700, right: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              <div className="bg-[var(--color-detail)] h-[300px] w-[700px] rounded-xl flex-shrink-0" />
              <div className="bg-[var(--color-detail)] h-[300px] w-[700px] rounded-xl flex-shrink-0" />
            </motion.div>
          </div>
          <div className="flex gap-3">
            {" "}
            {p.stack.map((s) => (
              <p className="border-[0.5px] px-2 ">{s}</p>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}

export default ProjectContent;
