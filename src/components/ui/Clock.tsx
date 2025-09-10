import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs font-normal text-[var(--color-text)]">
      BRAZIL{" "}
      {time.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" })}
    </div>
  );
}

export default Clock;
