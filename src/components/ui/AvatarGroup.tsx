import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  children: React.ReactNode;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max, children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const visibleAvatars = max ? childrenArray.slice(0, max) : childrenArray;
    const remainingCount = max ? childrenArray.length - max : 0;

    return (
      <div
        ref={ref}
        className={cn("flex -space-x-3", className)}
        {...props}
      >
        {visibleAvatars.map((child, index) => (
          <div
            key={index}
            className="relative ring-2 ring-[hsl(var(--background))] rounded-full"
          >
            {child}
          </div>
        ))}
        {remainingCount > 0 && (
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] text-xs font-medium ring-2 ring-[hsl(var(--background))]">
            +{remainingCount}
          </div>
        )}
      </div>
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup };

