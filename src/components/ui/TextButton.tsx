import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "muted";
}

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:underline underline-offset-4",
          {
            "text-[hsl(var(--primary))]": variant === "default",
            "text-[hsl(var(--destructive))]": variant === "destructive",
            "text-[hsl(var(--muted-foreground))]": variant === "muted",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
TextButton.displayName = "TextButton";

export { TextButton };

