'use client';

import DashboardPageHeader from '@/components/layout/DashboardPageHeader';
import { Clock, Fuel, Anchor } from 'lucide-react';

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Overview"
        description="Simple maritime tools for estimating ETA, fuel usage, and voyage planning."
      />

      {/* Core Tools */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-5">
          <div className="flex items-center gap-2 text-accent">
            <Clock size={18} />
            <span className="text-sm font-medium">ETA Calculator</span>
          </div>
          <p className="mt-2 text-sm text-muted">
            Estimate vessel arrival time using distance, speed, and departure
            time.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5">
          <div className="flex items-center gap-2 text-accent">
            <Fuel size={18} />
            <span className="text-sm font-medium">Fuel Estimator</span>
          </div>
          <p className="mt-2 text-sm text-muted">
            Calculate estimated fuel consumption based on vessel type and voyage
            duration.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5">
          <div className="flex items-center gap-2 text-accent">
            <Anchor size={18} />
            <span className="text-sm font-medium">Voyage Planner</span>
          </div>
          <p className="mt-2 text-sm text-muted">
            Plan basic voyage routes and estimate travel duration and
            operational needs.
          </p>
        </div>
      </div>

      {/* Simple Description */}
      <div className="rounded-xl border border-border p-5 space-y-2">
        <h2 className="text-base font-semibold">About Naviscope</h2>

        <p className="text-sm text-muted">
          Naviscope is a lightweight maritime utility tool designed to help with
          everyday voyage calculations and planning tasks.
        </p>
      </div>
    </div>
  );
}
