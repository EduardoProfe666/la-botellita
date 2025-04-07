import { Upload, Palette } from "lucide-react";
import { PresetItem } from "../../types";

interface BottleSelectorProps {
  bottles: PresetItem[];
  selectedIndex: number;
  customImage: string;
  onSelectBottle: (index: number) => void;
  onCustomImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetCustomImage: () => void;
}

export function BottleSelector({
  bottles,
  selectedIndex,
  customImage,
  onSelectBottle,
  onCustomImageUpload,
  onResetCustomImage,
}: BottleSelectorProps) {
  return (
    <div>
      <h3 className="text-white text-xl mb-4 flex items-center gap-2">
        <Palette size={20} />
        Estilo de botella
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {bottles.map((bottle, index) => (
          <button
            key={bottle.id}
            onClick={() => {
              onSelectBottle(index);
              onResetCustomImage();
            }}
            className={`group p-4 rounded-xl border transition-all duration-300 ${
              selectedIndex === index && !customImage
                ? "border-white bg-white/20"
                : "border-white/10 bg-white/5 hover:bg-white/10"
            }`}
          >
            <div className="h-32 sm:h-24 flex items-center justify-center">
              <img
                src={bottle.url}
                alt={bottle.name}
                className="w-12 h-full object-contain"
              />
            </div>
            <p className="text-white text-sm mt-2 text-center">{bottle.name}</p>
          </button>
        ))}
        <label className="cursor-pointer p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group">
          <div className="h-32 sm:h-24 flex items-center justify-center">
            <Upload
              size={24}
              className="text-white/60 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-white text-sm mt-2 text-center">Otra imagen</p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onCustomImageUpload}
          />
        </label>
      </div>
    </div>
  );
}
