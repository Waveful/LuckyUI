import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type DocsLayoutProps = React.PropsWithChildren<{ className?: string }>; 

export function DocsLayout({ children, className }: DocsLayoutProps) {
  return (
    <div className={["min-h-screen flex flex-col", className].filter(Boolean).join(' ')}>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-gray-200 bg-white dark:bg-black">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="leading-tight">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/lucky_ui_logo.png"
                alt="Lucky UI"
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
              <span className="block text-xl sm:text-2xl md:text-4xl font-bold">LuckyUI</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/Waveful/lucky-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label="Star LuckyUI on GitHub"
              title="Star LuckyUI on GitHub"
            >
              <Image
                src="https://img.shields.io/github/stars/Waveful/lucky-ui?style=social"
                alt="GitHub Repo stars"
                width={120}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
            <Link
              href="https://reddit.com/r/LuckyUI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label="Join LuckyUI Reddit Community"
              title="Join LuckyUI Reddit Community"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.234-.095z"/>
              </svg>
              r/LuckyUI
            </Link>
            <Link 
              href="https://waveful.com/download" 
              className="inline-flex items-center rounded-md bg-black text-white px-3 py-1.5 text-sm dark:bg-white dark:text-black"
            >
              Join Waveful
            </Link>
          </div>
        </div>
      </header>
      <div className="mx-auto w-full max-w-7xl px-4 pt-24 pb-8 flex-1 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <aside className="p-4 lg:sticky lg:top-8 h-max border-b md:border-b-0 border-gray-200 lg:pr-6">
            <nav className="text-sm">

              {/* Lucky UI */}
              <p className="mb-2 font-semibold text-gray-700 dark:text-gray-200">
                Lucky UI
              </p>

              {/* About */}
              <ul className="mb-4 space-y-1">
                <li>
                  <Link className="hover:underline" href="/">Welcome</Link>
                </li>
              </ul>

              {/* Frameworks */}
              <p className="mb-2 mt-4 font-semibold text-gray-700 dark:text-gray-200">Frameworks</p>
              <ul className="mb-4 space-y-1">
                <li>
                  <Link className="hover:underline" href="/flutter">Flutter</Link>
                </li>
              </ul>

              {/* Overview */}
              <p className="mb-2 font-semibold text-gray-700 dark:text-gray-200">Overview</p>
              <ul className="mb-4 space-y-1">
                <li>
                  <Link className="hover:underline" href="/logos">Logos</Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/characters">Characters</Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/colors">Colors</Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/gradients">Gradients</Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/typography">Typography</Link>
                </li>
              </ul>

              {/* Components */}
              <p className="mb-2 mt-4 font-semibold text-gray-700 dark:text-gray-200">Components</p>
              <ul className="space-y-1">
                <li>
                  <Link className="hover:underline" href="/buttons">Buttons</Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/ui">All Components</Link>
                </li>
              </ul>

            </nav>
          </aside>
          <main>{children}</main>
        </div>
      </div>
      <footer className="border-t border-gray-200">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 text-sm text-center">
          <div className="font-medium">LuckyUI</div>
          <div className="text-gray-600 dark:text-gray-300">made with love by <Link target='_blank' href="https://waveful.com">Waveful</Link></div>
        </div>
      </footer>
    </div>
  );
}



