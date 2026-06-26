export type SettingsType = {
  theme: 'light' | 'dark' | 'system';

  units: {
    distance: 'nm' | 'km';
    speed: 'knots' | 'kmh';
    fuel: 'mt';
  };

  currency: 'USD' | 'EUR' | 'GBP' | 'NGN';

  defaults: {
    vessel: string;
    fuelPrice: number;
    weatherFactor: number;
    safetyMargin: number;
  };

  export: {
    companyName: string;
    reportFooter: string;
    dateFormat: string;
  };
};
