import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <Head>
        <title>LuckyUI — Home</title>
        <meta name="description" content="Welcome to LuckyUI, Waveful's official design system." />
      </Head>
      <main className="flex flex-col gap-[20px] row-start-2 items-center text-center w-full max-w-3xl">
        <Image
          src="/lucky_ui_logo.png"
          alt="Lucky UI logo"
          width={256}
          height={256}
          priority
          className="rounded-xl"
        />
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">LuckyUI</h1>
        <p className="text-base sm:text-lg text-black/70 dark:text-white/70">
          Waveful&apos;s official design system. Accessible, themeable components, design tokens,
          and tooling to build consistent, high‑quality interfaces across Waveful products.
        </p>

          <div className="w-full text-left mt-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Frameworks</h2>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">
              LuckyUI is available for different frameworks and platforms.
            </p>
            <div className="mt-4 w-full flex gap-2">
              <Link href="/flutter" className="rounded-md border border-gray-100 px-3 py-2 text-left flex items-center gap-2">
                Flutter
                <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium text-white" style={{ backgroundColor: '#024EFA' }}>
                  New!
                </span>
              </Link>
              <Link href="/nextjs" className="rounded-md border border-gray-100 px-3 py-2 text-left">
                NextJS (Coming Soon)
              </Link>
            </div>
          </div>

          {/* Overview Section */}
          <section id="overview" className="w-full text-left mt-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">
              Design tokens, assets, and foundational elements of the LuckyUI design system.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <Link href="/logos" className="rounded-md border border-gray-100 px-3 py-2">
                Logos
              </Link>
              <Link href="/characters" className="rounded-md border border-gray-100 px-3 py-2">
                Characters
              </Link>
              <Link href="/colors" className="rounded-md border border-gray-100 px-3 py-2">
                Colors
              </Link>
              <Link href="/gradients" className="rounded-md border border-gray-100 px-3 py-2">
                Gradients
              </Link>
              <Link href="/typography" className="rounded-md border border-gray-100 px-3 py-2">
                Typography
              </Link>
            </div>
          </section>

          {/* Components Section */}
          <section id="components" className="w-full text-left mt-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Components</h2>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">
              Interactive UI components built with accessibility and theming in mind.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <Link href="/buttons" className="rounded-md border border-gray-100 px-3 py-2">
                Buttons
              </Link>
              <Link href="/ui" className="rounded-md border border-gray-100 px-3 py-2">
                All Components
              </Link>
            </div>
          </section>

      </main>
    </div>
  );
}

