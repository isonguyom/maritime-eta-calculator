import type { Metadata } from 'next';
import SpeedOptimizationPage from '@/modules/speed-optimization';

export const metadata: Metadata = {
  title: 'Speed Optimization | Naviscope ETA',
  description:
    'Calculate vessel arrival times using voyage distance, vessel speed, and operational parameters.',
};

export default function Page() {
  return <SpeedOptimizationPage />;
}
