import Head from "next/head";
import { useState, useEffect } from "react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Progress,
  Loading,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

export default function ProgressPage() {
  const [progress, setProgress] = useState(33);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-8">
      <Head>
        <title>Progress — LuckyUI</title>
        <meta name="description" content="Progress component for LuckyUI - progress bars and loading indicators." />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Progress</h1>
          <Badge variant="secondary">Feedback</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          Displays an indicator showing the completion progress of a task.
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
              <CardTitle>Progress Bar</CardTitle>
              <CardDescription>Animated progress indicator.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={progress} />
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Progress: {progress}%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Static Values</CardTitle>
              <CardDescription>Different progress values.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>0%</span>
                </div>
                <Progress value={0} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>25%</span>
                </div>
                <Progress value={25} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>50%</span>
                </div>
                <Progress value={50} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>75%</span>
                </div>
                <Progress value={75} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>100%</span>
                </div>
                <Progress value={100} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loading Spinner</CardTitle>
              <CardDescription>Circular loading indicator in different sizes.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Loading size="sm" />
                <span className="text-xs text-[hsl(var(--muted-foreground))]">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Loading />
                <span className="text-xs text-[hsl(var(--muted-foreground))]">Default</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Loading size="lg" />
                <span className="text-xs text-[hsl(var(--muted-foreground))]">Large</span>
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
                <code>{`import { Progress, Loading } from "@/components/ui";

// Progress bar
<Progress value={50} />

// Animated progress
const [progress, setProgress] = useState(0);
<Progress value={progress} />

// Loading spinner
<Loading />
<Loading size="sm" />
<Loading size="lg" />`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

