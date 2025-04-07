import { useState } from "react";
import { Cat } from "lucide-react";
import { Layout } from "./components/layout/Layout";
import { Header } from "./components/layout/Header";
import { Bottle } from "./components/bottle/Bottle";
import { BottleSelector } from "./components/bottle/BottleSelector";
import { BackgroundSelector } from "./components/background/BackgroundSelector";
import { Modal } from "./components/ui/Modal";
import { PRESET_BACKGROUNDS, PRESET_BOTTLES } from "./constants/presets";
import { useBottleSpinner } from "./hooks/useBottleSpinner";

function App() {
  const [customBottleImage, setCustomBottleImage] = useState("");
  const [customBackgroundImage, setCustomBackgroundImage] = useState("");
  const [selectedBottle, setSelectedBottle] = useState(0);
  const [selectedBackground, setSelectedBackground] = useState(0);
  const [showCustomization, setShowCustomization] = useState(false);

  const { isSpinning, rotation, spin, reset } = useBottleSpinner();

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "bottle" | "background"
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === "bottle") {
          setCustomBottleImage(e.target?.result as string);
        } else {
          setCustomBackgroundImage(e.target?.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const currentBottleImage =
    customBottleImage || PRESET_BOTTLES[selectedBottle].url;
  const currentBackgroundImage =
    customBackgroundImage || PRESET_BACKGROUNDS[selectedBackground].url;

  return (
    <Layout
      backgroundImage={currentBackgroundImage}
      onCustomize={() => setShowCustomization(true)}
    >
      <Header />

      <Bottle
        isSpinning={isSpinning}
        rotation={rotation}
        bottleImage={currentBottleImage}
        onSpin={spin}
      />

      <a
        href="https://eduardoprofe666.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-20 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 group"
        title="Visitar mi portfolio"
      >
        <Cat
          size={24}
          className="text-white transform group-hover:rotate-12 transition-transform duration-300"
        />
      </a>

      <Modal
        isOpen={showCustomization}
        onClose={() => setShowCustomization(false)}
        title="Personaliza el juego"
      >
        <BottleSelector
          bottles={PRESET_BOTTLES}
          selectedIndex={selectedBottle}
          customImage={customBottleImage}
          onSelectBottle={(index) => {
            setSelectedBottle(index);
            reset();
          }}
          onCustomImageUpload={(e) => handleImageUpload(e, "bottle")}
          onResetCustomImage={() => setCustomBottleImage("")}
        />

        <BackgroundSelector
          backgrounds={PRESET_BACKGROUNDS}
          selectedIndex={selectedBackground}
          customImage={customBackgroundImage}
          onSelectBackground={setSelectedBackground}
          onCustomImageUpload={(e) => handleImageUpload(e, "background")}
          onResetCustomImage={() => setCustomBackgroundImage("")}
        />
      </Modal>
    </Layout>
  );
}

export default App;
