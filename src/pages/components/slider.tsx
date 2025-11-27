import Head from "next/head";
import { useState } from "react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Slider,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

export default function SliderPage() {
  const [value, setValue] = useState([50]);

  return (
    <div className="py-8">
      <Head>
        <title>Slider — LuckyUI</title>
        <meta name="description" content="Slider component for LuckyUI - range slider for numeric values." />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Slider</h1>
          <Badge variant="secondary">Form</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          An input where the user selects a value from within a given range.
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
              <CardTitle>Basic Slider</CardTitle>
              <CardDescription>A simple range slider.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-w-md">
              <Slider
                value={value}
                onValueChange={setValue}
                max={100}
                step={1}
              />
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Value: {value[0]}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>With Label</CardTitle>
              <CardDescription>Slider with label and value display.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-w-md">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Volume</Label>
                  <span className="text-sm text-[hsl(var(--muted-foreground))]">{value[0]}%</span>
                </div>
                <Slider
                  value={value}
                  onValueChange={setValue}
                  max={100}
                  step={1}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Different Steps</CardTitle>
              <CardDescription>Sliders with different step values.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 max-w-md">
              <div className="space-y-2">
                <Label>Step: 1</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Step: 10</Label>
                <Slider defaultValue={[50]} max={100} step={10} />
              </div>
              <div className="space-y-2">
                <Label>Step: 25</Label>
                <Slider defaultValue={[50]} max={100} step={25} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disabled</CardTitle>
              <CardDescription>Disabled slider state.</CardDescription>
            </CardHeader>
            <CardContent className="max-w-md">
              <Slider defaultValue={[50]} disabled />
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
                <code>{`import { Slider } from "@/components/ui";

// Basic slider
<Slider defaultValue={[50]} max={100} step={1} />

// Controlled slider
const [value, setValue] = useState([50]);

<Slider
  value={value}
  onValueChange={setValue}
  max={100}
  step={1}
/>

// Disabled
<Slider defaultValue={[50]} disabled />`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

