'use client';

import { useForm } from 'react-hook-form';
import FormProvider from '@/components/ui/form/FormProvider';
import Input from '@/components/ui/form/Input';
import SubmitButton from '@/components/ui/form/SubmitButton';
import useButtonState from '@/hooks/useButtonState';

export default function CalculationDefaultsSettings() {
  const methods = useForm({
    defaultValues: {
      fuelPrice: '650',
      weatherFactor: '1.05',
      safetyMargin: '1.1',
    },
  });

  const { handleSubmit } = methods;
  const { state, setLoading, setSuccess } = useButtonState();

  const onSubmit = async () => {
    setLoading();
    await new Promise((r) => setTimeout(r, 800));

    setSuccess();
  };

  return (
    <FormProvider methods={methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-lg font-semibold">Calculation Defaults</h2>

        <Input name="fuelPrice" label="Fuel Price" numeric />
        <Input name="weatherFactor" label="Weather Factor" numeric />
        <Input name="safetyMargin" label="Safety Margin" numeric />

        <SubmitButton state={state}>Save Defaults</SubmitButton>
      </form>
    </FormProvider>
  );
}
