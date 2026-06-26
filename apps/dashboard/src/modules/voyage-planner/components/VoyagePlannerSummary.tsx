'use client';

import SummaryCard from '@/components/cards/SummaryCard';

import { downloadSummary } from '@/lib/export/downloadSummary';

import type { VoyagePlannerResultType } from '@/types/voyagePlanner';

type Props = {
  result: VoyagePlannerResultType;
};

export default function VoyagePlannerSummary({ result }: Props) {
  const items = [
    {
      label: 'Vessel',
      value: result.vessel,
    },
    {
      label: 'Origin',
      value: result.origin,
    },
    {
      label: 'Destination',
      value: result.destination,
    },
    {
      label: 'Departure',
      value: result.departure.toLocaleString(),
    },
    {
      label: 'ETA',
      value: result.eta.toLocaleString(),
    },
    {
      label: 'Distance',
      value: `${result.distance} NM`,
    },
    {
      label: 'Speed',
      value: `${result.speed} Knots`,
    },
    {
      label: 'Voyage Duration',
      value: `${result.voyageDays.toFixed(2)} Days`,
    },
    {
      label: 'Fuel Required',
      value: `${result.totalFuel.toFixed(2)} MT`,
    },
    {
      label: 'Fuel Cost',
      value: `$${result.fuelCost.toLocaleString()}`,
    },
    {
      label: 'CO2 Emissions',
      value: `${result.co2Emission.toFixed(2)} MT`,
    },
    {
      label: 'Fuel Efficiency',
      value: `${result.fuelEfficiency.toFixed(3)} MT/NM`,
    },
    {
      label: 'Weather Factor',
      value: result.weatherFactor,
    },
    {
      label: 'Safety Margin',
      value: result.safetyMargin,
    },
    {
      label: 'Average Daily Fuel',
      value: `${result.averageDailyFuel.toFixed(2)} MT/day`,
    },
  ];

  return (
    <SummaryCard
      title="Voyage Plan Summary"
      items={items}
      downloadable
      onDownload={() =>
        downloadSummary({
          title: 'Voyage Plan Summary',
          filename: 'voyage-plan-summary.pdf',
          items,
        })
      }
    />
  );
}
