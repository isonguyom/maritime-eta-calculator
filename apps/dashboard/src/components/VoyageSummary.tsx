import { Ship } from 'lucide-react';

interface Props {
  distance: number;
  speed: number;
  duration: number;
}

export default function VoyageSummary({ distance, speed, duration }: Props) {
  const fuelEstimate = distance * 0.05; // simple maritime approximation

  return (
    <div className="bg-slate-900 p-6 rounded-xl space-y-4">
      {/* Icon + Title */}
      <div className="flex items-center gap-2">
        <Ship className="text-accent" />
        <h2 className="text-lg font-semibold">Voyage Summary</h2>
      </div>

      {/* Metrics */}
      <div className="space-y-2 text-sm">
        <p>
          Distance: <span className="font-bold">{distance} NM</span>
        </p>

        <p>
          Speed: <span className="font-bold">{speed} knots</span>
        </p>

        <p>
          Duration: <span className="font-bold">{duration.toFixed(2)} hrs</span>
        </p>

        <p>
          Estimated Fuel Usage:{' '}
          <span className="font-bold text-warning">
            {fuelEstimate.toFixed(2)} tons
          </span>
        </p>
      </div>
    </div>
  );
}
