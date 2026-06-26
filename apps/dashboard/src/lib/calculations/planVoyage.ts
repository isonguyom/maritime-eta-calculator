import { calculateEtaEngine } from '@/lib/calculations/calculateETA';
import { estimateFuel } from '@/lib/calculations/estimateFuel';

import type { VoyagePlannerInputType } from '@/types/voyagePlanner';

export function planVoyage(input: VoyagePlannerInputType) {
  const eta = calculateEtaEngine({
    vessel: input.vessel,
    distance: input.distance,
    speed: input.speed,
    departureDate: input.departure,
  });

  const fuel = estimateFuel({
    vessel: input.vessel,
    distance: input.distance,
    speed: input.speed,
    fuelPrice: input.fuelPrice,
  });

  return {
    vessel: input.vessel,

    origin: input.origin,
    destination: input.destination,

    departure: input.departure,
    eta: eta.eta,

    distance: input.distance,
    speed: input.speed,

    voyageDays: eta.days,

    totalFuel: fuel.fuel,
    fuelCost: fuel.fuelCost,

    co2Emission: fuel.co2,
    fuelEfficiency: fuel.efficiency,

    averageDailyFuel: fuel.fuel / fuel.days,

    weatherFactor: fuel.weatherFactor,
    safetyMargin: fuel.safetyMargin,
  };
}
