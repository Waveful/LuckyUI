import React from 'react';

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={['mx-auto w-full max-w-7xl px-4', className].filter(Boolean).join(' ')} {...props} />;
}
