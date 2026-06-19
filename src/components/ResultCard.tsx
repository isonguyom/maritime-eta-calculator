import { format } from "date-fns";
import { ETAResult } from "@/types/eta";
import { Ship } from "lucide-react";

interface ResultCardProps {
  result: ETAResult;
}

export default function ResultCard({
  result,
}: ResultCardProps) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl space-y-3">

      <div className="flex items-center gap-2">
        <Ship className="text-teal-400" />
        <h2 className="text-lg font-semibold">
          ETA Result
        </h2>
      </div>

      <p>
        Duration:{" "}
        <span className="font-bold">
          {result.durationHours.toFixed(2)} hours
        </span>
      </p>

      <p>
        ETA:{" "}
        <span className="font-bold text-teal-400">
          {format(result.eta, "PPP p")}
        </span>
      </p>
    </div>
  );
}