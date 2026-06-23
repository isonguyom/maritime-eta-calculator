'use client';

import { useState } from 'react';
import EtaForm from '@/modules/eta/components/EtaForm';
import EtaResults from '@/modules/eta/components/EtaResults';
import VoyageSummary from '@/modules/eta/components/VoyageSummary';
import { EtaInputType, EtaResultType } from '@/types/eta';
import { calculateEtaEngine } from '@/lib/calculateETA';
import DashboardPageHeader from '@/components/layout/DashboardPageHeader';

export default function EtaPage() {
  const [result, setResult] = useState<EtaResultType | null>(null);

  const handleCalculate = (input: EtaInputType) => {
    const result = calculateEtaEngine(input);
    setResult(result);
  };

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="ETA Calculator"
        description="Compute vessel arrival time, voyage duration, and fuel consumption with maritime precision."
      />

      <div className="grid gap-6 lg:grid-cols-[400px_1fr]">
        <EtaForm onCalculate={handleCalculate} />

        <div className="space-y-6">
          <EtaResults result={result} />

          {result && <VoyageSummary result={result} />}
        </div>
      </div>
    </div>
  );
}
