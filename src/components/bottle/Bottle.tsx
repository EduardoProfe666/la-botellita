interface BottleProps {
  isSpinning: boolean;
  rotation: number;
  bottleImage: string;
  onSpin: () => void;
}

export function Bottle({
  isSpinning,
  rotation,
  bottleImage,
  onSpin,
}: BottleProps) {
  return (
    <div
      className="w-[80vmin] h-[80vmin] relative cursor-pointer group my-8"
      onClick={onSpin}
    >
      {/* Circular platform */}
      <div className="absolute inset-0 border-2 border-white/30 rounded-full backdrop-blur-sm bg-white/5 group-hover:bg-white/10 transition-all duration-300" />

      {/* Shine effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -rotate-45" />
      </div>

      {/* Bottle */}
      <div
        className="absolute inset-0 transition-transform duration-100 flex items-center justify-center"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning
            ? "none"
            : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <img
          src={bottleImage}
          alt="Bottle"
          className="w-[90%] h-[90%] object-contain"
          style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))" }}
        />
      </div>
    </div>
  );
}
