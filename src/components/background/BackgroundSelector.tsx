import { Upload, ImageIcon } from "lucide-react";
import { PresetItem } from "../../types";

interface BackgroundSelectorProps {
  backgrounds: PresetItem[];
  selectedIndex: number;
  customImage: string;
  onSelectBackground: (index: number) => void;
  onCustomImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetCustomImage: () => void;
}

export function BackgroundSelector({
  backgrounds,
  selectedIndex,
  customImage,
  onSelectBackground,
  onCustomImageUpload,
  onResetCustomImage,
}: BackgroundSelectorProps) {
  return (
    <div>
      <h3 className="text-white text-xl mb-4 flex items-center gap-2">
        <ImageIcon size={20} />
        Fondo
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {backgrounds.map((bg, index) => (
          <button
            key={bg.id}
            onClick={() => {
              onSelectBackground(index);
              onResetCustomImage();
            }}
            className={`group p-4 rounded-xl border transition-all duration-300 ${
              selectedIndex === index && !customImage
                ? "border-white bg-white/20"
                : "border-white/10 bg-white/5 hover:bg-white/10"
            }`}
          >
            <div
              className="h-32 sm:h-24 bg-cover bg-center rounded-lg group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${bg.url})` }}
            />
            <p className="text-white text-sm mt-2 text-center">{bg.name}</p>
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
