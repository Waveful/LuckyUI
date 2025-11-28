"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  MoreHorizontalIcon,
} from "hugeicons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

// Context for sidebar state
interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  collapsible: boolean;
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

// Sidebar Provider
interface SidebarProviderProps {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
  collapsible?: boolean;
}

function SidebarProvider({
  children,
  defaultCollapsed = false,
  collapsible = true,
}: SidebarProviderProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, collapsible }}>
      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
    </SidebarContext.Provider>
  );
}

// Sidebar Root
const sidebarVariants = cva(
  "flex flex-col bg-[hsl(var(--background))] border-r border-[hsl(var(--border))] transition-all duration-300 ease-in-out h-full",
  {
    variants: {
      variant: {
        default: "bg-[hsl(var(--background))]",
        inset:
          "bg-[hsl(var(--muted))] border-0 rounded-[var(--radius)] m-2 h-[calc(100%-1rem)]",
        floating:
          "bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-[var(--radius)] m-2 h-[calc(100%-1rem)] shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  collapsedWidth?: string;
  expandedWidth?: string;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      variant,
      collapsedWidth = "4rem",
      expandedWidth = "16rem",
      style,
      ...props
    },
    ref
  ) => {
    const { collapsed } = useSidebar();

    return (
      <div
        ref={ref}
        data-collapsed={collapsed}
        className={cn(sidebarVariants({ variant }), className)}
        style={{
          width: collapsed ? collapsedWidth : expandedWidth,
          minWidth: collapsed ? collapsedWidth : expandedWidth,
          ...style,
        }}
        {...props}
      />
    );
  }
);
Sidebar.displayName = "Sidebar";

// Sidebar Header
const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 px-4 py-4 min-h-[60px]", className)}
    {...props}
  />
));
SidebarHeader.displayName = "SidebarHeader";

// Sidebar Content (scrollable area)
const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-y-auto overflow-x-hidden px-3 py-2", className)}
    {...props}
  />
));
SidebarContent.displayName = "SidebarContent";

// Sidebar Footer
const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mt-auto flex items-center gap-2 px-3 py-4 border-t border-[hsl(var(--border))]",
      className
    )}
    {...props}
  />
));
SidebarFooter.displayName = "SidebarFooter";

// Sidebar Group
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, label, children, ...props }, ref) => {
    const { collapsed } = useSidebar();

    return (
      <div ref={ref} className={cn("py-2", className)} {...props}>
        {label && !collapsed && (
          <span className="px-3 text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-2 block">
            {label}
          </span>
        )}
        {label && collapsed && (
          <div className="flex justify-center py-1">
            <MoreHorizontalIcon className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
          </div>
        )}
        <nav className="space-y-1">{children}</nav>
      </div>
    );
  }
);
SidebarGroup.displayName = "SidebarGroup";

// Sidebar Item
const sidebarItemVariants = cva(
  "group flex items-center gap-3 rounded-[var(--radius)] px-3 py-2.5 text-sm font-medium transition-all duration-150",
  {
    variants: {
      variant: {
        default:
          "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]",
        active:
          "text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10 hover:bg-[hsl(var(--primary))]/15",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface SidebarItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarItemVariants> {
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  asChild?: boolean;
}

const SidebarItem = React.forwardRef<HTMLButtonElement, SidebarItemProps>(
  (
    { className, variant, icon, badge, children, asChild = false, ...props },
    ref
  ) => {
    const { collapsed } = useSidebar();
    const Comp = asChild ? Slot : "button";

    const content = (
      <Comp
        ref={ref}
        className={cn(
          sidebarItemVariants({ variant }),
          collapsed && "justify-center px-2",
          className
        )}
        {...props}
      >
        {icon && (
          <span className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
            {icon}
          </span>
        )}
        {!collapsed && (
          <>
            <span className="flex-1 truncate text-left">{children}</span>
            {badge && <span className="flex-shrink-0">{badge}</span>}
          </>
        )}
      </Comp>
    );

    if (collapsed && children) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent side="right" sideOffset={10}>
            {children}
          </TooltipContent>
        </Tooltip>
      );
    }

    return content;
  }
);
SidebarItem.displayName = "SidebarItem";

// Sidebar Toggle Button
type SidebarTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const SidebarTrigger = React.forwardRef<HTMLButtonElement, SidebarTriggerProps>(
  ({ className, ...props }, ref) => {
    const { collapsed, setCollapsed, collapsible } = useSidebar();

    if (!collapsible) return null;

    return (
      <button
        ref={ref}
        onClick={() => setCollapsed(!collapsed)}
        className={cn(
          "flex items-center justify-center h-8 w-8 rounded-[var(--radius)] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))] transition-colors",
          className
        )}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        {...props}
      >
        {collapsed ? (
          <ArrowRight01Icon className="h-4 w-4" />
        ) : (
          <ArrowLeft01Icon className="h-4 w-4" />
        )}
      </button>
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";

// Sidebar Separator
const SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-px bg-[hsl(var(--border))] my-2 mx-3", className)}
    {...props}
  />
));
SidebarSeparator.displayName = "SidebarSeparator";

// Sidebar Inset (for main content area)
const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-auto", className)}
    {...props}
  />
));
SidebarInset.displayName = "SidebarInset";

export {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarItem,
  SidebarTrigger,
  SidebarSeparator,
  SidebarInset,
  useSidebar,
  sidebarVariants,
  sidebarItemVariants,
};

