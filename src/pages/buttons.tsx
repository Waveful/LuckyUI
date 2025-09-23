import { Button } from '@/components/ui';
import { Container } from '@/components/layout';
import Head from 'next/head';

export default function ButtonsPage() {
  return (
    <Container className="py-10">
      <Head>
        <title>Lucky UI — Buttons</title>
        <meta name="description" content="Buttons component variants and states in LuckyUI." />
      </Head>
      <h1 className="text-2xl font-semibold mb-6">Buttons</h1>
      <div className="flex gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
      </div>
    </Container>
  );
}


