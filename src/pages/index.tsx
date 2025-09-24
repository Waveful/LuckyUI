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
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Layout</h2>
          <p className="text-sm text-black/70 dark:text-white/70 mb-4">
            Building blocks to structure pages and content. Grid, Stack, Container and more.
          </p>
          <div className="mt-4 w-full flex gap-2">
            <Link href="/flutter" className="rounded-md border border-gray-100 px-3 py-2 text-left">
              Flutter (Coming Soon)
            </Link>
            <Link href="/nextjs" className="rounded-md border border-gray-100 px-3 py-2 text-left">
              NextJS (Coming Soon)
            </Link>
          </div>
        </div>

        {/* Sections */}
        <section id="layout" className="w-full text-left mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Layout</h2>
          <p className="text-sm text-black/70 dark:text-white/70 mb-4">
            Building blocks to structure pages and content. Grid, Stack, Container and more.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/ui" className="rounded-md border border-gray-100 px-3 py-2">
              Browse all UI components
            </Link>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              Grid · Coming soon
            </button>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              Stack · Coming soon
            </button>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              Container · Coming soon
            </button>
          </div>
        </section>

        <section id="feedback" className="w-full text-left mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Feedback</h2>
          <p className="text-sm text-black/70 dark:text-white/70 mb-4">
            Components that communicate progress, state and outcomes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/buttons" className="rounded-md border border-gray-100 px-3 py-2">
              Buttons
            </Link>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              Toast · Coming soon
            </button>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              Alert · Coming soon
            </button>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              Progress · Coming soon
            </button>
          </div>
        </section>

        <section id="navigation" className="w-full text-left mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Navigation</h2>
          <p className="text-sm text-black/70 dark:text-white/70 mb-4">
            Menus, tabs and navigational patterns to move through the app.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/ui" className="rounded-md border border-gray-100 px-3 py-2">
              Explore navigation patterns
            </Link>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              Tabs · Coming soon
            </button>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              Sidebar · Coming soon
            </button>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              Breadcrumbs · Coming soon
            </button>
          </div>
        </section>

        <section id="form" className="w-full text-left mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Form</h2>
          <p className="text-sm text-black/70 dark:text-white/70 mb-4">
            Inputs, validation and controls for capturing user data.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/ui" className="rounded-md border border-gray-100 px-3 py-2">
              View form components
            </Link>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              TextField · Coming soon
            </button>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              Select · Coming soon
            </button>
            <button disabled className="rounded-md border border-gray-100 px-3 py-2 text-left text-black/50 dark:text-white/50">
              Checkbox · Coming soon
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

