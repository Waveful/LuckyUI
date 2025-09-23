import { Button } from '@/components/ui';
import { Container } from '@/components/layout';

export default function ButtonsPage() {
  return (
    <Container className="py-10">
      <h1 className="text-2xl font-semibold mb-6">Buttons</h1>
      <div className="flex gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
      </div>
    </Container>
  );
}


