import type { Metadata } from 'next';
import VoyagePlannerPage from '@/modules/voyage-planner';

export const metadata: Metadata = {
  title: 'Voyage Planner | Naviscope ETA',
  description:
    'Plan optimized maritime voyages with route simulation, ETA prediction, fuel estimation, and operational cost analysis.',
  keywords: [
    'voyage planner',
    'maritime route optimization',
    'ship route planner',
    'voyage simulation tool',
    'ETA prediction',
    'fuel estimation',
    'maritime logistics software',
    'Naviscope ETA',
  ],
};

export default function Page() {
  return <VoyagePlannerPage />;
}
