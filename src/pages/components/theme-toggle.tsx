import Head from "next/head";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Separator,
  ThemeToggle,
  ThemeSwitch,
} from "@/components/ui";

export default function ThemeTogglePage() {
  return (
    <div className="py-8">
      <Head>
        <title>ThemeToggle — LuckyUI</title>
        <meta
          name="description"
          content="ThemeToggle component for LuckyUI - toggle between light and dark themes."
        />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">ThemeToggle</h1>
          <Badge variant="secondary">Interactive</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          Components for switching between light and dark themes. Includes both button and switch variants.
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-8">
          {/* ThemeToggle */}
          <Card>
            <CardHeader>
              <CardTitle>ThemeToggle Button</CardTitle>
              <CardDescription>
                A simple icon button that cycles between light and dark themes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <span className="text-sm text-[hsl(var(--muted-foreground))]">
                  Click to toggle theme
                </span>
              </div>
            </CardContent>
          </Card>

          {/* ThemeSwitch */}
          <Card>
            <CardHeader>
              <CardTitle>ThemeSwitch</CardTitle>
              <CardDescription>
                A segmented control for selecting between light and dark themes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <ThemeSwitch />
                <span className="text-sm text-[hsl(var(--muted-foreground))]">
                  Choose your preferred theme
                </span>
              </div>
            </CardContent>
          </Card>

          {/* In Header */}
          <Card>
            <CardHeader>
              <CardTitle>In Header</CardTitle>
              <CardDescription>
                Theme toggles are commonly placed in navigation headers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border border-[hsl(var(--border))] rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[hsl(var(--primary))]" />
                    <span className="font-semibold">LuckyUI</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <nav className="hidden sm:flex items-center gap-4 text-sm">
                      <span className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] cursor-pointer transition-colors">Docs</span>
                      <span className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] cursor-pointer transition-colors">Components</span>
                      <span className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] cursor-pointer transition-colors">GitHub</span>
                    </nav>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* In Settings */}
          <Card>
            <CardHeader>
              <CardTitle>In Settings</CardTitle>
              <CardDescription>
                Use ThemeSwitch in settings pages for explicit theme selection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Card className="max-w-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Appearance</CardTitle>
                  <CardDescription>
                    Customize how LuckyUI looks on your device.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Theme</p>
                      <p className="text-xs text-[hsl(var(--muted-foreground))]">
                        Select your preferred theme
                      </p>
                    </div>
                    <ThemeSwitch />
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Comparison</CardTitle>
              <CardDescription>
                Choose the variant that best fits your design.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">ThemeToggle</CardTitle>
                    <CardDescription>Single icon button</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center py-4">
                    <ThemeToggle />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">ThemeSwitch</CardTitle>
                    <CardDescription>Segmented control</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center py-4">
                    <ThemeSwitch />
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>
                Import and use theme toggle components in your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`import { ThemeToggle, ThemeSwitch } from "@/components/ui";

// Simple toggle button
<ThemeToggle />

// Segmented control switch
<ThemeSwitch />

// With custom className
<ThemeToggle className="h-10 w-10" />

// In a header
<header className="flex items-center justify-between">
  <Logo />
  <ThemeToggle />
</header>

// In settings
<div className="flex items-center justify-between">
  <div>
    <p>Theme</p>
    <p>Select your preferred theme</p>
  </div>
  <ThemeSwitch />
</div>`}</code>
              </pre>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Setup</CardTitle>
              <CardDescription>
                Theme toggle requires next-themes to be configured.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`// _app.tsx or layout.tsx
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}`}</code>
              </pre>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
              <CardDescription>
                Available theme toggle components.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <th className="text-left py-3 px-2 font-semibold">Component</th>
                      <th className="text-left py-3 px-2 font-semibold">Description</th>
                      <th className="text-left py-3 px-2 font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-[hsl(var(--muted-foreground))]">
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">ThemeToggle</td>
                      <td className="py-3 px-2">Icon button that cycles themes</td>
                      <td className="py-3 px-2">Headers, compact spaces</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">ThemeSwitch</td>
                      <td className="py-3 px-2">Segmented control for theme selection</td>
                      <td className="py-3 px-2">Settings, explicit selection</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>
                Theme toggle components accept the following props.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <th className="text-left py-3 px-2 font-semibold">Prop</th>
                      <th className="text-left py-3 px-2 font-semibold">Type</th>
                      <th className="text-left py-3 px-2 font-semibold">Default</th>
                    </tr>
                  </thead>
                  <tbody className="text-[hsl(var(--muted-foreground))]">
                    <tr>
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">className</td>
                      <td className="py-3 px-2 font-mono text-xs">string</td>
                      <td className="py-3 px-2 font-mono">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

