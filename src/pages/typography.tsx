import Head from "next/head";
import { typography } from "@/theme";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";

export default function TypographyPage() {
  return (
    <div className="py-8">
      <Head>
        <title>LuckyUI — Typography</title>
        <meta
          name="description"
          content="Typography tokens and examples used across LuckyUI."
        />
      </Head>

      <h1 className="text-3xl font-bold mb-2">Typography</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-8">
        Typography tokens and font styles used throughout LuckyUI.
      </p>

      {/* System Fonts */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">System Fonts</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sans (Primary)</CardTitle>
              <CardDescription>
                Uses system default fonts for a native feel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 mb-4 text-[hsl(var(--muted-foreground))]">
                <li>• San Francisco on Apple devices</li>
                <li>• Roboto on Android devices</li>
                <li>• System UI font on other platforms</li>
              </ul>
              <div className="p-4 bg-[hsl(var(--muted))] rounded-lg">
                <p
                  style={{ fontFamily: typography.fontFamily.sans }}
                  className="text-lg"
                >
                  The quick brown fox jumps over the lazy dog.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Monospace</CardTitle>
              <CardDescription>
                Used for code and technical content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-[hsl(var(--muted))] rounded-lg">
                <p
                  style={{ fontFamily: typography.fontFamily.mono }}
                  className="text-sm"
                >
                  const lucky = true; // The quick brown fox
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Font Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {Object.entries(typography.sizes).map(([name, size]) => (
                <div
                  key={name}
                  className="flex items-center justify-between p-3 rounded-lg bg-[hsl(var(--muted))]"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-[hsl(var(--muted-foreground))] w-16">
                      {name}
                    </span>
                    <span style={{ fontSize: size }}>
                      The quick brown fox
                    </span>
                  </div>
                  <span className="text-sm font-mono text-[hsl(var(--muted-foreground))]">
                    {size}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
