'use client';

import ComingSoonCard from '@/components/cards/ComingSoonCard';
import DashboardPageHeader from '@/components/layout/DashboardPageHeader';
import { Fuel } from 'lucide-react';

export default function FuelPage() {
  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Fuel Estimator"
        description="Estimate voyage fuel consumption based on vessel type, distance, speed, and operational conditions."
      />

      <ComingSoonCard
        title="Fuel Optimization Engine"
        description="Advanced fuel prediction using vessel type, speed curves, and voyage conditions."
        icon={Fuel}
      />
    </div>
  );
}
