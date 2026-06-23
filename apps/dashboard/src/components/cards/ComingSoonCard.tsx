'use client';

import { LucideIcon } from 'lucide-react';

type ComingSoonCardProps = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  badge?: string;
};

export default function ComingSoonCard({
  title,
  description = 'This feature is currently under development.',
  icon: Icon,
  badge = 'Coming Soon',
}: ComingSoonCardProps) {
  return (
    <div className="relative rounded-xl border border-border bg-surface-2 p-6 overflow-hidden">
      {/* Badge */}
      <div className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-accent/20 border border-accent text-accent font-medium">
        {badge}
      </div>

      {/* Icon */}
      {Icon && (
        <div className="mb-4 text-sky-500">
          <Icon size={28} />
        </div>
      )}

      {/* Content */}
      <h3 className="text-lg font-semibold text-title mb-2">{title}</h3>

      <p className="text-sm text-muted leading-relaxed">{description}</p>

      {/* Subtle overlay effect */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-transparent to-foreground opacity-40" />
    </div>
  );
}
