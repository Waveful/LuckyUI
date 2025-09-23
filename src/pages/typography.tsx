import { typography } from '@/theme';

export default function TypographyPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold mb-6">Typography</h1>
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">Font Families</h2>
        <div className="space-y-2">
          <div className="text-sm text-gray-600">Sans</div>
          <p style={{ fontFamily: typography.fontFamily.sans }}>The quick brown fox jumps over the lazy dog.</p>
          <div className="text-sm text-gray-600 mt-4">Mono</div>
          <p style={{ fontFamily: typography.fontFamily.mono }}>const lucky = true; // The quick brown fox</p>
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


