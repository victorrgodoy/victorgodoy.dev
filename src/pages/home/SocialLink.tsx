import { motion } from "motion/react";

interface Props {
  href: string;
  descripton: string;
}

function SocialLink({ href, descripton }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-[var(--color-text-2)]"
      whileHover="hover"
    >
      {descripton}
      <motion.span
        className="absolute left-0 bottom-0 h-[2px] bg-[var(--color-text-2)]"
        initial={{ width: 0 }}
        variants={{ hover: { width: "100%" } }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.a>
  );
}

export default SocialLink;
