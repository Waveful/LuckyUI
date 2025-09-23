import { Button } from '@/components/ui';
import { Container } from '@/components/layout';
import { Alert } from '@/components/feedback';
import { Badge } from '@/components/data-display';
import { Tabs } from '@/components/navigation';
import { Input } from '@/components/form';

export default function UIPage() {
  return (
    <Container className="py-10">
      <h1 className="text-2xl font-semibold mb-6">UI Components</h1>

      <section id="buttons" className="mb-8">
        <h2 className="text-lg font-medium mb-3">Button</h2>
        <div className="flex gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </section>

      <section id="forms" className="mb-8">
        <h2 className="text-lg font-medium mb-3">Input</h2>
        <div className="max-w-sm">
          <Input placeholder="Enter text" />
        </div>
      </section>

      <section id="feedback" className="mb-8">
        <h2 className="text-lg font-medium mb-3">Alert</h2>
        <div className="grid gap-2">
          <Alert tone="info">Info message</Alert>
          <Alert tone="success">Success message</Alert>
          <Alert tone="warning">Warning message</Alert>
          <Alert tone="error">Error message</Alert>
        </div>
      </section>

      <section id="data-display" className="mb-8">
        <h2 className="text-lg font-medium mb-3">Badge</h2>
        <div className="flex gap-2">
          <Badge>Neutral</Badge>
          <Badge tone="primary">Primary</Badge>
          <Badge tone="success">Success</Badge>
          <Badge tone="danger">Danger</Badge>
        </div>
      </section>

      <section id="navigation" className="mb-8">
        <h2 className="text-lg font-medium mb-3">Tabs</h2>
        <Tabs
          tabs={[
            { id: 'one', label: 'One' },
            { id: 'two', label: 'Two' },
            { id: 'three', label: 'Three' },
          ]}
          activeId={'one'}
          onChange={() => {}}
        />
      </section>
    </Container>
  );
}


