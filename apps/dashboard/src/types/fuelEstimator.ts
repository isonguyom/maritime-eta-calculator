export type FuelEstimatorInputType = {
  vessel: string;
  distance: number;
  speed: number;
  fuelPrice: number;
};

export type FuelEstimatorResultType = {
  vessel: string;
  distance: number;
  speed: number;

  days: number;

  fuel: number;
  fuelPrice: number;
  fuelCost: number;

  co2: number;
  efficiency: number;

  fuelConsumption: number;
  weatherFactor: number;
  safetyMargin: number;
};
