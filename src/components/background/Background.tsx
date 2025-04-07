interface BackgroundProps {
  backgroundImage: string;
  children: React.ReactNode;
}

export function Background({ backgroundImage, children }: BackgroundProps) {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden transition-all duration-700"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
