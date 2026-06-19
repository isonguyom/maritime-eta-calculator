import { format } from 'date-fns';
import { ETAResult } from '@/types/eta';
import { Ship } from 'lucide-react';

interface ResultCardProps {
  result: ETAResult;
}

export default function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="bg-card border border-border backdrop-blur p-6 rounded-xl">
      <div className="flex items-center gap-2">
        <Ship className="text-accent" />
        <h2 className="text-lg font-semibold font-sans">ETA Result</h2>
      </div>

      <p>
        Duration:{' '}
        <span className="font-bold">
          {result.durationHours.toFixed(2)} hours
        </span>
      </p>

      <p>
        ETA:{' '}
        <span className="font-bold text-success font-mono">
          {format(result.eta, 'PPP p')}
        </span>
      </p>
    </div>
  );
}
