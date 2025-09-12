import { useState, useEffect } from "react";

interface Props {
  color: string;
}

function Clock({ color }: Props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ color: color }}>
      BRAZIL{" "}
      {time.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" })}
    </div>
  );
}

export default Clock;
