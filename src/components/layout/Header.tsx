import { Wine, Beer, Martini, Grape } from "lucide-react";

export function Header() {
  return (
    <div className="w-full text-center pt-8 animate-fade-in relative">
      {/* Decorative elements */}
      <Wine className="absolute left-[15%] top-4 text-amber-400/30 rotate-[-15deg] w-12 h-12 animate-float" />
      <Beer className="absolute right-[15%] top-4 text-amber-400/30 rotate-[15deg] w-12 h-12 animate-float-delayed" />
      <Martini className="absolute left-[25%] bottom-0 text-amber-400/30 rotate-[25deg] w-8 h-8 animate-float-slow" />
      <Grape className="absolute right-[25%] bottom-2 text-amber-400/30 rotate-[-20deg] w-8 h-8 animate-float-slower" />

      {/* Floating bubbles */}
      <div className="absolute left-[10%] top-[50%] w-2 h-2 bg-amber-400/20 rounded-full animate-bubble"></div>
      <div className="absolute right-[10%] top-[40%] w-3 h-3 bg-amber-400/20 rounded-full animate-bubble-delayed"></div>
      <div className="absolute left-[30%] top-[60%] w-2 h-2 bg-amber-400/20 rounded-full animate-bubble-slow"></div>
      <div className="absolute right-[30%] top-[30%] w-2 h-2 bg-amber-400/20 rounded-full animate-bubble-slower"></div>

      <h1 className="text-7xl font-black mb-4 relative">
        <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 bg-clip-text text-transparent drop-shadow-lg hover:scale-105 transition-transform duration-300 cursor-default relative group">
          La Botellita
        </span>
      </h1>

      <p className="text-2xl font-medium text-white/90 italic tracking-wide">
        <span className="animate-pulse inline-block">¡Dale un toque</span>
        <span className="mx-2 text-amber-300 animate-bounce inline-block">
          🍾
        </span>
        <span className="animate-pulse inline-block">
          y que gire la suerte!
        </span>
        <span className="ml-2 animate-wiggle inline-block">🎉</span>
      </p>
    </div>
  );
}
