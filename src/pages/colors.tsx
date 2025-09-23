import { colors } from '@/theme';
import Head from 'next/head';

export default function ColorsPage() {
  const palette = Object.entries(colors).filter(([k, v]) => typeof v === 'string');
  const scales = Object.entries(colors).filter(([k, v]) => typeof v === 'object');

  return (
    <div className="py-10">
      <Head>
        <title>Lucky UI — Colors</title>
        <meta name="description" content="Color palette and scales used across LuckyUI." />
      </Head>
      <h1 className="text-2xl font-semibold mb-6">Colors</h1>
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">Semantic</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {palette.map(([name, value]) => (
            <div key={name} className="border rounded-md p-3">
              <div className="text-xs text-gray-600 mb-2">{name}</div>
              <div className="h-12 rounded" style={{ background: value as string }} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-lg font-medium mb-3">Scales</h2>
        <div className="space-y-4">
          {scales.map(([name, values]) => (
            <div key={name}>
              <div className="text-sm font-medium mb-2">{name}</div>
              <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
                {Object.entries(values as Record<string, string>).map(([step, hex]) => (
                  <div key={step} className="border rounded p-2 text-center text-xs">
                    <div className="h-8 rounded mb-1" style={{ background: hex }} />
                    {step}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


