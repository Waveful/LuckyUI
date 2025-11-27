import Head from "next/head";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Alert,
  AlertTitle,
  AlertDescription,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { Alert01Icon, CheckmarkCircle01Icon, InformationCircleIcon, Cancel01Icon } from "hugeicons-react";

export default function AlertPage() {
  return (
    <div className="py-8">
      <Head>
        <title>Alert — LuckyUI</title>
        <meta name="description" content="Alert component for LuckyUI - alert messages and notifications." />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Alert</h1>
          <Badge variant="secondary">Feedback</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          Displays a callout for user attention with different severity levels.
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
              <CardTitle>Alert Variants</CardTitle>
              <CardDescription>Different alert types for various situations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <InformationCircleIcon className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is a default alert. Use it for general information.
                </AlertDescription>
              </Alert>

              <Alert variant="success">
                <CheckmarkCircle01Icon className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your changes have been saved successfully.
                </AlertDescription>
              </Alert>

              <Alert variant="warning">
                <Alert01Icon className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Please review your input before proceeding.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <Cancel01Icon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Simple Alert</CardTitle>
              <CardDescription>Alert without icon.</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the CLI.
                </AlertDescription>
              </Alert>
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
                <code>{`import { Alert, AlertTitle, AlertDescription } from "@/components/ui";

// Default alert
<Alert>
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>

// With icon
<Alert variant="success">
  <CheckIcon className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes were saved.</AlertDescription>
</Alert>

// Variants: default | success | warning | destructive`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

