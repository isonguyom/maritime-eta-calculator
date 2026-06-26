import type { Metadata } from 'next';
import FuelEstimatorPage from '@/modules/fuel-estimator';

export const metadata: Metadata = {
  title: 'Fuel Estimator | Naviscope ETA',
  description:
    'Estimate vessel fuel consumption, optimize voyage efficiency, and model maritime operational costs using Naviscope ETA fuel intelligence engine.',
  keywords: [
    'fuel estimator',
    'voyage fuel consumption',
    'ship fuel calculator',
    'maritime analytics',
    'vessel fuel optimization',
    'Naviscope ETA',
  ],
};

export default function Page() {
  return <FuelEstimatorPage />;
}
