import { useState, useRef } from "react";

export function useBottleSpinner() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const spinTimeoutRef = useRef<number | null>(null);

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomSpins = 5 + Math.random() * 5;
    const randomAngle = Math.random() * 360;
    const totalRotation = randomSpins * 360 + randomAngle;
    const startTime = performance.now();
    const duration = 3000 + Math.random() * 2000;

    setRotation(rotation % 360);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const currentRotation = rotation + totalRotation * easeOut(progress);
      setRotation(currentRotation);

      if (progress < 1) {
        spinTimeoutRef.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
      }
    };

    spinTimeoutRef.current = requestAnimationFrame(animate);
  };

  const cleanup = () => {
    if (spinTimeoutRef.current) {
      cancelAnimationFrame(spinTimeoutRef.current);
    }
  };

  return {
    isSpinning,
    rotation,
    spin,
    cleanup,
    reset: () => {
      setRotation(0);
      setIsSpinning(false);
      cleanup();
    },
  };
}
