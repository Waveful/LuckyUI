import Head from "next/head";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Download01Icon, Copy01Icon } from "hugeicons-react";

const gradients = [
  {
    src: "/gradient_blue.png",
    alt: "Blue Gradient",
    name: "Blue Gradient",
    description: "A beautiful blue gradient",
    css: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    src: "/gradient_red.png",
    alt: "Red Gradient",
    name: "Red Gradient",
    description: "A vibrant red gradient",
    css: "bg-gradient-to-r from-red-500 to-red-700",
  },
];

export default function GradientsPage() {
  const handleDownload = (src: string, name: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = name.toLowerCase().replace(/\s+/g, "-") + ".png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyCSS = (css: string) => {
    navigator.clipboard.writeText(css);
  };

  return (
    <div className="py-8">
      <Head>
        <title>Gradients | LuckyUI</title>
        <meta name="description" content="Download LuckyUI gradient assets" />
      </Head>

      <h1 className="text-3xl font-bold mb-2">Gradients</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-8">
        Beautiful gradient assets for use in your designs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gradients.map((gradient) => (
          <Card key={gradient.src} className="overflow-hidden">
            <div
              className="w-full h-48"
              style={{
                background: `url('${gradient.src}') center/cover no-repeat`,
              }}
            />
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{gradient.name}</CardTitle>
              <CardDescription>{gradient.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleDownload(gradient.src, gradient.name)}
                >
                  <Download01Icon className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => handleCopyCSS(gradient.css)}
                >
                  <Copy01Icon className="h-4 w-4 mr-2" />
                  Copy CSS
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
