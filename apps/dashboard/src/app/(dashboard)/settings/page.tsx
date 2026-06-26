import type { Metadata } from 'next';
import SettingsPage from '@/modules/settings';

export const metadata: Metadata = {
  title: 'Settings | Naviscope ETA',
  description:
    'Calculate vessel arrival times using voyage distance, vessel speed, and operational parameters.',
};

export default function Page() {
  return <SettingsPage />;
}
