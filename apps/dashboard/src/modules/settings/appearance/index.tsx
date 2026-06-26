'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useWatch } from 'react-hook-form';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';

import FormProvider from '@/components/ui/form/FormProvider';
import OptionCard from '@/components/cards/OptionCard';

type AppearanceForm = {
  theme: 'light' | 'dark' | 'system';
};

export default function AppearanceSettings() {
  const { theme, setTheme } = useTheme();

  const methods = useForm<AppearanceForm>({
    defaultValues: {
      theme: (theme as AppearanceForm['theme']) ?? 'system',
    },
  });

  const selectedTheme = useWatch({
    control: methods.control,
    name: 'theme',
  });

  useEffect(() => {
    setTheme(selectedTheme);
  }, [selectedTheme, setTheme]);

  const selectTheme = (theme: AppearanceForm['theme']) => {
    methods.setValue('theme', theme);
  };

  return (
    <FormProvider methods={methods}>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Appearance</h2>

          <p className="mt-1 text-sm text-muted">
            Customize the appearance of Naviscope.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
          <OptionCard
            title="Light"
            description="Bright interface for daytime use."
            icon={Sun}
            selected={selectedTheme === 'light'}
            onClick={() => selectTheme('light')}
          />

          <OptionCard
            title="Dark"
            description="Comfortable viewing in low light."
            icon={Moon}
            selected={selectedTheme === 'dark'}
            onClick={() => selectTheme('dark')}
          />

          <OptionCard
            title="System"
            description="Match your operating system."
            icon={Monitor}
            selected={selectedTheme === 'system'}
            onClick={() => selectTheme('system')}
          />
        </div>
      </div>
    </FormProvider>
  );
}
