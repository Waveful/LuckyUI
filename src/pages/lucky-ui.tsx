import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function LuckyUIRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, [router]);
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,follow" />
        <title>Redirecting…</title>
      </Head>
      <div />
    </>
  );
}


