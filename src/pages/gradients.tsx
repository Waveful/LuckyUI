import Head from 'next/head';
import Image from 'next/image';

const gradients = [
  {
    src: '/gradient_blue.png',
    alt: 'Blue Gradient',
    name: 'Blue Gradient',
    description: 'A beautiful blue gradient',
  },
  {
    src: '/gradient_red.png',
    alt: 'Red Gradient',
    name: 'Red Gradient',
    description: 'A vibrant red gradient',
  },
];

export default function GradientsPage() {
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
        <title>Gradients | LuckyUI</title>
        <meta name="description" content="Download LuckyUI gradient assets" />
      </Head>

      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Gradients</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gradients.map((gradient) => (
          <div key={gradient.src} className="border rounded-lg overflow-hidden">
            <div 
              className="w-full h-48"
              style={{
                background: `url('${gradient.src}') center/cover no-repeat`
              }}
            />
            <div className="p-4 border-t">
              <h3 className="text-lg font-medium mb-1">{gradient.name}</h3>
              <p className="text-sm mb-4">{gradient.description}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleDownload(gradient.src, gradient.name)}
                  className="flex-1 py-2 px-4 border rounded-md text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Download
                </button>
                <button
                  onClick={() => {
                    const color = gradient.name.includes('Blue') ? 'from-blue-500 to-blue-700' : 'from-red-500 to-red-700';
                    navigator.clipboard.writeText(`bg-gradient-to-r ${color}`);
                    alert('CSS gradient copied to clipboard!');
                  }}
                  className="flex-1 py-2 px-4 border rounded-md text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Copy CSS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
