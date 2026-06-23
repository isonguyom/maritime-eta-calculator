export interface ETAResult {
  durationHours: number;
  eta: Date;
}

export type EtaInputType = {
  vessel: string;
  distance: number;
  speed: number;
  departureDate: Date;
};

export type EtaResultType = {
  vessel: string;
  distance: number;
  speed: number;
  departureDate: Date;

  eta: Date;
  hours: number;
  days: number;
  fuel: number;

  vesselType: string;
  durationHours: number;
  durationDays: number;
  fuelConsumption: number;
};
