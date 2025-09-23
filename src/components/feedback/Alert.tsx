import React from 'react';

type AlertProps = React.HTMLAttributes<HTMLDivElement> & { tone?: 'info' | 'success' | 'warning' | 'error' };
export function Alert({ tone = 'info', className, ...props }: AlertProps) {
  const tones = {
    info: 'bg-blue-50 text-blue-700 border-blue-200',
    success: 'bg-green-50 text-green-700 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error: 'bg-red-50 text-red-700 border-red-200',
  } as const;
  return <div role="status" className={['border rounded-md px-3 py-2', tones[tone], className].filter(Boolean).join(' ')} {...props} />;
}
