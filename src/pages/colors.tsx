import Head from 'next/head';

import { colors, ColorScopes } from '@/theme';

export default function ColorsPage() {
  // Use the new grouped structure (scoped API)
  const scopes: ColorScopes = colors.scopes;

  // Helper utilities to ensure readable text over color backgrounds
  const hexToRgb = (hex: string) => {
    const normalized = hex.replace('#', '');
    const bigint = parseInt(normalized.length === 3
      ? normalized.split('').map((c) => c + c).join('')
      : normalized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const getLuminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
    // sRGB to linear
    const srgb = [r, g, b].map((v) => {
      const c = v / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    const [rl, gl, bl] = srgb;
    return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
  };

  const getContrastText = (hex: string) => {
    try {
      const lum = getLuminance(hexToRgb(hex));
      // Threshold around ~0.5 yields decent contrast for most colors
      return lum > 0.5 ? '#111827' /* gray-900 */ : '#FFFFFF';
    } catch {
      return '#111827';
    }
  };

  return (
    <div className="py-10">
      <Head>
        <title>LuckyUI — Colors</title>
        <meta name="description" content="Color palette and scales used across LuckyUI." />
      </Head>
      <h1 className="text-2xl font-semibold mb-6">Colors</h1>

      <div className="space-y-10">
        {Object.entries(scopes).map(([scopeName, scopeValues]) => {
          const entries = Object.entries(scopeValues);
          const flat = entries.filter(([, v]) => typeof v === 'string') as Array<[string, string]>;
          const groups = entries.filter(([, v]) => typeof v === 'object') as Array<[
            string,
            Record<string, string>
          ]>;
          return (
            <section key={scopeName}>
              <h2 className="text-lg font-medium mb-4 capitalize">{scopeName}</h2>
              {flat.length > 0 && (
                <div className="mb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {flat.map(([name, value]) => (
                      <div key={name} className="border border-gray-200 rounded-md p-3">
                        <div className="text-xs text-gray-600 mb-2">{name}</div>
                        <div
                          className="h-12 rounded flex items-center justify-center text-[10px] font-mono"
                          style={{ background: value, color: getContrastText(value) }}
                          title={value}
                        >
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {groups.length > 0 && (
                <div className="space-y-4">
                  {groups.map(([groupName, values]) => (
                    <div key={groupName} className="border border-gray-200 rounded-md p-3">
                      <div className="text-sm font-medium mb-2">{groupName}</div>
                      <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
                        {Object.entries(values).map(([step, hex]) => (
                          <div key={step} className="rounded text-center text-xs">
                            <div
                              className="h-12 rounded mb-1 flex items-center justify-center text-[10px] font-mono"
                              style={{ background: hex, color: getContrastText(hex) }}
                              title={hex}
                            >
                              {hex}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

