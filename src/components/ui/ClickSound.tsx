import React from 'react';
import useSound from 'use-sound';
import clickSound from '../../assets/sounds/click.wav';

function ClickButton({ children }: { children: React.ReactNode }) {
  const [play] = useSound(clickSound, { volume: 0.5 });

  return (
    <button onClick={() => play()}>
      {children}
    </button>
  );
}
export default ClickButton; 