import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const luckyUILogos = [
  {
    src: '/lucky_ui_colored.png',
    alt: 'LuckyUI Colored Logo',
    name: 'Colored Logo',
    description: 'Full color version of the LuckyUI logo',
  },
  {
    src: '/lucky_ui_logo.png',
    alt: 'LuckyUI Logo',
    name: 'Standard Logo',
    description: 'Standard version of the LuckyUI logo',
  },
];

const wavefulLogos = [
  {
    src: '/waveful_logo.png',
    alt: 'Waveful Logo',
    name: 'Standard Logo',
    description: 'Standard version of the Waveful logo',
  },
  {
    src: '/waveful_logo_black.png',
    alt: 'Waveful Black Logo',
    name: 'Black Logo',
    description: 'Black version of the Waveful logo',
  },
  {
    src: '/waveful_logo_white.png',
    alt: 'Waveful White Logo',
    name: 'White Logo',
    description: 'White version of the Waveful logo',
  },
];

export default function LogosPage() {
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
        <title>Logos | LuckyUI</title>
        <meta name="description" content="Download LuckyUI and Waveful logos" />
      </Head>

      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">
            Logos
        </h1>
        <p className="text-gray-600">
            Download LuckyUI and Waveful logos in various formats.
        </p>
        <div className="text-sm text-gray-500">
          By downloading these logos, you agree to our{' '}
          <Link href="/brand" className="text-blue-600 hover:underline">
            Brand Guidelines
          </Link>
          .
        </div>
      </div>

      {/* LuckyUI Logos Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-2 pb-2">LuckyUI Logos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {luckyUILogos.map((logo) => (
            <div key={logo.src} className="border rounded-lg overflow-hidden flex flex-col h-full">
              <div className="p-4 flex-grow flex items-center justify-center min-h-[200px] bg-white">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={200}
                  className="object-contain max-w-full h-auto"
                />
              </div>
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold mb-2">{logo.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{logo.description}</p>
                <button
                  onClick={() => handleDownload(logo.src, `luckyui-${logo.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="w-full py-2 px-4 border rounded-md text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Waveful Logos Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-2 pb-2">Waveful Logos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wavefulLogos.map((logo) => (
            <div key={logo.src} className="border rounded-lg overflow-hidden flex flex-col h-full">
              <div className={`p-4 flex-grow flex items-center justify-center min-h-[200px] ${logo.name.includes('White') ? 'bg-black' : 'bg-white'}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={200}
                  className="object-contain max-w-full h-auto"
                />
              </div>
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold mb-2">{logo.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{logo.description}</p>
                <button
                  onClick={() => handleDownload(logo.src, `waveful-${logo.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="w-full py-2 px-4 border rounded-md text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
