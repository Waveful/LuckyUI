import Head from 'next/head';
import Image from 'next/image';

const characters = [
  {
    src: '/characters/dolful.png',
    alt: 'Dolful Character',
    name: 'Dolful',
    description: 'Brave, optimistic, sometimes cheeky',
  },
  {
    src: '/characters/dolphina.png',
    alt: 'Dolphina Character',
    name: 'Dolphina',
    description: 'Kind, nurturing, voice of reason, balances Dolful’s boldness',
  },
  {
    src: '/characters/quacky.png',
    alt: 'Quacky Character',
    name: 'Quacky',
    description: 'Mischievous, silly, comic relief, always tagging along',
  },
  {
    src: '/characters/sealina.png',
    alt: 'Sealina Character',
    name: 'Sealina',
    description: 'Fun, loyal, energetic, encourages Dolphina but sometimes drags her into silly adventures',
  },
  {
    src: '/characters/whaly.png',
    alt: 'Whaly Character',
    name: 'Whaly',
    description: 'Big-hearted but clumsy, often causes chaos unintentionally',
  },
  {
    src: '/characters/sharkful.png',
    alt: 'Sharkful Character',
    name: 'Sharkful',
    description: 'Confident, competitive, sometimes mean ',
  },
];

export default function CharactersPage() {
  const handleDownload = (src: string, name: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = name.toLowerCase().replace(/\s+/g, '-') + '.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Head>
        <title>Characters | LuckyUI</title>
        <meta name="description" content="Meet the LuckyUI characters" />
      </Head>

      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Characters</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <div key={character.src} className="border rounded-lg overflow-hidden flex flex-col h-full">
            <div className="p-6 flex-grow flex items-center justify-center min-h-[200px] bg-white">
              <Image
                src={character.src}
                alt={character.alt}
                width={200}
                height={200}
                className="object-contain max-w-full h-auto"
              />
            </div>
            <div className="p-4 border-t">
              <h3 className="text-lg font-medium mb-1">{character.name}</h3>
              <p className="text-sm mb-4">{character.description}</p>
              <button
                onClick={() => handleDownload(character.src, character.name)}
                className="w-full py-2 px-4 border rounded-md text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
