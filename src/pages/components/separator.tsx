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
} from "@/components/ui";

export default function SeparatorPage() {
  return (
    <div className="py-8">
      <Head>
        <title>Separator — LuckyUI</title>
        <meta
          name="description"
          content="Separator component for LuckyUI - visually divides content."
        />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Separator</h1>
          <Badge variant="secondary">Layout</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          Visually or semantically separates content. Supports horizontal and vertical orientations.
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-8">
          {/* Horizontal */}
          <Card>
            <CardHeader>
              <CardTitle>Horizontal</CardTitle>
              <CardDescription>
                The default separator orientation divides content vertically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">LuckyUI Design System</h4>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    A beautiful and accessible component library.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="text-sm font-medium">Built with Radix</h4>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Primitives that provide accessibility out of the box.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="text-sm font-medium">Styled with Tailwind</h4>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Utility-first CSS for rapid development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vertical */}
          <Card>
            <CardHeader>
              <CardTitle>Vertical</CardTitle>
              <CardDescription>
                Use vertical separators to divide content horizontally.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Home</div>
                <Separator orientation="vertical" />
                <div>Documentation</div>
                <Separator orientation="vertical" />
                <div>Components</div>
                <Separator orientation="vertical" />
                <div>GitHub</div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Example */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation Example</CardTitle>
              <CardDescription>
                Separators work great in navigation and breadcrumbs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-5 items-center space-x-2 text-sm">
                <span className="text-[hsl(var(--muted-foreground))]">Docs</span>
                <Separator orientation="vertical" />
                <span className="text-[hsl(var(--muted-foreground))]">Components</span>
                <Separator orientation="vertical" />
                <span className="font-medium">Separator</span>
              </div>
            </CardContent>
          </Card>

          {/* In Cards */}
          <Card>
            <CardHeader>
              <CardTitle>In Cards</CardTitle>
              <CardDescription>
                Separators help structure card content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Card className="max-w-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>$99.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>$4.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>$8.32</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>$112.31</span>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Text Divider */}
          <Card>
            <CardHeader>
              <CardTitle>Text Divider</CardTitle>
              <CardDescription>
                Create text dividers by combining separators with text.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Separator className="flex-1" />
                <span className="text-sm text-[hsl(var(--muted-foreground))]">OR</span>
                <Separator className="flex-1" />
              </div>
              <div className="flex items-center gap-4">
                <Separator className="flex-1" />
                <span className="text-sm text-[hsl(var(--muted-foreground))]">Continue with</span>
                <Separator className="flex-1" />
              </div>
            </CardContent>
          </Card>

          {/* Custom Styling */}
          <Card>
            <CardHeader>
              <CardTitle>Custom Styling</CardTitle>
              <CardDescription>
                Separators can be customized with className.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Default</p>
                <Separator />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Thicker</p>
                <Separator className="h-[2px]" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Colored</p>
                <Separator className="bg-[hsl(var(--primary))]" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Partial width</p>
                <Separator className="w-1/2" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>
                Import and use the Separator component in your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`import { Separator } from "@/components/ui";

// Horizontal separator (default)
<Separator />

// Vertical separator
<div className="flex h-5 items-center space-x-4">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
  <Separator orientation="vertical" />
  <div>Item 3</div>
</div>

// Text divider
<div className="flex items-center gap-4">
  <Separator className="flex-1" />
  <span>OR</span>
  <Separator className="flex-1" />
</div>

// Custom styling
<Separator className="h-[2px] bg-[hsl(var(--primary))]" />`}</code>
              </pre>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>
                Separator component accepts the following props.
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
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">orientation</td>
                      <td className="py-3 px-2 font-mono text-xs">horizontal | vertical</td>
                      <td className="py-3 px-2 font-mono">horizontal</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">decorative</td>
                      <td className="py-3 px-2 font-mono text-xs">boolean</td>
                      <td className="py-3 px-2 font-mono">true</td>
                    </tr>
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

