import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DocsLayout } from "@/components/layout/DocsLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DocsLayout>
      <Component {...pageProps} />
    </DocsLayout>
  );
}
