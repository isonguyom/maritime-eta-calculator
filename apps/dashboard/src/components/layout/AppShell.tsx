'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-full">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="md:pl-64 flex flex-col">
        <Topbar onMenuClick={() => setOpen(!open)} />
        <main className="p-5">{children}</main>
      </div>
    </div>
  );
}
