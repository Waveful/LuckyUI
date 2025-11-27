import Head from "next/head";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { ArrowRight01Icon, Notification01Icon, Settings01Icon } from "hugeicons-react";

export default function CardPage() {
  return (
    <div className="py-8">
      <Head>
        <title>Card — LuckyUI</title>
        <meta
          name="description"
          content="Card component for LuckyUI - a container for grouping related content and actions."
        />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Card</h1>
          <Badge variant="secondary">Layout</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          A container for grouping related content and actions. Cards provide a flexible way to display information with headers, content, and footers.
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-8">
          {/* Basic Card */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
              <CardDescription>
                A simple card with all parts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>
                      Card description provides context about the content.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      This is the main content area. You can put any content here including text, images, forms, or other components.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Learn more</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Minimal Card</CardTitle>
                    <CardDescription>
                      Cards can have fewer sections.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      This card only has a header and content, no footer.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* With Badge */}
          <Card>
            <CardHeader>
              <CardTitle>With Badges</CardTitle>
              <CardDescription>
                Combine cards with badges for status indicators.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Analytics</CardTitle>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <CardDescription>Track your metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">12,543</p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Users</CardTitle>
                      <Badge>New</Badge>
                    </div>
                    <CardDescription>Total registered</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">2,350</p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      +180 this week
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Revenue</CardTitle>
                      <Badge variant="warning">Pending</Badge>
                    </div>
                    <CardDescription>Monthly earnings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">$45,231</p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      +8% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Interactive Cards</CardTitle>
              <CardDescription>
                Cards can be styled to be interactive.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="hover:border-[hsl(var(--primary))] transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                        <Notification01Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Notifications</CardTitle>
                        <CardDescription>Manage your alerts</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:border-[hsl(var(--primary))] transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]">
                        <Settings01Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Settings</CardTitle>
                        <CardDescription>Configure your account</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Form Card</CardTitle>
              <CardDescription>
                Cards work great for containing forms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>
                    Enter your details to get started.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card-email">Email</Label>
                    <Input id="card-email" type="email" placeholder="Enter your email" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    Continue
                    <ArrowRight01Icon className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>
                Import and use Card components in your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";

// Basic card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Interactive card
<Card className="hover:border-[hsl(var(--primary))] cursor-pointer">
  <CardHeader>
    <CardTitle>Clickable Card</CardTitle>
  </CardHeader>
</Card>

// Card with badge
<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle>Title</CardTitle>
      <Badge>New</Badge>
    </div>
  </CardHeader>
</Card>`}</code>
              </pre>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
              <CardDescription>
                Card is composed of multiple components.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <th className="text-left py-3 px-2 font-semibold">Component</th>
                      <th className="text-left py-3 px-2 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-[hsl(var(--muted-foreground))]">
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">Card</td>
                      <td className="py-3 px-2">The main container component</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">CardHeader</td>
                      <td className="py-3 px-2">Contains title and description</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">CardTitle</td>
                      <td className="py-3 px-2">The card heading</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">CardDescription</td>
                      <td className="py-3 px-2">Supporting text below title</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">CardContent</td>
                      <td className="py-3 px-2">Main content area</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">CardFooter</td>
                      <td className="py-3 px-2">Footer for actions</td>
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

