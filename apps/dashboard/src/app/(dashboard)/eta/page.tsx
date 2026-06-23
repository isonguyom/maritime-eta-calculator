import type { Metadata } from 'next';
import EtaPage from '@/modules/eta';

export const metadata: Metadata = {
  title: 'ETA Calculator | Naviscope ETA',
  description:
    'Calculate vessel arrival times using voyage distance, vessel speed, and operational parameters.',
};

export default function Page() {
  return <EtaPage />;
}
