'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', path: '/' },
    { name: 'ETA Calculator', path: '/eta' },
    { name: 'Fuel Estimator', path: '/fuel-estimator' },
    { name: 'Voyage Planner', path: '/voyage-planner' },
  ];

  //   Voyage Planning
  // ETA Calculator
  // Voyage Planner
  // Speed Optimization
  // Route Comparison
  // Fuel & Environment
  // Fuel Estimator
  // Carbon Emissions Calculator
  // Bunker Cost Optimizer
  // Operations
  // Port Stay Calculator
  // Laytime Calculator
  // Fleet Dashboard

  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64',
          'flex flex-col bg-background text-foreground border-r border-border',
          'transform transition-transform duration-300',
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* HEADER */}
        <div className="px-4 py-5 border-b border-border shrink-0 h-16 flex items-center gap-1">
          <Image
            src="/assets/naviscope-icon.svg"
            alt="Naviscope icon"
            width={40}
            height={40}
          />{' '}
          <h1 className="text-xl font-medium text-foreground">
            Naviscope <span className="font-semibold">ETA</span>
          </h1>
        </div>

        {/* NAV (SCROLLABLE AREA) */}
        <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={cn(
                'block px-3 py-2 rounded-lg text-sm transition',
                pathname === item.path
                  ? 'bg-accent text-white font-medium'
                  : 'hover:bg-accent/20'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="px-4 py-4 border-t border-border shrink-0">
          <div className="text-xs text-muted">v1.0 • Operational Mode</div>
        </div>
      </aside>
    </>
  );
}
