import { useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div
        ref={modalRef}
        className="bg-black/80 backdrop-blur-xl rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl transform transition-all duration-300"
      >
        <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-black/80 backdrop-blur-xl border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <Button variant="icon" onClick={onClose}>
            <X size={24} />
          </Button>
        </div>
        <div className="p-6 space-y-8">{children}</div>
      </div>
    </div>
  );
}
