import Head from "next/head";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@/components/ui";
import { ArrowRight01Icon, Download01Icon, Settings01Icon } from "hugeicons-react";

export default function ButtonsPage() {
  return (
    <div className="py-8">
      <Head>
        <title>LuckyUI — Buttons</title>
        <meta
          name="description"
          content="Buttons component variants and states in LuckyUI."
        />
      </Head>

      <h1 className="text-3xl font-bold mb-2">Buttons</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-8">
        Displays a button or a component that looks like a button.
      </p>

      {/* Variants */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>
            Different button styles for different use cases.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>
            Buttons come in different sizes for different contexts.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Settings01Icon className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {/* With Icons */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>With Icons</CardTitle>
          <CardDescription>
            Buttons can include icons for better visual communication.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>
            <Download01Icon className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button variant="outline">
            Continue
            <ArrowRight01Icon className="h-4 w-4 ml-2" />
          </Button>
          <Button variant="secondary">
            <Settings01Icon className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </CardContent>
      </Card>

      {/* States */}
      <Card>
        <CardHeader>
          <CardTitle>States</CardTitle>
          <CardDescription>
            Buttons can be disabled or in loading states.
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
        </CardContent>
      </Card>

      <Separator className="my-8" />

      {/* Usage */}
      <h2 className="text-xl font-semibold mb-4">Usage</h2>
      <Card>
        <CardContent className="pt-6">
          <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
            <code>{`import { Button } from "@/components/ui";

// Default button
<Button>Click me</Button>

// With variant
<Button variant="secondary">Secondary</Button>

// With size
<Button size="lg">Large Button</Button>

// With icon
<Button>
  <DownloadIcon className="mr-2 h-4 w-4" />
  Download
</Button>`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
