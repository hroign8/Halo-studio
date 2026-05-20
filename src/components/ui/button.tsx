import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          // Base
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
          // Variants
          variant === "default" && "bg-white text-black hover:bg-white/90",
          variant === "outline" && "border border-white/25 text-white hover:bg-white/[0.07] hover:border-white/40",
          variant === "ghost" && "text-white/60 hover:text-white hover:bg-white/[0.06]",
          // Sizes
          size === "sm" && "px-4 py-2 text-[13px]",
          size === "default" && "px-5 py-[10px] text-[14px]",
          size === "lg" && "px-6 py-[13px] text-[15px]",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

