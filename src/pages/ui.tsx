import Head from "next/head";
import {
  Button,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { Search01Icon } from "hugeicons-react";

export default function UIPage() {
  return (
    <div className="py-8">
      <Head>
        <title>LuckyUI — Components</title>
        <meta
          name="description"
          content="Preview the core UI components of LuckyUI."
        />
      </Head>

      <h1 className="text-3xl font-bold mb-2">UI Components</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-8">
        A comprehensive collection of accessible, themeable UI components.
      </p>

      {/* Buttons */}
      <section id="buttons" className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Badges */}
      <section id="badges" className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Badge</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Card */}
      <section id="card" className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Card</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                Card description goes here. It can span multiple lines.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                This is the main content area of the card. You can put any
                content here.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>With Badge</CardTitle>
                <Badge variant="success">New</Badge>
              </div>
              <CardDescription>A card with a badge in the header.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Cards are versatile containers for grouping related content.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Input */}
      <section id="input" className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Input</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="grid gap-2 max-w-sm">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="grid gap-2 max-w-sm">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>
            <div className="grid gap-2 max-w-sm">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search01Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
                <Input id="search" placeholder="Search..." className="pl-9" />
              </div>
            </div>
            <div className="grid gap-2 max-w-sm">
              <Label htmlFor="disabled">Disabled</Label>
              <Input id="disabled" disabled placeholder="Disabled input" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tabs */}
      <section id="tabs" className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Tabs</h2>
        <Card>
          <CardContent className="pt-6">
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="mt-4">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </p>
              </TabsContent>
              <TabsContent value="password" className="mt-4">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </p>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Configure your settings and preferences here.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Separator */}
      <section id="separator" className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Separator</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium">LuckyUI Design System</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  A comprehensive UI component library.
                </p>
              </div>
              <Separator />
              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>GitHub</div>
                <Separator orientation="vertical" />
                <div>Support</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
