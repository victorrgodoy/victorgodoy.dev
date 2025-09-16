import { motion} from "framer-motion";
import { useState } from "react";

type FilterButtonProps = {
  year: number | string | undefined;
  years: (number | string)[];
  onSelect: (year: number | string) => void;
};

const FilterButton = ({ year, years, onSelect }: FilterButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-x-3 text-[var(--color-detail)] cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {year}
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      {isOpen && (
  <div className="absolute left-0 mt-2 flex flex-col rounded-lg  backdrop-blur-md border border-[var(--color-text)] min-w-full">
    {years.map((y) => (
      <button
        key={y}
        className="cursor-pointer px-4 py-2 text-sm text-[var(--color-text)] hover:text-[var(--color-detail)] hover:bg-[var(--color-text)] whitespace-nowrap"
        onClick={() => {
          onSelect(y);
          setIsOpen(false);
        }}
      >
        {y}
      </button>
    ))}
  </div>
)}
    </div>
  );
};

export default FilterButton;
