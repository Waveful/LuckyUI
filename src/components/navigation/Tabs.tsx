import React from 'react';

type Tab = { id: string; label: string };
type TabsProps = { tabs: Tab[]; activeId: string; onChange: (id: string) => void; className?: string };
export function Tabs({ tabs, activeId, onChange, className }: TabsProps) {
  return (
    <div className={['flex gap-2 border-b', className].filter(Boolean).join(' ')}>
      {tabs.map(t => (
        <button
          key={t.id}
          className={['px-3 py-2 text-sm', activeId === t.id ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-600 hover:text-gray-900'].join(' ')}
          onClick={() => onChange(t.id)}
          type="button"
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
