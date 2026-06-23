import type { Metadata } from 'next';
import OverviewPage from '@/modules/overview';

export const metadata: Metadata = {
  title: 'Dashboard | Naviscope ETA',
  description:
    'Access maritime tools for ETA calculation, fuel estimation, and voyage planning in one simple dashboard.',
  keywords: [
    'maritime dashboard',
    'ETA calculator',
    'voyage planning tool',
    'fuel estimator',
    'ship operations tools',
    'Naviscope ETA',
  ],
};

export default function Page() {
  return <OverviewPage />;
}
