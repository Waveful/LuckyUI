import Head from "next/head";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  IconButton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Separator,
} from "@/components/ui";
import {
  Settings01Icon,
  Search01Icon,
  Home01Icon,
  Delete01Icon,
  Add01Icon,
  Edit01Icon,
  Share01Icon,
  FavouriteIcon,
} from "hugeicons-react";

export default function IconButtonPage() {
  return (
    <div className="py-8">
      <Head>
        <title>IconButton — LuckyUI</title>
        <meta name="description" content="IconButton component for LuckyUI - icon-only buttons with tap scaling." />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">IconButton</h1>
          <Badge variant="secondary">Interactive</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          Icon-only buttons for compact actions. Includes tap scaling animation.
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
              <CardTitle>Variants</CardTitle>
              <CardDescription>Different icon button styles.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <IconButton icon={Settings01Icon} variant="default" aria-label="Settings" />
              <IconButton icon={Search01Icon} variant="secondary" aria-label="Search" />
              <IconButton icon={Home01Icon} variant="outline" aria-label="Home" />
              <IconButton icon={Edit01Icon} variant="ghost" aria-label="Edit" />
              <IconButton icon={Delete01Icon} variant="destructive" aria-label="Delete" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sizes</CardTitle>
              <CardDescription>Icon buttons in different sizes.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <IconButton icon={Settings01Icon} size="sm" aria-label="Small" />
              <IconButton icon={Settings01Icon} size="default" aria-label="Default" />
              <IconButton icon={Settings01Icon} size="lg" aria-label="Large" />
              <IconButton icon={Settings01Icon} size="xl" aria-label="Extra Large" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Actions</CardTitle>
              <CardDescription>Icon buttons for common actions.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <IconButton icon={Add01Icon} variant="default" aria-label="Add" />
              <IconButton icon={Edit01Icon} variant="secondary" aria-label="Edit" />
              <IconButton icon={Share01Icon} variant="outline" aria-label="Share" />
              <IconButton icon={FavouriteIcon} variant="ghost" aria-label="Favorite" />
              <IconButton icon={Delete01Icon} variant="destructive" aria-label="Delete" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Toolbar Example</CardTitle>
              <CardDescription>Icon buttons grouped in a toolbar.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="inline-flex items-center gap-1 rounded-lg border border-[hsl(var(--border))] p-1">
                <IconButton icon={Edit01Icon} variant="ghost" size="sm" aria-label="Edit" />
                <IconButton icon={Share01Icon} variant="ghost" size="sm" aria-label="Share" />
                <IconButton icon={FavouriteIcon} variant="ghost" size="sm" aria-label="Favorite" />
                <Separator orientation="vertical" className="h-6 mx-1" />
                <IconButton icon={Delete01Icon} variant="ghost" size="sm" aria-label="Delete" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disabled</CardTitle>
              <CardDescription>Disabled icon button state.</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-3">
              <IconButton icon={Settings01Icon} disabled aria-label="Disabled" />
              <IconButton icon={Settings01Icon} variant="secondary" disabled aria-label="Disabled Secondary" />
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
                <code>{`import { IconButton } from "@/components/ui";
import { SettingsIcon } from "hugeicons-react";

// Basic usage
<IconButton icon={SettingsIcon} aria-label="Settings" />

// Variants
<IconButton icon={Icon} variant="default" />
<IconButton icon={Icon} variant="secondary" />
<IconButton icon={Icon} variant="outline" />
<IconButton icon={Icon} variant="ghost" />
<IconButton icon={Icon} variant="destructive" />

// Sizes
<IconButton icon={Icon} size="sm" />
<IconButton icon={Icon} size="default" />
<IconButton icon={Icon} size="lg" />
<IconButton icon={Icon} size="xl" />

// Disabled
<IconButton icon={Icon} disabled />`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

