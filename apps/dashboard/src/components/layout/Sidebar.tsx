'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  LayoutDashboard,
  Clock3,
  Route,
  Gauge,
  GitCompareArrows,
  Fuel,
  Leaf,
  CircleDollarSign,
  Anchor,
  Timer,
  ShipWheel,
  Cog,
} from 'lucide-react';

import { cn } from '@/lib/utils';

const navigation = [
  {
    title: 'General',
    items: [
      {
        name: 'Overview',
        path: '/',
        icon: LayoutDashboard,
      },
      {
        name: 'Settings',
        path: '/settings',
        icon: Cog,
      },
    ],
  },
  {
    title: 'Voyage Planning',
    items: [
      {
        name: 'ETA Calculator',
        path: '/eta',
        icon: Clock3,
      },
      {
        name: 'Voyage Planner',
        path: '/voyage-planner',
        icon: Route,
      },
      {
        name: 'Speed Optimization',
        path: '/speed-optimization',
        icon: Gauge,
      },
      {
        name: 'Route Comparison',
        path: '/route-comparison',
        icon: GitCompareArrows,
      },
    ],
  },
  {
    title: 'Fuel & Environment',
    items: [
      {
        name: 'Fuel Estimator',
        path: '/fuel-estimator',
        icon: Fuel,
      },
      {
        name: 'Carbon Emissions',
        path: '/carbon-emissions',
        icon: Leaf,
      },
      {
        name: 'Bunker Cost Optimizer',
        path: '/bunker-cost-optimizer',
        icon: CircleDollarSign,
      },
    ],
  },
  {
    title: 'Operations',
    items: [
      {
        name: 'Port Stay Calculator',
        path: '/port-stay',
        icon: Anchor,
      },
      {
        name: 'Laytime Calculator',
        path: '/laytime',
        icon: Timer,
      },
      {
        name: 'Fleet Dashboard',
        path: '/fleet',
        icon: ShipWheel,
      },
    ],
  },
];

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64',
          'flex flex-col border-r border-border bg-background',
          'transition-transform duration-300',
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center gap-2 border-b border-border px-4">
          <Image
            src="/assets/naviscope-icon.svg"
            alt="Naviscope"
            width={40}
            height={40}
          />

          <div>
            <h1 className="text-lg font-semibold">Naviscope</h1>

            <p className="text-xs text-muted">Voyage Intelligence</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          {navigation.map((group) => (
            <div key={group.title} className="mb-7">
              <h2 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
                {group.title}
              </h2>

              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  const active =
                    pathname === item.path ||
                    (item.path !== '/' && pathname.startsWith(item.path));

                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                        active
                          ? 'bg-accent text-white'
                          : 'text-foreground hover:bg-accent/10'
                      )}
                    >
                      <Icon size={18} />

                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-border px-4 py-4">
          <p className="text-xs text-muted">Naviscope ETA v1.0</p>

          <p className="mt-1 text-xs text-muted">
            Voyage Intelligence Platform
          </p>
        </div>
      </aside>
    </>
  );
}
