import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button, ThemeSwitch, Separator } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Github01Icon } from "hugeicons-react";

type DocsLayoutProps = React.PropsWithChildren<{ className?: string }>;

export function DocsLayout({ children, className }: DocsLayoutProps) {
  return (
    <div
      className={cn("min-h-screen flex flex-col", className)}
    >
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background))]/60">
        <div className="mx-auto w-full max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/lucky_ui_logo.png"
              alt="Lucky UI"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="text-xl font-bold tracking-tight">LuckyUI</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeSwitch />
            <Separator orientation="vertical" className="h-6" />
            <Link
              href="https://github.com/Waveful/luckyui_nextjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github01Icon className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://waveful.com/download">
              <Button size="sm" className="hidden sm:inline-flex">
                Join Waveful
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-20 pb-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="py-6 lg:sticky lg:top-20 h-max lg:pr-6">
            <nav className="text-sm space-y-6">
              {/* Lucky UI */}
              <div>
                <p className="mb-3 font-semibold text-[hsl(var(--foreground))]">
                  Lucky UI
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/"
                    >
                      Welcome
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Frameworks */}
              <div>
                <p className="mb-3 font-semibold text-[hsl(var(--foreground))]">
                  Frameworks
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/flutter"
                    >
                      Flutter
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/nextjs"
                    >
                      Next.js
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Overview */}
              <div>
                <p className="mb-3 font-semibold text-[hsl(var(--foreground))]">
                  Overview
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/logos"
                    >
                      Logos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/characters"
                    >
                      Characters
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/colors"
                    >
                      Colors
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/gradients"
                    >
                      Gradients
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/typography"
                    >
                      Typography
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/brand"
                    >
                      Brand Guidelines
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Components */}
              <div>
                <p className="mb-3 font-semibold text-[hsl(var(--foreground))]">
                  Components
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components"
                    >
                      Overview
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Buttons & Interactions */}
              <div>
                <p className="mb-3 font-semibold text-[hsl(var(--foreground))]">
                  Buttons
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/button"
                    >
                      Button
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/icon-button"
                    >
                      IconButton
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/switch"
                    >
                      Switch
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Form Components */}
              <div>
                <p className="mb-3 font-semibold text-[hsl(var(--foreground))]">
                  Form
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/input"
                    >
                      Input
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/textarea"
                    >
                      Textarea
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/checkbox"
                    >
                      Checkbox
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/select"
                    >
                      Select
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/slider"
                    >
                      Slider
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Data Display */}
              <div>
                <p className="mb-3 font-semibold text-[hsl(var(--foreground))]">
                  Data Display
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/card"
                    >
                      Card
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/badge"
                    >
                      Badge
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/avatar"
                    >
                      Avatar
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/table"
                    >
                      Table
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Feedback */}
              <div>
                <p className="mb-3 font-semibold text-[hsl(var(--foreground))]">
                  Feedback
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/alert"
                    >
                      Alert
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/progress"
                    >
                      Progress
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/skeleton"
                    >
                      Skeleton
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Overlay */}
              <div>
                <p className="mb-3 font-semibold text-[hsl(var(--foreground))]">
                  Overlay
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/dialog"
                    >
                      Dialog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/sheet"
                    >
                      Sheet
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/dropdown-menu"
                    >
                      DropdownMenu
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/tooltip"
                    >
                      Tooltip
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Navigation & Layout */}
              <div>
                <p className="mb-3 font-semibold text-[hsl(var(--foreground))]">
                  Navigation
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/sidebar"
                    >
                      Sidebar
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/tabs"
                    >
                      Tabs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/accordion"
                    >
                      Accordion
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/separator"
                    >
                      Separator
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Theme */}
              <div>
                <p className="mb-3 font-semibold text-[hsl(var(--foreground))]">
                  Theme
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      href="/components/theme-toggle"
                    >
                      ThemeToggle
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Page Content */}
          <main className="py-6 min-w-0">{children}</main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))]">
        <div className="mx-auto w-full max-w-7xl px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-center sm:text-left">
              <div className="font-medium">LuckyUI</div>
              <div className="text-[hsl(var(--muted-foreground))]">
                made with ❤️ by{" "}
                <Link
                  target="_blank"
                  href="https://waveful.com"
                  className="hover:text-[hsl(var(--foreground))] transition-colors"
                >
                  Waveful
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/Waveful/luckyui_nextjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm">
                  <Github01Icon className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </Link>
              <Link
                href="https://reddit.com/r/LuckyUI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.234-.095z" />
                  </svg>
                  Reddit
                </Button>
              </Link>
              <Link href="https://waveful.com/download">
                <Button size="sm">Join Waveful</Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
