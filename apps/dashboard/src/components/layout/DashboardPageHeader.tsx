'use client';

import { ReactNode } from 'react';

type Props = {
  title: string;
  description?: string;
  children?: ReactNode; // for actions (buttons, filters, etc.)
};

export default function DashboardPageHeader({
  title,
  description,
  children,
}: Props) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      {/* Left side */}
      <div className="space-y-1">
        <h1 className="text-xl lg:text-2xl font-medium text-title">{title}</h1>

        {description && (
          <p className="text-sm text-muted max-w-2xl">{description}</p>
        )}
      </div>

      {/* Right side (actions) */}
      {children && (
        <div className="flex items-center gap-2 md:justify-end">{children}</div>
      )}
    </div>
  );
}
