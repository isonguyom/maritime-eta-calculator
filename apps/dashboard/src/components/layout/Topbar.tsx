'use client';

import { Menu } from 'lucide-react';

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex h-16 items-center gap-3 border-b border-border p-5">
      <button onClick={onMenuClick} className="md:hidden text-muted text-xl">
        <Menu size={20} />
      </button>

      <h1 className="text-sm font-medium text-foreground">
        Maritime Operations Dashboard
      </h1>
    </header>
  );
}
