import Head from "next/head";
import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Github01Icon, PackageOpenIcon } from "hugeicons-react";

export default function FlutterPage() {
  return (
    <div className="py-8">
      <Head>
        <title>LuckyUI — Flutter</title>
        <meta
          name="description"
          content="Flutter bindings and widgets for LuckyUI design system."
        />
      </Head>

      <h1 className="text-3xl font-bold mb-2">Flutter</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-8">
        LuckyUI is also available for Flutter development, providing the same
        design system principles and components for mobile and desktop
        applications.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--primary))]">
                <PackageOpenIcon className="h-5 w-5 text-[hsl(var(--primary-foreground))]" />
              </div>
              <div>
                <CardTitle>Pub.dev Package</CardTitle>
                <CardDescription>
                  Install the LuckyUI package for your Flutter project
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Link
              href="https://pub.dev/packages/luckyui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">View on Pub.dev</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--secondary))]">
                <Github01Icon className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>GitHub Repository</CardTitle>
                <CardDescription>
                  Source code, documentation, and contribution guidelines
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Link
              href="https://github.com/Waveful/luckyui-flutter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                View on GitHub
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Installation */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            Add LuckyUI to your Flutter project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
            <code>{`# Add to your pubspec.yaml
dependencies:
  luckyui: ^1.0.0

# Or use the command line
flutter pub add luckyui`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
