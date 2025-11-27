import * as React from "react";
import { cn } from "@/lib/utils";

interface RedDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "default" | "lg";
  pulse?: boolean;
}

const RedDot = React.forwardRef<HTMLSpanElement, RedDotProps>(
  ({ className, size = "default", pulse = false, ...props }, ref) => {
    const sizeClasses = {
      sm: "h-1.5 w-1.5",
      default: "h-2 w-2",
      lg: "h-3 w-3",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-block rounded-full bg-[hsl(var(--destructive))]",
          sizeClasses[size],
          pulse && "animate-pulse",
          className
        )}
        {...props}
      />
    );
  }
);
RedDot.displayName = "RedDot";

export { RedDot };


