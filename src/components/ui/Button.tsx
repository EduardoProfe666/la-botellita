import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "icon";
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = "transition-all duration-300 active:scale-95";
  const variants = {
    primary:
      "bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:scale-110",
    icon: "text-white/60 hover:text-white hover:rotate-90",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
