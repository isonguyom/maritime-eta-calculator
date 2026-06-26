'use client';

import { useState } from 'react';

import DashboardPageHeader from '@/components/layout/DashboardPageHeader';
import EmptyState from '@/components/ui/feedback/EmptyState';

import VoyagePlannerForm from '@/modules/voyage-planner/components/VoyagePlannerForm';
import VoyagePlannerResults from '@/modules/voyage-planner/components/VoyagePlannerResults';
import VoyagePlannerSummary from '@/modules/voyage-planner/components/VoyagePlannerSummary';

import { planVoyage } from '@/lib/calculations/planVoyage';

import type {
  VoyagePlannerInputType,
  VoyagePlannerResultType,
} from '@/types/voyagePlanner';

import { ShipWheel } from 'lucide-react';

export default function VoyagePlannerPage() {
  const [result, setResult] = useState<VoyagePlannerResultType | null>(null);

  const handleCalculate = (input: VoyagePlannerInputType) => {
    const voyagePlan = planVoyage(input);
    setResult(voyagePlan);
  };

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Voyage Planner"
        description="Plan complete voyages by estimating arrival time, fuel consumption, operating costs, CO₂ emissions, and voyage performance."
      />

      <div className="grid gap-6 lg:grid-cols-[400px_1fr]">
        <VoyagePlannerForm onCalculate={handleCalculate} />

        {result ? (
          <div className="space-y-6">
            <VoyagePlannerResults result={result} />

            <VoyagePlannerSummary result={result} />
          </div>
        ) : (
          <EmptyState
            icon={ShipWheel}
            title="No voyage planned yet"
            description="Provide the voyage details, departure information, distance, vessel type, speed, and fuel price to generate a complete voyage plan."
            status="Waiting for voyage information..."
          />
        )}
      </div>
    </div>
  );
}
