import Head from "next/head";
import {
  Badge,
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
} from "@/components/ui";
import { CheckmarkCircle01Icon, Cancel01Icon, Alert01Icon, InformationCircleIcon } from "hugeicons-react";

export default function BadgePage() {
  return (
    <div className="py-8">
      <Head>
        <title>Badge — LuckyUI</title>
        <meta
          name="description"
          content="Badge component for LuckyUI - displays a status indicator or label."
        />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Badge</h1>
          <Badge>Display</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          Displays a badge or a component that looks like a badge. Perfect for status indicators, labels, and counts.
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
                Different badge styles for various contexts and meanings.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="outline">Outline</Badge>
            </CardContent>
          </Card>

          {/* Status Indicators */}
          <Card>
            <CardHeader>
              <CardTitle>Status Indicators</CardTitle>
              <CardDescription>
                Use badges to communicate status clearly.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Badge variant="success" className="gap-1">
                <CheckmarkCircle01Icon className="h-3 w-3" />
                Completed
              </Badge>
              <Badge variant="warning" className="gap-1">
                <Alert01Icon className="h-3 w-3" />
                Pending
              </Badge>
              <Badge variant="destructive" className="gap-1">
                <Cancel01Icon className="h-3 w-3" />
                Failed
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <InformationCircleIcon className="h-3 w-3" />
                Info
              </Badge>
            </CardContent>
          </Card>

          {/* With Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>With Buttons</CardTitle>
              <CardDescription>
                Combine badges with buttons for notification indicators.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-4">
              <Button variant="outline" className="gap-2">
                Inbox
                <Badge className="ml-1">5</Badge>
              </Button>
              <Button variant="secondary" className="gap-2">
                Updates
                <Badge variant="success">New</Badge>
              </Button>
              <Button variant="ghost" className="gap-2">
                Messages
                <Badge variant="destructive">3</Badge>
              </Button>
            </CardContent>
          </Card>

          {/* In Cards */}
          <Card>
            <CardHeader>
              <CardTitle>In Cards</CardTitle>
              <CardDescription>
                Badges work great in card headers for categorization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Premium Feature</CardTitle>
                      <Badge>Pro</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                      This feature is available to pro users.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">New Release</CardTitle>
                      <Badge variant="success">v2.0</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                      Latest version with new features.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Sizes */}
          <Card>
            <CardHeader>
              <CardTitle>Custom Sizes</CardTitle>
              <CardDescription>
                Adjust badge sizes using className for different contexts.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Badge className="text-[10px] px-1.5 py-0">Tiny</Badge>
              <Badge>Default</Badge>
              <Badge className="text-sm px-3 py-1">Large</Badge>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>
                Import and use the Badge component in your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`import { Badge } from "@/components/ui";

// Basic usage
<Badge>Badge</Badge>

// Variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="outline">Outline</Badge>

// With icon
<Badge variant="success" className="gap-1">
  <CheckIcon className="h-3 w-3" />
  Completed
</Badge>

// Custom size
<Badge className="text-[10px] px-1.5 py-0">Small</Badge>

// With button
<Button>
  Inbox
  <Badge className="ml-2">5</Badge>
</Button>`}</code>
              </pre>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>
                Badge component accepts the following props.
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
                      <td className="py-3 px-2 font-mono text-xs">default | secondary | destructive | success | warning | outline</td>
                      <td className="py-3 px-2 font-mono">default</td>
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

