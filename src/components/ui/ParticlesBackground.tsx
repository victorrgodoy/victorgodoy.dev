// components/ParticlesBackground.tsx
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // Inicializa o engine uma vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // versão leve do tsParticles
    }).then(() => setInit(true));
  }, []);

  // Função opcional para debug
  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  // Opções de partículas (minimalistas e modernas)
  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        number: { value: 30, density: { enable: true } },
        color: { value: "#c2c2c2" },
        shape: { type: "star" },
        links: {
          enable: true,
          distance: 150,
          color: "#c2c2c2",
          opacity: 0.5,
          width: 1,
        },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: 1,
          outModes: { default: OutMode.bounce },
          direction: MoveDirection.none,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
      },
      detectRetina: true,
      background: { color: { value: "var(--color-background)" } },
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-[-1] opacity-30"
      options={options}
      particlesLoaded={particlesLoaded}
    />
  );
}
