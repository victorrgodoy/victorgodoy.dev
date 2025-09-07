import * as motion from "motion/react-client"
import { useState } from "react"

export default function ButtonMode() {
    const [isOn, setIsOn] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn)
        setIsDark(prev => !prev)
        document.documentElement.classList.toggle("dark", !isDark)
    }

    return (
        <button
            className="bg-[var(--color-text)] border-2 rounded-2xl w-9 h-5 flex items-center cursor-pointer"
            style={{justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
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