'use client';

import { useState } from 'react';

import DashboardPageHeader from '@/components/layout/DashboardPageHeader';
import EmptyState from '@/components/ui/feedback/EmptyState';

import FuelEstimatorForm from '@/modules/fuel-estimator/components/FuelEstimatorForm';
import FuelEstimatorResults from '@/modules/fuel-estimator/components/FuelEstimatorResults';
import FuelEstimatorSummary from '@/modules/fuel-estimator/components/FuelEstimatorSummary';

import { estimateFuel } from '@/lib/calculations/estimateFuel';

import type {
  FuelEstimatorInputType,
  FuelEstimatorResultType,
} from '@/types/fuelEstimator';
import { Fuel } from 'lucide-react';

export default function FuelEstimatorPage() {
  const [result, setResult] = useState<FuelEstimatorResultType | null>(null);

  const handleCalculate = (input: FuelEstimatorInputType) => {
    const estimation = estimateFuel(input);
    setResult(estimation);
  };

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Fuel Estimator"
        description="Estimate voyage fuel consumption, operating cost, CO₂ emissions, and fuel efficiency."
      />

      <div className="grid gap-6 lg:grid-cols-[400px_1fr]">
        <FuelEstimatorForm onCalculate={handleCalculate} />

        {result ? (
          <div className="space-y-6">
            <FuelEstimatorResults result={result} />

            <FuelEstimatorSummary result={result} />
          </div>
        ) : (
          <EmptyState
            icon={Fuel}
            title="No fuel estimate yet"
            description="Provide your vessel, voyage distance, speed, and fuel price to estimate fuel consumption, operating cost, CO₂ emissions, and fuel efficiency."
            status="Waiting for voyage information..."
          />
        )}
      </div>
    </div>
  );
}
