import type { Metadata } from 'next';
import AppearanceSettingsPage from '@/modules/settings/appearance';

export const metadata: Metadata = {
  title: 'Settings | Naviscope ETA',
  description:
    'Calculate vessel arrival times using voyage distance, vessel speed, and operational parameters.',
};

export default function Page() {
  return <AppearanceSettingsPage />;
}
