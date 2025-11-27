import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DocsLayout } from "@/components/layout/DocsLayout";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DocsLayout>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>LuckyUI — Waveful Design System</title>
          <meta
            name="description"
            content="LuckyUI is Waveful's official design system with accessible, themeable components and tokens."
          />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/lucky_ui_logo.png" />
          <link rel="apple-touch-icon" href="/lucky_ui.png" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Lucky UI — Waveful Design System"
          />
          <meta
            property="og:description"
            content="Accessible, themeable components, tokens, and docs for Waveful products."
          />
          <meta property="og:image" content="/lucky_ui.png" />
          <meta property="og:url" content="https://lucky-ui.local/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Lucky UI — Waveful Design System"
          />
          <meta
            name="twitter:description"
            content="Accessible, themeable components, tokens, and docs for Waveful products."
          />
          <meta name="twitter:image" content="/lucky_ui.png" />
        </Head>
        <Component {...pageProps} />
      </DocsLayout>
    </ThemeProvider>
  );
}
