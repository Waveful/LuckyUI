import Head from "next/head";
import { useState } from "react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="py-8">
      <Head>
        <title>Checkbox — LuckyUI</title>
        <meta name="description" content="Checkbox component for LuckyUI - checkboxes with indeterminate state support." />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Checkbox</h1>
          <Badge variant="secondary">Form</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          A control that allows the user to toggle between checked and not checked.
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
              <CardTitle>Basic Checkbox</CardTitle>
              <CardDescription>A simple checkbox with label.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Controlled Checkbox</CardTitle>
              <CardDescription>A controlled checkbox example.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="controlled"
                  checked={checked}
                  onCheckedChange={(value) => setChecked(value as boolean)}
                />
                <Label htmlFor="controlled">
                  {checked ? "Checked" : "Unchecked"}
                </Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Checkbox List</CardTitle>
              <CardDescription>Multiple checkboxes in a list.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="option1" />
                <Label htmlFor="option1">Email notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="option2" defaultChecked />
                <Label htmlFor="option2">Push notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="option3" />
                <Label htmlFor="option3">SMS notifications</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disabled State</CardTitle>
              <CardDescription>Disabled checkboxes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled1" disabled />
                <Label htmlFor="disabled1" className="text-[hsl(var(--muted-foreground))]">
                  Disabled unchecked
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled2" disabled defaultChecked />
                <Label htmlFor="disabled2" className="text-[hsl(var(--muted-foreground))]">
                  Disabled checked
                </Label>
              </div>
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
                <code>{`import { Checkbox, Label } from "@/components/ui";

// Basic checkbox
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>

// Controlled checkbox
const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
/>

// Default checked
<Checkbox defaultChecked />

// Disabled
<Checkbox disabled />`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}


