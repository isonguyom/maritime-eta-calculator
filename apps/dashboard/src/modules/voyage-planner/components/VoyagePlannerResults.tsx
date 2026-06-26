import type { VoyagePlannerResultType } from '@/types/voyagePlanner';

import { Clock3, Fuel, DollarSign, Leaf } from 'lucide-react';

import MetricCard from '@/components/cards/MetricCard';

type Props = {
  result: VoyagePlannerResultType;
};

export default function VoyagePlannerResults({ result }: Props) {
  const items = [
    {
      title: 'ETA',
      value: result.eta.toLocaleString(),
      icon: Clock3,
    },
    {
      title: 'Fuel Required',
      value: `${result.totalFuel.toFixed(1)} MT`,
      icon: Fuel,
    },
    {
      title: 'Fuel Cost',
      value: `$${result.fuelCost.toLocaleString()}`,
      icon: DollarSign,
    },
    {
      title: 'CO₂ Emissions',
      value: `${result.co2Emission.toFixed(1)} MT`,
      icon: Leaf,
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
