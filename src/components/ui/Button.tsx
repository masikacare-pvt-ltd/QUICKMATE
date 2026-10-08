import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "lime" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantStyles = {
      default:
        "bg-[var(--lime)] text-[var(--lime-foreground)] hover:bg-transparent hover:text-[var(--lime)] border border-[var(--lime)] font-extrabold",
      lime: "btn-lime",
      outline:
        "border border-[var(--line-soft)] bg-transparent text-[var(--foreground)] hover:border-[var(--lime)] hover:text-[var(--lime)]",
      ghost: "bg-transparent text-[var(--foreground)] hover:bg-[oklch(1_0_0/5%)]",
    };

    const sizeStyles = {
      default: "min-h-[45px] px-[18px]",
      sm: "min-h-[35px] px-[12px] text-[10px]",
      lg: "min-h-[50px] px-[24px] text-[12px]",
      icon: "w-[38px] h-[38px] p-0 flex items-center justify-center",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center cursor-pointer transition-all duration-180 disabled:opacity-50 disabled:pointer-events-none rounded-[2px]",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
