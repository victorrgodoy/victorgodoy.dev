import { motion, type Variants } from "framer-motion";

function HeroContent() {
  const focus = [
    { name: "AI-Driven" },
    { name: "Web Development" },
    { name: "Backend & Frontend" },
  ];

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

  return (
    <motion.div
      className="grid grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* left side */}
      <div className="col-start-2 flex flex-col justify-center h-full gap-y-1">
        <motion.p
          variants={itemVariants}
          className="font-mono text-sm font-medium text-[var(--color-detail)] "
        >
          PORTFOLIO / 2025
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-8xl font-medium mb-5 text-[var(--color-text-1)]"
        >
          VICTOR <span className="text-[var(--color-detail)]">GODOY</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-normal text-lg/8  text-[var(--color-detail)] mb-4 max-w-2/3"
        >
          Aspiring Developer & Systems Analysis Student. Passionate about
          solving{" "}
          <span className="text-[var(--color-text)]">complex problems</span>{" "}
          with
          <span className="text-[var(--color-text)]"> simple,</span>
          <span className="text-[var(--color-text)]">
            {" "}
            efficient solutions.
          </span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 items-center text-[var(--color-detail)] font-normal text-sm"
        >
          <div className="rounded-full h-2.5 w-2.5 bg-green-400" />
          <p>Available for work</p>
          <p>Brazil</p>
        </motion.div>
      </div>

      {/* right side */}
      {/* <motion.div
        variants={itemVariants}
        className="flex flex-col gap-4 h-full justify-center"
      >
        <p className="text-[var(--color-detail)] text-sm">FOCUS</p>
        <ul className="flex gap-3.5 items-center flex-wrap">
          {focus.map((i, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="text-sm font-light px-4 py-2 border-[0.1em] border-[var(--color-detail)] rounded-sm"
              whileHover={{ rotate: 3, translateX: 2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {i.name}
            </motion.li>
          ))}
        </ul>
      </motion.div> */}
    </motion.div>
  );
}

export default HeroContent;
