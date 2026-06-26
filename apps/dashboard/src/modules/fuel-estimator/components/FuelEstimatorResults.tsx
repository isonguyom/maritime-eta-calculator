import type { FuelEstimatorResultType } from '@/types/fuelEstimator';

import { Fuel, DollarSign, Leaf, Gauge } from 'lucide-react';

import MetricCard from '@/components/cards/MetricCard';

type Props = {
  result: FuelEstimatorResultType;
};

export default function FuelEstimatorResults({ result }: Props) {
  const items = [
    {
      title: 'Fuel Used',
      value: `${result.fuel.toFixed(1)} MT`,
      icon: Fuel,
    },
    {
      title: 'Fuel Cost',
      value: `$${result.fuelCost.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
      icon: DollarSign,
    },
    {
      title: 'CO₂ Emissions',
      value: `${result.co2.toFixed(1)} MT`,
      icon: Leaf,
    },
    {
      title: 'Fuel Efficiency',
      value: `${result.efficiency.toFixed(3)} MT/NM`,
      icon: Gauge,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <MetricCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
