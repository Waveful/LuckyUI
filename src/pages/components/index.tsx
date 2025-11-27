import Head from "next/head";
import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@/components/ui";
import {
  SquareIcon,
  Tag01Icon,
  CreditCardIcon,
  TextFontIcon,
  Menu01Icon,
  MinusSignIcon,
  Moon02Icon,
  UserIcon,
  Alert01Icon,
  Loading03Icon,
  Message01Icon,
  ArrowDown01Icon,
  TextIcon,
  Tick01Icon,
  GridIcon,
  SlidersHorizontalIcon,
  Layers01Icon,
} from "hugeicons-react";

const componentCategories = [
  {
    title: "Buttons & Interactions",
    components: [
      { href: "/components/button", title: "Button", desc: "Clickable buttons with variants, sizes, and tap scaling", icon: SquareIcon },
      { href: "/components/icon-button", title: "IconButton", desc: "Icon-only buttons for compact actions", icon: SquareIcon },
      { href: "/components/switch", title: "Switch", desc: "Toggle switches for boolean settings", icon: SlidersHorizontalIcon },
    ],
  },
  {
    title: "Form & Input",
    components: [
      { href: "/components/input", title: "Input", desc: "Text input fields with icons and states", icon: TextFontIcon },
      { href: "/components/textarea", title: "Textarea", desc: "Multi-line text input", icon: TextIcon },
      { href: "/components/checkbox", title: "Checkbox", desc: "Checkboxes with indeterminate state", icon: Tick01Icon },
      { href: "/components/select", title: "Select", desc: "Dropdown selection component", icon: ArrowDown01Icon },
      { href: "/components/slider", title: "Slider", desc: "Range slider for numeric values", icon: SlidersHorizontalIcon },
    ],
  },
  {
    title: "Data Display",
    components: [
      { href: "/components/card", title: "Card", desc: "Container for grouping content", icon: CreditCardIcon },
      { href: "/components/badge", title: "Badge", desc: "Status indicators and labels", icon: Tag01Icon },
      { href: "/components/avatar", title: "Avatar", desc: "User avatars with fallbacks", icon: UserIcon },
      { href: "/components/table", title: "Table", desc: "Data tables for displaying rows", icon: GridIcon },
    ],
  },
  {
    title: "Feedback",
    components: [
      { href: "/components/alert", title: "Alert", desc: "Alert messages and notifications", icon: Alert01Icon },
      { href: "/components/progress", title: "Progress", desc: "Progress indicators and bars", icon: Loading03Icon },
      { href: "/components/skeleton", title: "Skeleton", desc: "Loading placeholder components", icon: Layers01Icon },
    ],
  },
  {
    title: "Overlay",
    components: [
      { href: "/components/dialog", title: "Dialog", desc: "Modal dialogs for confirmations", icon: Message01Icon },
      { href: "/components/sheet", title: "Sheet", desc: "Slide-out panels (bottom sheets)", icon: Layers01Icon },
      { href: "/components/dropdown-menu", title: "DropdownMenu", desc: "Context and action menus", icon: Menu01Icon },
      { href: "/components/tooltip", title: "Tooltip", desc: "Hover tooltips for hints", icon: Message01Icon },
    ],
  },
  {
    title: "Navigation & Layout",
    components: [
      { href: "/components/tabs", title: "Tabs", desc: "Tabbed content navigation", icon: Menu01Icon },
      { href: "/components/accordion", title: "Accordion", desc: "Collapsible content sections", icon: ArrowDown01Icon },
      { href: "/components/separator", title: "Separator", desc: "Visual content divider", icon: MinusSignIcon },
    ],
  },
  {
    title: "Theme",
    components: [
      { href: "/components/theme-toggle", title: "ThemeToggle", desc: "Light/dark theme switching", icon: Moon02Icon },
    ],
  },
];

export default function ComponentsPage() {
  const totalComponents = componentCategories.reduce((acc, cat) => acc + cat.components.length, 0);

  return (
    <div className="py-8">
      <Head>
        <title>Components — LuckyUI</title>
        <meta
          name="description"
          content="Browse all LuckyUI components - accessible, themeable UI components for Next.js."
        />
      </Head>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Components</h1>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          A comprehensive collection of accessible, themeable UI components built with Radix UI and Tailwind CSS.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="outline">{totalComponents} Components</Badge>
        <Badge variant="secondary">Radix UI</Badge>
        <Badge variant="secondary">Tailwind CSS</Badge>
        <Badge variant="secondary">TypeScript</Badge>
      </div>

      <Separator className="mb-8" />

      {componentCategories.map((category) => (
        <div key={category.title} className="mb-8">
          <h2 className="text-lg font-semibold mb-4">{category.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.components.map((component) => (
              <Link key={component.href} href={component.href}>
                <Card className="h-full hover:border-[hsl(var(--primary))] transition-colors cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[hsl(var(--muted))] group-hover:bg-[hsl(var(--primary))] group-hover:text-[hsl(var(--primary-foreground))] transition-colors">
                        <component.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base">{component.title}</CardTitle>
                        <CardDescription className="mt-1 text-xs">{component.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <Separator className="my-8" />

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            Get started with LuckyUI components in your Next.js project.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            LuckyUI components are designed to be copied directly into your project. Each component
            is self-contained and can be customized to match your design system.
          </p>
          <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
            <code>{`// Import components from your UI folder
import { Button, Card, Badge, Dialog } from "@/components/ui";

// Use them in your app
export default function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
      <Badge>New</Badge>
    </Card>
  );
}`}</code>
          </pre>
          <div className="flex gap-3">
            <Link href="https://github.com/Waveful/luckyui_nextjs" target="_blank">
              <Button variant="outline" size="sm">
                View on GitHub
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
