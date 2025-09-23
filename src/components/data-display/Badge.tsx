import React from 'react';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & { tone?: 'neutral' | 'primary' | 'success' | 'danger' };
export function Badge({ tone = 'neutral', className, ...props }: BadgeProps) {
  const tones = {
    neutral: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
  } as const;
  return <span className={['inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium', tones[tone], className].filter(Boolean).join(' ')} {...props} />;
}
