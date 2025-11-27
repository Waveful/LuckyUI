import Head from "next/head";
import {
  Badge,
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
import { UserIcon, LockPasswordIcon, Settings01Icon, Notification01Icon } from "hugeicons-react";

export default function TabsPage() {
  return (
    <div className="py-8">
      <Head>
        <title>Tabs — LuckyUI</title>
        <meta
          name="description"
          content="Tabs component for LuckyUI - organize content into switchable panels."
        />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Tabs</h1>
          <Badge variant="secondary">Navigation</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          A set of layered sections of content—known as tab panels—that display one panel at a time.
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-8">
          {/* Basic Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Tabs</CardTitle>
              <CardDescription>
                Simple tab navigation with text labels.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="tabs-name">Name</Label>
                        <Input id="tabs-name" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tabs-username">Username</Label>
                        <Input id="tabs-username" defaultValue="@johndoe" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="password" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Password</CardTitle>
                      <CardDescription>
                        Change your password here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="settings" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Settings</CardTitle>
                      <CardDescription>
                        Configure your preferences.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        Manage your notification and display settings here.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* With Icons */}
          <Card>
            <CardHeader>
              <CardTitle>With Icons</CardTitle>
              <CardDescription>
                Tabs can include icons for better visual identification.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="profile" className="w-full">
                <TabsList>
                  <TabsTrigger value="profile" className="gap-2">
                    <UserIcon className="h-4 w-4" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="security" className="gap-2">
                    <LockPasswordIcon className="h-4 w-4" />
                    Security
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="gap-2">
                    <Notification01Icon className="h-4 w-4" />
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger value="preferences" className="gap-2">
                    <Settings01Icon className="h-4 w-4" />
                    Preferences
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="mt-4">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Edit your public profile information here.
                  </p>
                </TabsContent>
                <TabsContent value="security" className="mt-4">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Manage your security settings and two-factor authentication.
                  </p>
                </TabsContent>
                <TabsContent value="notifications" className="mt-4">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Configure how you receive notifications.
                  </p>
                </TabsContent>
                <TabsContent value="preferences" className="mt-4">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Customize your app preferences and appearance.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* With Badges */}
          <Card>
            <CardHeader>
              <CardTitle>With Badges</CardTitle>
              <CardDescription>
                Use badges in tabs to show counts or status.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="inbox" className="w-full">
                <TabsList>
                  <TabsTrigger value="inbox" className="gap-2">
                    Inbox
                    <Badge className="h-5 w-5 rounded-full p-0 text-[10px] justify-center">5</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="drafts" className="gap-2">
                    Drafts
                    <Badge variant="secondary" className="h-5 w-5 rounded-full p-0 text-[10px] justify-center">2</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="sent">Sent</TabsTrigger>
                  <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>
                <TabsContent value="inbox" className="mt-4">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    You have 5 unread messages in your inbox.
                  </p>
                </TabsContent>
                <TabsContent value="drafts" className="mt-4">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    You have 2 draft messages saved.
                  </p>
                </TabsContent>
                <TabsContent value="sent" className="mt-4">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    View your sent messages here.
                  </p>
                </TabsContent>
                <TabsContent value="archived" className="mt-4">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Archived messages are stored here.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Full Width */}
          <Card>
            <CardHeader>
              <CardTitle>Full Width</CardTitle>
              <CardDescription>
                Tabs can span the full width of their container.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Get a quick overview of your dashboard metrics.
                  </p>
                </TabsContent>
                <TabsContent value="analytics" className="mt-4">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Detailed analytics and insights.
                  </p>
                </TabsContent>
                <TabsContent value="reports" className="mt-4">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Generate and download reports.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>
                Import and use Tabs components in your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

// Basic tabs
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account content here.
  </TabsContent>
  <TabsContent value="password">
    Password content here.
  </TabsContent>
</Tabs>

// With icons
<TabsTrigger value="profile" className="gap-2">
  <UserIcon className="h-4 w-4" />
  Profile
</TabsTrigger>

// With badges
<TabsTrigger value="inbox" className="gap-2">
  Inbox
  <Badge>5</Badge>
</TabsTrigger>

// Full width
<TabsList className="w-full grid grid-cols-3">
  <TabsTrigger value="a">Tab A</TabsTrigger>
  <TabsTrigger value="b">Tab B</TabsTrigger>
  <TabsTrigger value="c">Tab C</TabsTrigger>
</TabsList>`}</code>
              </pre>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
              <CardDescription>
                Tabs is composed of multiple components.
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
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">Tabs</td>
                      <td className="py-3 px-2">Root component, manages state</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">TabsList</td>
                      <td className="py-3 px-2">Container for tab triggers</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">TabsTrigger</td>
                      <td className="py-3 px-2">Individual tab button</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">TabsContent</td>
                      <td className="py-3 px-2">Content panel for each tab</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>
                Key props for Tabs components.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <th className="text-left py-3 px-2 font-semibold">Prop</th>
                      <th className="text-left py-3 px-2 font-semibold">Type</th>
                      <th className="text-left py-3 px-2 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-[hsl(var(--muted-foreground))]">
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">defaultValue</td>
                      <td className="py-3 px-2 font-mono text-xs">string</td>
                      <td className="py-3 px-2">Initially active tab</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">value</td>
                      <td className="py-3 px-2 font-mono text-xs">string</td>
                      <td className="py-3 px-2">Controlled active tab</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">onValueChange</td>
                      <td className="py-3 px-2 font-mono text-xs">(value: string) =&gt; void</td>
                      <td className="py-3 px-2">Tab change callback</td>
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

