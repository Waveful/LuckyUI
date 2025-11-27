import * as React from "react";
import { Search01Icon, Cancel01Icon } from "hugeicons-react";
import { cn } from "@/lib/utils";
import { Input } from "./Input";

export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onClear?: () => void;
  showClearButton?: boolean;
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onClear, showClearButton = true, value, ...props }, ref) => {
    const hasValue = value && String(value).length > 0;

    return (
      <div className={cn("relative", className)}>
        <Search01Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
        <Input
          ref={ref}
          type="search"
          value={value}
          className={cn("pl-9", hasValue && showClearButton && "pr-9")}
          {...props}
        />
        {hasValue && showClearButton && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            aria-label="Clear search"
          >
            <Cancel01Icon className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";

export { SearchBar };

