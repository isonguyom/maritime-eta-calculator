import { EtaResultType } from '@/types/eta';

type VoyageSummaryProps = {
  result: EtaResultType;
};

export default function VoyageSummary({ result }: VoyageSummaryProps) {
  return (
    <div className="rounded-xl border border-border p-5">
      <h2 className="mb-4 text-lg font-bold text-accent uppercase">
        Voyage Summary
      </h2>

      <div className="space-y-3 text-sm">
        <p>
          <strong className="text-muted">Vessel:</strong> {result.vessel}
        </p>

        <p>
          <strong className="text-muted">Distance:</strong> {result.distance} NM
        </p>

        <p>
          <strong className="text-muted">Speed:</strong> {result.speed} Knots
        </p>

        <p>
          <strong className="text-muted">Departure:</strong>{' '}
          {result.departureDate.toLocaleString()}
        </p>

        <p>
          <strong className="text-muted">ETA:</strong>{' '}
          {result.eta.toLocaleString()}
        </p>

        <p>
          <strong className="text-muted">Estimated Fuel:</strong>{' '}
          {result.fuel.toFixed(1)} MT
        </p>
      </div>
    </div>
  );
}
