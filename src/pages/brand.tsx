import Head from "next/head";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from "@/components/ui";

export default function BrandPage() {
  return (
    <div className="py-8">
      <Head>
        <title>Brand Guidelines | LuckyUI</title>
        <meta name="description" content="Brand guidelines for using LuckyUI and Waveful assets" />
      </Head>

      <h1 className="text-3xl font-bold mb-2">Brand Guidelines</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-8">
        Guidelines for using LuckyUI and Waveful brand assets, logos, and characters.
      </p>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-4">
          These guidelines ensure consistent and appropriate use of LuckyUI and Waveful brand assets.
          Please follow these guidelines when using our logos, characters, and other brand elements.
        </p>
      </section>

      {/* Logo Usage */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Logo Usage</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">LuckyUI Logos</CardTitle>
              <CardDescription>
                Guidelines for using LuckyUI logos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-medium mb-2">Do's</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-[hsl(var(--muted-foreground))]">
                  <li>Use the colored logo on light backgrounds</li>
                  <li>Maintain minimum clear space around the logo (at least 20% of logo height)</li>
                  <li>Use high-resolution versions for print and digital media</li>
                  <li>Keep the logo proportions intact</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-2">Don'ts</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-[hsl(var(--muted-foreground))]">
                  <li>Don't modify, distort, or alter the logo in any way</li>
                  <li>Don't use the logo on backgrounds that clash with its colors</li>
                  <li>Don't place the logo too close to other elements</li>
                  <li>Don't use outdated or low-resolution versions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Waveful Logos</CardTitle>
              <CardDescription>
                Guidelines for using Waveful logos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-medium mb-2">Do's</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-[hsl(var(--muted-foreground))]">
                  <li>Use the standard logo on neutral backgrounds</li>
                  <li>Use the black logo on light backgrounds</li>
                  <li>Use the white logo on dark backgrounds</li>
                  <li>Maintain adequate clear space around the logo</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-2">Don'ts</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-[hsl(var(--muted-foreground))]">
                  <li>Don't use the white logo on light backgrounds</li>
                  <li>Don't use the black logo on dark backgrounds</li>
                  <li>Don't recolor or modify the logo</li>
                  <li>Don't use the logo as a decorative element</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-[hsl(var(--muted-foreground))] mt-4">
          Download logos from the <Link href="/logos" className="text-[hsl(var(--primary))] hover:underline">Logos page</Link>.
        </p>
      </section>

      {/* Character Usage */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Character Usage</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Waveful Characters</CardTitle>
            <CardDescription>
              Guidelines for using Waveful mascot characters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-medium mb-2">Do's</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-[hsl(var(--muted-foreground))]">
                <li>Use characters to add personality and warmth to your designs</li>
                <li>Maintain character proportions when resizing</li>
                <li>Use characters in appropriate contexts that match their personalities</li>
                <li>Respect the character designs and avoid modifications</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h4 className="font-medium mb-2">Don'ts</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-[hsl(var(--muted-foreground))]">
                <li>Don't modify, recolor, or distort the characters</li>
                <li>Don't use characters in ways that contradict their personalities</li>
                <li>Don't use characters in inappropriate or offensive contexts</li>
                <li>Don't create derivative characters based on our designs</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <p className="text-sm text-[hsl(var(--muted-foreground))] mt-4">
          Meet the characters on the <Link href="/characters" className="text-[hsl(var(--primary))] hover:underline">Characters page</Link>.
        </p>
      </section>

      {/* Usage Permissions */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Usage Permissions</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Allowed Uses</CardTitle>
            <CardDescription>
              You may use our brand assets for the following purposes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
              <li>Including LuckyUI components in your projects</li>
              <li>Referencing LuckyUI or Waveful in documentation and articles</li>
              <li>Using logos and characters in presentations and educational materials</li>
              <li>Creating integrations or extensions that use LuckyUI</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-base">Restricted Uses</CardTitle>
            <CardDescription>
              You may not use our brand assets for the following purposes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
              <li>Using our logos or brand name as your own product or service name</li>
              <li>Creating products that directly compete with Waveful</li>
              <li>Using assets in ways that imply endorsement or partnership without permission</li>
              <li>Modifying or creating derivative works of our brand assets</li>
              <li>Using assets in ways that could damage our brand reputation</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Brand Colors */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Brand Colors</h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-4">
          When using brand colors, refer to our color system for consistency. Our color palette
          is designed to work across light and dark themes.
        </p>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          View the complete color system on the <Link href="/colors" className="text-[hsl(var(--primary))] hover:underline">Colors page</Link>.
        </p>
      </section>

      {/* Typography */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Typography</h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-4">
          Our typography system ensures consistent and readable text across all applications.
          Use the recommended font families and sizes for optimal results.
        </p>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          Learn more about our typography system on the <Link href="/typography" className="text-[hsl(var(--primary))] hover:underline">Typography page</Link>.
        </p>
      </section>

      {/* Questions */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Questions?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              If you have questions about using our brand assets or need permission for a specific use case,
              please contact us at{" "}
              <a
                href="mailto:brand@waveful.com"
                className="text-[hsl(var(--primary))] hover:underline"
              >
                brand@waveful.com
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

