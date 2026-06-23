import { EtaResultType } from '@/types/eta';
import { Clock3, Fuel, Gauge, Info, Route } from 'lucide-react';

type EtaResultsProps = {
  result: EtaResultType | null;
};

export default function EtaResults({ result }: EtaResultsProps) {
  if (!result) {
    return (
      <div className="rounded-xl bg-surface-2 p-8 text-center text-sm text-muted min-h-full flex flex-col gap-4 items-center justify-center">
        <Info size={20} />
        <p>Enter voyage details to generate ETA.</p>
      </div>
    );
  }

  const items = [
    {
      label: 'ETA',
      value: result.eta.toLocaleString(),
      icon: Clock3,
    },
    {
      label: 'Voyage Duration',
      value: `${result.days.toFixed(1)} Days`,
      icon: Route,
    },
    {
      label: 'Average Speed',
      value: `${result.speed} Knots`,
      icon: Gauge,
    },
    {
      label: 'Fuel Estimate',
      value: `${result.fuel.toFixed(1)} MT`,
      icon: Fuel,
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-border bg-surface p-4"
        >
          <item.icon className="mb-3 h-5 w-5 text-accent" />

          <p className="text-sm text-muted">{item.label}</p>

          <h3 className="mt-1 font-semibold">{item.value}</h3>
        </div>
      ))}
    </div>
  );
}
