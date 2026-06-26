'use client';

import ComingSoonCard from '@/components/cards/ComingSoonCard';
import DashboardPageHeader from '@/components/layout/DashboardPageHeader';
import { Gauge } from 'lucide-react';

export default function SpeedOptimizationPage() {
  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Speed Optimization"
        description="Plan optimal maritime routes, estimate voyage duration, and simulate operational conditions."
      />

      <ComingSoonCard
        title="Voyage Optimization Engine"
        description="Route optimization, weather-aware navigation, and cost simulation for intelligent voyage planning."
        icon={Gauge}
      />
    </div>
  );
}
