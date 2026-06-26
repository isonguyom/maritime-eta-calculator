import type {
  FuelEstimatorInputType,
  FuelEstimatorResultType,
} from '@/types/fuelEstimator';

const vesselFuelConsumption: Record<string, number> = {
  container: 35,
  bulk: 22,
  oil_tanker: 28,
  general_cargo: 18,
};

const DEFAULT_WEATHER_FACTOR = 1.05;
const DEFAULT_SAFETY_MARGIN = 1.1;
const CO2_FACTOR = 3.114; // MT CO₂ per MT of fuel

export function estimateFuel(
  input: FuelEstimatorInputType
): FuelEstimatorResultType {
  const { vessel, distance, speed, fuelPrice } = input;

  const fuelConsumption = vesselFuelConsumption[vessel.toLowerCase()] ?? 25;

  // Voyage duration
  const hours = distance / speed;
  const days = hours / 24;

  // Fuel consumption
  const baseFuel = fuelConsumption * days;

  // Apply weather and safety margins
  const weatherFactor = DEFAULT_WEATHER_FACTOR;
  const safetyMargin = DEFAULT_SAFETY_MARGIN;

  const fuel = baseFuel * weatherFactor * safetyMargin;

  const fuelCost = fuel * fuelPrice;

  const co2 = fuel * CO2_FACTOR;

  const efficiency = fuel / distance;

  return {
    vessel,
    distance,
    speed,
    days,

    fuel,
    fuelPrice,
    fuelCost,
    co2,
    efficiency,

    fuelConsumption,
    weatherFactor,
    safetyMargin,
  };
}
