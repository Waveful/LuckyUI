import Head from "next/head";
import Image from "next/image";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Download01Icon } from "hugeicons-react";

const characters = [
  {
    src: "/characters/dolful.png",
    alt: "Dolful Character",
    name: "Dolful",
    description: "Brave, optimistic, sometimes cheeky",
  },
  {
    src: "/characters/dolphina.png",
    alt: "Dolphina Character",
    name: "Dolphina",
    description: "Kind, nurturing, voice of reason, balances Dolful's boldness",
  },
  {
    src: "/characters/quacky.png",
    alt: "Quacky Character",
    name: "Quacky",
    description: "Mischievous, silly, comic relief, always tagging along",
  },
  {
    src: "/characters/sealina.png",
    alt: "Sealina Character",
    name: "Sealina",
    description:
      "Fun, loyal, energetic, encourages Dolphina but sometimes drags her into silly adventures",
  },
  {
    src: "/characters/whaly.png",
    alt: "Whaly Character",
    name: "Whaly",
    description: "Big-hearted but clumsy, often causes chaos unintentionally",
  },
  {
    src: "/characters/sharkful.png",
    alt: "Sharkful Character",
    name: "Sharkful",
    description: "Confident, competitive, sometimes mean",
  },
];

export default function CharactersPage() {
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
        <title>Characters | LuckyUI</title>
        <meta name="description" content="Meet the LuckyUI characters" />
      </Head>

      <h1 className="text-3xl font-bold mb-2">Characters</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-8">
        Meet the Waveful mascots! Each character has their own unique
        personality.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <Card key={character.src} className="overflow-hidden">
            <div className="p-6 flex items-center justify-center min-h-[180px] bg-[hsl(var(--muted))]">
              <Image
                src={character.src}
                alt={character.alt}
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{character.name}</CardTitle>
              <CardDescription>{character.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleDownload(character.src, character.name)}
              >
                <Download01Icon className="h-4 w-4 mr-2" />
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
