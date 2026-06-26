import type { Metadata } from 'next';
import CalculationsSettingsPage from '@/modules/settings/calculations';

export const metadata: Metadata = {
  title: 'Settings | Naviscope ETA',
  description:
    'Calculate vessel arrival times using voyage distance, vessel speed, and operational parameters.',
};

export default function Page() {
  return <CalculationsSettingsPage />;
}
