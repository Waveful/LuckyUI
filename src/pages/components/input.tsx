import Head from "next/head";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Separator,
} from "@/components/ui";
import { Search01Icon, Mail01Icon, LockPasswordIcon, UserIcon, EyeIcon } from "hugeicons-react";
import { useState } from "react";

export default function InputPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="py-8">
      <Head>
        <title>Input — LuckyUI</title>
        <meta
          name="description"
          content="Input component for LuckyUI - form input fields with various types and states."
        />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Input</h1>
          <Badge variant="secondary">Form</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          Displays a form input field. Supports various types, states, and can be combined with labels and icons.
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-8">
          {/* Basic Inputs */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Input</CardTitle>
              <CardDescription>
                Simple input fields for various data types.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-w-md">
              <Input placeholder="Default input" />
              <Input type="email" placeholder="Email input" />
              <Input type="password" placeholder="Password input" />
              <Input type="number" placeholder="Number input" />
            </CardContent>
          </Card>

          {/* With Labels */}
          <Card>
            <CardHeader>
              <CardTitle>With Labels</CardTitle>
              <CardDescription>
                Combine inputs with labels for better accessibility.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter your username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="input-email">Email</Label>
                <Input id="input-email" type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="input-password">Password</Label>
                <Input id="input-password" type="password" placeholder="Enter password" />
              </div>
            </CardContent>
          </Card>

          {/* With Icons */}
          <Card>
            <CardHeader>
              <CardTitle>With Icons</CardTitle>
              <CardDescription>
                Add icons to provide visual context.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Search01Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
                  <Input id="search" placeholder="Search..." className="pl-9" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="icon-email">Email</Label>
                <div className="relative">
                  <Mail01Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
                  <Input id="icon-email" type="email" placeholder="name@example.com" className="pl-9" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="icon-user">Username</Label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
                  <Input id="icon-user" placeholder="johndoe" className="pl-9" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="icon-password">Password</Label>
                <div className="relative">
                  <LockPasswordIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
                  <Input
                    id="icon-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="pl-9 pr-9"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                  >
                    <EyeIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* States */}
          <Card>
            <CardHeader>
              <CardTitle>States</CardTitle>
              <CardDescription>
                Inputs support various states.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="default-state">Default</Label>
                <Input id="default-state" placeholder="Default input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled-input" className="text-[hsl(var(--muted-foreground))]">
                  Disabled
                </Label>
                <Input id="disabled-input" disabled placeholder="Disabled input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="readonly-input">Read-only</Label>
                <Input id="readonly-input" readOnly value="This is read-only" />
              </div>
            </CardContent>
          </Card>

          {/* With Button */}
          <Card>
            <CardHeader>
              <CardTitle>With Button</CardTitle>
              <CardDescription>
                Combine inputs with buttons for actions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-w-md">
              <div className="flex gap-2">
                <Input placeholder="Enter your email" type="email" />
                <Button>Subscribe</Button>
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search01Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
                  <Input placeholder="Search..." className="pl-9" />
                </div>
                <Button variant="secondary">Search</Button>
              </div>
            </CardContent>
          </Card>

          {/* File Input */}
          <Card>
            <CardHeader>
              <CardTitle>File Input</CardTitle>
              <CardDescription>
                Input for file uploads.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="file-upload">Upload File</Label>
                <Input id="file-upload" type="file" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>
                Import and use the Input component in your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`import { Input, Label } from "@/components/ui";

// Basic input
<Input placeholder="Enter text..." />

// With label
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="name@example.com" />
</div>

// With icon
<div className="relative">
  <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
  <Input placeholder="Search..." className="pl-9" />
</div>

// Disabled
<Input disabled placeholder="Disabled input" />

// With button
<div className="flex gap-2">
  <Input placeholder="Email" />
  <Button>Subscribe</Button>
</div>

// File input
<Input type="file" />`}</code>
              </pre>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>
                Input extends all native input attributes.
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
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">type</td>
                      <td className="py-3 px-2 font-mono text-xs">text | email | password | number | file | ...</td>
                      <td className="py-3 px-2 font-mono">text</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">placeholder</td>
                      <td className="py-3 px-2 font-mono text-xs">string</td>
                      <td className="py-3 px-2 font-mono">-</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">disabled</td>
                      <td className="py-3 px-2 font-mono text-xs">boolean</td>
                      <td className="py-3 px-2 font-mono">false</td>
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

