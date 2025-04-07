import { Settings } from "lucide-react";
import { Button } from "../ui/Button";

interface LayoutProps {
  onCustomize: () => void;
  backgroundImage: string;
  children: React.ReactNode;
}

export function Layout({
  onCustomize,
  backgroundImage,
  children,
}: LayoutProps) {
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

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between p-4">
        {children}

        <Button
          onClick={onCustomize}
          className="fixed bottom-6 right-6 z-20 p-4"
          title="Personaliza el juego"
        >
          <Settings size={24} className="text-white" />
        </Button>
      </div>
    </div>
  );
}
