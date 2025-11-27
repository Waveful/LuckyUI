import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
} from "@/components/ui";

export default function Home() {
  return (
    <div className="py-8">
      <Head>
        <title>LuckyUI — Home</title>
        <meta
          name="description"
          content="Welcome to LuckyUI, Waveful's official design system."
        />
      </Head>

      <div className="flex flex-col items-center text-center mb-12">
        <Image
          src="/lucky_ui_logo.png"
          alt="Lucky UI logo"
          width={180}
          height={180}
          priority
          className="rounded-2xl mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          LuckyUI
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl">
          Waveful&apos;s official design system. Accessible, themeable
          components, design tokens, and tooling to build consistent,
          high‑quality interfaces across Waveful products.
        </p>
      </div>

      {/* Frameworks Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Frameworks</h2>
        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
          LuckyUI is available for different frameworks and platforms.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/flutter">
            <Button variant="outline">Flutter</Button>
          </Link>
          <Link href="/nextjs">
            <Button variant="outline">Next.js</Button>
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
          Design tokens, assets, and foundational elements of the LuckyUI design
          system.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: "/logos", title: "Logos", desc: "Brand logos and assets" },
            { href: "/characters", title: "Characters", desc: "Waveful mascots" },
            { href: "/colors", title: "Colors", desc: "Color palette and scales" },
            { href: "/gradients", title: "Gradients", desc: "Gradient assets" },
            { href: "/typography", title: "Typography", desc: "Font styles and sizes" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="h-full hover:border-[hsl(var(--primary))] transition-colors cursor-pointer">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Components Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Components</h2>
        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
          Interactive UI components built with accessibility and theming in mind.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: "/components/button", title: "Button", desc: "Clickable buttons with variants" },
            { href: "/components/badge", title: "Badge", desc: "Status indicators and labels" },
            { href: "/components/card", title: "Card", desc: "Content container component" },
            { href: "/components/input", title: "Input", desc: "Form input fields" },
            { href: "/components/tabs", title: "Tabs", desc: "Tabbed content navigation" },
            { href: "/components/separator", title: "Separator", desc: "Visual content divider" },
            { href: "/components/theme-toggle", title: "ThemeToggle", desc: "Light/dark theme switch" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="h-full hover:border-[hsl(var(--primary))] transition-colors cursor-pointer">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
