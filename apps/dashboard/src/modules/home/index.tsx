'use client';

import { useState } from 'react';

import ETAForm from '@/components/ETAForm';
import ResultCard from '@/components/ResultCard';

import { calculateETA } from '@/lib/calculateETA';
import { ETAResult } from '@/types/eta';
import VoyageSummary from '@/components/VoyageSummary';

export default function HomeModule() {
  const [distance, setDistance] = useState('');
  const [speed, setSpeed] = useState('');
  const [departure, setDeparture] = useState('');

  const [result, setResult] = useState<ETAResult | null>(null);

  const handleCalculate = () => {
    if (!distance || !speed || !departure) return;

    const etaResult = calculateETA(
      Number(distance),
      Number(speed),
      new Date(departure)
    );

    setResult(etaResult);
  };

  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Naviscope ETA</h1>
          <p className="text-slate-400">
            Precision ETA for maritime operations
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Form */}
          <ETAForm
            distance={distance}
            speed={speed}
            departure={departure}
            onDistanceChange={setDistance}
            onSpeedChange={setSpeed}
            onDepartureChange={setDeparture}
            onCalculate={handleCalculate}
          />

          {/* Results */}
          <div className="space-y-4">
            {result && (
              <>
                <VoyageSummary
                  distance={Number(distance)}
                  speed={Number(speed)}
                  duration={result.durationHours}
                />

                <ResultCard result={result} />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
