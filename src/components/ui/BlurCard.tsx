
import React from "react";
import { cn } from "@/lib/utils";

interface BlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "dark" | "lighter";
  hoverEffect?: boolean;
}

const BlurCard: React.FC<BlurCardProps> = ({
  children,
  className,
  variant = "default",
  hoverEffect = false,
  ...props
}) => {
  const variantClasses = {
    default: "glass-card",
    dark: "glass-dark",
    lighter: "backdrop-blur-md bg-white/10 border border-white/20",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-4 transition-all duration-300",
        variantClasses[variant],
        hoverEffect && "hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurCard;
