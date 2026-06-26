'use client';

import DashboardPageHeader from '@/components/layout/DashboardPageHeader';
import SettingsNav from '@/components/layout/SettingsNav';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardPageHeader
        title="Settings"
        description="Customize your Naviscope experience, calculation defaults, units, and export preferences."
      />
      <div className="grid gap-6 lg:grid-cols-[220px_1fr] mt-8">
        <SettingsNav />

        <div className="rounded-xl border border-border bg-surface p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
