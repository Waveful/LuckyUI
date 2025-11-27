import * as React from "react";
import { cn } from "@/lib/utils";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg";
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, size = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-4 w-4 border-2",
      default: "h-6 w-6 border-2",
      lg: "h-8 w-8 border-3",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "animate-spin rounded-full border-[hsl(var(--primary))] border-t-transparent",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
Loading.displayName = "Loading";

export { Loading };

