'use client';

import { ShipWheel, Clock3, Fuel, Route } from 'lucide-react';

import DashboardPageHeader from '@/components/layout/DashboardPageHeader';
import FeatureCard from '@/components/cards/FeatureCard';

const tools = [
  {
    title: 'ETA Calculator',
    description:
      'Estimate vessel arrival time, voyage duration, and fuel consumption from voyage parameters.',
    icon: Clock3,
    href: '/eta',
  },
  {
    title: 'Fuel Estimator',
    description:
      'Estimate fuel usage, operating cost, CO₂ emissions, and fuel efficiency.',
    icon: Fuel,
    href: '/fuel-estimator',
  },
  {
    title: 'Voyage Planner',
    description:
      'Plan an entire voyage including ETA, fuel requirements, costs, and environmental impact.',
    icon: Route,
    href: '/voyage-planner',
  },
];

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Overview"
        description="A maritime voyage planning toolkit for ETA prediction, fuel estimation, and voyage optimization."
      />

      <section className="rounded-xl border border-border bg-surface p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
            <ShipWheel size={28} />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-foreground">
              Welcome to Naviscope ETA
            </h2>

            <p className="mt-1 text-sm text-muted">
              Quickly estimate voyage arrival time, fuel consumption,
              operational costs, and environmental impact using maritime
              planning tools designed for shipping professionals.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">Available Tools</h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <FeatureCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              href={tool.href}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
