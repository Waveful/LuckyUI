import Head from "next/head";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Textarea,
  Label,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

export default function TextareaPage() {
  return (
    <div className="py-8">
      <Head>
        <title>Textarea — LuckyUI</title>
        <meta name="description" content="Textarea component for LuckyUI - multi-line text input." />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Textarea</h1>
          <Badge variant="secondary">Form</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          Displays a form textarea for multi-line text input.
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Textarea</CardTitle>
              <CardDescription>A simple multi-line text input.</CardDescription>
            </CardHeader>
            <CardContent className="max-w-md">
              <Textarea placeholder="Type your message here..." />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>With Label</CardTitle>
              <CardDescription>Textarea with form label.</CardDescription>
            </CardHeader>
            <CardContent className="max-w-md space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message..." />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>With Button</CardTitle>
              <CardDescription>Textarea in a form context.</CardDescription>
            </CardHeader>
            <CardContent className="max-w-md space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feedback">Feedback</Label>
                <Textarea
                  id="feedback"
                  placeholder="Tell us what you think..."
                  className="min-h-[100px]"
                />
              </div>
              <Button>Submit</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disabled</CardTitle>
              <CardDescription>Disabled textarea state.</CardDescription>
            </CardHeader>
            <CardContent className="max-w-md">
              <Textarea disabled placeholder="This textarea is disabled" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Height</CardTitle>
              <CardDescription>Textarea with custom minimum height.</CardDescription>
            </CardHeader>
            <CardContent className="max-w-md">
              <Textarea
                placeholder="This textarea has a taller minimum height..."
                className="min-h-[150px]"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`import { Textarea, Label } from "@/components/ui";

// Basic textarea
<Textarea placeholder="Type here..." />

// With label
<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Enter message..." />
</div>

// Custom height
<Textarea className="min-h-[150px]" />

// Disabled
<Textarea disabled placeholder="Disabled" />`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}


