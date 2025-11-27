"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon02Icon, Sun03Icon } from "hugeicons-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    if (theme === "light" || (theme === "system" && resolvedTheme === "light")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={cn("h-9 w-9", className)}>
        <span className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className={cn("h-9 w-9", className)}
      aria-label={`Current theme: ${theme}. Click to toggle theme.`}
      title={`Theme: ${theme}`}
    >
      {resolvedTheme === "dark" ? (
        <Moon02Icon className="h-5 w-5" />
      ) : (
        <Sun03Icon className="h-5 w-5" />
      )}
    </Button>
  );
}

export function ThemeSwitch({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isLight = theme === "light" || (theme === "system" && resolvedTheme === "light");
  const isDark = theme === "dark" || (theme === "system" && resolvedTheme === "dark");

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-lg bg-[hsl(var(--muted))] p-1",
        className
      )}
    >
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors",
          isLight
            ? "bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
            : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
        )}
        aria-label="Light theme"
      >
        <Sun03Icon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors",
          isDark
            ? "bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
            : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
        )}
        aria-label="Dark theme"
      >
        <Moon02Icon className="h-4 w-4" />
      </button>
    </div>
  );
}

