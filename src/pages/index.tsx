import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <Head>
        <title>Lucky UI — Home</title>
        <meta name="description" content="Welcome to LuckyUI, Waveful's official design system." />
      </Head>
      <main className="flex flex-col gap-[20px] row-start-2 items-center text-center max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">LuckyUI</h1>
        <p className="text-base sm:text-lg text-black/70 dark:text-white/70">
          Waveful&apos;s official design system. Accessible, themeable components, design tokens,
          and tooling to build consistent, high‑quality interfaces across Waveful products.
        </p>
        <nav className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-sm">
          <Link href="/ui" className="rounded-md border px-3 py-2 text-left hover:bg-black/5 dark:hover:bg-white/5">
            Components · UI
          </Link>
          <Link href="#layout" className="rounded-md border px-3 py-2 text-left hover:bg-black/5 dark:hover:bg-white/5">
            Components · Layout
          </Link>
          <Link href="#feedback" className="rounded-md border px-3 py-2 text-left hover:bg-black/5 dark:hover:bg-white/5">
            Components · Feedback
          </Link>
          <Link href="#data-display" className="rounded-md border px-3 py-2 text-left hover:bg-black/5 dark:hover:bg-white/5">
            Components · Data Display
          </Link>
          <Link href="#navigation" className="rounded-md border px-3 py-2 text-left hover:bg-black/5 dark:hover:bg-white/5">
            Components · Navigation
          </Link>
          <Link href="#form" className="rounded-md border px-3 py-2 text-left hover:bg-black/5 dark:hover:bg-white/5">
            Components · Form
          </Link>
          <Link href="#theme" className="rounded-md border px-3 py-2 text-left hover:bg-black/5 dark:hover:bg-white/5 sm:col-span-2">
            Theme · Tokens (colors, typography, spacing, shadows, radii, breakpoints)
          </Link>
        </nav>
      </main>
      <footer className="row-start-3 text-xs text-black/50 dark:text-white/50">
        Built with Next.js and Tailwind CSS
      </footer>
    </div>
  );
}
