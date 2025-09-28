import { typography } from '@/theme';
import Head from 'next/head';

export default function TypographyPage() {
  return (
    <div className="py-10">
      <Head>
        <title>LuckyUI — Typography</title>
        <meta name="description" content="Typography tokens and examples used across LuckyUI." />
      </Head>
      <h1 className="text-2xl font-semibold mb-6">Typography</h1>
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">System Fonts</h2>
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-600 mb-1">Sans (Primary)</div>
            <p className="text-gray-800">
              Uses system default fonts for a native feel:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>San Francisco on Apple devices</li>
                <li>Roboto on Android devices</li>
                <li>System UI font on other platforms</li>
              </ul>
            </p>
            <div className="mt-3 p-3 bg-gray-50 rounded">
              <p style={{ fontFamily: typography.fontFamily.sans }} className="text-lg">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
          </div>
          
          <div className="pt-4">
            <div className="text-sm text-gray-600 mb-1">Monospace</div>
            <p className="text-gray-800 mb-2">Used for code and technical content</p>
            <div className="p-3 bg-gray-50 rounded">
              <p style={{ fontFamily: typography.fontFamily.mono }} className="text-sm">
                const lucky = true; // The quick brown fox
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-medium mb-3">Sizes</h2>
        <div className="grid gap-2">
          {Object.entries(typography.sizes).map(([k, v]) => (
            <div key={k} className="flex items-center justify-between border rounded-md px-3 py-2">
              <span className="text-sm text-gray-600">{k}</span>
              <span style={{ fontSize: v }}>{v}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


