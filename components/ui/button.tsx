import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "ghost";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
    const styles = {
      default: "bg-primary text-primary-foreground hover:opacity-95",
      secondary: "bg-secondary text-secondary-foreground hover:opacity-95",
      ghost: "hover:bg-muted"
    }[variant];
    return <button ref={ref} className={cn(base, styles, className)} {...props} />;
  }
);
Button.displayName = "Button";
