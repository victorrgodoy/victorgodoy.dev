import * as motion from "motion/react-client"
import { useState, useEffect } from "react"

export default function ButtonMode() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  )

  // observa mudanças na classe do html
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const htmlHasDark = document.documentElement.classList.contains("dark")
      setIsDark(htmlHasDark)
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const toggleSwitch = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
  }

  return (
    <button
      className="bg-[var(--color-text)] border-2 rounded-2xl w-9 h-5 flex items-center cursor-pointer"
      style={{ justifyContent: isDark ? "flex-end" : "flex-start" }}
      onClick={toggleSwitch}
    >
      <motion.div
        className="bg-[var(--color-background)] w-3 h-3 rounded-full mx-0.5 cursor-pointer"
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  )
}