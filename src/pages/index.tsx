
export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[20px] row-start-2 items-center text-center max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">LuckyUI</h1>
        <p className="text-base sm:text-lg text-black/70 dark:text-white/70">
          Waveful&apos;s official design system. Accessible, themeable components, design tokens,
          and tooling to build consistent, high‑quality interfaces across Waveful products.
        </p>
      </main>
      <footer className="row-start-3 text-xs text-black/50 dark:text-white/50">
        Built with Next.js and Tailwind CSS
      </footer>
    </div>
  );
}
