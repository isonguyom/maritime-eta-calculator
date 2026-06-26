'use client';

import { Check, LucideIcon } from 'lucide-react';

type OptionCardProps = {
  title: string;
  description?: string;
  icon: LucideIcon;
  selected?: boolean;
  onClick: () => void;
};

export default function OptionCard({
  title,
  description,
  icon: Icon,
  selected = false,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'relative rounded-xl border p-4 text-left transition-all cursor-pointer',
        'hover:border-accent hover:bg-accent/5',
        'focus:outline-none focus:ring-2 focus:ring-accent',
        selected ? 'border-accent bg-accent/10' : 'border-border bg-surface',
      ].join(' ')}
    >
      {selected && (
        <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
          <Check size={14} />
        </span>
      )}

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-2">
        <Icon size={22} className="text-accent" />
      </div>

      <h3 className="font-medium text-title">{title}</h3>

      {description && <p className="mt-1 text-sm text-muted">{description}</p>}
    </button>
  );
}
