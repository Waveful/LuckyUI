import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Download01Icon } from "hugeicons-react";

const luckyUILogos = [
  {
    src: "/lucky_ui_colored.png",
    alt: "LuckyUI Colored Logo",
    name: "Colored Logo",
    description: "Full color version of the LuckyUI logo",
  },
  {
    src: "/lucky_ui_logo.png",
    alt: "LuckyUI Logo",
    name: "Standard Logo",
    description: "Standard version of the LuckyUI logo",
  },
];

const wavefulLogos = [
  {
    src: "/waveful_logo.png",
    alt: "Waveful Logo",
    name: "Standard Logo",
    description: "Standard version of the Waveful logo",
  },
  {
    src: "/waveful_logo_black.png",
    alt: "Waveful Black Logo",
    name: "Black Logo",
    description: "Black version of the Waveful logo",
    darkBg: false,
  },
  {
    src: "/waveful_logo_white.png",
    alt: "Waveful White Logo",
    name: "White Logo",
    description: "White version of the Waveful logo",
    darkBg: true,
  },
];

export default function LogosPage() {
  const handleDownload = (src: string, name: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = name.toLowerCase().replace(/\s+/g, "-") + ".png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-8">
      <Head>
        <title>Logos | LuckyUI</title>
        <meta name="description" content="Download LuckyUI and Waveful logos" />
      </Head>

      <h1 className="text-3xl font-bold mb-2">Logos</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-1">
        Download LuckyUI and Waveful logos in various formats.
      </p>
      <p className="text-sm text-[hsl(var(--muted-foreground))] mb-8">
        By downloading these logos, you agree to our{" "}
        <Link
          href="/brand"
          className="text-[hsl(var(--primary))] hover:underline"
        >
          Brand Guidelines
        </Link>
        .
      </p>

      {/* LuckyUI Logos */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">LuckyUI Logos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {luckyUILogos.map((logo) => (
            <Card key={logo.src} className="overflow-hidden">
              <div className="p-6 flex items-center justify-center min-h-[180px] bg-[hsl(var(--muted))]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{logo.name}</CardTitle>
                <CardDescription>{logo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    handleDownload(
                      logo.src,
                      `luckyui-${logo.name.toLowerCase().replace(/\s+/g, "-")}`
                    )
                  }
                >
                  <Download01Icon className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Waveful Logos */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Waveful Logos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wavefulLogos.map((logo) => (
            <Card key={logo.src} className="overflow-hidden">
              <div
                className={`p-6 flex items-center justify-center min-h-[180px] ${
                  logo.darkBg
                    ? "bg-[hsl(var(--foreground))]"
                    : "bg-[hsl(var(--muted))]"
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{logo.name}</CardTitle>
                <CardDescription>{logo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    handleDownload(
                      logo.src,
                      `waveful-${logo.name.toLowerCase().replace(/\s+/g, "-")}`
                    )
                  }
                >
                  <Download01Icon className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
