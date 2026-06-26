'use client';

import { useForm } from 'react-hook-form';

import FormProvider from '@/components/ui/form/FormProvider';
import Select from '@/components/ui/form/Select';
import SubmitButton from '@/components/ui/form/SubmitButton';

import useButtonState from '@/hooks/useButtonState';

const currencyOptions = [
  { label: 'US Dollar (USD)', value: 'USD' },
  { label: 'Euro (EUR)', value: 'EUR' },
  { label: 'Nigerian Naira (NGN)', value: 'NGN' },
];

const timezoneOptions = [
  { label: 'UTC', value: 'UTC' },
  { label: 'Africa/Lagos (UTC+1)', value: 'Africa/Lagos' },
  { label: 'Europe/London', value: 'Europe/London' },
  { label: 'Europe/Amsterdam', value: 'Europe/Amsterdam' },
  { label: 'America/New_York', value: 'America/New_York' },
  { label: 'Asia/Singapore', value: 'Asia/Singapore' },
];

const dateFormatOptions = [
  { label: 'DD/MM/YYYY', value: 'dd/MM/yyyy' },
  { label: 'MM/DD/YYYY', value: 'MM/dd/yyyy' },
  { label: 'YYYY-MM-DD', value: 'yyyy-MM-dd' },
  { label: 'DD MMM YYYY', value: 'dd MMM yyyy' },
];

const timeFormatOptions = [
  { label: '24 Hour', value: '24' },
  { label: '12 Hour', value: '12' },
];

type PreferenceFormValues = {
  timezone: string;
  currency: string;
  dateFormat: string;
  timeFormat: string;
};

export default function PreferenceSettings() {
  const methods = useForm<PreferenceFormValues>({
    defaultValues: {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      currency: 'USD',
      dateFormat: 'dd/MM/yyyy',
      timeFormat: '24',
    },
  });

  const { handleSubmit } = methods;

  const { state, setLoading, setSuccess } = useButtonState();

  const onSubmit = async () => {
    setLoading();

    await new Promise((resolve) => setTimeout(resolve, 800));

    // Save preferences here

    setSuccess();
  };

  return (
    <FormProvider methods={methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Preferences</h2>

          <p className="mt-1 text-sm text-muted">
            Configure your regional and formatting preferences.
          </p>
        </div>

        <Select name="timezone" label="Timezone" options={timezoneOptions} />

        <Select name="currency" label="Currency" options={currencyOptions} />

        <Select
          name="dateFormat"
          label="Date Format"
          options={dateFormatOptions}
        />

        <Select
          name="timeFormat"
          label="Time Format"
          options={timeFormatOptions}
        />

        <SubmitButton state={state}>Save Preferences</SubmitButton>
      </form>
    </FormProvider>
  );
}
