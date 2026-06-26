'use client';

import SummaryCard from '@/components/cards/SummaryCard';
import { downloadSummary } from '@/lib/export/downloadSummary';

import type { FuelEstimatorResultType } from '@/types/fuelEstimator';

type Props = {
  result: FuelEstimatorResultType;
};

export default function FuelEstimatorSummary({ result }: Props) {
  const items = [
    {
      label: 'Vessel',
      value: result.vessel,
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
      value: `${result.days.toFixed(2)} Days`,
    },
    {
      label: 'Fuel Consumption',
      value: `${result.fuelConsumption} MT/Day`,
    },
    {
      label: 'Fuel Used',
      value: `${result.fuel.toFixed(2)} MT`,
    },
    {
      label: 'Fuel Price',
      value: `$${result.fuelPrice.toLocaleString()}/MT`,
    },
    {
      label: 'Estimated Fuel Cost',
      value: `$${result.fuelCost.toLocaleString()}`,
    },
    {
      label: 'CO2 Emissions',
      value: `${result.co2.toFixed(2)} MT`,
    },
    {
      label: 'Fuel Efficiency',
      value: `${result.efficiency.toFixed(3)} MT/NM`,
    },
    {
      label: 'Weather Factor',
      value: `${result.weatherFactor}×`,
    },
    {
      label: 'Safety Margin',
      value: `${((result.safetyMargin - 1) * 100).toFixed(0)}%`,
    },
  ];

  const handleDownload = () => {
    downloadSummary({
      title: 'Fuel Estimation Summary',
      filename: 'fuel-estimation-summary.pdf',
      items,
    });
  };

  return (
    <SummaryCard
      title="Fuel Estimation Summary"
      items={items}
      downloadable
      onDownload={handleDownload}
    />
  );
}
