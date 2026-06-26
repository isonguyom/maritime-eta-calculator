'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const items = [
  { label: 'General', path: '/settings' },
  { label: 'Appearance', path: '/settings/appearance' },
  { label: 'Preferences', path: '/settings/preferences' },
  { label: 'Calculations', path: '/settings/calculations' },
  { label: 'Export', path: '/settings/export' },
  { label: 'About', path: '/settings/about' },
];

export default function SettingsNav() {
  const pathname = usePathname();

  return (
    <div className="space-y-1">
      {items.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={cn(
            'block rounded-lg px-3 py-2 text-sm transition',
            pathname === item.path
              ? 'bg-accent text-white'
              : 'hover:bg-accent/10'
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
