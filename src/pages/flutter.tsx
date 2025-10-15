import Head from 'next/head';
import Link from 'next/link';

export default function FlutterPage() {
  return (
    <div className="py-10">
      <Head>
        <title>LuckyUI — Flutter</title>
        <meta name="description" content="Flutter bindings and widgets for LuckyUI design system." />
      </Head>
      <h1 className="text-2xl font-semibold mb-2">Flutter</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        LuckyUI is also available for Flutter development, providing the same design system principles and components for mobile and desktop applications.
      </p>
      
      <div className="space-y-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h2 className="text-lg font-medium mb-2">📦 Pub.dev Package</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Install the LuckyUI package for your Flutter project
          </p>
          <Link 
            href="https://pub.dev/packages/luckyui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700"
          >
            View on Pub.dev
          </Link>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h2 className="text-lg font-medium mb-2">🐙 GitHub Repository</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Source code, documentation, and contribution guidelines
          </p>
          <Link 
            href="https://github.com/Waveful/luckyui-flutter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
