import Head from "next/head";
import {
  Button,
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
  Badge,
} from "@/components/ui";
import {
  ArrowRight01Icon,
  Download01Icon,
  Settings01Icon,
  Loading03Icon,
  Mail01Icon,
  Add01Icon,
} from "hugeicons-react";

export default function ButtonPage() {
  return (
    <div className="py-8">
      <Head>
        <title>Button — LuckyUI</title>
        <meta
          name="description"
          content="Button component for LuckyUI - displays clickable elements with multiple variants, sizes, and states."
        />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Button</h1>
          <Badge variant="secondary">Interactive</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          Displays a button or a component that looks like a button. Supports multiple variants, sizes, and states.
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-8">
          {/* Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Variants</CardTitle>
              <CardDescription>
                Different button styles for various use cases and visual hierarchy. All buttons have a tap scaling animation.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="gradient">Gradient</Button>
            </CardContent>
          </Card>

          {/* Sizes */}
          <Card>
            <CardHeader>
              <CardTitle>Sizes</CardTitle>
              <CardDescription>
                Buttons come in different sizes for various contexts and layouts.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Settings">
                <Settings01Icon className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* With Icons */}
          <Card>
            <CardHeader>
              <CardTitle>With Icons</CardTitle>
              <CardDescription>
                Buttons can include icons for better visual communication.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>
                <Mail01Icon className="h-4 w-4 mr-2" />
                Login with Email
              </Button>
              <Button variant="outline">
                <Download01Icon className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="secondary">
                Continue
                <ArrowRight01Icon className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="destructive">
                <Add01Icon className="h-4 w-4 mr-2 rotate-45" />
                Delete
              </Button>
            </CardContent>
          </Card>

          {/* States */}
          <Card>
            <CardHeader>
              <CardTitle>States</CardTitle>
              <CardDescription>
                Buttons support disabled and loading states.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button variant="secondary" disabled>
                Disabled Secondary
              </Button>
              <Button variant="outline" disabled>
                Disabled Outline
              </Button>
              <Button disabled>
                <Loading03Icon className="h-4 w-4 mr-2 animate-spin" />
                Loading...
              </Button>
            </CardContent>
          </Card>

          {/* Full Width */}
          <Card>
            <CardHeader>
              <CardTitle>Full Width</CardTitle>
              <CardDescription>
                Buttons can span the full width of their container.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">Full Width Button</Button>
              <Button variant="outline" className="w-full">
                Full Width Outline
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>
                Import and use the Button component in your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`import { Button } from "@/components/ui";

// Basic usage - all buttons have tap scaling animation
<Button>Click me</Button>

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="gradient">Gradient</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <SettingsIcon className="h-4 w-4" />
</Button>

// With Icon
<Button>
  <DownloadIcon className="h-4 w-4 mr-2" />
  Download
</Button>

// Disabled state
<Button disabled>Disabled</Button>

// Full width
<Button className="w-full">Full Width</Button>`}</code>
              </pre>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>
                Button component accepts the following props.
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
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">variant</td>
                      <td className="py-3 px-2 font-mono text-xs">default | secondary | destructive | outline | ghost | link | gradient</td>
                      <td className="py-3 px-2 font-mono">default</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">size</td>
                      <td className="py-3 px-2 font-mono text-xs">default | sm | lg | icon</td>
                      <td className="py-3 px-2 font-mono">default</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">asChild</td>
                      <td className="py-3 px-2 font-mono text-xs">boolean</td>
                      <td className="py-3 px-2 font-mono">false</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">disabled</td>
                      <td className="py-3 px-2 font-mono text-xs">boolean</td>
                      <td className="py-3 px-2 font-mono">false</td>
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

