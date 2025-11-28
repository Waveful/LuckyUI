import Head from "next/head";
import { useState } from "react";
import {
  Badge,
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
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarItem,
  SidebarTrigger,
  SidebarSeparator,
  SidebarInset,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui";
import {
  Home01Icon,
  Settings01Icon,
  UserIcon,
  FolderOpenIcon,
  Calendar01Icon,
  Mail01Icon,
  AnalyticsUpIcon,
  Notification01Icon,
  Search01Icon,
  HelpCircleIcon,
  StarIcon,
  GridViewIcon,
  FileEditIcon,
  ImageUploadIcon,
} from "hugeicons-react";

// Demo wrapper to contain the sidebar
function SidebarDemo({
  variant,
  collapsible = true,
}: {
  variant?: "default" | "inset" | "floating";
  collapsible?: boolean;
}) {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <SidebarProvider collapsible={collapsible}>
      <div className="flex h-[500px] border border-[hsl(var(--border))] rounded-lg overflow-hidden bg-[hsl(var(--muted))]">
        <Sidebar variant={variant}>
          <SidebarHeader>
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[hsl(var(--lucky-blue))] to-[hsl(var(--lucky-cyan))] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-semibold truncate group-[[data-collapsed=true]]:hidden">
                LuckyApp
              </span>
            </div>
            <SidebarTrigger />
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarItem
                icon={<Search01Icon className="h-4 w-4" />}
                variant="default"
              >
                Search
              </SidebarItem>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup label="Main">
              <SidebarItem
                icon={<Home01Icon className="h-4 w-4" />}
                variant={activeItem === "dashboard" ? "active" : "default"}
                onClick={() => setActiveItem("dashboard")}
              >
                Dashboard
              </SidebarItem>
              <SidebarItem
                icon={<AnalyticsUpIcon className="h-4 w-4" />}
                variant={activeItem === "analytics" ? "active" : "default"}
                onClick={() => setActiveItem("analytics")}
              >
                Analytics
              </SidebarItem>
              <SidebarItem
                icon={<FolderOpenIcon className="h-4 w-4" />}
                variant={activeItem === "projects" ? "active" : "default"}
                onClick={() => setActiveItem("projects")}
                badge={
                  <Badge variant="secondary" className="text-xs px-1.5 py-0">
                    12
                  </Badge>
                }
              >
                Projects
              </SidebarItem>
            </SidebarGroup>

            <SidebarGroup label="Workspace">
              <SidebarItem
                icon={<Calendar01Icon className="h-4 w-4" />}
                variant={activeItem === "calendar" ? "active" : "default"}
                onClick={() => setActiveItem("calendar")}
              >
                Calendar
              </SidebarItem>
              <SidebarItem
                icon={<Mail01Icon className="h-4 w-4" />}
                variant={activeItem === "messages" ? "active" : "default"}
                onClick={() => setActiveItem("messages")}
                badge={
                  <span className="h-2 w-2 rounded-full bg-[hsl(var(--destructive))]" />
                }
              >
                Messages
              </SidebarItem>
              <SidebarItem
                icon={<FileEditIcon className="h-4 w-4" />}
                variant={activeItem === "documents" ? "active" : "default"}
                onClick={() => setActiveItem("documents")}
              >
                Documents
              </SidebarItem>
            </SidebarGroup>

            <SidebarGroup label="Settings">
              <SidebarItem
                icon={<Settings01Icon className="h-4 w-4" />}
                variant={activeItem === "settings" ? "active" : "default"}
                onClick={() => setActiveItem("settings")}
              >
                Settings
              </SidebarItem>
              <SidebarItem
                icon={<HelpCircleIcon className="h-4 w-4" />}
                variant={activeItem === "help" ? "active" : "default"}
                onClick={() => setActiveItem("help")}
              >
                Help & Support
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src="/characters/dolphina.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0 group-[[data-collapsed=true]]:hidden">
                <p className="text-sm font-medium truncate">John Doe</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))] truncate">
                  john@example.com
                </p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2 capitalize">
              {activeItem.replace("-", " ")}
            </h2>
            <p className="text-[hsl(var(--muted-foreground))]">
              This is the {activeItem} page content area. Click on sidebar items
              to navigate.
            </p>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

// Minimal sidebar demo
function MinimalSidebarDemo() {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <SidebarProvider collapsible={false} defaultCollapsed={false}>
      <div className="flex h-[400px] border border-[hsl(var(--border))] rounded-lg overflow-hidden">
        <Sidebar expandedWidth="14rem">
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <GridViewIcon className="h-5 w-5 text-[hsl(var(--primary))]" />
              <span className="font-semibold">Menu</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarItem
                icon={<Home01Icon className="h-4 w-4" />}
                variant={activeItem === "home" ? "active" : "default"}
                onClick={() => setActiveItem("home")}
              >
                Home
              </SidebarItem>
              <SidebarItem
                icon={<StarIcon className="h-4 w-4" />}
                variant={activeItem === "favorites" ? "active" : "default"}
                onClick={() => setActiveItem("favorites")}
              >
                Favorites
              </SidebarItem>
              <SidebarItem
                icon={<ImageUploadIcon className="h-4 w-4" />}
                variant={activeItem === "uploads" ? "active" : "default"}
                onClick={() => setActiveItem("uploads")}
              >
                Uploads
              </SidebarItem>
              <SidebarItem
                icon={<UserIcon className="h-4 w-4" />}
                variant={activeItem === "profile" ? "active" : "default"}
                onClick={() => setActiveItem("profile")}
              >
                Profile
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="bg-[hsl(var(--background))]">
          <div className="p-6">
            <p className="text-[hsl(var(--muted-foreground))]">
              Simple sidebar without collapsible functionality.
            </p>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

// Icon-only sidebar demo
function IconOnlySidebarDemo() {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <SidebarProvider defaultCollapsed={true} collapsible={true}>
      <div className="flex h-[400px] border border-[hsl(var(--border))] rounded-lg overflow-hidden">
        <Sidebar>
          <SidebarHeader className="justify-center">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[hsl(var(--lucky-purple))] to-[hsl(var(--lucky-pink))] flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarItem
                icon={<Home01Icon className="h-4 w-4" />}
                variant={activeItem === "home" ? "active" : "default"}
                onClick={() => setActiveItem("home")}
              >
                Home
              </SidebarItem>
              <SidebarItem
                icon={<Notification01Icon className="h-4 w-4" />}
                variant={activeItem === "notifications" ? "active" : "default"}
                onClick={() => setActiveItem("notifications")}
              >
                Notifications
              </SidebarItem>
              <SidebarItem
                icon={<Mail01Icon className="h-4 w-4" />}
                variant={activeItem === "messages" ? "active" : "default"}
                onClick={() => setActiveItem("messages")}
              >
                Messages
              </SidebarItem>
              <SidebarItem
                icon={<Settings01Icon className="h-4 w-4" />}
                variant={activeItem === "settings" ? "active" : "default"}
                onClick={() => setActiveItem("settings")}
              >
                Settings
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="justify-center border-t-0">
            <SidebarTrigger />
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="bg-[hsl(var(--background))]">
          <div className="p-6">
            <p className="text-[hsl(var(--muted-foreground))]">
              Icon-only sidebar with tooltips. Hover over icons to see labels.
              Click the toggle to expand.
            </p>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default function SidebarPage() {
  return (
    <div className="py-8">
      <Head>
        <title>Sidebar — LuckyUI</title>
        <meta
          name="description"
          content="Sidebar component for LuckyUI - a flexible navigation component with collapsible support."
        />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Sidebar</h1>
          <Badge variant="secondary">Navigation</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          A flexible and collapsible sidebar component for navigation. Supports
          grouped items, badges, tooltips, and multiple visual variants.
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-8">
          {/* Default Sidebar */}
          <Card>
            <CardHeader>
              <CardTitle>Default Sidebar</CardTitle>
              <CardDescription>
                A full-featured sidebar with header, grouped navigation items,
                badges, and a user footer. Click the arrow to collapse.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SidebarDemo />
            </CardContent>
          </Card>

          {/* Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Variants</CardTitle>
              <CardDescription>
                Different visual styles for the sidebar.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm font-medium mb-3">Inset Variant</p>
                <SidebarDemo variant="inset" />
              </div>
              <div>
                <p className="text-sm font-medium mb-3">Floating Variant</p>
                <SidebarDemo variant="floating" />
              </div>
            </CardContent>
          </Card>

          {/* Icon Only */}
          <Card>
            <CardHeader>
              <CardTitle>Icon Only (Collapsed)</CardTitle>
              <CardDescription>
                A sidebar that starts collapsed, showing only icons with
                tooltips on hover.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IconOnlySidebarDemo />
            </CardContent>
          </Card>

          {/* Simple Sidebar */}
          <Card>
            <CardHeader>
              <CardTitle>Simple Sidebar</CardTitle>
              <CardDescription>
                A minimal sidebar without collapsible functionality.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MinimalSidebarDemo />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>
                Import and use the Sidebar components in your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarItem,
  SidebarTrigger,
  SidebarSeparator,
  SidebarInset,
} from "@/components/ui";

// Basic usage
<SidebarProvider>
  <div className="flex h-screen">
    <Sidebar>
      <SidebarHeader>
        <span className="font-semibold">My App</span>
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup label="Navigation">
          <SidebarItem
            icon={<HomeIcon />}
            variant="active"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            icon={<SettingsIcon />}
            badge={<Badge>New</Badge>}
          >
            Settings
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {/* User info or actions */}
      </SidebarFooter>
    </Sidebar>

    <SidebarInset>
      {/* Main content */}
    </SidebarInset>
  </div>
</SidebarProvider>`}</code>
              </pre>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Provider Props</CardTitle>
              <CardDescription>
                SidebarProvider accepts the following props.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <th className="text-left py-3 px-2 font-semibold">
                        Prop
                      </th>
                      <th className="text-left py-3 px-2 font-semibold">
                        Type
                      </th>
                      <th className="text-left py-3 px-2 font-semibold">
                        Default
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[hsl(var(--muted-foreground))]">
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">
                        defaultCollapsed
                      </td>
                      <td className="py-3 px-2 font-mono text-xs">boolean</td>
                      <td className="py-3 px-2 font-mono">false</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">
                        collapsible
                      </td>
                      <td className="py-3 px-2 font-mono text-xs">boolean</td>
                      <td className="py-3 px-2 font-mono">true</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>Sidebar Props</CardTitle>
              <CardDescription>
                Sidebar component accepts the following props.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <th className="text-left py-3 px-2 font-semibold">
                        Prop
                      </th>
                      <th className="text-left py-3 px-2 font-semibold">
                        Type
                      </th>
                      <th className="text-left py-3 px-2 font-semibold">
                        Default
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[hsl(var(--muted-foreground))]">
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">
                        variant
                      </td>
                      <td className="py-3 px-2 font-mono text-xs">
                        default | inset | floating
                      </td>
                      <td className="py-3 px-2 font-mono">default</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">
                        collapsedWidth
                      </td>
                      <td className="py-3 px-2 font-mono text-xs">string</td>
                      <td className="py-3 px-2 font-mono">4rem</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">
                        expandedWidth
                      </td>
                      <td className="py-3 px-2 font-mono text-xs">string</td>
                      <td className="py-3 px-2 font-mono">16rem</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>SidebarItem Props</CardTitle>
              <CardDescription>
                SidebarItem component accepts the following props.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <th className="text-left py-3 px-2 font-semibold">
                        Prop
                      </th>
                      <th className="text-left py-3 px-2 font-semibold">
                        Type
                      </th>
                      <th className="text-left py-3 px-2 font-semibold">
                        Default
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[hsl(var(--muted-foreground))]">
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">
                        variant
                      </td>
                      <td className="py-3 px-2 font-mono text-xs">
                        default | active
                      </td>
                      <td className="py-3 px-2 font-mono">default</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">
                        icon
                      </td>
                      <td className="py-3 px-2 font-mono text-xs">ReactNode</td>
                      <td className="py-3 px-2 font-mono">-</td>
                    </tr>
                    <tr className="border-b border-[hsl(var(--border))]">
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">
                        badge
                      </td>
                      <td className="py-3 px-2 font-mono text-xs">ReactNode</td>
                      <td className="py-3 px-2 font-mono">-</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono text-[hsl(var(--foreground))]">
                        asChild
                      </td>
                      <td className="py-3 px-2 font-mono text-xs">boolean</td>
                      <td className="py-3 px-2 font-mono">false</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>useSidebar Hook</CardTitle>
              <CardDescription>
                Access sidebar state programmatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`import { useSidebar } from "@/components/ui";

function MyComponent() {
  const { collapsed, setCollapsed, collapsible } = useSidebar();

  return (
    <div>
      <p>Sidebar is {collapsed ? "collapsed" : "expanded"}</p>
      <button onClick={() => setCollapsed(!collapsed)}>
        Toggle Sidebar
      </button>
    </div>
  );
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

