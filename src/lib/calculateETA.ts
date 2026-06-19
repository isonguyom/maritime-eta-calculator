import { ETAResult } from "@/types/eta";

export function calculateETA(
  distance: number,
  speed: number,
  departure: Date
): ETAResult {
  const durationHours = distance / speed;

  const eta = new Date(
    departure.getTime() +
      durationHours * 60 * 60 * 1000
  );

  return {
    durationHours,
    eta,
  };
}