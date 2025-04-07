export interface PresetItem {
  id: string;
  url: string;
  name: string;
}

export interface BottleSpinnerProps {
  isSpinning: boolean;
  rotation: number;
  bottleImage: string;
  onSpin: () => void;
}

export interface BackgroundProps {
  backgroundImage: string;
  children: React.ReactNode;
}
