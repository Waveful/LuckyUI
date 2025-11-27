import Head from "next/head";
import Link from "next/link";
import {
  Button,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Github01Icon, CodeIcon } from "hugeicons-react";

export default function NextJSPage() {
  return (
    <div className="py-8">
      <Head>
        <title>LuckyUI — Next.js</title>
        <meta
          name="description"
          content="Next.js components and utilities for LuckyUI."
        />
      </Head>

      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold">Next.js</h1>
        <Badge variant="secondary">This Site</Badge>
      </div>
      <p className="text-[hsl(var(--muted-foreground))] mb-8">
        LuckyUI for Next.js provides a comprehensive set of accessible,
        themeable components built with Radix UI and Tailwind CSS.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--primary))]">
                <Github01Icon className="h-5 w-5 text-[hsl(var(--primary-foreground))]" />
              </div>
              <div>
                <CardTitle>GitHub Repository</CardTitle>
                <CardDescription>
                  Source code, documentation, and examples
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Link
              href="https://github.com/Waveful/luckyui_nextjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">View on GitHub</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--secondary))]">
                <CodeIcon className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>Components</CardTitle>
                <CardDescription>
                  Explore all available components
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Link href="/ui">
              <Button variant="outline" className="w-full">
                View Components
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Features */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>
            What you get with LuckyUI for Next.js
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[hsl(var(--primary))]">✓</span>
              <span>Accessible components built with Radix UI primitives</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[hsl(var(--primary))]">✓</span>
              <span>Dark mode support with next-themes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[hsl(var(--primary))]">✓</span>
              <span>Fully customizable with CSS variables</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[hsl(var(--primary))]">✓</span>
              <span>TypeScript support with full type definitions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[hsl(var(--primary))]">✓</span>
              <span>Tailwind CSS integration with class-variance-authority</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>
            Clone the repository to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
            <code>{`# Clone the repository
git clone https://github.com/Waveful/luckyui_nextjs.git

# Navigate to the directory
cd luckyui_nextjs

# Install dependencies
npm install

# Start the development server
npm run dev`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
