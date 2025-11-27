import Head from "next/head";
import { useState } from "react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Switch,
  Label,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

export default function SwitchPage() {
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);

  return (
    <div className="py-8">
      <Head>
        <title>Switch — LuckyUI</title>
        <meta name="description" content="Switch component for LuckyUI - toggle switches for boolean settings." />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Switch</h1>
          <Badge variant="secondary">Interactive</Badge>
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
              <CardTitle>Basic Switch</CardTitle>
              <CardDescription>A simple toggle switch.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Settings Example</CardTitle>
              <CardDescription>Switches in a settings context.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Notifications</Label>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Receive push notifications
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing">Marketing emails</Label>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Receive emails about new features
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={marketing}
                  onCheckedChange={setMarketing}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disabled State</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Switch disabled />
              <Label className="text-[hsl(var(--muted-foreground))]">Disabled</Label>
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
                <code>{`import { Switch, Label } from "@/components/ui";

// Basic switch
<div className="flex items-center gap-4">
  <Switch id="mode" />
  <Label htmlFor="mode">Dark Mode</Label>
</div>

// Controlled switch
const [enabled, setEnabled] = useState(false);

<Switch
  checked={enabled}
  onCheckedChange={setEnabled}
/>

// Disabled
<Switch disabled />`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}


