import Head from 'next/head';

export default function UIPage() {
  return (
    <>
      <Head>
        <title>LuckyUI — Components</title>
        <meta name="description" content="Preview the core UI components of LuckyUI." />
      </Head>
      <h1 className="text-2xl font-semibold mb-6">UI Components</h1>

      <section id="buttons" className="mb-8">
        <h2 className="text-lg font-medium mb-3">Button</h2>
        <div className="flex gap-3">
        </div>
      </section>

      <section id="forms" className="mb-8">
        <h2 className="text-lg font-medium mb-3">Input</h2>
        <div className="max-w-sm">
        </div>
      </section>

      <section id="feedback" className="mb-8">
        <h2 className="text-lg font-medium mb-3">Alert</h2>
        <div className="grid gap-2">
        </div>
      </section>

      <section id="data-display" className="mb-8">
        <h2 className="text-lg font-medium mb-3">Badge</h2>
        <div className="flex gap-2">
        </div>
      </section>

      <section id="navigation" className="mb-8">
        <h2 className="text-lg font-medium mb-3">Tabs</h2>
      </section>
    </>
  );
}


