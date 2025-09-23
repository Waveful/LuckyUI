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
          <Link 
            href="https://waveful.com/download" 
            className="inline-flex items-center rounded-md bg-black text-white px-3 py-1.5 text-sm dark:bg-white dark:text-black"
          >
            Download the App
          </Link>
        </div>
      </header>
      <div className="mx-auto w-full max-w-7xl px-4 pt-24 pb-8 flex-1 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <aside className="p-4 lg:sticky lg:top-8 h-max border-b md:border-b-0 border-gray-200 lg:pr-6">
            <nav className="text-sm">
              <p className="mb-2 font-semibold text-gray-700 dark:text-gray-200">
                Lucky UI
              </p>
              <ul className="mb-4 space-y-1">
                <li>
                  <Link className="hover:underline" href="/">Welcome</Link>
                </li>
              </ul>
              <p className="mb-2 font-semibold text-gray-700 dark:text-gray-200">Overview</p>
              <ul className="mb-4 space-y-1">
                <li>
                  <Link className="hover:underline" href="/colors">Colors</Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/typography">Typography</Link>
                </li>
              </ul>

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



