export type VoyagePlannerInputType = {
  vessel: string;

  departure: Date;

  origin: string;
  destination: string;

  distance: number;
  speed: number;

  fuelPrice: number;
};

export type VoyagePlannerResultType = {
  vessel: string;

  origin: string;
  destination: string;

  departure: Date;
  eta: Date;

  distance: number;
  speed: number;

  voyageDays: number;

  totalFuel: number;
  fuelCost: number;

  co2Emission: number;
  fuelEfficiency: number;

  averageDailyFuel: number;

  weatherFactor: number;
  safetyMargin: number;
};
